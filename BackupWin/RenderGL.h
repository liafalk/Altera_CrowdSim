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

#define WIN32_LEAN_AND_MEAN
#include <Windows.h>
#include <string.h>
#include <fstream>
#include <GL/glew.h>
#include <GL/gl.h>
#include <assert.h>

#include "../../common/basic.hpp"

// Renders agents in the simulation with OpenGL
class RenderGL
{
public:

    RenderGL();
    ~RenderGL();

    // Create program, buffers
    void Init(HWND in_hWnd, int in_numPoints, GLuint* out_pPoints, float in_initialRadius);

    // By 2D coordinates and zoom factor, renders the agent as shperes with a given radius
    void Render ();

    // Adjust translation and scale of visible part of the scene
    void SetTranslationAndScale (float translation[2], float zoom);

    // Handle window resize
    void Resize(HWND in_hWnd);

    // Call Shutdown before destroying the GL context and window
    void Shutdown();

    void Flush()   { glFlush(); }
    void Present() { SwapBuffers(m_hDC); }

    // Returns handlers usefull for GL sharing
    void GetRC(HGLRC* out_pRC, HDC* out_pDC);

private:

    // Create GL buffers to be rendered

    void CreateBuffers(int in_numPoints, GLuint* out_pPoints);
    int GetVertexSize();
    int GetIndexSize();

    // Load vertex and fragment shaders, return program
    GLuint LoadProgram(const char* in_vertexPath, const char* in_fragmentPath, std::string* out_pBuildLog = 0);

    // Load a shader & create appropriate shader type
    GLuint LoadShader(const char* in_path, GLuint in_shaderType, std::string* out_pBuildLog = 0);


    static const float m_vertices[][3];
    static const GLuint m_indices[];

    HWND  m_hWnd;
    HDC   m_hDC;
    HGLRC m_context;

    GLuint m_points; // shared with CL
    GLuint m_points_tb; // for VS

    GLuint m_program;

    GLuint m_vertexBuffer; // VB for the point sprites
    GLuint m_indexBuffer;  // IB for the point sprites
    GLuint m_vertexArray;

    GLuint m_projectionMatrixID; // "projectionMatrix"
    GLuint m_posID;              // "in_pos" in VS
    GLuint m_pointsID;           // "particlePosition"
    GLuint m_radiusID;           // "radius"

    float m_zoom;

    // Current window height and width
    int m_windowHeight, m_windowWidth;

    int m_numPoints;
    float m_translation[2];

    float m_initialRadius;
};
