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

#ifndef _INTEL_OPENCL_SAMPLE_CROWDSIM_CMDOPTIONS_HPP_
#define _INTEL_OPENCL_SAMPLE_CROWDSIM_CMDOPTIONS_HPP_

#include "oclobject.hpp"
#include "cmdparser.hpp"

#define RVO_MAX_NUM_AGENTS (1024*64)


// All command-line options for CrowdSim sample
class CmdParserCrowdSim : public CmdParserCommon
{
public:
    // For these options description, please refer to the constructor definition.

    CmdOption<size_t> size;
    CmdOption<size_t> iterations;
    CmdOption<bool> no_graphics;
    CmdOption<bool> no_opencl;
    CmdOption<bool> enable_video;
#ifdef INTEL_NOT_FOR_RELEASE
    CmdOption<bool> validation;
#endif

    CmdOptionWorkGroupSize work_group_size;
    CmdOption<bool> graphics_no_wait;
    CmdOption<float> agent_radius;
    CmdOption<float> time_step;
    CmdOption<bool> graphics_max_speed;

    CmdOption<bool> no_gl_sharing;

#ifdef INTEL_NOT_FOR_RELEASE

    CmdOption<bool> adaptive_time_step;

    CmdOption<bool> interactiveDiagnostics;
    CmdOption<bool> interactiveDiagnosticsNoWait;
    CmdOption<bool> kernelNeighborsTraverseDiagnostics;
    CmdOption<bool> kernelVelocityDiagnostics;
    CmdOption<size_t> queryAgentTreeStopAfterIteration;
    CmdOption<bool> weak_validation;
    CmdOption<bool> force_c_neighbors_kernel;
    CmdOption<bool> force_c_velocity_kernel;
    CmdOption<bool> sortNeighbors;
    CmdOption<bool> advanced_perf_measurements;

#endif

    CmdParserCrowdSim (int argc, const char** argv);
    virtual void parse ();
};


#endif  // end of the include guard
