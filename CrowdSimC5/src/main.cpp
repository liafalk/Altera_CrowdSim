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

// for graphics
#include "bitmap_image.hpp"

#include <stdio.h>

// for console

#include <fcntl.h>
#include <iostream>
#include <exception>
#include <sstream>

#include "SimulateCL.h"

#ifdef __linux__
#include <sys/time.h>
#include <unistd.h>
#include <libgen.h>
#elif defined(_WIN32) || defined(WIN32)
#include <io.h>
#include <time.h>
#include <Windows.h>
#include "RenderGL.h"
#else
#include <ctime>
#endif


#include "cmdparser.hpp"
#include "oclobject.hpp"

#include "cmdoptions.hpp"

// How fast traslation of the scene works in case when Shift button is pressed
#define TRANSLATION_TURBO 10

// ZOOM parameters are used to control how mouse wheel works
#define INITIAL_ZOOM_VALUE 800
#define ZOOM_SPEED 0.01

// Define icon id for sample window
#define IDI_SAMPLE_ICON 101

//#define INTEL_NOT_FOR_RELEASE

// Two integer component vector
struct Vector2i
{
    int x, y;

    Vector2i () {}
    Vector2i (int _x, int _y) : x(_x), y(_y) {}

    Vector2i& operator+= (const Vector2i& other)
    {
        x += other.x;
        y += other.y;
        return *this;
    }

    Vector2i& operator*= (int mult)
    {
        x *= mult;
        y *= mult;
        return *this;
    }
};

inline Vector2i operator- (const Vector2i& a, const Vector2i& b)
{
    return Vector2i(a.x - b.x, a.y - b.y);
}

void parseArgs(CmdParserCrowdSim& cmdparser)
{
    cmdparser.parse();
    if(cmdparser.help.isSet())
    {
        // just usage info is requested, no need to continue
        exit(0);
    }
}
    

int main (int argc, const char** argv)
{
    using std::exception;
    using std::cout;
    using std::cerr;

    try
    {
        CmdParserCrowdSim cmdparser(argc, argv);
        parseArgs(cmdparser);

        cout << "Simulating " << cmdparser.size.getValue() << " agents using " << (cmdparser.no_opencl.getValue() ? "C" : "OpenCL") << "\n";
        ///cout << "Graphics " << (cmdparser.no_graphics.getValue() ? "Off" : "On") << "\n";
        cout.flush();

        string device_type_name = cmdparser.device_type.getValue();
    
        double kernelTime;
        if(1 || cmdparser.no_graphics.getValue())
        {
            // Create simulation engine and place agents into their initial positions

            SimulateCL *sim = new SimulateCL;
            
            sim->Init(
                cmdparser.platform.getValue(),
                device_type_name,
                cmdparser.device.getValue(),
                #ifdef INTEL_NOT_FOR_RELEASE
                cmdparser.advanced_perf_measurements.getValue() ? CL_QUEUE_PROFILING_ENABLE : 0,
                #else
                0,
                #endif
                NULL,
                NULL,
                int(cmdparser.size.getValue()),
                NULL,
                cmdparser
            );
        
            int iteration = 0;
            double totalKernel = 0.0, worst=0.0;

            while(cmdparser.iterations.getValue() == 0 || iteration < int(cmdparser.iterations.getValue()))
            {
                // Do one step of simulations
                if(!sim->StepNoGraphics(&kernelTime, iteration))
                {
                    // if we've done (agents arrived to their final positions), then stop
                    break;
                }
                
                if(kernelTime > worst) worst = kernelTime;
                totalKernel += kernelTime;
                iteration++;
                printf("[ INFO ] Step %d of simulation was executed. Frame time = %f, avg = %f, worst = %f\n", iteration, kernelTime, totalKernel/(double)iteration, worst);

                cout.flush();
                //std::cin.ignore();
            }

            printf("Simulation of %d agents completed correctly after %d frames\n", cmdparser.size.getValue(), iteration);
            printf("Total kernel time %f sec, worst frame %f ms, average frame %f ms\n", totalKernel, 1000*worst, 1000*totalKernel/iteration);
            cout.flush();
            delete sim;
            return 0;
        }
        else
        {
/*            AppWindow m(cmdparser);
            
            return m.Show(
                GetModuleHandle(0),
                SW_SHOWNORMAL,
                "Crowd Simulation implemented with OpenCL SVM",
                cmdparser.platform.getValue(),
                device_type_name,
                cmdparser.device.getValue(),
                #ifdef INTEL_NOT_FOR_RELEASE
                cmdparser.advanced_perf_measurements.getValue() ? CL_QUEUE_PROFILING_ENABLE : 0
                #else
                0
                #endif
            );*/
        }
    }
    catch(const CmdParser::Error& error)
    {
        cerr
            << "[ ERROR ] In command line: " << error.what() << "\n"
            << "Run " << "CrowdSim" << " -h for usage info.\n";
        return 1;
    }
    catch(const Error& error)
    {
        cerr << "[ ERROR ] Sample application specific error: " << error.what() << "\n";
        return 1;
    }
    catch(const exception& error)
    {
        cerr << "[ ERROR ] " << error.what() << "\n";
        return 1;
    }
    catch(...)
    {
        cerr << "[ ERROR ] Unknown/internal error happened.\n";
        return 1;
    }

}
