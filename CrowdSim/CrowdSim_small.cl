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

typedef float2 Vector2;

// The following structures definitions use pack pragma
// to eliminate any differencies between packing of struct
// data fields in the host and the device sides.
// On the device side, the pack is called with the same value.

struct __Agent;

#pragma pack(4)
typedef struct __AgentNeighborBuf
{
    float first;
    uint second;
} AgentNeighborBuf;

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

inline float absSq(Vector2 vector)
{
    return dot(vector, vector);
}

inline float sqr (float x)
{
    return x*x;
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
    __global StackNode* stackTop = &stack[get_global_id(0)];
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
                        __global Agent* nextAgent = &agents_[agentsForTree[i]];
                        if (agent->id_ != nextAgent->id_) {
                            const float distSq = absSq(agent->position_ - nextAgent->position_);

                            if (distSq < *rangeSq) {
                                uint indexBias = agent->maxNeighbors_*get_global_id(0);
                                if (agent->numAgentNeighbors_ < agent->maxNeighbors_) {
                                    agentNeighbors[indexBias + agent->numAgentNeighbors_].first = distSq;
                                    agentNeighbors[indexBias + agent->numAgentNeighbors_].second = nextAgent->id_;
                                    agent->numAgentNeighbors_++;
                                }

                                uint i = agent->numAgentNeighbors_ - 1;

                                while (i != 0 && distSq < agentNeighbors[indexBias + i - 1].first) {
                                    agentNeighbors[indexBias+i] = agentNeighbors[indexBias + i - 1];
                                    --i;
                                }

                                agentNeighbors[indexBias+i].first = distSq;
                                agentNeighbors[indexBias+i].second = nextAgent->id_;

                                if (agent->numAgentNeighbors_ == agent->maxNeighbors_) {
                                    //*rangeSq = agentNeighbors[indexBias+agent->numAgentNeighbors_ - 1].first;
                                }
                            }
                        }
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



__kernel
void computeNewVelocity(__global Agent* restrict agents, __global AgentTreeNode* restrict agentTree_, __global AgentNeighborBuf* restrict agentNeighbors, __global unsigned* restrict agentsForTree, __global StackNode* restrict stack)
{
    __global Agent* agent = &agents[get_global_id(0)];

    agent->numObstacleNeighbors_ = 0;
    float rangeSq = sqr(agent->timeHorizonObst_ * agent->maxSpeed_ + agent->radius_);
    
    agent->numAgentNeighbors_ = 0;

    if (agent->maxNeighbors_ > 0) {
        rangeSq = sqr(agent->neighborDist_);
        queryAgentTreeRecursive(agents, agent, agentTree_, &rangeSq, 0, agentNeighbors, agentsForTree, stack);
    }

}
