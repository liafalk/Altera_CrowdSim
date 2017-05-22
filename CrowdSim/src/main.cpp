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

//#include "display/SampleWindow.h"
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


/*// Application window class
class AppWindow
{
public:

    // Called to handle windows messages, e.g. WM_FOO, from WindowProc
    LRESULT WndProc (HWND hWnd, UINT message, WPARAM wParam, LPARAM lParam);

    // Do one step and all necessery rendering around.
    void doStep();

    virtual void Init(
        HWND in_hWnd,
        const string& platform_name_or_index,
        const string& device_type,
        const string& device_name_or_index,
        cl_command_queue_properties queue_properties
    );
    
    virtual void Shutdown();

    AppWindow(const CmdParserCrowdSim& cmdparser_);

    // Create window and start windows message pump
    int Show (
        HINSTANCE in_hInstance,
        int in_nCmdShow,
        char* in_pWindowName,
        const string& platform_name_or_index,
        const string& device_type,
        const string& device_name_or_index, //default is the first device in the filtered list
        cl_command_queue_properties queue_properties
    );

private:

    void KeyHandler();

    // C-level wrapper around WndProc, which retrieves pointer to AppWindow object and
    // call member function WndProc with the same parameters.
    static LRESULT CALLBACK WindowProc (HWND hWnd, UINT message, WPARAM wParam, LPARAM lParam);

    static const int WINDOW_WIDTH = 1024;
    static const int WINDOW_HEIGHT = 768;
    HINSTANCE m_hInst;
    HWND      m_hWnd;

    bool m_hasFocus;

    Vector2i m_mousePos;
    Vector2i m_mouseLeftDelta;
    Vector2i m_mouseRightDelta;
    Vector2i m_keyTranslation;
    int m_mouseZDelta;

    SimulateCL m_SimulateCL;
    //RenderGL m_render;

    bool m_suspended;
    int timestep;

    const CmdParserCrowdSim& cmdparser;
};


int AppWindow::Show (
    HINSTANCE in_hInstance,
    int in_nCmdShow,
    char* in_pWindowName,
    const string& platform_name_or_index,
    const string& device_type,
    const string& device_name_or_index,
    cl_command_queue_properties queue_properties
)
{
    assert(in_hInstance);
    m_hInst = in_hInstance;

    // Register class
    WNDCLASSEX wcex;
    wcex.cbSize = sizeof(WNDCLASSEX);
    wcex.style = CS_HREDRAW | CS_VREDRAW | CS_OWNDC; // note: CS_OWNDC required for GL
    wcex.lpfnWndProc = WindowProc;
    wcex.cbClsExtra = 0;
    wcex.cbWndExtra = 0;
    wcex.hInstance = in_hInstance;
    wcex.hIcon = LoadIcon(in_hInstance, (LPCTSTR)IDI_SAMPLE_ICON);
    wcex.hCursor = LoadCursor(0, IDC_ARROW);
    wcex.hbrBackground = (HBRUSH)(COLOR_WINDOW + 1);
    wcex.lpszMenuName = 0;
    wcex.lpszClassName = "WindowClass";
    wcex.hIconSm = LoadIcon(wcex.hInstance, (LPCTSTR)IDI_SAMPLE_ICON);

    if(!RegisterClassEx(&wcex))
    {
        return E_FAIL;
    }

    // Create window
    RECT rc = { 0, 0, WINDOW_WIDTH, WINDOW_HEIGHT};
    AdjustWindowRect(&rc, WS_OVERLAPPEDWINDOW, FALSE);
    m_hWnd = CreateWindow(
        "WindowClass",
        in_pWindowName,
        WS_OVERLAPPEDWINDOW, CW_USEDEFAULT, CW_USEDEFAULT,
        rc.right - rc.left, rc.bottom - rc.top, 0, 0, in_hInstance, 0);

    if(!m_hWnd)
    {
        return E_FAIL;
    }

    ShowWindow(m_hWnd, in_nCmdShow);

    // set user data of window to be the class from the calling application
    SetWindowLongPtr(m_hWnd, GWLP_USERDATA, reinterpret_cast<LONG_PTR>(this));

    // initialize callback class with newly created window handle:
    Init(m_hWnd, platform_name_or_index, device_type, device_name_or_index, queue_properties);

    // Main message loop
    MSG msg = {0};
    while( WM_QUIT != msg.message )
    {
        if( PeekMessage( &msg, NULL, 0, 0, PM_REMOVE ) )
        {
            TranslateMessage( &msg );
            DispatchMessage( &msg );
        }
        else
        {
            doStep();
        }
    }

    return (int)msg.wParam;
}


LRESULT CALLBACK AppWindow::WindowProc(HWND hWnd, UINT message, WPARAM wParam, LPARAM lParam)
{
    LONG_PTR pUserData = GetWindowLongPtr(hWnd, GWLP_USERDATA);
    AppWindow* pCallbacks = reinterpret_cast<AppWindow*>(pUserData);

    if(pCallbacks)
    {
        return pCallbacks->WndProc(hWnd, message, wParam, lParam);
    }
    else
    {
        return DefWindowProc(hWnd, message, wParam, lParam);
    }
}


LRESULT AppWindow::WndProc(HWND hWnd, UINT message, WPARAM wParam, LPARAM lParam)
{
    PAINTSTRUCT ps;
    HDC hdc;

    switch( message )
    {
    case WM_SETFOCUS:
        m_hasFocus = true;
        break;
    case WM_KILLFOCUS:
        m_hasFocus = false;
        break;

    case WM_SIZE:
        m_render.Resize(hWnd);
        break;

    case WM_MOUSEMOVE:
        {
            int x = int(lParam) & 0x0000ffff;
            int y = int(lParam) >> 16;
            Vector2i pos(x, y);
            if (wParam & MK_LBUTTON)
            {
                m_mouseLeftDelta += pos - m_mousePos;
            }
            if (wParam & MK_RBUTTON)
            {
                m_mouseRightDelta += pos - m_mousePos;
            }
            m_mousePos = pos;
        }
        break;

    case WM_MOUSEWHEEL:
        {
            m_mouseZDelta = GET_WHEEL_DELTA_WPARAM(wParam);
        }
        break;

    case WM_KEYDOWN:
        switch (wParam)
        {
        case VK_F1:
            MessageBox(hWnd,
                "Particle positions are animated in OpenCL and rendered with OpenGL.\n"
                "Keys:\n"
                "\tArrow keys or W, A, S, D or mouse left button + drag for movement\n"
                "\tMouse wheel for scaling\n"
                "\tPress space bar to toggle the simulation",
                "Help",
                MB_OK);
            break;
        case VK_SPACE:
            m_suspended = !m_suspended;
            break;
        }
        break;

    case WM_PAINT:
        hdc = BeginPaint(hWnd, &ps);
        EndPaint(hWnd, &ps);
        break;

    case WM_DESTROY:
        PostQuitMessage(0);
        break;

    case WM_CHAR:
        if (wParam==VK_ESCAPE)
        {
            PostQuitMessage(0);
        }
        break;

    default:
        return DefWindowProc(hWnd, message, wParam, lParam);
    }

    return 0;
}


AppWindow::AppWindow(const CmdParserCrowdSim& cmdparser_) :
    cmdparser(cmdparser_)
{
    m_keyTranslation = Vector2i(0,0);
    m_mouseLeftDelta = Vector2i(0,0);
    m_mouseRightDelta = Vector2i(0,0);
    m_hasFocus = true; // application starts with focus
    m_suspended = false;
    timestep = 0;
    m_mouseZDelta = INITIAL_ZOOM_VALUE;
}

void AppWindow::KeyHandler()
{
    if (m_hasFocus)
    {
        // Keyboard Translation
        SHORT forward = (GetKeyState('W') | GetKeyState(VK_UP)) >> 8;
        SHORT back    = (GetKeyState('S') | GetKeyState(VK_DOWN)) >> 8;
        SHORT left    = (GetKeyState('A') | GetKeyState(VK_LEFT)) >> 8;
        SHORT right   = (GetKeyState('D') | GetKeyState(VK_RIGHT)) >> 8;

        SHORT sSHIFTkey = GetKeyState(VK_SHIFT) >> 8;

        Vector2i translation( (left?-1:0) + (right?1:0), (forward?1:0)+(back?-1:0));

        if (sSHIFTkey)
        {
            translation *= TRANSLATION_TURBO;
        }

        m_keyTranslation = translation;
    }
}

void AppWindow::doStep()
{
    KeyHandler();

    m_render.Flush();

    float step = cmdparser.time_step.getValue()/1000;     // milliseconds -> seconds

    if(!cmdparser.graphics_max_speed.getValue())
    {
        // In case when no --graphics-max-speed key is specified,
        // additional delay is inserted to make simulation process not too fast
        Sleep(10);
    }

    if(
        !m_suspended &&
        !m_SimulateCL.isSimulationDone() &&
        (cmdparser.iterations.getValue() == 0 || timestep < int(cmdparser.iterations.getValue()))
    )
    {
        m_SimulateCL.Step(step);
        ++timestep;
    }

    float translation[2] = {
        (float)m_keyTranslation.x - (float)m_mouseLeftDelta.x,
        (float)m_keyTranslation.y + (float)m_mouseLeftDelta.y
    };

    m_render.SetTranslationAndScale(translation, float(m_mouseZDelta*ZOOM_SPEED));
    m_render.Render();
    m_render.Present();

    m_mouseLeftDelta = Vector2i(0,0); // reset delta, which has been consumed
    m_mouseRightDelta = Vector2i(0,0); // reset delta, which has been consumed
    m_mouseZDelta = 0;

    if
    (
        m_SimulateCL.isSimulationDone() &&
        cmdparser.graphics_no_wait.getValue()
    )
    {
        PostQuitMessage(0);
    }
}

// Initialize windows message handler
void AppWindow::Init (
    HWND in_hWnd,
    const string& platform_name_or_index,
    const string& device_type,
    const string& device_name_or_index,
    cl_command_queue_properties queue_properties
)
{
    // Start graphics context, scene rendering object and create shared buffers
    GLuint points;
    m_render.Init(in_hWnd, int(cmdparser.size.getValue()), &points, cmdparser.agent_radius.getValue());


    // start OCL & share buffers
    HGLRC pRC = 0;
    HDC   pDC = 0;

    if(!cmdparser.no_gl_sharing.getValue())
    {
        m_render.GetRC(&pRC, &pDC);
    }

    m_SimulateCL.Init(
        platform_name_or_index,
        device_type,
        device_name_or_index,
        queue_properties,
        pRC,
        pDC,
        int(cmdparser.size.getValue()),
        points,
        cmdparser
     );

    m_render.Resize(in_hWnd);
}

// Take things down in an orderly fashion (reverse of initialization)
void AppWindow::Shutdown()
{
    m_SimulateCL.Shutdown();
    m_render.Shutdown();
}*/


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
                printf("[ INFO ] Step %d of simulation was executed.\n", (int)iteration);

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
