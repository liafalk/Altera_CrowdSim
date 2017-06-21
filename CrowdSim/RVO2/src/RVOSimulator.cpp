/*
 * RVOSimulator.cpp
 * RVO2 Library
 *
 * Copyright (c) 2008-2010 University of North Carolina at Chapel Hill.
 * All rights reserved.
 *
 * Permission to use, copy, modify, and distribute this software and its
 * documentation for educational, research, and non-profit purposes, without
 * fee, and without a written agreement is hereby granted, provided that the
 * above copyright notice, this paragraph, and the following four paragraphs
 * appear in all copies.
 *
 * Permission to incorporate this software into commercial products may be
 * obtained by contacting the authors <geom@cs.unc.edu> or the Office of
 * Technology Development at the University of North Carolina at Chapel Hill
 * <otd@unc.edu>.
 *
 * This software program and documentation are copyrighted by the University of
 * North Carolina at Chapel Hill. The software program and documentation are
 * supplied "as is," without any accompanying services from the University of
 * North Carolina at Chapel Hill or the authors. The University of North
 * Carolina at Chapel Hill and the authors do not warrant that the operation of
 * the program will be uninterrupted or error-free. The end-user understands
 * that the program was developed for research purposes and is advised not to
 * rely exclusively on the program for any reason.
 *
 * IN NO EVENT SHALL THE UNIVERSITY OF NORTH CAROLINA AT CHAPEL HILL OR THE
 * AUTHORS BE LIABLE TO ANY PARTY FOR DIRECT, INDIRECT, SPECIAL, INCIDENTAL, OR
 * CONSEQUENTIAL DAMAGES, INCLUDING LOST PROFITS, ARISING OUT OF THE USE OF THIS
 * SOFTWARE AND ITS DOCUMENTATION, EVEN IF THE UNIVERSITY OF NORTH CAROLINA AT
 * CHAPEL HILL OR THE AUTHORS HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH
 * DAMAGE.
 *
 * THE UNIVERSITY OF NORTH CAROLINA AT CHAPEL HILL AND THE AUTHORS SPECIFICALLY
 * DISCLAIM ANY WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE AND ANY
 * STATUTORY WARRANTY OF NON-INFRINGEMENT. THE SOFTWARE PROVIDED HEREUNDER IS ON
 * AN "AS IS" BASIS, AND THE UNIVERSITY OF NORTH CAROLINA AT CHAPEL HILL AND THE
 * AUTHORS HAVE NO OBLIGATIONS TO PROVIDE MAINTENANCE, SUPPORT, UPDATES,
 * ENHANCEMENTS, OR MODIFICATIONS.
 *
 * Please send all bug reports to <geom@cs.unc.edu>.
 *
 * The authors may be contacted via:
 *
 * Jur van den Berg, Stephen J. Guy, Jamie Snape, Ming C. Lin, Dinesh Manocha
 * Dept. of Computer Science
 * 201 S. Columbia St.
 * Frederick P. Brooks, Jr. Computer Science Bldg.
 * Chapel Hill, N.C. 27599-3175
 * United States of America
 *
 * <http://gamma.cs.unc.edu/RVO2/>
 */

#include "RVOSimulator.h"

#include "Agent.h"
#include "KdTree.h"
#include "Obstacle.h"
#include <stdlib.h>

#ifdef _OPENMP
#include <omp.h>
#endif

#include <iostream>

namespace RVO {
    RVOSimulator::RVOSimulator(OpenCLBasic* oclobjects, const CmdParserCrowdSim* cmdparser, cl_mem customUpdateBuffer) :
        defaultAgent_(NULL),
        globalTime_(0.0f),
        kdTree_(NULL),
        timeStep_(0.0f),
        //svmAllocator(0),
        oclobjects_(oclobjects),
        cmdparser_(cmdparser),
        openCLProgram_(0),
        agentsBufferSize_(0),
        customUpdateBuffer_(customUpdateBuffer)
    {
        if(oclobjects_ && cmdparser_)
        {
            //svmAllocator = new SVMAllocator(oclobjects_->context);

            string exeDir = exe_dir();

/*
            #ifdef INTEL_NOT_FOR_RELEASE
            openCLProgram_ = new OpenCLProgramMultipleKernels(
                *oclobjects_,
                L"CrowdSim.cl",
                "",
                //std::string("-I. -I\"") + exeDir + "\"" +
				//std::string(" -I\"D:\\Intel\\OpenCL SDK\\6.3\\include\\\"") +
                //std::string(" -cl-std=CL1.2") +
                    (
                        cmdparser_->interactiveDiagnostics.getValue() || cmdparser_->kernelNeighborsTraverseDiagnostics.getValue() ?
                        " -D INTEL_NOT_FOR_RELEASE_DIAGNOSTICS" :
                        ""
                    ) +
                    (
                        cmdparser_->queryAgentTreeStopAfterIteration.getValue() ?
                        " -D INTEL_NOT_FOR_RELEASE_QUERY_AGENT_TREE_STOP_AFTER_ITERATION=" + to_str(cmdparser_->queryAgentTreeStopAfterIteration.getValue()) :
                        std::string()
                    ) +
                    (
                        cmdparser_->kernelVelocityDiagnostics.getValue() ?
                        " -D INTEL_NOT_FOR_RELEASE_VELOCITY_DIAGNOSTICS" :
                        std::string()
                    ) +
                    (
                        cmdparser_->force_c_neighbors_kernel.getValue() ?
                        " -D FORCE_C_NEIGHBORS_KERNEL" :
                        std::string()
                    ) +
                    (
                        cmdparser_->force_c_velocity_kernel.getValue() ?
                        " -D FORCE_C_VELOCITY_KERNEL" :
                        std::string()
                    )
            );
            #else
*/
            //openCLProgram_ = new OpenCLProgramMultipleKernels(*oclobjects_, L"CrowdSim_OG.cl", "", "-I \"" + exeDir + "\" -cl-std=CL2.0");
            openCLProgram_ = new OpenCLProgramMultipleKernels(*oclobjects_, L"CrowdSim.cl", "", "-I \"" + exeDir + "\" -cl-std=CL1.2");

//            #endif

            kernelComputeNewVelocity_ = (*openCLProgram_)["computeNewVelocity"];
            kernelUpdate_ = (*openCLProgram_)[customUpdateBuffer_ ? "updateCustom" : "update"];
        }

        kdTree_ = new KdTree(this);
    }

    RVOSimulator::RVOSimulator(float timeStep, float neighborDist, size_t maxNeighbors, float timeHorizon, float timeHorizonObst, float radius, float maxSpeed, const Vector2 &velocity) :
        defaultAgent_(NULL),
        globalTime_(0.0f),
        kdTree_(NULL),
        timeStep_(timeStep),
        //svmAllocator(0),
        oclobjects_(0),
        cmdparser_(0),
        openCLProgram_(0),
        agentsBufferSize_(0)
    {
        kdTree_ = new KdTree(this);
        defaultAgent_ = new Agent(this);
        
        defaultAgent_->maxNeighbors_ = cl_uint(maxNeighbors);
        defaultAgent_->maxSpeed_ = maxSpeed;
        defaultAgent_->neighborDist_ = neighborDist;
        defaultAgent_->radius_ = radius;
        defaultAgent_->timeHorizon_ = timeHorizon;
        defaultAgent_->timeHorizonObst_ = timeHorizonObst;
        defaultAgent_->velocity_ = velocity;
    }

    RVOSimulator::~RVOSimulator()
    {
        if (defaultAgent_ != NULL) {
            delete defaultAgent_;
        }

        if(!cmdparser_->no_opencl.getValue())
        {
            for (size_t i = 0; i < agents_.size(); ++i) {
                agents_[i]->~Agent();
            }

            for (size_t i = 0; i < obstacles_.size(); ++i) {
                obstacles_[i]->~Obstacle();
            }

            //delete svmAllocator;
        }
        else
        {
            for (size_t i = 0; i < agents_.size(); ++i) {
                delete agents_[i];
            }

            for (size_t i = 0; i < obstacles_.size(); ++i) {
                delete obstacles_[i];
            }
        }

        delete kdTree_;
        delete openCLProgram_;

        /*
        if(agentsBufferSize_ > 0)
        {
            svmAllocator->unregisterSVMPointer(agentsBufferPtr_);
            clSVMFree(oclobjects_->context, agentsBufferPtr_);
        }
        */
    }

    size_t RVOSimulator::addAgent(const Vector2 &position)
    {
        if (defaultAgent_ == NULL) {
            return RVO_ERROR;
        }

        Agent* agent = 0;

        if(0 && !cmdparser_->no_opencl.getValue())
        {
            //agent =  new (svmAllocator->allocate(sizeof(Agent))) Agent(this);
        }
        else
        {
            
            agent = new Agent(this);
        }

        agent->position_ = position;
        agent->numAgentNeighbors_ = 0;
        agent->numOrcaLines_ = 0;
        agent->maxNeighbors_ = defaultAgent_->maxNeighbors_;
        agent->maxSpeed_ = defaultAgent_->maxSpeed_;
        agent->neighborDist_ = defaultAgent_->neighborDist_;
        agent->radius_ = defaultAgent_->radius_;
        agent->timeHorizon_ = defaultAgent_->timeHorizon_;
        agent->timeHorizonObst_ = defaultAgent_->timeHorizonObst_;
        agent->velocity_ = defaultAgent_->velocity_;

        agent->id_ = cl_uint(agents_.size());

        agent->allocateBuffers();

        agents_.push_back(agent);

        return agents_.size() - 1;
    }

    size_t RVOSimulator::addAgent(const Vector2 &position, float neighborDist, size_t maxNeighbors, float timeHorizon, float timeHorizonObst, float radius, float maxSpeed, const Vector2 &velocity)
    {
        Agent* agent = 0;

        if( 0 && !cmdparser_->no_opencl.getValue())
        {
            //agent = new (svmAllocator->allocate(sizeof(Agent))) Agent(this);
        }
        else
        {
            agent = new Agent(this);
        }

        agent->position_ = position;
        agent->maxNeighbors_ = cl_uint(maxNeighbors);
        agent->maxSpeed_ = maxSpeed;
        agent->neighborDist_ = neighborDist;
        agent->radius_ = radius;
        agent->timeHorizon_ = timeHorizon;
        agent->timeHorizonObst_ = timeHorizonObst;
        agent->velocity_ = velocity;

        agent->id_ = cl_uint(agents_.size());

        agent->allocateBuffers();

        agents_.push_back(agent);

        return agents_.size() - 1;
    }

    size_t RVOSimulator::addObstacle(const std::vector<Vector2> &vertices)
    {
        if(!cmdparser_->no_opencl.getValue())
        {
            throw Error("OpenCL path of addObstacle isn't implemented.");
        }

        if (vertices.size() < 2) {
            return RVO_ERROR;
        }

        const size_t obstacleNo = obstacles_.size();

        for (size_t i = 0; i < vertices.size(); ++i) {

            Obstacle* obstacle = new Obstacle;

            obstacle->point_ = vertices[i];

            if (i != 0) {
                obstacle->prevObstacle_ = obstacles_.back();
                obstacle->prevObstacle_->nextObstacle_ = obstacle;
            }

            if (i == vertices.size() - 1) {
                obstacle->nextObstacle_ = obstacles_[obstacleNo];
                obstacle->nextObstacle_->prevObstacle_ = obstacle;
            }

            obstacle->unitDir_ = normalize(vertices[(i == vertices.size() - 1 ? 0 : i + 1)] - vertices[i]);

            if (vertices.size() == 2) {
                obstacle->isConvex_ = true;
            }
            else {
                obstacle->isConvex_ = (leftOf(vertices[(i == 0 ? vertices.size() - 1 : i - 1)], vertices[i], vertices[(i == vertices.size() - 1 ? 0 : i + 1)]) >= 0.0f);
            }

            obstacle->id_ = obstacles_.size();

            obstacles_.push_back(obstacle);
        }

        return obstacleNo;
    }

    void RVOSimulator::allocateMemAlignedBuffers()
    {
        printf("[ INFO ] Starting init of memory aligned buffers.\n");
        unsigned maxNeighbors = defaultAgent_->maxNeighbors_;
        unsigned numAgents = static_cast<unsigned>(agents_.size());
        int err;

        err = posix_memalign((void**)&primitiveAgents, 64, numAgents*sizeof(Agent));
        printf("primitiveAgents created (%d).\n", err);

        err = posix_memalign((void**)&primitiveAgentsForTree, 64, numAgents*sizeof(unsigned));
        printf("primitiveAgentsForTree created (%d).\n", err);

        primitiveAgentNeighbor_size = maxNeighbors*agents_.size()*sizeof(AgentNeighborBuf);
        err = posix_memalign((void**)&primitiveAgentNeighbor, 64, primitiveAgentNeighbor_size);
        printf("primitiveAgentNeighbor created (%d).\n", err);

        // primitiveOrcaLines_size = (defaultAgent_->maxObstacleNeighbors_+maxNeighbors)*numAgents*sizeof(Line);
        // err = posix_memalign((void**)&primitiveOrcaLines, 64, primitiveOrcaLines_size);
        // printf("primitiveOrcaLines created (%d).\n", err);
    }

#define DEBUGON 1
//#define FORCE_C_NEIGHBORS_KERNEL
    void RVOSimulator::doStep_NoSVM()
    {
        std::cout << "[ INFO ] Begin step\n";
        double simStartStamp = 0, simBuildAgentTreeStamp = 0, simVelocitiesStamp = 0;

        kdTree_->buildAgentTree();
        //std::cout << agents_[0]->position_.x() << std::endl;
        const unsigned numAgents = static_cast<unsigned>(agents_.size());

        // If OpenCL is enabled, do the simulation via OpenCL kernel
        if(oclobjects_ && cmdparser_ && !cmdparser_->no_opencl.getValue())
        {

            unsigned maxNeighbors = defaultAgent_->maxNeighbors_;
/*
            if (primitiveAgentNeighbor.size() < maxNeighbors*agents_.size())
                primitiveAgentNeighbor.resize(maxNeighbors*agents_.size());
*/
            #ifdef FORCE_C_NEIGHBORS_KERNEL
            for (int i = 0; i < numAgents; ++i) {
                agents_[i]->computeNeighbors();
                //printf("[ INFO ] Agent %d has %d neighbours.\n", i, agents_[i]->numAgentNeighbors_);
                for (int j=0; j<agents_[i]->numAgentNeighbors_; ++j){
                    primitiveAgentNeighbor[i*maxNeighbors + j].first = agents_[i]->agentNeighbors_[j].first;
                    primitiveAgentNeighbor[i*maxNeighbors + j].second = agents_[i]->agentNeighbors_[j].second->id_;
                }
            }
            #endif
            //std::cout << "primitiveAgentNeighbor size = " << primitiveAgentNeighbor.size() << "\n";
            size_t newAgentsBufferSize = numAgents * sizeof(Agent);
            cl_int err = CL_SUCCESS;
            
            if(newAgentsBufferSize > agentsBufferSize_)
            {
                // As the library doesn't have ability to delete agents, we need to update OpenCL buffer only when
                // the number of agents in simulation is increased. And as buffer contains pointer to agents, this synchronization
                // goes unidirectionally from std::vector to OpenCL buffer.

                if(DEBUGON)
                {
                    std::cout << "Buffer size = " << newAgentsBufferSize << "\n";
                }

                // Create a new buffer with adjusted size and populate it with agents' pointers
                // WARNING! Buffer cannot be used here because later it cannot be passed as an argument
                // due to bug in the OpenCL implementation.
                //agentsBufferPtr_ = clSVMAlloc(oclobjects_->context, CL_MEM_READ_ONLY | CL_MEM_SVM_FINE_GRAIN_BUFFER, newAgentsBufferSize, 0);
                //assert(agentsBufferPtr_);
                //svmAllocator->registerSVMPointer(agentsBufferPtr_);

                //std::copy(agents_.begin(), agents_.end(), (Agent**)agentsBufferPtr_);
                
                //primitiveAgents.clear();
                //primitiveAgentsForTree.clear();
                // defaultAgent contains the default maximum parameters used for all agents (hopefully)
                
                size_t numOrcaLines = defaultAgent_->maxObstacleNeighbors_ + maxNeighbors;
                //std::cout << "[ INFO ] resize to " << numOrcaLines*agents_.size() << "\n";
                //primitiveOrcaLines.resize(numOrcaLines*agents_.size());

                for(int i=0; i<numAgents; ++i){
                    // will be 0, but just in case
                    
                    // for (int j=0; j<agents_[i]->numOrcaLines_; ++j){
                    //     primitiveOrcaLines[i*numOrcaLines + j] = agents_[i]->orcaLines_[j];
                    // }
                    
                    
                    //primAgent copyAgent;
                    primitiveAgents[i].numAgentNeighbors_ = 0;
                    primitiveAgents[i].newVelocity_ = {agents_[i]->newVelocity_.x(), agents_[i]->newVelocity_.y()};
                    primitiveAgents[i].numOrcaLines_ = agents_[i]->numOrcaLines_;
                    primitiveAgents[i].position_ = {agents_[i]->position_.x(), agents_[i]->position_.y()};
                    primitiveAgents[i].prefVelocity_ = {agents_[i]->prefVelocity_.x(), agents_[i]->prefVelocity_.y()};
                    primitiveAgents[i].velocity_ = {agents_[i]->velocity_.x(), agents_[i]->velocity_.y()};
                    primitiveAgents[i].id_ = agents_[i]->id_;

                    //primitiveAgents2.push_back(copyAgent);

                    //primitiveAgents.push_back(*agents_[i]);
                    //primitiveAgentsForTree.push_back(kdTree_->agents_[i]->id_);
                    //printf("Copied agentForTree %d with pos (%f,%f)\n", i, primitiveAgentsForTree[i].position_.x(),primitiveAgentsForTree[i].position_.y());
                    //printf("Copied agent %d, id=%d with pos (%f,%f), numNeighbors=%d\n", i, agents_[i]->id_, primitiveAgents[i].position_.x(),primitiveAgents[i].position_.y(), agents_[i]->numAgentNeighbors_);
                    //agents_[i] = &primitiveAgents[i];

                    // implementation with malloc (already sized array)
                    //primitiveAgents[i] = *agents_[i];
                    primitiveAgentsForTree[i] = kdTree_->agents_[i]->id_;
                }
                
                agentsBuffer = clCreateBuffer(oclobjects_->context, CL_MEM_COPY_HOST_PTR, newAgentsBufferSize, &primitiveAgents[0], &err);
                SAMPLE_CHECK_ERRORS(err);
                std::cout << "[ INFO ] Created agentsBuffer of size " << newAgentsBufferSize << "\n";

                agentNeighborBuffer = clCreateBuffer(oclobjects_->context, CL_MEM_COPY_HOST_PTR, primitiveAgentNeighbor_size, &primitiveAgentNeighbor[0], &err);
                SAMPLE_CHECK_ERRORS(err);
                std::cout << "[ INFO ] Created agentNeighborBuffer\n";

                primitiveOrcaLines_size = (defaultAgent_->maxObstacleNeighbors_+maxNeighbors)*numAgents*sizeof(LineBuf);

                orcaLineBuffer = clCreateBuffer(oclobjects_->context, CL_MEM_WRITE_ONLY, primitiveOrcaLines_size, NULL, &err);
                SAMPLE_CHECK_ERRORS(err);
                std::cout << "[ INFO ] Created orcaLineBuffer\n";                

                projBuffer = clCreateBuffer(oclobjects_->context,  CL_MEM_WRITE_ONLY, primitiveOrcaLines_size, NULL, &err);
                SAMPLE_CHECK_ERRORS(err);
                std::cout << "[ INFO ] Created projBuffer\n";

                treeBuffer = clCreateBuffer(oclobjects_->context, CL_MEM_COPY_HOST_PTR, sizeof(KdTree::AgentTreeNode)*kdTree_->treeSize, &kdTree_->agentTree_[0], &err);
                SAMPLE_CHECK_ERRORS(err);
                std::cout << "[ INFO ] Created treeBuffer\n";

                agentsForTreeBuffer = clCreateBuffer(oclobjects_->context, CL_MEM_COPY_HOST_PTR, sizeof(unsigned)*numAgents, &primitiveAgentsForTree[0], &err);
                SAMPLE_CHECK_ERRORS(err);
                std::cout << "[ INFO ] Created agentsForTreeBuffer\n";

                stackBuffer = clCreateBuffer(oclobjects_->context,  CL_MEM_WRITE_ONLY, sizeof(StackNode)*MAX_KDTREE_DEPTH*numAgents, NULL, &err);
                SAMPLE_CHECK_ERRORS(err);
                std::cout << "[ INFO ] Created stackBuffer\n";

                if(DEBUGON)
                {
                    std::cout << "[ INFO ] After agentsBuffer_ = clCreateBuffer with size: " << newAgentsBufferSize << ".\n";
                    std::cout.flush();
                }

                // Save the new buffer size value
                agentsBufferSize_ = newAgentsBufferSize;
            }
            else{ // if not, we need to update the kdTree and neighbours!

                for(int i=0; i<numAgents; ++i){
                    //primitiveAgents[i] = *agents_[i];
                    primitiveAgents[i].numAgentNeighbors_ = 0;
                    primitiveAgents[i].newVelocity_ = {agents_[i]->newVelocity_.x(), agents_[i]->newVelocity_.y()};
                    primitiveAgents[i].numOrcaLines_ = agents_[i]->numOrcaLines_;
                    primitiveAgents[i].position_ = {agents_[i]->position_.x(), agents_[i]->position_.y()};
                    primitiveAgents[i].prefVelocity_ = {agents_[i]->prefVelocity_.x(), agents_[i]->prefVelocity_.y()};
                    primitiveAgents[i].velocity_ = {agents_[i]->velocity_.x(), agents_[i]->velocity_.y()};
                    primitiveAgents[i].id_ = agents_[i]->id_;
                    primitiveAgentsForTree[i] = kdTree_->agents_[i]->id_;
                }
                
                err =  clEnqueueWriteBuffer(oclobjects_->queue, agentsBuffer, CL_TRUE, 0, newAgentsBufferSize, &primitiveAgents[0], 0, NULL, NULL);
                SAMPLE_CHECK_ERRORS(err);

                err =  clEnqueueWriteBuffer(oclobjects_->queue, agentNeighborBuffer, CL_TRUE, 0, primitiveAgentNeighbor_size, &primitiveAgentNeighbor[0], 0, NULL, NULL);
                SAMPLE_CHECK_ERRORS(err);                
                
                err =  clEnqueueWriteBuffer(oclobjects_->queue, agentsForTreeBuffer, CL_TRUE, 0, sizeof(unsigned)*numAgents, &primitiveAgentsForTree[0], 0, NULL, NULL);
                SAMPLE_CHECK_ERRORS(err);
                          
                err =  clEnqueueWriteBuffer(oclobjects_->queue, treeBuffer, CL_TRUE, 0, sizeof(KdTree::AgentTreeNode)*kdTree_->treeSize, &kdTree_->agentTree_[0], 0, NULL, NULL);
                SAMPLE_CHECK_ERRORS(err);        
            }

            //If you ever need to enable OpenCL computation of the AgentNeighbors, uncomment this space...!
            err = clSetKernelArg(kernelComputeNewVelocity_, 0, sizeof(cl_mem), &agentsBuffer);
            SAMPLE_CHECK_ERRORS(err);
            
            err = clSetKernelArg(kernelComputeNewVelocity_, 1, sizeof(cl_mem), &treeBuffer);
            SAMPLE_CHECK_ERRORS(err);

            err = clSetKernelArg(kernelComputeNewVelocity_, 2, sizeof(timeStep_), &timeStep_);
            SAMPLE_CHECK_ERRORS(err);

            err = clSetKernelArg(kernelComputeNewVelocity_, 3, sizeof(cl_mem), &agentNeighborBuffer);
            SAMPLE_CHECK_ERRORS(err);

            err = clSetKernelArg(kernelComputeNewVelocity_, 4 , sizeof(cl_mem), &orcaLineBuffer);
            SAMPLE_CHECK_ERRORS(err);

            err = clSetKernelArg(kernelComputeNewVelocity_, 5 , sizeof(cl_mem), &projBuffer);
            SAMPLE_CHECK_ERRORS(err);

            err = clSetKernelArg(kernelComputeNewVelocity_, 6 , sizeof(cl_mem), &agentsForTreeBuffer);
            SAMPLE_CHECK_ERRORS(err);

            err = clSetKernelArg(kernelComputeNewVelocity_, 7 , sizeof(cl_mem), &stackBuffer);
            SAMPLE_CHECK_ERRORS(err);

/*
            err = clSetKernelArg(kernelComputeNewVelocity_, 0, sizeof(cl_mem), &agentsBuffer);
            SAMPLE_CHECK_ERRORS(err);

            err = clSetKernelArg(kernelComputeNewVelocity_, 1, sizeof(timeStep_), &timeStep_);
            SAMPLE_CHECK_ERRORS(err);
            
            err = clSetKernelArg(kernelComputeNewVelocity_, 2, sizeof(cl_mem), &agentNeighborBuffer);
            SAMPLE_CHECK_ERRORS(err);

            err = clSetKernelArg(kernelComputeNewVelocity_, 3, sizeof(cl_mem), &orcaLineBuffer);
            SAMPLE_CHECK_ERRORS(err);

            err = clSetKernelArg(kernelComputeNewVelocity_, 4, sizeof(cl_mem), &projBuffer);
            SAMPLE_CHECK_ERRORS(err);
*/
            size_t global_size = agents_.size();

            if(DEBUGON)
            {
                std::cout << "[ INFO ] After kernelComputeNewVelocity kernel argument settings.\n";
                std::cout.flush();
            }

            err = clEnqueueNDRangeKernel(
                oclobjects_->queue,
                kernelComputeNewVelocity_,
                1,
                0, &global_size, cmdparser_->work_group_size.localSize(),
                0, 0, 0
            );
            SAMPLE_CHECK_ERRORS(err);

            if(DEBUGON)
            {
                std::cout << "[ INFO ] After kernelComputeNewVelocity kernel enqueue.\n";
                std::cout.flush();
            }

            //err = clSetKernelArgSVMPointer(kernelUpdate_, 0, agentsBufferPtr_);
            err = clSetKernelArg(kernelUpdate_, 0, sizeof(cl_mem), &agentsBuffer);
            SAMPLE_CHECK_ERRORS(err);
            err = clSetKernelArg(kernelUpdate_, 1, sizeof(timeStep_), &timeStep_);
            SAMPLE_CHECK_ERRORS(err);


            if(DEBUGON)
            {
                std::cout << "[ INFO ] After kernelUpdate kernel argument settings.\n";
                std::cout.flush();
            }

            //svmAllocator->setKernelSVMPointers(kernelUpdate_);

            err = clEnqueueNDRangeKernel(
                oclobjects_->queue,
                kernelUpdate_,
                1,
                0, &global_size, cmdparser_->work_group_size.localSize(),
                0, 0, 0
            );
            SAMPLE_CHECK_ERRORS(err);

            if(DEBUGON)
            {
                std::cout << "[ INFO ] After kernelUpdate kernel enqueue.\n";
                std::cout.flush();
            }

            err = clFinish(oclobjects_->queue);
            SAMPLE_CHECK_ERRORS(err);

            if(DEBUGON)
            {
                std::cout << "[ INFO ] After clFinish.\n";
                std::cout.flush();
            }

            /*
            if(cmdparser_->force_c_velocity_kernel.getValue())
            {
                #ifdef _OPENMP
                #pragma omp parallel for
                #endif
                for (int i = 0; i < static_cast<int>(agents_.size()); ++i) {
                    agents_[i]->computeNewVelocity();
                }
            }*/
            
            err =  clEnqueueReadBuffer(oclobjects_->queue, agentsBuffer, CL_TRUE, 0, newAgentsBufferSize, &primitiveAgents[0], 0, NULL, NULL);
            SAMPLE_CHECK_ERRORS(err);

            err = clFinish(oclobjects_->queue);
            SAMPLE_CHECK_ERRORS(err);

            for(int i=0; i<agents_.size(); ++i){
                //agents_[i] = &primitiveAgents[i];
                //*agents_[i] = primitiveAgents[i];
                //printf("id %d: agent=%f, primAgent=%f\n", i, agents_[i]->position_.x(), primitiveAgents[i].position_.x());
                agents_[i]->numAgentNeighbors_ = primitiveAgents[i].numAgentNeighbors_;
                agents_[i]->id_ = primitiveAgents[i].id_;
                agents_[i]->numOrcaLines_ = primitiveAgents[i].numOrcaLines_;
                agents_[i]->position_ =     Vector2(primitiveAgents[i].position_.s[0], primitiveAgents[i].position_.s[1]);
                agents_[i]->prefVelocity_ = Vector2(primitiveAgents[i].prefVelocity_.s[0], primitiveAgents[i].prefVelocity_.s[1]);
                agents_[i]->velocity_ =     Vector2(primitiveAgents[i].velocity_.s[0], primitiveAgents[i].velocity_.s[1]);
                agents_[i]->newVelocity_ =  Vector2(primitiveAgents[i].newVelocity_.s[0], primitiveAgents[i].newVelocity_.s[1]);

            }
            //std::cout << agents_[0]->velocity_.x() << std::endl;
            if(DEBUGON)
            {
                simVelocitiesStamp = time_stamp();
            }

            }
        else // if opencl is not defined
        {
            for (int i = 0; i < static_cast<int>(agents_.size()); ++i) {
                agents_[i]->computeNeighbors();
                agents_[i]->computeNewVelocity();
            }

            #ifdef INTEL_NOT_FOR_RELEASE
            if(cmdparser_->advanced_perf_measurements.getValue())
            {
                simVelocitiesStamp = time_stamp();
            }
            #endif

            for (int i = 0; i < static_cast<int>(agents_.size()); ++i) {
                agents_[i]->update();
            }
        }

        #ifdef INTEL_NOT_FOR_RELEASE
        if(cmdparser_->advanced_perf_measurements.getValue())
        {
            double simEndStamp = time_stamp();

            std::cout
                << "Detailed performance metrics:\n"
                << "    buildAgentTree time:      " << 1000*(simBuildAgentTreeStamp - simStartStamp) << " ms\n"
                << "    computeNewVelocity time:  " << 1000*(simVelocitiesStamp - simBuildAgentTreeStamp) << " ms\n"
                //<< "    update time:              " << 1000*(simEndStamp - simVelocitiesStamp) << " ms\n" // TODO Needs device side measurements in this case
                << "    COMPLETE doStep time:     " << 1000*(simEndStamp - simStartStamp) << " ms\n"
            ;
        }
        #endif

        globalTime_ += timeStep_;
    }

/*
    void RVOSimulator::doStep()
    {
        double simStartStamp = 0, simBuildAgentTreeStamp = 0, simVelocitiesStamp = 0;

        #ifdef INTEL_NOT_FOR_RELEASE
        if(cmdparser_->advanced_perf_measurements.getValue())
        {
            simStartStamp = time_stamp();
        }
        #endif

        kdTree_->buildAgentTree();

        #ifdef INTEL_NOT_FOR_RELEASE
        if(cmdparser_->advanced_perf_measurements.getValue())
        {
            simBuildAgentTreeStamp = time_stamp();
        }
        #endif

        #ifdef INTEL_NOT_FOR_RELEASE
        if(cmdparser_->interactiveDiagnostics.getValue())
        {
            std::cout << "[ INFO ] After kdTree_->buildAgentTree.\n";
            std::cout.flush();
        }
        #endif

        // If OpenCL is enabled, do the simulation via OpenCL kernel
        if(oclobjects_ && cmdparser_ && !cmdparser_->no_opencl.getValue())
        {
            #ifdef INTEL_NOT_FOR_RELEASE

            if(cmdparser_->force_c_neighbors_kernel.getValue())
            {
                #ifdef _OPENMP
                #pragma omp parallel for
                #endif
                for (int i = 0; i < static_cast<int>(agents_.size()); ++i) {
                    agents_[i]->computeNeighbors();
                }
            }

            #endif

            size_t newAgentsBufferSize = agents_.size() * sizeof(Agent*);
            cl_int err = CL_SUCCESS;
            
            if(newAgentsBufferSize > agentsBufferSize_)
            {
                // As the library doesn't have ability to delete agents, we need to update OpenCL buffer only when
                // the number of agents in simulation is increased. And as buffer contains pointer to agents, this synchronization
                // goes unidirectionally from std::vector to OpenCL buffer.

                if(agentsBufferSize_ > 0)
                {
                    // If it is not the first time when allocation is performed,
                    // deallocate previously allocated buffer.
                    svmAllocator->unregisterSVMPointer(agentsBufferPtr_);
                    clSVMFree(oclobjects_->context, agentsBufferPtr_);
                    SAMPLE_CHECK_ERRORS(err);
                }

                #ifdef INTEL_NOT_FOR_RELEASE
                if(cmdparser_->interactiveDiagnostics.getValue())
                {
                    std::cout << "Buffer size = " << newAgentsBufferSize << "\n";
                }
                #endif

                // Create a new buffer with adjusted size and populate it with agents' pointers
                // WARNING! Buffer cannot be used here because later it cannot be passed as an argument
                // due to bug in the OpenCL implementation.
                agentsBufferPtr_ = clSVMAlloc(oclobjects_->context, CL_MEM_READ_ONLY | CL_MEM_SVM_FINE_GRAIN_BUFFER, newAgentsBufferSize, 0);
                assert(agentsBufferPtr_);
                svmAllocator->registerSVMPointer(agentsBufferPtr_);

                std::copy(agents_.begin(), agents_.end(), (Agent**)agentsBufferPtr_);

                #ifdef INTEL_NOT_FOR_RELEASE
                if(cmdparser_->interactiveDiagnostics.getValue())
                {
                    std::cout << "[ INFO ] After agentsBuffer_ = clCreateBuffer with value: " << agentsBufferPtr_ << ".\n";
                    std::cout.flush();
                }
                #endif

                // Save the new buffer size value
                agentsBufferSize_ = newAgentsBufferSize;
            }

            #ifdef INTEL_NOT_FOR_RELEASE
            if(cmdparser_->interactiveDiagnostics.getValue())
            {
                std::cout << "[ INFO ] Before setting argumetns for kernel kernelComputeNewVelocity_ = " << kernelComputeNewVelocity_ << "\n";
                std::cout.flush();
            }
            #endif

            // Agents themselves are not passed to kernel explicitly, instead an array of pointer to agents is passed.
            err = clSetKernelArgSVMPointer(kernelComputeNewVelocity_, 0, agentsBufferPtr_);
            SAMPLE_CHECK_ERRORS(err);

            #ifdef INTEL_NOT_FOR_RELEASE
            if(cmdparser_->interactiveDiagnostics.getValue())
            {
                std::cout << "[ INFO ] After clSetKernelArg(kernelComputeNewVelocity_, 0, ...)\n";
                std::cout.flush();
            }
            #endif

            err = clSetKernelArgSVMPointer(kernelComputeNewVelocity_, 1, kdTree_->agents_);
            SAMPLE_CHECK_ERRORS(err);

            #ifdef INTEL_NOT_FOR_RELEASE
            if(cmdparser_->interactiveDiagnostics.getValue())
            {
                std::cout << "[ INFO ] After clSetKernelArg(kernelComputeNewVelocity_, 1, ...)\n";
                std::cout.flush();
            }
            #endif

            err = clSetKernelArgSVMPointer(kernelComputeNewVelocity_, 2, kdTree_->agentTree_);
            SAMPLE_CHECK_ERRORS(err);

            #ifdef INTEL_NOT_FOR_RELEASE
            if(cmdparser_->interactiveDiagnostics.getValue())
            {
                std::cout << "[ INFO ] After clSetKernelArg(kernelComputeNewVelocity_, 2, ...)\n";
                std::cout.flush();
            }
            #endif

            err = clSetKernelArg(kernelComputeNewVelocity_, 3, sizeof(timeStep_), &timeStep_);
            SAMPLE_CHECK_ERRORS(err);

            #ifdef INTEL_NOT_FOR_RELEASE
            if(cmdparser_->interactiveDiagnostics.getValue())
            {
                std::cout << "[ INFO ] After clSetKernelArg(kernelComputeNewVelocity_, 3, ...)\n";
                std::cout.flush();
            }
            #endif

            size_t global_size = agents_.size();

            #ifdef INTEL_NOT_FOR_RELEASE
            if(cmdparser_->interactiveDiagnostics.getValue())
            {
                std::cout << "[ INFO ] After kernelComputeNewVelocity kernel argument settings.\n";
                std::cout.flush();
            }
            #endif

            err = clEnqueueNDRangeKernel(
                oclobjects_->queue,
                kernelComputeNewVelocity_,
                1,
                0, &global_size, cmdparser_->work_group_size.localSize(),
                0, 0, 0
            );
            SAMPLE_CHECK_ERRORS(err);

            #ifdef INTEL_NOT_FOR_RELEASE
            if(cmdparser_->interactiveDiagnostics.getValue())
            {
                std::cout << "[ INFO ] After kernelComputeNewVelocity kernel enqueue.";
                std::cout.flush();
            }
            #endif

            err = clSetKernelArgSVMPointer(kernelUpdate_, 0, agentsBufferPtr_);
            SAMPLE_CHECK_ERRORS(err);
            err = clSetKernelArg(kernelUpdate_, 1, sizeof(timeStep_), &timeStep_);
            SAMPLE_CHECK_ERRORS(err);

            if(customUpdateBuffer_)
            {
                // If a custom version of update kernel is used, then there is the third argument in that kernel and
                // it should be set to the customUpdateBuffer
                err = clSetKernelArg(kernelUpdate_, 2, sizeof(customUpdateBuffer_), &customUpdateBuffer_);
                SAMPLE_CHECK_ERRORS(err);
            }

            #ifdef INTEL_NOT_FOR_RELEASE
            if(cmdparser_->interactiveDiagnostics.getValue())
            {
                std::cout << "[ INFO ] After kernelUpdate kernel argument settings.";
                std::cout.flush();
            }
            #endif

            svmAllocator->setKernelSVMPointers(kernelUpdate_);

            err = clEnqueueNDRangeKernel(
                oclobjects_->queue,
                kernelUpdate_,
                1,
                0, &global_size, cmdparser_->work_group_size.localSize(),
                0, 0, 0
            );
            SAMPLE_CHECK_ERRORS(err);

            #ifdef INTEL_NOT_FOR_RELEASE
            if(cmdparser_->interactiveDiagnostics.getValue())
            {
                std::cout << "[ INFO ] After kernelUpdate kernel enqueue.";
                std::cout.flush();
            }
            #endif

            err = clFinish(oclobjects_->queue);
            SAMPLE_CHECK_ERRORS(err);

            #ifdef INTEL_NOT_FOR_RELEASE

            #ifdef INTEL_NOT_FOR_RELEASE
            if(cmdparser_->interactiveDiagnostics.getValue())
            {
                std::cout << "[ INFO ] After clFinish.";
                std::cout.flush();
            }
            #endif

            if(cmdparser_->force_c_velocity_kernel.getValue())
            {
                #ifdef _OPENMP
                #pragma omp parallel for
                #endif
                for (int i = 0; i < static_cast<int>(agents_.size()); ++i) {
                    agents_[i]->computeNewVelocity();
                }
            }

            #endif

            #ifdef INTEL_NOT_FOR_RELEASE
            if(cmdparser_->advanced_perf_measurements.getValue())
            {
                simVelocitiesStamp = time_stamp();
            }
            #endif

            }
        else
        {
#ifdef _OPENMP
#pragma omp parallel for
#endif
            for (int i = 0; i < static_cast<int>(agents_.size()); ++i) {
                agents_[i]->computeNeighbors();
                agents_[i]->computeNewVelocity();
            }

            #ifdef INTEL_NOT_FOR_RELEASE
            if(cmdparser_->advanced_perf_measurements.getValue())
            {
                simVelocitiesStamp = time_stamp();
            }
            #endif

#ifdef _OPENMP
#pragma omp parallel for
#endif
            for (int i = 0; i < static_cast<int>(agents_.size()); ++i) {
                agents_[i]->update();
            }
        }

        #ifdef INTEL_NOT_FOR_RELEASE
        if(cmdparser_->advanced_perf_measurements.getValue())
        {
            double simEndStamp = time_stamp();

            std::cout
                << "Detailed performance metrics:\n"
                << "    buildAgentTree time:      " << 1000*(simBuildAgentTreeStamp - simStartStamp) << " ms\n"
                << "    computeNewVelocity time:  " << 1000*(simVelocitiesStamp - simBuildAgentTreeStamp) << " ms\n"
                //<< "    update time:              " << 1000*(simEndStamp - simVelocitiesStamp) << " ms\n" // TODO Needs device side measurements in this case
                << "    COMPLETE doStep time:     " << 1000*(simEndStamp - simStartStamp) << " ms\n"
            ;
        }
        #endif

        globalTime_ += timeStep_;
    }
*/
    size_t RVOSimulator::getAgentAgentNeighbor(size_t agentNo, size_t neighborNo) const
    {
        return agents_[agentNo]->agentNeighbors_[neighborNo].second->id_;
    }

    size_t RVOSimulator::getAgentMaxNeighbors(size_t agentNo) const
    {
        return agents_[agentNo]->maxNeighbors_;
    }

    float RVOSimulator::getAgentMaxSpeed(size_t agentNo) const
    {
        return agents_[agentNo]->maxSpeed_;
    }

    float RVOSimulator::getAgentNeighborDist(size_t agentNo) const
    {
        return agents_[agentNo]->neighborDist_;
    }

    size_t RVOSimulator::getAgentNumAgentNeighbors(size_t agentNo) const
    {
        return agents_[agentNo]->numAgentNeighbors_;
    }

    size_t RVOSimulator::getAgentNumObstacleNeighbors(size_t agentNo) const
    {
        return agents_[agentNo]->numObstacleNeighbors_;
    }

    size_t RVOSimulator::getAgentNumORCALines(size_t agentNo) const
    {
        return agents_[agentNo]->numOrcaLines_;
    }

    size_t RVOSimulator::getAgentObstacleNeighbor(size_t agentNo, size_t neighborNo) const
    {
        return agents_[agentNo]->obstacleNeighbors_[neighborNo].second->id_;
    }

    const Line &RVOSimulator::getAgentORCALine(size_t agentNo, size_t lineNo) const
    {
        return agents_[agentNo]->orcaLines_[lineNo];
    }

    const Vector2 &RVOSimulator::getAgentPosition(size_t agentNo) const
    {
        return agents_[agentNo]->position_;
    }

    const Vector2 &RVOSimulator::getAgentPrefVelocity(size_t agentNo) const
    {
        return agents_[agentNo]->prefVelocity_;
    }

    float RVOSimulator::getAgentRadius(size_t agentNo) const
    {
        return agents_[agentNo]->radius_;
    }

    float RVOSimulator::getAgentTimeHorizon(size_t agentNo) const
    {
        return agents_[agentNo]->timeHorizon_;
    }

    float RVOSimulator::getAgentTimeHorizonObst(size_t agentNo) const
    {
        return agents_[agentNo]->timeHorizonObst_;
    }

    const Vector2 &RVOSimulator::getAgentVelocity(size_t agentNo) const
    {
        return agents_[agentNo]->velocity_;
    }

    float RVOSimulator::getGlobalTime() const
    {
        return globalTime_;
    }

    size_t RVOSimulator::getNumAgents() const
    {
        return agents_.size();
    }

    size_t RVOSimulator::getNumObstacleVertices() const
    {
        return obstacles_.size();
    }

    const Vector2 &RVOSimulator::getObstacleVertex(size_t vertexNo) const
    {
        return obstacles_[vertexNo]->point_;
    }

    size_t RVOSimulator::getNextObstacleVertexNo(size_t vertexNo) const
    {
        return obstacles_[vertexNo]->nextObstacle_->id_;
    }

    size_t RVOSimulator::getPrevObstacleVertexNo(size_t vertexNo) const
    {
        return obstacles_[vertexNo]->prevObstacle_->id_;
    }

    float RVOSimulator::getTimeStep() const
    {
        return timeStep_;
    }

    void RVOSimulator::processObstacles()
    {
        kdTree_->buildObstacleTree();
    }

    bool RVOSimulator::queryVisibility(const Vector2 &point1, const Vector2 &point2, float radius) const
    {
        return kdTree_->queryVisibility(point1, point2, radius);
    }

    void RVOSimulator::setAgentDefaults(float neighborDist, size_t maxNeighbors, float timeHorizon, float timeHorizonObst, float radius, float maxSpeed, const Vector2 &velocity)
    {
        if (defaultAgent_ == NULL) {
            defaultAgent_ = new Agent(this);
        }

        defaultAgent_->maxNeighbors_ = cl_uint(maxNeighbors);
        defaultAgent_->maxSpeed_ = maxSpeed;
        defaultAgent_->neighborDist_ = neighborDist;
        defaultAgent_->radius_ = radius;
        defaultAgent_->timeHorizon_ = timeHorizon;
        defaultAgent_->timeHorizonObst_ = timeHorizonObst;
        defaultAgent_->velocity_ = velocity;
    }

    void RVOSimulator::setAgentMaxNeighbors(size_t agentNo, size_t maxNeighbors)
    {
        agents_[agentNo]->maxNeighbors_ = cl_uint(maxNeighbors);
    }

    void RVOSimulator::setAgentMaxSpeed(size_t agentNo, float maxSpeed)
    {
        agents_[agentNo]->maxSpeed_ = maxSpeed;
    }

    void RVOSimulator::setAgentNeighborDist(size_t agentNo, float neighborDist)
    {
        agents_[agentNo]->neighborDist_ = neighborDist;
    }

    void RVOSimulator::setAgentPosition(size_t agentNo, const Vector2 &position)
    {
        agents_[agentNo]->position_ = position;
    }

    void RVOSimulator::setAgentPrefVelocity(size_t agentNo, const Vector2 &prefVelocity)
    {
        agents_[agentNo]->prefVelocity_ = prefVelocity;
    }

    void RVOSimulator::setAgentRadius(size_t agentNo, float radius)
    {
        agents_[agentNo]->radius_ = radius;
    }

    void RVOSimulator::setAgentTimeHorizon(size_t agentNo, float timeHorizon)
    {
        agents_[agentNo]->timeHorizon_ = timeHorizon;
    }

    void RVOSimulator::setAgentTimeHorizonObst(size_t agentNo, float timeHorizonObst)
    {
        agents_[agentNo]->timeHorizonObst_ = timeHorizonObst;
    }
    
    void RVOSimulator::setAgentVelocity(size_t agentNo, const Vector2 &velocity)
    {
        agents_[agentNo]->velocity_ = velocity;
    }
    
    void RVOSimulator::setTimeStep(float timeStep)
    {
        timeStep_ = timeStep;
    }
}