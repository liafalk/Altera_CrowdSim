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

/*
typedef struct {
	float x;
	float y;
} Vector2;

typedef unsigned int uint; */
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
typedef struct __ObstacleNeighbor
{
    float first;
    __global const struct __Obstacle * second;
} ObstacleNeighbor;


#pragma pack(4)
typedef struct __Agent {
    __global AgentNeighbor* agentNeighbors_;
    uint numAgentNeighbors_; // number of filled elements in agentNeighbors
    uint maxNeighbors_;
    float maxSpeed_;
    float neighborDist_;
    Vector2 newVelocity_;
    __global ObstacleNeighbor* obstacleNeighbors_;
    uint numObstacleNeighbors_; // number of filled elements in agentNeighbors
    uint maxObstacleNeighbors_;  // number of allocated positions in obstacleNeighbors, can be increased dynamically
    __global Line* orcaLines_;
    uint numOrcaLines_;
    __global Line* projLines_;   // used as a scratch buffer for calling linearProgram3
    Vector2 position_;
    Vector2 prefVelocity_;
    float radius_;
    __global void *sim_;
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


void insertAgentNeighbor(__global Agent *thisAgent, __global const Agent *agent, float *rangeSq)
{
    if (thisAgent != agent) {
        const float distSq = absSq(thisAgent->position_ - agent->position_);

        if (distSq < *rangeSq) {
            if (thisAgent->numAgentNeighbors_ < thisAgent->maxNeighbors_) {
                thisAgent->agentNeighbors_[thisAgent->numAgentNeighbors_].first = distSq;
                thisAgent->agentNeighbors_[thisAgent->numAgentNeighbors_].second = agent;
                thisAgent->numAgentNeighbors_++;
            }

            uint i = thisAgent->numAgentNeighbors_ - 1;

            while (i != 0 && distSq < thisAgent->agentNeighbors_[i - 1].first) {
                thisAgent->agentNeighbors_[i] = thisAgent->agentNeighbors_[i - 1];
                --i;
            }

            thisAgent->agentNeighbors_[i].first = distSq;
            thisAgent->agentNeighbors_[i].second = agent;

            if (thisAgent->numAgentNeighbors_ == thisAgent->maxNeighbors_) {
                *rangeSq = thisAgent->agentNeighbors_[thisAgent->numAgentNeighbors_ - 1].first;
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

StackNode* push (StackNode* stackNode, uint retCode, float distSqLeft, float distSqRight, uint node)
{
    stackNode->retCode = retCode;
    stackNode->distSqLeft = distSqLeft;
    stackNode->distSqRight = distSqRight;
    stackNode->node = node;
    return stackNode + 1;
}

void queryAgentTreeRecursive(__global PAgent* agents_, __global Agent *agent, __global AgentTreeNode* agentTree_, float* rangeSq, uint node)
{
    StackNode stack[MAX_KDTREE_DEPTH];
    StackNode* stackTop = &stack[0];
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
                        insertAgentNeighbor(agent, agents_[i].value, rangeSq);
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


void computeAgentNeighbors(__global Agent* agent, __global PAgent *agents, __global AgentTreeNode* agentTree_)
{
    agent->numObstacleNeighbors_ = 0;
    float rangeSq = sqr(agent->timeHorizonObst_ * agent->maxSpeed_ + agent->radius_);
        
    // Obstacles are not processed. This is current limitation of this OpenCL port
    // sim_->kdTree_->computeObstacleNeighbors(this, rangeSq);

    agent->numAgentNeighbors_ = 0;

    if (agent->maxNeighbors_ > 0) {
        rangeSq = sqr(agent->neighborDist_);
        queryAgentTreeRecursive(agents, agent, agentTree_, &rangeSq, 0);
    }
}


bool linearProgram1(const __global Line* lines, uint lineNo, float radius, const Vector2 optVelocity, bool directionOpt, __global Vector2 *result)
{
    const float dotProduct = dot(lines[lineNo].point, lines[lineNo].direction);
    const float discriminant = sqr(dotProduct) + sqr(radius) - absSq(lines[lineNo].point);

    if (discriminant < 0.0f) {
        /* Max speed circle fully invalidates line lineNo. */
        return false;
    }

    const float sqrtDiscriminant = sqrt(discriminant);
    float tLeft = -dotProduct - sqrtDiscriminant;
    float tRight = -dotProduct + sqrtDiscriminant;

    int returnnow = 0;

    for (uint i = 0; i < lineNo; ++i) {
        const float denominator = det(lines[lineNo].direction, lines[i].direction);
        const float numerator = det(lines[i].direction, lines[lineNo].point - lines[i].point);

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
            tRight = min(tRight, t);
        }
        else {
            /* Line i bounds line lineNo on the left. */
            tLeft = max(tLeft, t);
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
        if (dot(optVelocity, lines[lineNo].direction) > 0.0f) {
            /* Take right extreme. */
            *result = lines[lineNo].point + tRight * lines[lineNo].direction;
        }
        else {
            /* Take left extreme. */
            *result = lines[lineNo].point + tLeft * lines[lineNo].direction;
        }
    }
    else {
        /* Optimize closest point. */
        const float t = dot(lines[lineNo].direction, (optVelocity - lines[lineNo].point));

        if (t < tLeft) {
            *result = lines[lineNo].point + tLeft * lines[lineNo].direction;
        }
        else if (t > tRight) {
            *result = lines[lineNo].point + tRight * lines[lineNo].direction;
        }
        else {
            *result = lines[lineNo].point + t * lines[lineNo].direction;
        }
    }

    return true;
}

uint linearProgram2(const __global Line* lines, uint numLines, float radius, const Vector2 optVelocity, bool directionOpt, __global Vector2 *result)
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
        if (det(lines[i].direction, lines[i].point - *result) > 0.0f) {
            /* Result does not satisfy constraint i. Compute new optimal result. */
            const Vector2 tempResult = *result;

            if (!linearProgram1(lines, i, radius, optVelocity, directionOpt, result)) {
                *result = tempResult;
                return i;
            }
        }
    }

    return numLines;
}

void linearProgram3(const __global Line* lines, uint numLines, uint numObstLines, uint beginLine, float radius, __global Vector2 *result, __global Line* projLines)
{
    float distance = 0.0f;

    for (uint i = beginLine; i < numLines; ++i) {
        if (det(lines[i].direction, lines[i].point - *result) > distance) {
            /* Result does not satisfy constraint of line i. */
            for(uint k = 0; k < numObstLines; ++k)
            {
                projLines[k] = lines[k];
            }
            uint numProjLines = numObstLines;

            for (uint j = numObstLines; j < i; ++j) {
                Line line;

                float determinant = det(lines[i].direction, lines[j].direction);

                if (fabs(determinant) <= RVO_EPSILON) {
                    /* Line i and line j are parallel. */
                    if (dot(lines[i].direction, lines[j].direction) > 0.0f) {
                        /* Line i and line j point in the same direction. */
                        continue;
                    }
                    else {
                        /* Line i and line j point in opposite direction. */
                        line.point = 0.5f * (lines[i].point + lines[j].point);
                    }
                }
                else {
                    line.point = lines[i].point + (det(lines[j].direction, lines[i].point - lines[j].point) / determinant) * lines[i].direction;
                }

                line.direction = normalize(lines[j].direction - lines[i].direction);
                projLines[numProjLines++] = line;
            }

            const Vector2 tempResult = *result;

            if (linearProgram2(projLines, numProjLines, radius, (Vector2)(-lines[i].direction.y, lines[i].direction.x), true, result) < numProjLines) {
                /* This should in principle not happen.  The result is by definition
                    * already in the feasible region of this linear program. If it fails,
                    * it is due to small floating point error, and the current result is
                    * kept.
                    */
                *result = tempResult;
            }

            distance = det(lines[i].direction, lines[i].point - *result);
        }
    }
}


__kernel
void computeNewVelocity(__global PAgent* agents, __global PAgent* agentsForTree, __global AgentTreeNode* agentTree_, float timeStep)
{
    __global Agent* agent = agents[get_global_id(0)].value;

    #ifndef FORCE_C_NEIGHBORS_KERNEL

    computeAgentNeighbors(agent, agentsForTree, agentTree_);

    #endif

    #ifndef FORCE_C_VELOCITY_KERNEL

    agent->numOrcaLines_ = 0;
    float radius_ = agent->radius_;
    Vector2 position_ = agent->position_;
    Vector2 velocity_ = agent->velocity_;

    #if 0

    const float invTimeHorizonObst = 1.0f / agent->timeHorizonObst_;

    /* Create obstacle ORCA lines. */
    for (uint i = 0; i < agent->numObstacleNeighbors_; ++i) {

        const __global Obstacle *obstacle1 = agent->obstacleNeighbors_[i].second;
        const __global Obstacle *obstacle2 = obstacle1->nextObstacle_;

        const Vector2 relativePosition1 = obstacle1->point_ - position_;
        const Vector2 relativePosition2 = obstacle2->point_ - position_;

        /*
            * Check if velocity obstacle of obstacle is already taken care of by
            * previously constructed obstacle ORCA lines.
            */
        bool alreadyCovered = false;

        for (uint j = 0; j < agent->numOrcaLines_; ++j) {
            if (det(invTimeHorizonObst * relativePosition1 - agent->orcaLines_[j].point, agent->orcaLines_[j].direction) - invTimeHorizonObst * radius_ >= -RVO_EPSILON && det(invTimeHorizonObst * relativePosition2 - agent->orcaLines_[j].point, agent->orcaLines_[j].direction) - invTimeHorizonObst * radius_ >=  -RVO_EPSILON) {
                alreadyCovered = true;
                break;
            }
        }

        if (alreadyCovered) {
            continue;
        }

        /* Not yet covered. Check for collisions. */

        const float distSq1 = absSq(relativePosition1);
        const float distSq2 = absSq(relativePosition2);

        const float radiusSq = sqr(radius_);

        const Vector2 obstacleVector = obstacle2->point_ - obstacle1->point_;
        const float s = dot(-relativePosition1, obstacleVector) / absSq(obstacleVector);
        const float distSqLine = absSq(-relativePosition1 - s * obstacleVector);

        Line line;

        if (s < 0.0f && distSq1 <= radiusSq) {
            /* Collision with left vertex. Ignore if non-convex. */
            if (obstacle1->isConvex_) {
                line.point = (Vector2)(0.0f, 0.0f);
                line.direction = normalize((Vector2)(-relativePosition1.y, relativePosition1.x));
                agent->orcaLines_[agent->numOrcaLines_++] = line;
            }

            continue;
        }
        else if (s > 1.0f && distSq2 <= radiusSq) {
            /* Collision with right vertex. Ignore if non-convex
                * or if it will be taken care of by neighoring obstace */
            if (obstacle2->isConvex_ && det(relativePosition2, obstacle2->unitDir_) >= 0.0f) {
                line.point = (Vector2)(0.0f, 0.0f);
                line.direction = normalize((Vector2)(-relativePosition2.y, relativePosition2.x));
                agent->orcaLines_[agent->numOrcaLines_++] = line;
            }

            continue;
        }
        else if (s >= 0.0f && s < 1.0f && distSqLine <= radiusSq) {
            /* Collision with obstacle segment. */
            line.point = (Vector2)(0.0f, 0.0f);
            line.direction = -obstacle1->unitDir_;
            agent->orcaLines_[agent->numOrcaLines_++] = line;
            continue;
        }

        /*
            * No collision.
            * Compute legs. When obliquely viewed, both legs can come from a single
            * vertex. Legs extend cut-off line when nonconvex vertex.
            */

        Vector2 leftLegDirection, rightLegDirection;

        if (s < 0.0f && distSqLine <= radiusSq) {
            /*
                * Obstacle viewed obliquely so that left vertex
                * defines velocity obstacle.
                */
            if (!obstacle1->isConvex_) {
                /* Ignore obstacle. */
                continue;
            }

            obstacle2 = obstacle1;

            const float leg1 = sqrt(distSq1 - radiusSq);
            leftLegDirection = (Vector2)(relativePosition1.x * leg1 - relativePosition1.y * radius_, relativePosition1.x * radius_ + relativePosition1.y * leg1) / distSq1;
            rightLegDirection = (Vector2)(relativePosition1.x * leg1 + relativePosition1.y * radius_, -relativePosition1.x * radius_ + relativePosition1.y * leg1) / distSq1;
        }
        else if (s > 1.0f && distSqLine <= radiusSq) {
            /*
                * Obstacle viewed obliquely so that
                * right vertex defines velocity obstacle.
                */
            if (!obstacle2->isConvex_) {
                /* Ignore obstacle. */
                continue;
            }

            obstacle1 = obstacle2;

            const float leg2 = sqrt(distSq2 - radiusSq);
            leftLegDirection = (Vector2)(relativePosition2.x * leg2 - relativePosition2.y * radius_, relativePosition2.x * radius_ + relativePosition2.y * leg2) / distSq2;
            rightLegDirection = (Vector2)(relativePosition2.x * leg2 + relativePosition2.y * radius_, -relativePosition2.x * radius_ + relativePosition2.y * leg2) / distSq2;
        }
        else {
            /* Usual situation. */
            if (obstacle1->isConvex_) {
                const float leg1 = sqrt(distSq1 - radiusSq);
                leftLegDirection = (Vector2)(relativePosition1.x * leg1 - relativePosition1.y * radius_, relativePosition1.x * radius_ + relativePosition1.y * leg1) / distSq1;
            }
            else {
                /* Left vertex non-convex; left leg extends cut-off line. */
                leftLegDirection = -obstacle1->unitDir_;
            }

            if (obstacle2->isConvex_) {
                const float leg2 = sqrt(distSq2 - radiusSq);
                rightLegDirection = (Vector2)(relativePosition2.x * leg2 + relativePosition2.y * radius_, -relativePosition2.x * radius_ + relativePosition2.y * leg2) / distSq2;
            }
            else {
                /* Right vertex non-convex; right leg extends cut-off line. */
                rightLegDirection = obstacle1->unitDir_;
            }
        }

        /*
            * Legs can never point into neighboring edge when convex vertex,
            * take cutoff-line of neighboring edge instead. If velocity projected on
            * "foreign" leg, no constraint is added.
            */

        const __global Obstacle *const leftNeighbor = obstacle1->prevObstacle_;

        bool isLeftLegForeign = false;
        bool isRightLegForeign = false;

        if (obstacle1->isConvex_ && det(leftLegDirection, -leftNeighbor->unitDir_) >= 0.0f) {
            /* Left leg points into obstacle. */
            leftLegDirection = -leftNeighbor->unitDir_;
            isLeftLegForeign = true;
        }

        if (obstacle2->isConvex_ && det(rightLegDirection, obstacle2->unitDir_) <= 0.0f) {
            /* Right leg points into obstacle. */
            rightLegDirection = obstacle2->unitDir_;
            isRightLegForeign = true;
        }

        /* Compute cut-off centers. */
        const Vector2 leftCutoff = invTimeHorizonObst * (obstacle1->point_ - position_);
        const Vector2 rightCutoff = invTimeHorizonObst * (obstacle2->point_ - position_);
        const Vector2 cutoffVec = rightCutoff - leftCutoff;

        /* Project current velocity on velocity obstacle. */

        /* Check if current velocity is projected on cutoff circles. */
        const float t = (obstacle1 == obstacle2 ? 0.5f : dot((velocity_ - leftCutoff), cutoffVec) / absSq(cutoffVec));
        const float tLeft = dot((velocity_ - leftCutoff), leftLegDirection);
        const float tRight = dot((velocity_ - rightCutoff), rightLegDirection);

        if ((t < 0.0f && tLeft < 0.0f) || (obstacle1 == obstacle2 && tLeft < 0.0f && tRight < 0.0f)) {
            /* Project on left cut-off circle. */
            const Vector2 unitW = normalize(velocity_ - leftCutoff);

            line.direction = (Vector2)(unitW.y, -unitW.x);
            line.point = leftCutoff + radius_ * invTimeHorizonObst * unitW;
            agent->orcaLines_[agent->numOrcaLines_++] = line;
            continue;
        }
        else if (t > 1.0f && tRight < 0.0f) {
            /* Project on right cut-off circle. */
            const Vector2 unitW = normalize(velocity_ - rightCutoff);

            line.direction = (Vector2)(unitW.y, -unitW.x);
            line.point = rightCutoff + radius_ * invTimeHorizonObst * unitW;
            agent->orcaLines_[agent->numOrcaLines_++] = line;
            continue;
        }

        /*
            * Project on left leg, right leg, or cut-off line, whichever is closest
            * to velocity.
            */
        const float distSqCutoff = ((t < 0.0f || t > 1.0f || obstacle1 == obstacle2) ? INFINITY : absSq(velocity_ - (leftCutoff + t * cutoffVec)));
        const float distSqLeft = ((tLeft < 0.0f) ? INFINITY : absSq(velocity_ - (leftCutoff + tLeft * leftLegDirection)));
        const float distSqRight = ((tRight < 0.0f) ? INFINITY : absSq(velocity_ - (rightCutoff + tRight * rightLegDirection)));

        if (distSqCutoff <= distSqLeft && distSqCutoff <= distSqRight) {
            /* Project on cut-off line. */
            line.direction = -obstacle1->unitDir_;
            line.point = leftCutoff + radius_ * invTimeHorizonObst * (Vector2)(-line.direction.y, line.direction.x);
            agent->orcaLines_[agent->numOrcaLines_++] = line;
            continue;
        }
        else if (distSqLeft <= distSqRight) {
            /* Project on left leg. */
            if (isLeftLegForeign) {
                continue;
            }

            line.direction = leftLegDirection;
            line.point = leftCutoff + radius_ * invTimeHorizonObst * (Vector2)(-line.direction.y, line.direction.x);
            agent->orcaLines_[agent->numOrcaLines_++] = line;
            continue;
        }
        else {
            /* Project on right leg. */
            if (isRightLegForeign) {
                continue;
            }

            line.direction = -rightLegDirection;
            line.point = rightCutoff + radius_ * invTimeHorizonObst * (Vector2)(-line.direction.y, line.direction.x);
            agent->orcaLines_[agent->numOrcaLines_++] = line;
            continue;
        }
    }

    #endif

    const uint numObstLines = agent->numOrcaLines_;

    const float invTimeHorizon = 1.0f / agent->timeHorizon_;

    /* Create agent ORCA lines. */
    for (uint i = 0; i < agent->numAgentNeighbors_; ++i) {
        const __global Agent *const other = agent->agentNeighbors_[i].second;

        const Vector2 relativePosition = other->position_ - position_;
        const Vector2 relativeVelocity = velocity_ - other->velocity_;
        const float distSq = absSq(relativePosition);
        const float combinedRadius = radius_ + other->radius_;
        const float combinedRadiusSq = sqr(combinedRadius);

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

        line.point = velocity_ + 0.5f * u;
        agent->orcaLines_[agent->numOrcaLines_++] = line;
    }

    uint lineFail = linearProgram2(agent->orcaLines_, agent->numOrcaLines_, agent->maxSpeed_, agent->prefVelocity_, false, &agent->newVelocity_);

    if (lineFail < agent->numOrcaLines_) {
        linearProgram3(agent->orcaLines_, agent->numOrcaLines_, numObstLines, lineFail, agent->maxSpeed_, &agent->newVelocity_, agent->projLines_);
    }

    #endif
}


// Do regular update of current velocity and position for an agent
__kernel void update (__global PAgent* agents, float timeStep)
{
    int id = get_global_id(0);
    __global Agent* agent = agents[id].value;

    // Update agent velocity and position
    agent->velocity_ = agent->newVelocity_;
    agent->position_ += agent->velocity_ * timeStep;
}


// Do regular update of current velocity and position for an agent
// plus do update in side buffer to pack positions to be reused
// during visualization step (for example).
__kernel void updateCustom (__global PAgent* agents, float timeStep, __global float4* positionsForRendering)
{
    int id = get_global_id(0);
    __global Agent* agent = agents[id].value;

    // Update agent velocity and position
    agent->velocity_ = agent->newVelocity_;
    agent->position_ += agent->velocity_ * timeStep;

    // Update side vector with agent coordinates
    positionsForRendering[id].xy = agent->position_.xy;
}
