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


/*
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

inline float sqr (float x)
{
    return x*x;
}

typedef struct __StackNode
{
    uchar retCode;
    float distSqLeft;
    float distSqRight;
    ushort node;
} StackNode;

__global StackNode* push (__global StackNode* stackNode, uchar retCode, float distSqLeft, float distSqRight, ushort node)
{
    stackNode->retCode = retCode;
    stackNode->distSqLeft = distSqLeft;
    stackNode->distSqRight = distSqRight;
    stackNode->node = node;
    return stackNode + 1;
}



AgentTreeNode vector_2_AgentTreeNode(uint16 v) {
    AgentTreeNode tn;

    tn.begin        = v.s0;
    tn.end          = v.s1;
    tn.left         = v.s2;
    tn.maxX            = (float)v.s3;
    tn.maxY            = (float)v.s4;
    tn.minX            = (float)v.s5;
    tn.minY            = (float)v.s6;
    tn.right           = v.s7;

    return tn;
}


//__attribute__((num_simd_work_items(1)))
//__attribute__((max_work_group_size(64)))
__kernel
void computeNewVelocity(__global Agent* agents,
                        __global AgentTreeNode* agentTree_,
                        svm_pointer_t svm_agentTree_,               // the svm version of the above pointer
                        __global AgentNeighborBuf* agentNeighbors,
                        __global unsigned* agentsForTree,
                        __global StackNode* stack,
                        svm_pointer_t ttbr0,                        // address of the page table entry
                        __global int *restrict dummy_p0             // dummy pointer used to trick AOCL to support custom SVM code
                    )
{
    Agent agent = agents[get_global_id(0)];
    //agent.numObstacleNeighbors_ = 0;
    //float rangeSq = sqr(agent.timeHorizonObst_ * agent.maxSpeed_ + agent.radius_);

    //agent.numAgentNeighbors_ = 0;
    //rangeSq = sqr(agent.neighborDist_);
    float rangeSq = 15.0f;
    ushort node = 0;
    __global StackNode* stackTop = &stack[get_global_id(0)*MAX_KDTREE_DEPTH];
    //StackNode stack[MAX_KDTREE_DEPTH];
    //StackNode* stackTop = &stack[0];

    uchar retCode = 0;

    float distSqLeft;
    float distSqRight;

    for(;;)
    {
        const AgentTreeNode currentTreeNode = agentTree_[node];
        
        // svm read access (reading one tree node at pointer svm_agentTree_)
        uint16 recv = host_memory_bridge_ld_512bit (dummy_p0, ttbr0, svm_agentTree_);
        const AgentTreeNode svm_currentTreeNode = vector_2_AgentTreeNode(recv);

        ushort nodeStored;
        uchar retcodeStored = 0;
        switch(retCode) 
        {
            case 0:
                if (currentTreeNode.end - currentTreeNode.begin <= RVO_MAX_LEAF_SIZE) {                    
                    for (uint i = currentTreeNode.begin; i < currentTreeNode.end; ++i) {
                        //const uint kdKey = ;
                        //const uint nextID = agents[agentsForTree[i]].id_;
                        Agent nearAgent = agents[agentsForTree[i]];
                        if (agent.id_ != nearAgent.id_) {

                            const float distSq = length(agent.position_ - nearAgent.position_);
                            
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
                        max(0.0f, leftNode.minX - agent.position_.x) +
                        max(0.0f, agent.position_.x - leftNode.maxX) +
                        max(0.0f, leftNode.minY - agent.position_.y) +
                        max(0.0f, agent.position_.y - leftNode.maxY);

                    AgentTreeNode rightNode = agentTree_[currentTreeNode.right];
                    distSqRight =
                        max(0.0f, rightNode.minX - agent.position_.x) +
                        max(0.0f, agent.position_.x - rightNode.maxX) +
                        max(0.0f, rightNode.minY - agent.position_.y) +
                        max(0.0f, agent.position_.y - rightNode.maxY);
                    
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
