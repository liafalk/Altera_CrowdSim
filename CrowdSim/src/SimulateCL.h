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


#pragma once
#include <CL/cl_gl.h>
#include <CL/cl.h>
#include <string>
#include "oclobject.hpp"
#include "../RVO2/src/RVO.h"

using std::string;
using namespace RVO;

static const size_t RVO_NUM_AGENTS = 1024*64;

class SimulateCL
{
public:

    SimulateCL();
    ~SimulateCL();

    void Init(
        const string& platform_name_or_index,
        const string& device_type,
        const string& device_name_or_index,
        cl_command_queue_properties queue_properties,
        void* in_hGLRC,
        void* in_hDC,
        int in_numPoints,
        cl_GLuint in_points,
        const CmdParserCrowdSim& cmdparser_
    );

    void Step(float in_deltaT);
	bool StepNoGraphics(double *pKernelTime);
    bool isSimulationDone () const;

    // Call Shutdown before destroying the GL renderer, GL context, and window
    void Shutdown();

private:

    void ShareBuffers(
        int in_numPoints,
        cl_GLuint in_points
    );

    cl_mem m_points;     // shared buffer of positions	
    int m_numPoints;

	// Specific crowd-simulation functions
	void setupScenario2(RVOSimulator* sim, size_t numAgents);
	void setupScenario4(RVOSimulator* sim);
	void setPreferredVelocities(RVOSimulator* sim);
	bool reachedGoal(RVOSimulator* sim);

	cl_float4* m_agents; // used by C path to get agent positions to OCL and GL
    cl_GLuint in_points;

	RVOSimulator* crowd_sim;
	Vector2 goals[RVO_NUM_AGENTS];
	bool crowd_sim_done;

    OpenCLBasic* oclobjects;
    const CmdParserCrowdSim* cmdparser;
};
