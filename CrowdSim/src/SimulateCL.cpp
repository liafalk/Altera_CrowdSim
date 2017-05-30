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

#include "bitmap_image.hpp"
#include <stdio.h>
#include <cstdio>
#include <iostream>
#include "SimulateCL.h"
#include <time.h>
#include "../RVO2/src/RVO.h"

#include "oclobject.hpp"

using std::cout;


struct Vector4
{
    float x, y, z, w;

    Vector4 () {}
    Vector4 (const float native[4]) : x(native[0]), y(native[1]), z(native[2]), w(native[3]) {}
};


// 4 marching bands on a collision course.
void SimulateCL::setupScenario4(RVOSimulator* sim)
{
    printf("[ INFO ] Beginning scenario4 setup.\n");
    int width = (int)ceil(sqrt((float)cmdparser->size.getValue()/4));  // width (and height) of a group of agents.
    if(width < 1) width = 1;
    // Specify the global time step of the simulation. 
    sim->setTimeStep(cmdparser->time_step.getValue());

    // Specify the default parameters for agents that are subsequently added. 
    sim->setAgentDefaults(15.0f, 10, 10.0f, 10.0f, cmdparser->agent_radius.getValue(), 3.0f);
    int gid = 0;   // goal id
    int sep = 50;  // seperation between the 4 groups
    if(width<8) sep = 10;  // reduce seperation for small crowd sizes
    int d = 10; // distance between members of same group.
    Vector4* pPoints = (Vector4 *) m_agents;
    int rest_num_agents = int(cmdparser->size.getValue()); // track how many agents rest to be placed

    
    for (int i = 0; i < width && rest_num_agents; ++i) {
        for (int j = 0; j < width && rest_num_agents; ++j) {
            
            sim->addAgent(Vector2(float(i*d+(sep + 1)), float(j*d+(sep + 2))));
            
            pPoints[gid].w = 1.0;  // green, see shader code.
            pPoints[gid].z = -25;
            goals[gid++] = Vector2(float(-j*d-(sep + 1)), float(-i*d-(sep+2)));

            if(--rest_num_agents == 0)break;

            sim->addAgent(Vector2(float(-i*d-sep), float(j*d+sep)));
            pPoints[gid].w = 0.0;  // red
            pPoints[gid].z = -25;
            goals[gid++] = Vector2(float(j*d+sep), float(-i*d-sep));

            if(--rest_num_agents == 0)break;

            sim->addAgent(Vector2(float(-i*d-sep), float(-j*d - sep)));
            pPoints[gid].w = 2.0;  // blue
            pPoints[gid].z = -25;
            goals[gid++] = Vector2(float(j*d+sep), float(i*d + sep));

            if(--rest_num_agents == 0)break;

            sim->addAgent(Vector2(float(i*d+sep), float(-j*d-sep)));
            pPoints[gid].w = 3.0;  // yellow
            pPoints[gid].z = -25;
            goals[gid++] = Vector2(float(-j*d-sep), float(i*d+sep));

            if(--rest_num_agents == 0)break;
        }
    }
}


void updateVisualization(RVOSimulator* sim)
{
    /* Output the current global time. */
    cout << sim->getGlobalTime() << " ";

    /* Output the current position of all the agents. */
    for (size_t i = 0; i < sim->getNumAgents(); ++i) {
        cout << sim->getAgentPosition(i).x() << ",";
        cout << sim->getAgentPosition(i).y() << " ";
    }

    cout << std::endl;
}

void SimulateCL::setPreferredVelocities(RVOSimulator* sim)
{
    /*
     * Set the preferred velocity to be a vector of unit magnitude (speed) in the
     * direction of the goal.
     */
    for (int i = 0; i < (int)sim->getNumAgents(); ++i) {
        Vector2 goalVector = goals[i] - sim->getAgentPosition(i);

        if (absSq(goalVector) > 1.0f) {
            goalVector = normalize(goalVector);
        }

        sim->setAgentPrefVelocity(i, goalVector);
    }
}

bool SimulateCL::reachedGoal(RVOSimulator* sim)
{
    // Check if all agents have reached their goals.
    for (size_t i = 0; i < sim->getNumAgents(); ++i) {
        if (absSq(sim->getAgentPosition(i) - goals[i]) > sim->getAgentRadius(i) * sim->getAgentRadius(i)) {
            return false;
        }
    }
    return true;
}

/*
void checkSVMAvailability (cl_device_id device, cl_device_svm_capabilities requiredType, const std::string& deviceName, const std::string& requiredTypeDesc = "")
{
    cl_device_svm_capabilities caps;
    cl_int err = clGetDeviceInfo(device, CL_DEVICE_SVM_CAPABILITIES, sizeof(cl_device_svm_capabilities), &caps, NULL);
    if(err != CL_SUCCESS)
    {
        throw Error("OpenCL device " + deviceName + " didn't respond to SVM capabilities query.");
    }

    cout << "[ INFO ] Successfully queried SVM capabilities of the device " + deviceName + ".\n";
    cout.flush();
    
    if(requiredType != (caps & requiredType))
    {
        throw Error("OpenCL device " + deviceName + " doesn't support required SVM type " + (requiredTypeDesc.empty() ? "" : "(" + requiredTypeDesc + ")") + ".");
    }
}
*/
// Initialize system, booting up CL
void SimulateCL::Init (
    const string& platform_name_or_index,
    const string& device_type,
    const string& device_name_or_index,
    cl_command_queue_properties queue_properties,
    void* in_hGLRC,
    void* in_hDC,
    int in_numPoints,
    cl_GLuint in_points_,
    const CmdParserCrowdSim& cmdparser_)
{
    cmdparser = &cmdparser_;
    in_points = in_points_;

    cl_int status = 0;

    cl_context_properties graphics_context_properties[] =
    { 
        CL_GL_CONTEXT_KHR, (cl_context_properties)in_hGLRC,
        CL_WGL_HDC_KHR,    (cl_context_properties)in_hDC,
        0 
    };

    // In fact we don't have to initialize all these OpenCL objects
    // in case of reference implementation.
    oclobjects = new OpenCLBasic(
        platform_name_or_index,
        device_type,
        device_name_or_index,
        queue_properties,
        (in_hGLRC && in_hDC) ? graphics_context_properties : 0
    );

    // Retrive device type and print it out to terminal.
    cl_device_type deviceType;
    status = clGetDeviceInfo(oclobjects->device, CL_DEVICE_TYPE, sizeof(cl_device_type), &deviceType, 0);
    SAMPLE_CHECK_ERRORS(status);
    cout << "Type of OpenCL device: ";
    switch(deviceType)
    {
        case CL_DEVICE_TYPE_CPU: cout << "CPU"; break;
        case CL_DEVICE_TYPE_GPU: cout << "GPU"; break;
        case CL_DEVICE_TYPE_ACCELERATOR: cout << "ACCELERATOR"; break;
        //case CL_DEVICE_TYPE_CUSTOM: cout << "CUSTOM"; break;
        default: throw Error("Unrecornized device type returned from clGetDeviceInfo");
    }
    cout << "\n";

 
 /*
    // we are using OpenCL 2.0 so can check for support of fine-grained SVM
    cl_device_svm_capabilities requiredSVM = CL_DEVICE_SVM_FINE_GRAIN_BUFFER;

    checkSVMAvailability
    (
        oclobjects->device,
        requiredSVM,
        "devices[0]",
        "fine grain buffer"
    );

    printf("[ INFO ] The device supports required SVM capabilities: fine grain buffer.\n");
    cout.flush();
   */ 
    crowd_sim_done = false;

    ShareBuffers(in_numPoints, in_points);
    printf("[ INFO ] Called ShareBuffers.\n");
    cout.flush();

    crowd_sim = new RVOSimulator(
        oclobjects,
        cmdparser,
        //cmdparser->no_graphics.getValue() || cmdparser->no_gl_sharing.getValue() ? 0 : m_points
        m_points
    );

    printf("[ INFO ] Created RVOSimulator.\n");
    cout.flush();

    setupScenario4(crowd_sim);

    printf("[ INFO ] Finish scenario setup.\n");

    printf("[ INFO ] Initializing memory aligned buffers.\n");
    crowd_sim->allocateMemAlignedBuffers();

    if(!cmdparser->no_graphics.getValue())
    {
        if(!cmdparser->no_gl_sharing.getValue())
        {
            status = clEnqueueAcquireGLObjects(oclobjects->queue, 1, &m_points, 0, 0, 0);
            SAMPLE_CHECK_ERRORS(status);

            status = clEnqueueWriteBuffer(oclobjects->queue, m_points, CL_TRUE, 0, crowd_sim->getNumAgents() * sizeof(cl_float4), m_agents, 0, NULL, NULL);
            SAMPLE_CHECK_ERRORS(status);

            // release buffers
            status = clEnqueueReleaseGLObjects(oclobjects->queue, 1, &m_points, 0, 0, 0);
            SAMPLE_CHECK_ERRORS(status);

            status = clFinish(oclobjects->queue);
            SAMPLE_CHECK_ERRORS(status);
        }
        else
        {
            // No OpenGL/OpenCL sharing -- copy m_agents to GL buffer directly
            //glBindBuffer(GL_ARRAY_BUFFER, in_points);
            //glBufferData(GL_ARRAY_BUFFER, crowd_sim->getNumAgents() * sizeof(cl_float4), m_agents, GL_DYNAMIC_DRAW);
        }
    }

    printf("[ INFO ] SimulateCL::Init finishes successfully\n");
    cout.flush();
}

void SimulateCL::ShareBuffers(
    int in_numPoints,
    cl_GLuint in_points
)
{
    srand(clock());

    m_numPoints = in_numPoints;

    m_agents = (cl_float4*) malloc(sizeof(cl_float4) * RVO_NUM_AGENTS);

    if(!m_agents)
    {
        throw Error("Malloc returns 0. Out of system memory");
    }

    cl_int status;
    if(!cmdparser->no_graphics.getValue() && !cmdparser->no_gl_sharing.getValue())
    {
        m_points = clCreateFromGLBuffer(oclobjects->context, CL_MEM_READ_WRITE, in_points, &status);
        SAMPLE_CHECK_ERRORS(status);
    }
}

void SimulateCL::Step(float in_deltaT)
{
    cl_int status;
    double kernelTime = 0;

    if(!crowd_sim_done)
    {
        // acquire postions buffer
        if(!cmdparser->no_gl_sharing.getValue())
        {
            status = clEnqueueAcquireGLObjects(oclobjects->queue, 1, &m_points, 0, 0, 0);
            SAMPLE_CHECK_ERRORS(status);
        }

        StepNoGraphics(&kernelTime, 0);

        if(cmdparser->no_opencl.getValue() || cmdparser->no_gl_sharing.getValue())
        {
            // In case of turned off OpenCL path,
            // you need to update agent position in GL buffer
            // here.

            Vector4* pPoints = (Vector4*) m_agents;

            for (size_t i = 0; i < crowd_sim->getNumAgents(); ++i) {
                pPoints[i].x = crowd_sim->getAgentPosition(i).x();
                pPoints[i].y = crowd_sim->getAgentPosition(i).y();
            }

            if(!cmdparser->no_gl_sharing.getValue())
            {
                // As it is shared with OpenCL buffer, OpenCL buffer is updated here.
                // Write the crowd positions to the m_points buffer that is shared with GL
                status = clEnqueueWriteBuffer(oclobjects->queue, m_points, CL_TRUE, 0, crowd_sim->getNumAgents() * sizeof(cl_float4), m_agents, 0, NULL, NULL);
                SAMPLE_CHECK_ERRORS(status);
            }
            else
            {
                // No OpenGL/OpenCL sharing -- copy m_agents to GL buffer directly
                //glBindBuffer(GL_ARRAY_BUFFER, in_points);
                //glBufferData(GL_ARRAY_BUFFER, crowd_sim->getNumAgents() * sizeof(cl_float4), m_agents, GL_DYNAMIC_DRAW);
            }
        }

        if(!cmdparser->no_gl_sharing.getValue())
        {
            // release positions buffer
            status = clEnqueueReleaseGLObjects(oclobjects->queue, 1, &m_points, 0, 0, 0);
            SAMPLE_CHECK_ERRORS(status);

            status = clFinish(oclobjects->queue);
            SAMPLE_CHECK_ERRORS(status);
        }
    }
}

// returns false when all entities have reached their destinations
bool SimulateCL::StepNoGraphics(double *pKernelTime, int iteration)
{    
    #ifdef INTEL_NOT_FOR_RELEASE
    if(cmdparser->interactiveDiagnostics.getValue())
    {
        printf("[ INFO ] Entering SimulateCL::StepNoGraphics.\n");
        cout.flush();
        if(!cmdparser->interactiveDiagnosticsNoWait.getValue())
        {
            std::cin.get();
        }
    }
    #endif

    double startSimTime = time_stamp();

    setPreferredVelocities(crowd_sim);

    #ifdef INTEL_NOT_FOR_RELEASE
    if(cmdparser->interactiveDiagnostics.getValue())
    {
        printf("[ INFO ] setPreferredVelocities was OK.\n");
        cout.flush();
        if(!cmdparser->interactiveDiagnosticsNoWait.getValue())
        {
            std::cin.get();
        }
    }
    #endif
    
    #define NOSVM
    //crowd_sim->doStep();
    crowd_sim->doStep_NoSVM();

#define TESTID 0
    //printf("Agent 0's current position = (%f,%f) at time %f - Goal at (%f, %f) - Velocity = (%f, %f)\n", crowd_sim->getAgentPosition(TESTID).x(), crowd_sim->getAgentPosition(TESTID).y(), crowd_sim->getGlobalTime(), goals[TESTID].x(), goals[TESTID].y(), crowd_sim->getAgentVelocity(TESTID).x(), crowd_sim->getAgentVelocity(TESTID).y());

    cartesian_canvas canvas(399,399);
    canvas.image().clear(255);

    canvas.pen_width(3);
    canvas.pen_color(255, 0, 0);
    canvas.fill_circle(255,0,0);

    for (int i=0; i<crowd_sim->getNumAgents(); ++i){
        canvas.circle(crowd_sim->getAgentPosition(i).x(),crowd_sim->getAgentPosition(i).y(),1);
    }
    canvas.image().save_image("output/" + std::to_string(iteration) + ".bmp");

    bool ret = !reachedGoal(crowd_sim);

    if(!ret)
    {
        crowd_sim_done = true;
    }

    #ifdef INTEL_NOT_FOR_RELEASE
    if(cmdparser->interactiveDiagnostics.getValue())
    {
        printf("[ INFO ] reachedGoal(crowd_sim) was OK and returned %d.\n", int(!ret));
        cout.flush();
        if(!cmdparser->interactiveDiagnosticsNoWait.getValue())
        {
            std::cin.get();
        }
    }
    #endif

    double endSimTime = time_stamp();
    *pKernelTime = endSimTime - startSimTime;

    return ret;
}

bool SimulateCL::isSimulationDone () const
{
    return crowd_sim_done;
}

SimulateCL::SimulateCL () :
    cmdparser(0)
{
    oclobjects = 0;
    m_points = 0;
}

SimulateCL::~SimulateCL()
{
    Shutdown();
}

void SimulateCL::Shutdown()
{
    cl_int err = CL_SUCCESS;

    // Make sure CL is totally done
    if(oclobjects)
    {
            err = clFinish(oclobjects->queue);
            SAMPLE_CHECK_ERRORS(err);
        }
    
    if(m_points)
    {
        err = clReleaseMemObject(m_points);
        SAMPLE_CHECK_ERRORS(err);
    }

    m_points = 0;

    delete oclobjects;
}
