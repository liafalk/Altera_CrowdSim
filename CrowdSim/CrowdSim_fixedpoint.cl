// Copyright (c) 2009-2013 Intel Corporation
// All rights reserved.
//
// WARRANTY DISCLAIMER
//
// THESE MATERIALS ARE PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
// "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
// LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
// A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL INTEL OR ITS
// CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
// EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
// PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
// PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY
// OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY OR TORT (INCLUDING
// NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THESE
// MATERIALS, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
// Intel Corporation is the author of the Materials, and requests that all
// problem reports or change requests be submitted to it directly


#include "Constants.h"
#pragma OPENCL EXTENSION cl_khr_fp16 : enable

#define TESTID 0
typedef float2 Vector2;

// The following structures definitions use pack pragma
// to eliminate any differencies between packing of struct
// data fields in the host and the device sides.
// On the device side, the pack is called with the same value.

#pragma pack(4)
typedef struct __Line {
    Vector2 direction;
    Vector2 point;
} Line;


struct __Agent;

#pragma pack(4)
typedef struct __Obstacle
{
    int isConvex_;
    __global struct __Obstacle *nextObstacle_;
    Vector2 point_;
    __global struct __Obstacle *prevObstacle_;
    Vector2 unitDir_;

    uint id_;
} Obstacle;


#pragma pack(4)
typedef struct __AgentNeighbor
{
    float first;
    __global const struct __Agent * second;
} AgentNeighbor;

#pragma pack(4)
typedef struct __AgentNeighborBuf
{
    float first;
    uint second;
} AgentNeighborBuf;

#pragma pack(4)
typedef struct __ObstacleNeighbor
{
    float first;
    __global const struct __Obstacle * second;
} ObstacleNeighbor;


#pragma pack(4)
typedef struct __Agent {
    //__global AgentNeighbor* agentNeighbors_;
    long spacer1;
    uint numAgentNeighbors_; // number of filled elements in agentNeighbors
    uint maxNeighbors_;
    float maxSpeed_;
    float neighborDist_;
    Vector2 newVelocity_;
    //__global ObstacleNeighbor* obstacleNeighbors_;
    long spacer2;
    uint numObstacleNeighbors_; // number of filled elements in agentNeighbors
    uint maxObstacleNeighbors_;  // number of allocated positions in obstacleNeighbors, can be increased dynamically
    //__global Line* orcaLines_;
    long spacer3;
    uint numOrcaLines_;
    //__global Line* projLines_;   // used as a scratch buffer for calling linearProgram3
    long spacer4;
    Vector2 position_;
    Vector2 prefVelocity_;
    float radius_;
    //__global void *sim_;
    long spacer5;
    float timeHorizon_;
    float timeHorizonObst_;
    Vector2 velocity_;
    uint id_;
} Agent;


#pragma pack(4)
typedef struct __PAgent
{
    __global Agent* value;
} PAgent;


#pragma pack(4)
typedef struct __AgentTreeNode
{
    uint begin;
    uint end;
    uint left;
    float maxX;
    float maxY;
    float minX;
    float minY;
    uint right;
} AgentTreeNode;

#pragma pack(4)
typedef struct __ObstacleTreeNode
{
    __global struct __ObstacleTreeNode *left;
    __global const struct __Obstacle *obstacle;
    __global struct __ObstacleTreeNode *right;
} ObstacleTreeNode;

inline float simFabs(float a)
{
    if (a < 0.0f)
        return -a;
    else
        return a;
}

inline float simDot(Vector2 a, Vector2 b)
{
    return a.x*b.x+a.y*b.y;
}

inline float simSqrt(float a)
{
    return (float)sqrt((float)a);
}

inline float simLength(Vector2 a)
{
    return simSqrt(a.x*a.x+a.y*a.y);
}

inline Vector2 simNormalize(Vector2 a)
{
    float len = simLength(a);
    Vector2 res;
    res.x = a.x/len;
    res.y = a.y/len;
    return res;
}

inline float absSq(Vector2 vector)
{
    return simDot(vector, vector);
}


inline float det(Vector2 vector1, Vector2 vector2)
{
    return vector1.x * vector2.y - vector1.y * vector2.x;
}


inline float sqr (float x)
{
    return x*x;
}

#define FIXED_PRECISION 20

inline long floatToFixed(float f)
{
    f *= (1 << FIXED_PRECISION);
    return static_cast<long>(f);
}


inline float fixedToFloat(long i)
{
    float f = static_cast<float>(i);
    return f / (1 << FIXED_PRECISION);
}

void insertAgentNeighbor(__global Agent *thisAgent, __global const Agent *agent, float *rangeSq, __global AgentNeighborBuf* agentNeighbors)
{
    if (thisAgent->id_ != agent->id_) {
        const float distSq = absSq(thisAgent->position_ - agent->position_);

        if (distSq < *rangeSq) {
            uint indexBias = thisAgent->maxNeighbors_*get_global_id(0);
            if (thisAgent->numAgentNeighbors_ < thisAgent->maxNeighbors_) {
                agentNeighbors[indexBias + thisAgent->numAgentNeighbors_].first = distSq;
                agentNeighbors[indexBias + thisAgent->numAgentNeighbors_].second = agent->id_;
                thisAgent->numAgentNeighbors_++;
            }

            uint i = thisAgent->numAgentNeighbors_ - 1;

            while (i != 0 && distSq < agentNeighbors[indexBias + i - 1].first) {
                agentNeighbors[indexBias+i] = agentNeighbors[indexBias + i - 1];
                --i;
            }

            agentNeighbors[indexBias+i].first = distSq;
            agentNeighbors[indexBias+i].second = agent->id_;

            if (thisAgent->numAgentNeighbors_ == thisAgent->maxNeighbors_) {
                *rangeSq = agentNeighbors[indexBias+thisAgent->numAgentNeighbors_ - 1].first;
            }
        }
    }
}

typedef struct __StackNode
{
    uint retCode;
    float distSqLeft;
    float distSqRight;
    uint node;
} StackNode;

__global StackNode* push (__global StackNode* stackNode, uint retCode, float distSqLeft, float distSqRight, uint node)
{
    stackNode->retCode = retCode;
    stackNode->distSqLeft = distSqLeft;
    stackNode->distSqRight = distSqRight;
    stackNode->node = node;
    return stackNode + 1;
}

void queryAgentTreeRecursive(__global Agent* agents_, __global Agent *agent, __global AgentTreeNode* agentTree_, float* rangeSq, uint node, __global AgentNeighborBuf* agentNeighbors, __global unsigned* agentsForTree, __global StackNode* stack)
{
    //StackNode stack[MAX_KDTREE_DEPTH];
    __global StackNode* stackTop = &stack[0];
    uint retCode = 0;

    float distSqLeft;
    float distSqRight;

    for(;;)
    {
        switch(retCode)
        {
            case 0:
                if (agentTree_[node].end - agentTree_[node].begin <= RVO_MAX_LEAF_SIZE) {                    
                    for (uint i = agentTree_[node].begin; i < agentTree_[node].end; ++i) {
                        insertAgentNeighbor(agent, &agents_[agentsForTree[i]], rangeSq, agentNeighbors);
                    }
                    break;
                }
                else {
                    distSqLeft =
                        sqr(max(0.0f, agentTree_[agentTree_[node].left].minX - agent->position_.x)) +
                        sqr(max(0.0f, agent->position_.x - agentTree_[agentTree_[node].left].maxX)) +
                        sqr(max(0.0f, agentTree_[agentTree_[node].left].minY - agent->position_.y)) +
                        sqr(max(0.0f, agent->position_.y - agentTree_[agentTree_[node].left].maxY));

                    distSqRight =
                        sqr(max(0.0f, agentTree_[agentTree_[node].right].minX - agent->position_.x)) +
                        sqr(max(0.0f, agent->position_.x - agentTree_[agentTree_[node].right].maxX)) +
                        sqr(max(0.0f, agentTree_[agentTree_[node].right].minY - agent->position_.y)) +
                        sqr(max(0.0f, agent->position_.y - agentTree_[agentTree_[node].right].maxY));
                    
					if (distSqLeft < distSqRight) {
                        if (distSqLeft < *rangeSq) {
                            //queryAgentTreeRecursive(agents_, agent, agentTree_, rangeSq, agentTree_[node].left);    // RECURSION
                            stackTop = push(stackTop, 1, distSqLeft, distSqRight, node); node = agentTree_[node].left; retCode = 0;
                            continue;

            case 1:

                            if (distSqRight < *rangeSq) {
                                //queryAgentTreeRecursive(agents_, agent, agentTree_, rangeSq, agentTree_[node].right);    // RECURSION
                                stackTop = push(stackTop, 3, distSqLeft, distSqRight, node); node = agentTree_[node].right; retCode = 0;
                                continue;
                            }
                        }
                    }
                    else {
                        if (distSqRight < *rangeSq) {
                            //queryAgentTreeRecursive(agents_, agent, agentTree_, rangeSq, agentTree_[node].right);    // RECURSION
                            stackTop = push(stackTop, 2, distSqLeft, distSqRight, node); node = agentTree_[node].right; retCode = 0;
                            continue;
            case 2:

                            if (distSqLeft < *rangeSq) {
                                //queryAgentTreeRecursive(agents_, agent, agentTree_, rangeSq, agentTree_[node].left);    // RECURSION
                                stackTop = push(stackTop, 3, distSqLeft, distSqRight, node); node = agentTree_[node].left; retCode = 0;
                                continue;
                            }
                        }
                    }
                }
            case 3: break;
        }

        if(&stack[0] == stackTop)
        {
            break;
        }

        stackTop--;

        retCode = stackTop->retCode;
        distSqLeft = stackTop->distSqLeft;
        distSqRight = stackTop->distSqRight;
        node = stackTop->node;
    }
}


void computeAgentNeighbors(__global Agent* agent, __global Agent* agents, __global AgentTreeNode* agentTree_, __global AgentNeighborBuf* agentNeighbors, __global unsigned* agentsForTree, __global StackNode* stack)
{
    agent->numObstacleNeighbors_ = 0;
    float rangeSq = sqr(agent->timeHorizonObst_ * agent->maxSpeed_ + agent->radius_);
        
    // Obstacles are not processed. This is current limitation of this OpenCL port
    // sim_->kdTree_->computeObstacleNeighbors(this, rangeSq);

    agent->numAgentNeighbors_ = 0;

    if (agent->maxNeighbors_ > 0) {
        rangeSq = sqr(agent->neighborDist_);
        queryAgentTreeRecursive(agents, agent, agentTree_, &rangeSq, 0, agentNeighbors, agentsForTree, stack);
    }
}


bool linearProgram1(const __global Line* lines, uint lineNo, float radius, const Vector2 optVelocity, bool directionOpt, __global Vector2 *result, uint orcaBias)
{
    const float dotProduct = simDot(lines[orcaBias + lineNo].point, lines[orcaBias + lineNo].direction);
    const float discriminant = sqr(dotProduct) + sqr(radius) - absSq(lines[orcaBias + lineNo].point);

    if (discriminant < 0.0f) {
        /* Max speed circle fully invalidates line lineNo. */
        return false;
    }

    const float sqrtDiscriminant = simSqrt(discriminant);
    float tLeft = -dotProduct - sqrtDiscriminant;
    float tRight = -dotProduct + sqrtDiscriminant;

    int returnnow = 0;

    for (uint i = 0; i < lineNo; ++i) {
        const float denominator = det(lines[orcaBias + lineNo].direction, lines[orcaBias + i].direction);
        const float numerator = det(lines[orcaBias + i].direction, lines[orcaBias + lineNo].point - lines[orcaBias + i].point);

        if (simFabs(denominator) <= RVO_EPSILON) {
            /* Lines lineNo and i are (almost) parallel. */
            if (numerator < 0.0f) {
                returnnow = 1;
                break;
            }
            else {
                continue;
            }
        }

        const float t = numerator / denominator;

        if (denominator >= 0.0f) {
            /* Line i bounds line lineNo on the right. */
            tRight = (tRight < t) ? tRight : t;
        }
        else {
            /* Line i bounds line lineNo on the left. */
            tLeft = (tLeft > t) ? tLeft : t;
        }

        if (tLeft > tRight) {
            returnnow = 1;
            break;
        }
    }

    if(returnnow == 1)
        return false;

    if (directionOpt) {
        /* Optimize direction. */
        if (simDot(optVelocity, lines[orcaBias + lineNo].direction) > 0.0f) {
            /* Take right extreme. */
            *result = lines[orcaBias + lineNo].point + tRight * lines[orcaBias + lineNo].direction;
        }
        else {
            /* Take left extreme. */  
            *result = lines[orcaBias + lineNo].point + tLeft * lines[orcaBias + lineNo].direction;
        }
    }
    else {
        /* Optimize closest point. */
        const float t = simDot(lines[orcaBias + lineNo].direction, (optVelocity - lines[orcaBias + lineNo].point));

        if (t < tLeft) {
            *result = lines[orcaBias + lineNo].point + tLeft * lines[orcaBias + lineNo].direction;
        }
        else if (t > tRight) {
            *result = lines[orcaBias + lineNo].point + tRight * lines[orcaBias + lineNo].direction;
        }
        else {
            *result = lines[orcaBias + lineNo].point + t * lines[orcaBias + lineNo].direction;
        }
    }

    return true;
}

uint linearProgram2(const __global Line* lines, uint numLines, float radius, const Vector2 optVelocity, bool directionOpt, __global Vector2 *result, uint orcaBias)
{
    
    if (directionOpt) {
        /*
            * Optimize direction. Note that the optimization velocity is of unit
            * length in this case.
            */
        *result = optVelocity * radius;
    }
    else if (absSq(optVelocity) > sqr(radius)) {
        /* Optimize closest point and outside circle. */  
        *result = simNormalize(optVelocity) * radius;
    }
    else {
        /* Optimize closest point and inside circle. */ 
        *result = optVelocity;
    }

 
    for (uint i = 0; i < numLines; ++i) {  
        if (det(lines[orcaBias + i].direction, lines[orcaBias + i].point - *result) > 0.0f) {
            /* Result does not satisfy constraint i. Compute new optimal result. */
            const Vector2 tempResult = *result;
            if (!linearProgram1(lines, i, radius, optVelocity, directionOpt, result, orcaBias)) {
                *result = tempResult;
                return i;
            }
        }
    }

    return numLines;
}

void linearProgram3(const __global Line* lines, uint numLines, uint numObstLines, uint beginLine, float radius, __global Vector2 *result, uint orcaBias, __global Line* projLines)
{
    float distance = 0.0f;

    for (uint i = beginLine; i < numLines; ++i) {
        if (det(lines[orcaBias + i].direction, lines[orcaBias + i].point - *result) > distance) {
            /* Result does not satisfy constraint of line i. */
            for(uint k = 0; k < numObstLines; ++k)
            {
                projLines[orcaBias + k] = lines[orcaBias + k];
            }
            uint numProjLines = numObstLines;

            for (uint j = numObstLines; j < i; ++j) {
                Line line;

                float determinant = det(lines[orcaBias + i].direction, lines[orcaBias + j].direction);

                if (simFabs(determinant) <= RVO_EPSILON) {
                    /* Line i and line j are parallel. */
                    if (simDot(lines[orcaBias + i].direction, lines[orcaBias + j].direction) > 0.0f) {
                        /* Line i and line j point in the same direction. */
                        continue;
                    }
                    else {
                        /* Line i and line j point in opposite direction. */
                        line.point = 0.5f * (lines[orcaBias + i].point + lines[orcaBias + j].point);
                    }
                }
                else {
                    line.point = lines[orcaBias + i].point + (det(lines[orcaBias + j].direction, lines[orcaBias + i].point - lines[orcaBias + j].point) / determinant) * lines[orcaBias + i].direction;
                }

                line.direction = simNormalize(lines[orcaBias + j].direction - lines[orcaBias + i].direction);
                projLines[numProjLines++] = line;
            }

            const Vector2 tempResult = *result;

            if (linearProgram2(projLines, numProjLines, radius, (Vector2)(-lines[orcaBias + i].direction.y, lines[orcaBias + i].direction.x), true, result, orcaBias) < numProjLines) {
                /* This should in principle not happen.  The result is by definition
                    * already in the feasible region of this linear program. If it fails,
                    * it is due to small floating point error, and the current result is
                    * kept.
                    */
                *result = tempResult;
            }

            distance = det(lines[orcaBias + i].direction, lines[orcaBias + i].point - *result);
        }
    }
}


__kernel
void computeNewVelocity(__global Agent* restrict agents, __global AgentTreeNode* restrict agentTree_, float timeStep, __global AgentNeighborBuf* restrict agentNeighbors, __global Line* restrict orcaLines, __global Line* restrict projLines, __global unsigned* restrict agentsForTree, __global StackNode* restrict stack)
{
    __global Agent* agent = &agents[get_global_id(0)];

    #ifndef FORCE_C_NEIGHBORS_KERNEL

    computeAgentNeighbors(agent, agents, agentTree_, agentNeighbors, agentsForTree, stack);

    #endif


    #ifndef FORCE_C_VELOCITY_KERNEL

    agent->numOrcaLines_ = 0;
    Vector2 velocity_ = agent->velocity_;

    const uint numObstLines = agent->numOrcaLines_;

    const float invTimeHorizon = 1.0f / agent->timeHorizon_;
    uint neighborBias = agent->maxNeighbors_*get_global_id(0);
    uint orcaBias = (agent->maxNeighbors_ + agent->maxObstacleNeighbors_)*get_global_id(0);

    /* Create agent ORCA lines. */
    for (uint i = 0; i < agent->numAgentNeighbors_; ++i) {
        const __global Agent *const other = &agents[agentNeighbors[neighborBias+i].second];

        const long2 relativePosition;
        relativePosition.x = floatToFixed(other->position_.x - position_.x);
        relativePosition.y = floatToFixed(other->position_.y - position_.y);
        const long2 relativeVelocity;
        relativeVelocity.x = floatToFixed(velocity_.x - other->velocity_.x);
        relativeVelocity.y = floatToFixed(velocity_.y - other->velocity_.y);
        const float distSq = absSq(relativePosition);
        const float combinedRadius = agent->radius_ + other->radius_;
        const float combinedRadiusSq = sqr(combinedRadius);

        Line line;
        Vector2 u;

        if (distSq > combinedRadiusSq) {
            /* No collision. */
            const Vector2 w = relativeVelocity - invTimeHorizon * relativePosition;
            /* Vector from cutoff center to relative velocity. */
            const float wLengthSq = absSq(w);

            const float dotProduct1 = simDot(w, relativePosition);

            if (dotProduct1 < 0.0f && sqr(dotProduct1) > combinedRadiusSq * wLengthSq) {
                /* Project on cut-off circle. */
                const float wLength = simSqrt(wLengthSq);
                const Vector2 unitW = w / wLength;

                line.direction = (Vector2)(unitW.y, -unitW.x);
                u = (combinedRadius * invTimeHorizon - wLength) * unitW;
            }
            else {
                /* Project on legs. */
                const float leg = simSqrt(distSq - combinedRadiusSq);

                if (det(relativePosition, w) > 0.0f) {
                    /* Project on left leg. */
                    line.direction = (Vector2)(relativePosition.x * leg - relativePosition.y * combinedRadius, relativePosition.x * combinedRadius + relativePosition.y * leg) / distSq;
                }
                else {
                    /* Project on right leg. */
                    line.direction = -(Vector2)(relativePosition.x * leg + relativePosition.y * combinedRadius, -relativePosition.x * combinedRadius + relativePosition.y * leg) / distSq;
                }

                const float dotProduct2 = simDot(relativeVelocity, line.direction);

                u = dotProduct2 * line.direction - relativeVelocity;
            }
        }
        else {
            /* Collision. Project on cut-off circle of time timeStep. */
            const float invTimeStep = 1.0f / timeStep;

            /* Vector from cutoff center to relative velocity. */
            const Vector2 w = relativeVelocity - invTimeStep * relativePosition;

            const float wLength = simLength(w);
            const Vector2 unitW = w / wLength;

            line.direction = (Vector2)(unitW.y, -unitW.x);
            u = (combinedRadius * invTimeStep - wLength) * unitW;
        }

        line.point = velocity_ + 0.5f * u;
        orcaLines[orcaBias + agent->numOrcaLines_++] = line;
    }

    uint lineFail = linearProgram2(orcaLines, agent->numOrcaLines_, agent->maxSpeed_, agent->prefVelocity_, false, &agent->newVelocity_, orcaBias);
    
    if (lineFail < agent->numOrcaLines_) {
        linearProgram3(orcaLines, agent->numOrcaLines_, numObstLines, lineFail, agent->maxSpeed_, &agent->newVelocity_, orcaBias, projLines);
    }

    #endif
}


// Do regular update of current velocity and position for an agent
__kernel void update (__global Agent* restrict agents, float timeStep)
{
    int id = get_global_id(0);
    __global Agent* agent = &agents[id];

    // Update agent velocity and position
    agent->velocity_ = agent->newVelocity_;
    agent->position_ += agent->velocity_ * timeStep;
}

/*
// Do regular update of current velocity and position for an agent
// plus do update in side buffer to pack positions to be reused
// during visualization step (for example).
__kernel void updateCustom (__global Agent* restrict agents, float timeStep, __global float4* restrict positionsForRendering)
{
    int id = get_global_id(0);
    __global Agent* agent = &agents[id];

    // Update agent velocity and position
    agent->velocity_ = agent->newVelocity_;
    agent->position_ += agent->velocity_ * timeStep;

    // Update side vector with agent coordinates
    positionsForRendering[id].xy = agent->position_.xy;
}
*/
