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
#include "../common/rtl_src/host_memory_bridge.h"

typedef float2 Vector2;

typedef struct __attribute__((packed)) __attribute__((aligned(8))) __AgentNeighborBuf
{
    float first;
    ushort second;
} AgentNeighborBuf;


typedef volatile struct __attribute__((packed)) __attribute__((aligned(32))) __Agent {
    uint numAgentNeighbors_;
    Vector2 position_;
    Vector2 velocity_;
    uint id_;
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

__global StackNode* push (__global StackNode* restrict stackNode, uchar retCode, float distSqLeft, float distSqRight, ushort node)
{
    StackNode s;
    s.retCode = retCode;
    s.distSqLeft = distSqLeft;
    s.distSqRight = distSqRight;
    s.node = node;
    *stackNode = s;
    return stackNode + 1;
}

Agent toAgent(uint16 v)
{
    Agent tn;
    tn.numAgentNeighbors_   = v.s0;
    tn.position_.x          = (float)v.s1;
    tn.position_.y          = (float)v.s2;
    tn.velocity_.x          = (float)v.s3;
    tn.velocity_.y          = (float)v.s4;
    tn.id_                  = (float)v.s5;

    return tn;
}


AgentTreeNode vector_2_AgentTreeNode(uint16 v) {
    AgentTreeNode tn;

    tn.begin    = v.s0;
    tn.end      = v.s1;
    tn.left     = v.s2;
    tn.maxX     = (float)v.s3;
    tn.maxY     = (float)v.s4;
    tn.minX     = (float)v.s5;
    tn.minY     = (float)v.s6;
    tn.right    = v.s7;

    return tn;
}


__kernel
void computeNewVelocity(__global Agent* agents,
                        __global AgentNeighborBuf* agentNeighbors,
                        __global unsigned* agentsForTree,
                        __global StackNode* restrict stack,
                        svm_pointer_t ttbr0,                        // address of the page table entry
                        svm_pointer_t svm_agentTree_,               // the svm version of the above pointer
                        __global int* restrict dummy_p0,             // dummy pointer used to trick AOCL to support custom SVM code
                        __global int* restrict dummy_p1,             // dummy pointer used to trick AOCL to support custom SVM code
                        __global int* restrict dummy_p2              // dummy pointer used to trick AOCL to support custom SVM code
                    )
{
    Agent agent = agents[get_global_id(0)];

    //Agent agent = toAgent( host_memory_bridge_ld_512bit(dummy_p0, ttbr0, svm_agents_ + sizeof(Agent)*node) );

    __global StackNode* restrict stackTop = &stack[get_global_id(0)*MAX_KDTREE_DEPTH];
    
    
    float rangeSq = 225.0f;
    ushort node = 0;
    uchar retCode = 0;

    float distSqLeft;
    float distSqRight;

    for(;;)
    {
        //const AgentTreeNode currentTreeNode = agentTree_[node];
        
        // svm read access (reading one tree node at pointer svm_agentTree_)
        
        const AgentTreeNode svm_currentTreeNode = vector_2_AgentTreeNode(
            host_memory_bridge_ld_512bit (dummy_p0, ttbr0, svm_agentTree_ + sizeof(AgentTreeNode)*node)
        );
  
        ushort nodeStored;
        uchar retcodeStored = 0;
        switch(retCode) 
        {
            case 0:
                if (svm_currentTreeNode.end - svm_currentTreeNode.begin <= RVO_MAX_LEAF_SIZE) {                    
                    for (uint i = svm_currentTreeNode.begin; i < svm_currentTreeNode.end; ++i) {
                        Agent nearAgent = agents[agentsForTree[i]];
                        //Agent nearAgent = toAgent( host_memory_bridge_ld_512bit(dummy_p0, ttbr0, svm_agents_ + sizeof(Agent)*agentsForTree[i]) );
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
                    //AgentTreeNode leftNode = agentTree_[svm_currentTreeNode.left];
                    AgentTreeNode leftNode = vector_2_AgentTreeNode(
                        host_memory_bridge_ld_512bit(dummy_p1, ttbr0, svm_agentTree_ + sizeof(AgentTreeNode)*svm_currentTreeNode.left)
                    );

                    distSqLeft =
                        sqr(max(0.0f, leftNode.minX - agent.position_.x)) +
                        sqr(max(0.0f, agent.position_.x - leftNode.maxX)) +
                        sqr(max(0.0f, leftNode.minY - agent.position_.y)) +
                        sqr(max(0.0f, agent.position_.y - leftNode.maxY));

                   // AgentTreeNode rightNode = agentTree_[svm_currentTreeNode.right];
                    AgentTreeNode rightNode = vector_2_AgentTreeNode(
                        host_memory_bridge_ld_512bit(dummy_p2, ttbr0, svm_agentTree_ + sizeof(AgentTreeNode)*svm_currentTreeNode.right)
                    );
                    
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
                            node = svm_currentTreeNode.left; 
                            retCode = 0;
                            break;

            case 1:

                            if (distSqRight < rangeSq) {
                                //stackTop = push(stackTop, 3, distSqLeft, distSqRight, node); 
                                nodeStored = node;
                                retcodeStored = 3;
                                node = svm_currentTreeNode.right; 
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
                            node = svm_currentTreeNode.right; 
                            retCode = 0;
                            break;
            case 2:

                            if (distSqLeft < rangeSq) {
                                //stackTop = push(stackTop, 3, distSqLeft, distSqRight, node);
                                nodeStored = node;
                                retcodeStored = 3; 
                                node = svm_currentTreeNode.left; 
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

        StackNode s = *stackTop;

        retCode = s.retCode;
        distSqLeft = s.distSqLeft;
        distSqRight = s.distSqRight;
        node = s.node;
    }

    // copy back the modified field
    agents[get_global_id(0)].numAgentNeighbors_ = agent.numAgentNeighbors_;
    //uint4 host_memory_bridge_st_32bit (__global int *p0, svm_pointer_t ttbr0, svm_pointer_t va, uint write_data);
    //store 32 bits in SVM fashion
    //host_memory_bridge_st_32bit(dummy_p1, ttbr0, svm_agents_ + sizeof(Agent)*get_global_id(0), agent.numAgentNeighbors_)
}
