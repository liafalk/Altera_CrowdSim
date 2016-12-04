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


#include "cmdoptions.hpp"
#include <iostream>
#include "../RVO2/src/Constants.h"

using namespace std;


#ifdef _MSC_VER
#pragma warning (push)
#pragma warning (disable : 4355)    // 'this': used in base member initializer list
#endif

CmdParserCrowdSim::CmdParserCrowdSim (int argc, const char** argv) :
    CmdParserCommon(argc, argv),
    size(
        *this,
        's',
        "size",
        "<integer greater or equal to 4>",
        "Size of the scene: the number of agents. "
            "Current scene requires at least 4 agents and maximum " + to_str(RVO_MAX_NUM_AGENTS) + ".",
        400
    ),
    iterations(
        *this,
        'i',
        "iterations",
        "<integer>",
        "Number of steps in simulation. This is applicable in command line mode "
            "(when --no-graphics option isn't specified). Value 0 means no limitation, "
            "that is simulation runs until all agents place their final positions.",
        0
    ),
    no_graphics
    (
        *this,
        0,
        "no-graphics",
        "",
        "Turns graphics output off. "
            "Application works in console mode. "
            "Number of simulation steps is specified by --iterations option.",
        false
    ),
    no_opencl
    (
        *this,
        0,
        "no-opencl",
        "",
        "Turns OpenCL implementation off. "
            "The reference implmentation works instead.",
        false
    ),
    #ifdef INTEL_NOT_FOR_RELEASE
    validation(
        *this,
        0,
        "validation",
        "",
        "NOT IMPLEMENTED! "
            "Enables validation procedure on host. Implemented in regular C++ code "
            "and each step of simulation in OpenCL is compared with that reference "
            "implementation.",
        false
    ),
    #endif
    work_group_size(*this),
    graphics_no_wait
    (
        *this,
        0,
        "graphics-no-wait",
        "",
        "Force close of application window automatically when all agents "
            "end up in their end positions, so when goal is reached for all of them. "
            "Otherwise (and this is default behavior) window will remain open until "
            "user explicitly closes it. "
            "This option cannot be specified in --no-graphics mode",
        false
    ),
    agent_radius
    (
        *this,
        0,
        "agent-radius",
        "",
        "Effective agent radius. At this distance multiplied by 2, one agent starts to feel "
            "other agents. If you increase the value too much, the simulation becomes unstable.",
        2.4f
    ),
    time_step
    (
        *this,
        0,
        "time-step",
        "",
        "Time step in milliseconds for one simulation frame."
#ifdef INTEL_NOT_FOR_RELEASE
            " This option cannot be used with --adaptive-time-step."
#endif
        ,
        0.6f
    ),
    graphics_max_speed
    (
        *this,
        0,
        "graphics-max-speed",
        "",
        "Turns off specially added delays in process of rendering. Normally, delays are needed "
            "to see the simulation process at normal speed. This option makes simulation at the same "
            "speed as --no-graphics mode makes it.",
        false
    ),
    no_gl_sharing
    (
        *this,
        0,
        "no-gl-sharing",
        "",
        "Turns off sharing of the memory between OpenGL and OpenCL. This also affects sharing "
            "when --no-opencl flag is used, because by the default --no-opencl mode also uses "
            "OpenGL sharing and update OpenCL buffers with new agent positions."
    )
#ifdef INTEL_NOT_FOR_RELEASE
    ,
    adaptive_time_step
    (
        *this,
        0,
        "adaptive-time-step",
        "",
        "UNSUPPORTED. "
            "Turns on simulation step tuning to normilize simulation speed and make it independent on HW, "
            "riching 60Hz refresh rate. This option cannot be used with --time-step option.",
        false
    ),
    interactiveDiagnostics
    (
        *this,
        0,
        "interactive-diagnostics",
        "",
        "NOT FOR RELEASE OPTION. "
            "Enables interactive diagnostics: a lot of prints with required Enter hit after each of them. "
            "Also enables printf's inside kernel.",
        false
    ),
    interactiveDiagnosticsNoWait
    (
        *this,
        0,
        "interactive-diagnostics-no-wait",
        "",
        "NOT FOR RELEASE OPTION. "
            "In interactive diagnostics mode, this option suppress requests about pressing Enter at each "
                "stage. Amount of diagnostic output remains the same.",
        false
    ),
    kernelNeighborsTraverseDiagnostics
    (
        *this,
        0,
        "kernel-neighbors-traverse-diagnostics",
        "",
        "NOT FOR RELEASE OPTION. "
            "Enables diagnostics during neighbors traversal in the first OpenCL kernel. "
            "It is recomended to run a single WG to get stable and reproducible results.",
        false
    ),
    kernelVelocityDiagnostics
    (
        *this,
        0,
        "kernel-velocity-diagnostics",
        "",
        "NOT FOR RELEASE OPTION. "
            "Enables diagnostics in velocity kernel (the second kernel).",
        false
    ),
    queryAgentTreeStopAfterIteration
    (
        *this,
        0,
        "query-agent-tree-stop-after-iteration",
        "<non-negative integer>",
        "NOT FOR RELEASE OPTION. "
            "Forcedly stop iterations inside queryAgentTree CL function after specified number of iterations. "
            "Zero values means no force stop. If WG size != 1 and this value is not zero, it will crash BDW simulator "
            "because of the bug, presumably, in vectorized code generation.",
        0
    ),
    weak_validation(
        *this,
        0,
        "weak-validation",
        "",
        "NOT FOR RELEASE OPTION. "
            "Enables weak validation procedure instead of full validation procedure. It modifies "
            "default behaviour of --validation key. Requires --validation key to be present. "
            "Weakness means that some cases in which full validation mode would report FAILED "
            "will be suppressed in the weak mode.",
        false
    ),
    force_c_neighbors_kernel(
        *this,
        0,
        "force-c-neighbors-kernel",
        "",
        "NOT FOR RELEASE OPTION. "
            "Forces C implementation for kernelComputeNeighbors instead of OpenCL implementation.",
        false
    ),
    force_c_velocity_kernel(
        *this,
        0,
        "force-c-velocity-kernel",
        "",
        "NOT FOR RELEASE OPTION. "
            "Forces C implementation for m_kernelComputeNewVelocity instead of OpenCL implementation.",
        false
    ),
    sortNeighbors(
        *this,
        0,
        "sort-neighbors",
        "",
        "NOT FOR RELEASE OPTION. "
            "Sort neighbor list for each agent after application of the first kernel. "
            "It reduces divergence from reference version. For debugging purposes.",
        false
    ),
    advanced_perf_measurements(
        *this,
        0,
        "advanced-perf-measurements",
        "",
        "NOT FOR RELEASE OPTION. "
            "Measures particular parts inside RVO engine and output performance numbers "
            "onto console.",
        false
    )
#endif
{
}

#ifdef _MSC_VER
#pragma warning (pop)
#endif


void CmdParserCrowdSim::parse ()
{
    CmdParserCommon::parse();

    if(size.getValue() < 4)
    {
        throw CmdParser::Error(
            "Number of agents specified is less than 4. "
            "It is required to be at least 4 because of specific placing of agents."
        );
    }

    if(size.getValue() > RVO_MAX_NUM_AGENTS)
    {
        throw CmdParser::Error(
            "Number of agents specified is greater than " + to_str(RVO_MAX_NUM_AGENTS) + ". "
            "It is required to be maximum " + to_str(RVO_MAX_NUM_AGENTS) + "."
        );
    }

    if
    (
        no_opencl.isSet() &&
        (
            device_type.getValue() != "all" ||  // WARNING! Implicit dependency to default option value.
            platform.getValue() != "Intel" ||   // WARNING! Implicit dependency to default option value.
            device.getValue() != "0"            // WARNING! Implicit dependency to default option value.
        )
    )
    {
        std::cout
            << "\n[ WARNING ] Selecting of OpenCL properties has no sence "
            << "if --no-opencl option enabled. Ignored.\n";
    }

#if 0
    if(validation.isSet() && no_opencl.isSet())
    {
        throw CmdParser::Error(
            "Both --validation and --no-opencl options are specified. "
            "Validation is applicable for OpenCL only."
        );
    }
#endif

    #ifdef INTEL_NOT_FOR_RELEASE

    if(weak_validation.isSet() && !validation.isSet())
    {
        throw CmdParser::Error(
            "Option --weak-validation requires --validation option to be also specified."
        );
    }

    #endif

    if(no_graphics.isSet() && graphics_no_wait.isSet())
    {
        throw CmdParser::Error(
            "Option " + graphics_no_wait.name() + " works in graphics mode only "
            "and you specified both " + no_graphics.name() + " and " + graphics_no_wait.name() + "."
        );
    }

    #ifdef INTEL_NOT_FOR_RELEASE

    if(validation.isSet())
    {
        throw CmdParser::Error(
            "Currently validation mode is not supported."
        );
    }

    if(adaptive_time_step.isSet())
    {
        throw CmdParser::Error(
            "Option " + adaptive_time_step.name() + " hasn't been supported yet."
        );
    }

    #endif
}
