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

#define TESTID 0
typedef float2 Vector2;

// The following structures definitions use pack pragma
// to eliminate any differencies between packing of struct
// data fields in the host and the device sides.
// On the device side, the pack is called with the same value.

typedef struct __attribute__((packed)) __attribute__((aligned(16))) __Line
{   
    Vector2 direction;
    Vector2 point;
} Line;

typedef struct __attribute__((packed)) __attribute__((aligned(8))) __AgentNeighborBuf
{
    float first;
    ushort second;
} AgentNeighborBuf;

typedef struct __attribute__((packed)) __attribute__((aligned(64))) __Agent {
    Vector2 position_;
    Vector2 prefVelocity_;
    Vector2 velocity_;
    Vector2 newVelocity_;
    uint numAgentNeighbors_; // number of filled elements in agentNeighbors
    uint numOrcaLines_;
    uint id_;
} Agent;


/*
typedef volatile struct __attribute__((packed)) __attribute__((aligned(128))) __Agent {
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
*/

typedef struct __attribute__((packed)) __attribute__((aligned(32))) __AgentTreeNode
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

inline float absSq(Vector2 vector)
{
    return dot(vector, vector);
}


inline float det(Vector2 vector1, Vector2 vector2)
{
    return vector1.x * vector2.y - vector1.y * vector2.x;
}


inline float sqr (float x)
{
    return x*x;
}

typedef struct __attribute__((packed)) __attribute__((aligned(16))) __StackNode
{
    uchar retCode;
    float distSqLeft;
    float distSqRight;
    ushort node;
} StackNode;

__global StackNode* push (__global StackNode* stackNode, uchar retCode, float distSqLeft, float distSqRight, ushort node)
{
    StackNode newNode;
    newNode.retCode = retCode;
    newNode.distSqLeft = distSqLeft;
    newNode.distSqRight = distSqRight;
    newNode.node = node;

    *stackNode = newNode;
    /*
    stackNode->retCode = retCode;
    stackNode->distSqLeft = distSqLeft;
    stackNode->distSqRight = distSqRight;
    stackNode->node = node;
    */
    return stackNode + 1;
}

bool linearProgram1(const __global Line* lines, uint lineNo, float radius, const Vector2 optVelocity, bool directionOpt, Vector2 *result, uint orcaBias)
{
    const float dotProduct = dot(lines[orcaBias + lineNo].point, lines[orcaBias + lineNo].direction);
    const float discriminant = sqr(dotProduct) + sqr(radius) - absSq(lines[orcaBias + lineNo].point);

    if (discriminant < 0.0f) {
        /* Max speed circle fully invalidates line lineNo. */
        return false;
    }

    const float sqrtDiscriminant = sqrt(discriminant);
    float tLeft = -dotProduct - sqrtDiscriminant;
    float tRight = -dotProduct + sqrtDiscriminant;

    int returnnow = 0;

    for (uint i = 0; i < lineNo; ++i) {
        const float denominator = det(lines[orcaBias + lineNo].direction, lines[orcaBias + i].direction);
        const float numerator = det(lines[orcaBias + i].direction, lines[orcaBias + lineNo].point - lines[orcaBias + i].point);

        if (fabs(denominator) <= RVO_EPSILON) {
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
        if (dot(optVelocity, lines[orcaBias + lineNo].direction) > 0.0f) {
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
        const float t = dot(lines[orcaBias + lineNo].direction, (optVelocity - lines[orcaBias + lineNo].point));

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

uint linearProgram2(const __global Line* lines, uint numLines, float radius, const Vector2 optVelocity, bool directionOpt, Vector2 *result, uint orcaBias)
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
        *result = normalize(optVelocity) * radius;
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

void linearProgram3(const __global Line* lines, uint numLines, uint numObstLines, uint beginLine, float radius, Vector2 *result, uint orcaBias, __global Line* projLines)
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

                if (fabs(determinant) <= RVO_EPSILON) {
                    /* Line i and line j are parallel. */
                    if (dot(lines[orcaBias + i].direction, lines[orcaBias + j].direction) > 0.0f) {
                        /* Line i and line j point in the same direction. */
                        continue;
                    }
                    else {
                        /* Line i and line j point in opposite direction. */
                        line.point = (float)0.5f * (lines[orcaBias + i].point + lines[orcaBias + j].point);
                    }
                }
                else {
                    line.point = lines[orcaBias + i].point + (det(lines[orcaBias + j].direction, lines[orcaBias + i].point - lines[orcaBias + j].point) / determinant) * lines[orcaBias + i].direction;
                }

                line.direction = normalize(lines[orcaBias + j].direction - lines[orcaBias + i].direction);
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
void computeNewVelocity(__global Agent* agents, __global AgentTreeNode* agentTree_, float timeStep, __global AgentNeighborBuf* agentNeighbors, __global Line* orcaLines, __global Line* projLines, __global unsigned* agentsForTree, __global StackNode* stack)
{
    Agent agent = agents[get_global_id(0)];

    float rangeSq = 225.0f;
    ushort node = 0;
    __global StackNode* stackTop = &stack[get_global_id(0)*MAX_KDTREE_DEPTH];

    uchar retCode = 0;
    float distSqLeft;
    float distSqRight;

    for(;;)
    {
        const AgentTreeNode currentTreeNode = agentTree_[node];
        ushort nodeStored;
        uchar retcodeStored = 0;
        switch(retCode) 
        {
            case 0:
                if (currentTreeNode.end - currentTreeNode.begin <= RVO_MAX_LEAF_SIZE) {                    
                    for (uint i = currentTreeNode.begin; i < currentTreeNode.end; ++i) {
                        Agent nearAgent = agents[agentsForTree[i]];
                        if (agent.id_ != nearAgent.id_) {

                            const float distSq = absSq(agent.position_ - nearAgent.position_);
                            
                            if (distSq < rangeSq) {
                                const ushort indexBias = 10*get_global_id(0);
                                
                                if (agent.numAgentNeighbors_ < 10) {
                                    
                                    agentNeighbors[indexBias + agent.numAgentNeighbors_].first = distSq;
                                    agentNeighbors[indexBias + agent.numAgentNeighbors_].second = nearAgent.id_;
                                    ++agent.numAgentNeighbors_;
                                }

                                uchar i = agent.numAgentNeighbors_ - 1;

                                while (i != 0 && distSq < agentNeighbors[indexBias + i - 1].first) {
                                    agentNeighbors[indexBias+i] = agentNeighbors[indexBias + i - 1];
                                    --i;
                                }

                                agentNeighbors[indexBias+i].first = distSq;
                                agentNeighbors[indexBias+i].second = nearAgent.id_;

                                if (agent.numAgentNeighbors_ == 10) {
                                    rangeSq = agentNeighbors[indexBias + agent.numAgentNeighbors_ - 1].first;
                                }
                            }
                            
                        }
                    }
                    break;
                }
                else {
                    AgentTreeNode leftNode = agentTree_[currentTreeNode.left];
                    distSqLeft =
                        sqr(max(0.0f, leftNode.minX - agent.position_.x)) +
                        sqr(max(0.0f, agent.position_.x - leftNode.maxX)) +
                        sqr(max(0.0f, leftNode.minY - agent.position_.y)) +
                        sqr(max(0.0f, agent.position_.y - leftNode.maxY));

                    AgentTreeNode rightNode = agentTree_[currentTreeNode.right];
                    distSqRight =
                        sqr(max(0.0f, rightNode.minX - agent.position_.x)) +
                        sqr(max(0.0f, agent.position_.x - rightNode.maxX)) +
                        sqr(max(0.0f, rightNode.minY - agent.position_.y)) +
                        sqr(max(0.0f, agent.position_.y - rightNode.maxY));
                    
                    if (distSqLeft < distSqRight) {
                        if (distSqLeft < rangeSq) {
                            //stackTop = push(stackTop, 1, distSqLeft, distSqRight, node); 
                            nodeStored = node;
                            retcodeStored = 1;
                            node = currentTreeNode.left; 
                            retCode = 0;
                            break;

            case 1:

                            if (distSqRight < rangeSq) {
                                //stackTop = push(stackTop, 3, distSqLeft, distSqRight, node); 
                                nodeStored = node;
                                retcodeStored = 3;
                                node = currentTreeNode.right; 
                                retCode = 0;
                                break;
                            }
                        }
                    }
                    else {
                        if (distSqRight < rangeSq) {
                            //stackTop = push(stackTop, 2, distSqLeft, distSqRight, node); 
                            nodeStored = node;
                            retcodeStored = 2;
                            node = currentTreeNode.right; 
                            retCode = 0;
                            break;
            case 2:

                            if (distSqLeft < rangeSq) {
                                //stackTop = push(stackTop, 3, distSqLeft, distSqRight, node);
                                nodeStored = node;
                                retcodeStored = 3; 
                                node = currentTreeNode.left; 
                                retCode = 0;
                                break;
                            }
                        }
                    }
                }
            case 3: break;
        }
        if (retcodeStored != 0){
            stackTop = push(stackTop, retcodeStored, distSqLeft, distSqRight, nodeStored);
            continue;
        }

        if(&stack[0] == stackTop)
        {
            break;
        }

        stackTop--;
        StackNode topNode = *stackTop;
        /*
        retCode = stackTop->retCode;
        distSqLeft = stackTop->distSqLeft;
        distSqRight = stackTop->distSqRight;
        node = stackTop->node;
        */
        retCode = topNode.retCode;
        distSqLeft = topNode.distSqLeft;
        distSqRight = topNode.distSqRight;
        node = topNode.node;
    }

    agent.numOrcaLines_ = 0;

    //const float invTimeHorizon = 1.0f / agent.timeHorizon_;
    //uint neighborBias = agent.maxNeighbors_*get_global_id(0);
    //uint orcaBias = (agent.maxNeighbors_ + agent.maxObstacleNeighbors_)*get_global_id(0);

    const float invTimeHorizon = 0.1f;
    uint neighborBias = 10*get_global_id(0);
    uint orcaBias = 26*get_global_id(0);

    /* Create agent ORCA lines. */
    for (uint i = 0; i < agent.numAgentNeighbors_; ++i) {
        const Agent other = agents[agentNeighbors[neighborBias+i].second];

        const Vector2 relativePosition = other.position_ - agent.position_;
        const Vector2 relativeVelocity = agent.velocity_ - other.velocity_;
        const float distSq = absSq(relativePosition);
        const float combinedRadius = 4.8f;
        const float combinedRadiusSq = 23.04f;

        Line line;
        Vector2 u;

        if (distSq > combinedRadiusSq) {
            /* No collision. */
            const Vector2 w = relativeVelocity - invTimeHorizon * relativePosition;
            /* Vector from cutoff center to relative velocity. */
            const float wLengthSq = absSq(w);

            const float dotProduct1 = dot(w, relativePosition);

            if (dotProduct1 < 0.0f && sqr(dotProduct1) > combinedRadiusSq * wLengthSq) {
                /* Project on cut-off circle. */
                const float wLength = sqrt(wLengthSq);
                const Vector2 unitW = w / wLength;

                line.direction = (Vector2)(unitW.y, -unitW.x);
                u = (combinedRadius * invTimeHorizon - wLength) * unitW;
            }
            else {
                /* Project on legs. */
                const float leg = sqrt(distSq - combinedRadiusSq);

                if (det(relativePosition, w) > 0.0f) {
                    /* Project on left leg. */
                    line.direction = (Vector2)(relativePosition.x * leg - relativePosition.y * combinedRadius, relativePosition.x * combinedRadius + relativePosition.y * leg) / distSq;
                }
                else {
                    /* Project on right leg. */
                    line.direction = -(Vector2)(relativePosition.x * leg + relativePosition.y * combinedRadius, -relativePosition.x * combinedRadius + relativePosition.y * leg) / distSq;
                }

                const float dotProduct2 = dot(relativeVelocity, line.direction);

                u = dotProduct2 * line.direction - relativeVelocity;
            }
        }
        else {
            /* Collision. Project on cut-off circle of time timeStep. */
            const float invTimeStep = 1.0f / timeStep;

            /* Vector from cutoff center to relative velocity. */
            const Vector2 w = relativeVelocity - invTimeStep * relativePosition;

            const float wLength = length(w);
            const Vector2 unitW = w / wLength;

            line.direction = (Vector2)(unitW.y, -unitW.x);
            u = (combinedRadius * invTimeStep - wLength) * unitW;
        }

        line.point = agent.velocity_ + (float)0.5f * u;
        orcaLines[orcaBias + agent.numOrcaLines_++] = line;
    }

    uint lineFail = linearProgram2(orcaLines, agent.numOrcaLines_, 3.0f, agent.prefVelocity_, false, &agent.newVelocity_, orcaBias);
    
    if (lineFail < agent.numOrcaLines_) {
        linearProgram3(orcaLines, agent.numOrcaLines_, 0, lineFail, 3.0f, &agent.newVelocity_, orcaBias, projLines);
    }

    // copy back the modified field
    agents[get_global_id(0)].newVelocity_ = agent.newVelocity_;
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
