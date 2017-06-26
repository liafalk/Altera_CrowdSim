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

typedef struct __attribute__((packed)) __attribute__((aligned(8))) __AgentNeighborBuf
{
    float first;
    ushort second;
} AgentNeighborBuf;


typedef volatile struct __attribute__((packed)) __attribute__((aligned(32))) __Agent {
    uchar numAgentNeighbors_;
    Vector2 position_;
    Vector2 velocity_;
    ushort id_;
} Agent;

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
    StackNode s;
    s.retCode = retCode;
    s.distSqLeft = distSqLeft;
    s.distSqRight = distSqRight;
    s.node = node;
    *stackNode = s;
    return stackNode + 1;
}

__kernel
void computeNewVelocity(__global Agent* agents, __global AgentTreeNode* agentTree_, __global AgentNeighborBuf* agentNeighbors, __global unsigned* agentsForTree, __global StackNode* stack)
{
    Agent agent = agents[get_global_id(0)];
    __global StackNode* stackTop = &stack[get_global_id(0)*MAX_KDTREE_DEPTH];
    
    float rangeSq = 225.0f;
    ushort node = 0;
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
                if(get_global_id(0)==40) printf("Checking (%d - %d) <= %d\n", currentTreeNode.end, currentTreeNode.begin, RVO_MAX_LEAF_SIZE);                  
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

        retCode = stackTop->retCode;
        distSqLeft = stackTop->distSqLeft;
        distSqRight = stackTop->distSqRight;
        node = stackTop->node;
    }

    // copy back the modified field
    agents[get_global_id(0)].numAgentNeighbors_ = agent.numAgentNeighbors_;
}
