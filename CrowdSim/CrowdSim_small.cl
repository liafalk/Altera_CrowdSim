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
    //long spacer1;
    uint numAgentNeighbors_; // number of filled elements in agentNeighbors
    uint maxNeighbors_;
    float maxSpeed_;
    float neighborDist_;
    //Vector2 newVelocity_;
    //__global ObstacleNeighbor* obstacleNeighbors_;
    //long spacer2;
    uint numObstacleNeighbors_; // number of filled elements in agentNeighbors
    //uint maxObstacleNeighbors_;  // number of allocated positions in obstacleNeighbors, can be increased dynamically
    //__global Line* orcaLines_;
    //long spacer3;
    //uint numOrcaLines_;
    //__global Line* projLines_;   // used as a scratch buffer for calling linearProgram3
    //long spacer4;
    Vector2 position_;
    //Vector2 prefVelocity_;
    float radius_;
    //__global void *sim_;
    //long spacer5;
    //float timeHorizon_;
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
    volatile uint right;
} AgentTreeNode;

inline float absSq(Vector2 vector)
{
    return dot(vector, vector);
}

inline float sqr (float x)
{
    return x*x;
}

typedef volatile struct __StackNode
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

//__attribute__((reqd_work_group_size(64,1,1)))
__kernel
void computeNewVelocity(__global Agent* agents, __global AgentTreeNode* agentTree_, __global AgentNeighborBuf* agentNeighbors, __global unsigned* agentsForTree, __global StackNode* stack)
{
    __global Agent* agent = &agents[get_global_id(0)];
    //Agent agent2 = 

    agent->numObstacleNeighbors_ = 0;
    volatile float rangeSq = sqr(agent->timeHorizonObst_ * agent->maxSpeed_ + agent->radius_);
    
    agent->numAgentNeighbors_ = 0;

    if (agent->maxNeighbors_ > 0) {
        rangeSq = sqr(agent->neighborDist_);
        uint node = 0;
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
                            const uint nextID = agents[agentsForTree[i]].id_;
                            if (agent->id_ != nextID) {

                                const float distSq = absSq(agent->position_ - agents[agentsForTree[i]].position_);
                                
                                if (distSq < rangeSq) {
                                    const uint maxNeighbors = agent->maxNeighbors_;
                                    const uint indexBias = maxNeighbors*get_global_id(0);
                                    uint numAgents = agent->numAgentNeighbors_;

                                    if (numAgents < maxNeighbors) {
                                        agentNeighbors[indexBias + numAgents].first = distSq;
                                        agentNeighbors[indexBias + numAgents].second = nextID;
                                        numAgents++;
                                    }

                                    uint i = numAgents - 1;

                                    while (i != 0 && distSq < agentNeighbors[indexBias + i - 1].first) {
                                        agentNeighbors[indexBias+i] = agentNeighbors[indexBias + i - 1];
                                        --i;
                                    }

                                    agentNeighbors[indexBias+i].first = distSq;
                                    agentNeighbors[indexBias+i].second = nextID;

                                    if (numAgents == maxNeighbors) {
                                        // TODO FIX: assigning rangeSq to any value crashes the compiler ??
                                        //rangeSq = agentNeighbors[indexBias + agent->numAgentNeighbors_ - 1].first;
                                        //rangeSq = 2.0f;
                                    }

                                }
                            }
                        }
                        break;
                    }
                    else {
                        const volatile uint leftNode = agentTree_[node].left;
                        distSqLeft =
                            sqr(max(0.0f, agentTree_[leftNode].minX - agent->position_.x)) +
                            sqr(max(0.0f, agent->position_.x - agentTree_[leftNode].maxX)) +
                            sqr(max(0.0f, agentTree_[leftNode].minY - agent->position_.y)) +
                            sqr(max(0.0f, agent->position_.y - agentTree_[leftNode].maxY));

                        const volatile uint rightNode = agentTree_[node].right;
                        distSqRight =
                            sqr(max(0.0f, agentTree_[rightNode].minX - agent->position_.x)) +
                            sqr(max(0.0f, agent->position_.x - agentTree_[rightNode].maxX)) +
                            sqr(max(0.0f, agentTree_[rightNode].minY - agent->position_.y)) +
                            sqr(max(0.0f, agent->position_.y - agentTree_[rightNode].maxY));
                        
                        if (distSqLeft < distSqRight) {
                            if (distSqLeft < rangeSq) {
                                stackTop = push(stackTop, 1, distSqLeft, distSqRight, node); 
                                node = leftNode; 
                                retCode = 0;
                                continue;

                case 1:

                                if (distSqRight < rangeSq) {
                                    stackTop = push(stackTop, 3, distSqLeft, distSqRight, node); 
                                    node = rightNode; 
                                    retCode = 0;
                                    continue;
                                }
                            }
                        }
                        else {
                            if (distSqRight < rangeSq) {
                                stackTop = push(stackTop, 2, distSqLeft, distSqRight, node); 
                                node = rightNode; 
                                retCode = 0;
                                continue;
                case 2:

                                if (distSqLeft < rangeSq) {
                                    stackTop = push(stackTop, 3, distSqLeft, distSqRight, node); 
                                    node = leftNode; 
                                    retCode = 0;
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

}
