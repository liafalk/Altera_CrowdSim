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


#include "basic.hpp"
#include "RenderGL.h"

// Macro is used to check OpenGL calls for errors in a short way.
#define GL_API_CHECK(x)do{ \
    x;\
    GLenum err = glGetError(); \
    if (GL_NO_ERROR!=err) \
{ \
    throw Error(    \
        "GL error: " + to_str(err) +    \
        "    Happened for the following expression:\n   " + #x +    \
        ";\n    file " + __FILE__ + ", line " + to_str(__LINE__)    \
    ); \
} \
}while(0)



RenderGL::RenderGL()
{
    m_context = 0;
    m_points = 0;
    m_zoom = 1;
    m_translation[0] = 0; m_translation[1] = 0;
    m_initialRadius = 0;
    m_program = 0;
    m_points_tb = 0;
    m_points = 0;
    m_vertexArray = 0;
    m_indexBuffer = 0;
    m_vertexBuffer = 0;
}


void RenderGL::Init(HWND in_hWnd, int in_numPoints, GLuint* out_pPoints, float in_initialRadius)
{
    m_hWnd = in_hWnd;
    PIXELFORMATDESCRIPTOR pfd =
    {
        sizeof(PIXELFORMATDESCRIPTOR),
        1,
        PFD_DRAW_TO_WINDOW | PFD_SUPPORT_OPENGL | PFD_DOUBLEBUFFER,    //Flags
        PFD_TYPE_RGBA,
        32,               // color depth
        0, 0, 0, 0, 0, 0,
        0,
        0,
        0,
        0, 0, 0, 0,
        32, // 32-bit depth
        0,  // no stencil
        0,
        PFD_MAIN_PLANE,
        0,
        0, 0, 0
    };

    m_hDC = GetDC(in_hWnd);
    int format = ChoosePixelFormat(m_hDC, &pfd);
    SetPixelFormat(m_hDC, format, &pfd);

    m_context = wglCreateContext(m_hDC);
    GL_API_CHECK(wglMakeCurrent(m_hDC, m_context));

    // Initialize GLEW
    if (glewInit() != GLEW_OK)
    {
        throw Error("Failed to initialize GLEW. Your system has likely a problem with OpenGL.");
    }

    if(!GLEW_VERSION_2_1)
    {
        throw Error("OpenGL problem: this application requires at least version 2.1. Your version is unsupported.");
    }

    std::string buildLog = "Empty Log";
    m_program = LoadProgram((exe_dir() + "ParticleVS.gl").c_str(), (exe_dir() + "ParticleFS.gl").c_str(), &buildLog);
    if (buildLog.size())
    {
        throw Error("Building GL shader failed.\n" + buildLog);
    }

    m_projectionMatrixID = glGetUniformLocation(m_program, "projectionMatrix");
    m_pointsID  = glGetUniformLocation(m_program, "particlePosition");
    m_radiusID = glGetUniformLocation(m_program, "radius");

    m_posID = glGetAttribLocation(m_program, "in_pos");

    CreateBuffers(in_numPoints, out_pPoints);

    m_initialRadius = in_initialRadius;
}

//-----------------------------------------------------------------------------
// destructor
//-----------------------------------------------------------------------------
RenderGL::~RenderGL()
{
    Shutdown();
    assert(0 == m_program);
    assert(0 == m_points_tb);
    assert(0 == m_points);
    assert(0 == m_vertexArray);
    assert(0 == m_indexBuffer);
    assert(0 == m_vertexBuffer);
}

void RenderGL::Shutdown()
{
    // make sure GL is totally done
    glFinish();

    if(m_program)
    {
        glDeleteProgram(m_program);
        m_program = 0;
    }

    if(m_points_tb)
    {
        glDeleteTextures(1, &m_points_tb);
        m_points_tb = 0;
    }

    if(m_points)
    {
        glDeleteBuffers (1, &m_points);
        m_points = 0;
    }

    if(m_vertexArray)
    {
        glDeleteVertexArrays(1, &m_vertexArray);
        m_vertexArray = 0;
    }

    if(m_indexBuffer)
    {
        glDeleteBuffers(1, &m_indexBuffer);
        m_indexBuffer = 0;
    }

    if(m_vertexBuffer)
    {
        glDeleteBuffers(1, &m_vertexBuffer);
        m_vertexBuffer = 0;
    }

    if (m_context)
    {
        wglMakeCurrent(m_hDC, 0);
        wglDeleteContext(m_context);
        m_context = 0;
    }
}

// Indices for quad
const GLuint RenderGL::m_indices[] =
{
    0, 2, 1,
    2, 3, 1,
};

int RenderGL::GetIndexSize() { return sizeof(RenderGL::m_indices); }

// Vertices for quad
const float RenderGL::m_vertices[][3] = 
{
    {-1,  1, 0},
    {-1, -1, 0},

    { 1,  1, 0},
    { 1, -1, 0},
};
int RenderGL::GetVertexSize() {return sizeof(RenderGL::m_vertices);}

struct ParticleVertex
{
    float m_position[4];
};

struct Vector3
{
    float x, y, z;

    Vector3 () {}
    Vector3 (const float native[3]) : x(native[0]), y(native[1]), z(native[2]) {}
};

void RenderGL::CreateBuffers(int in_numPoints, GLuint* out_pPoints)
{
    m_numPoints = in_numPoints;

    // create vertex buffer.  Not using instancing.
    int numVertices = in_numPoints * 4;
    int bufferSize = sizeof(Vector3) * numVertices;
    Vector3* vertices = new Vector3[numVertices];
    for (int i = 0; i < in_numPoints * 4; i++)
    {
        vertices[i] = Vector3(m_vertices[i & 3]);
        vertices[i].z = float(i >> 2); // particle index
    }
    glGenBuffers(1, &m_vertexBuffer);
    glBindBuffer(GL_ARRAY_BUFFER, m_vertexBuffer);
    glBufferData(GL_ARRAY_BUFFER, bufferSize, vertices, GL_STATIC_DRAW);
    delete [] vertices;

    // create index buffer.  Not using instancing.
    int numIndices = in_numPoints * 6;
    bufferSize = sizeof(GLuint) * numIndices;
    GLuint* indices = new GLuint[numIndices];
    GLuint* p = indices;
    for (int i = 0; i < in_numPoints; i++)
    {
        for (int j = 0; j < 6; j++)
        {
            GLuint base = i * 4;
            *p = m_indices[j] + base;
            p++;
        }
    }
    glGenBuffers(1, &m_indexBuffer);
    glBindBuffer(GL_ELEMENT_ARRAY_BUFFER, m_indexBuffer);
    glBufferData(GL_ELEMENT_ARRAY_BUFFER, bufferSize, indices, GL_STATIC_DRAW);
    delete [] indices;

    glGenVertexArrays(1, &m_vertexArray);

    // shared buffers
    int arraySize = sizeof(ParticleVertex) * in_numPoints;


    // share buffers with CL
    // create gl_texture_buffers from the shared buffers to sample from vertex shader
    glGenBuffers(1, &m_points);
    glGenTextures(1, &m_points_tb);

    glBindBuffer(GL_ARRAY_BUFFER, m_points);
    glBufferData(GL_ARRAY_BUFFER, arraySize, 0, GL_DYNAMIC_DRAW);
    glBindTexture(GL_TEXTURE_BUFFER, m_points_tb);
    glTexBuffer(GL_TEXTURE_BUFFER, GL_RGBA32F, m_points);

    *out_pPoints = m_points;
}

void RenderGL::SetTranslationAndScale(float translation[2], float zoom)
{
    if (zoom)
    {
        m_zoom *= pow(1.1f, zoom);
    }

    m_translation[0] += translation[0]*m_zoom;
    m_translation[1] += translation[1]*m_zoom;
}

void RenderGL::Render()
{
    // Disable depth test and culling
    glEnable(GL_DEPTH_TEST);
    glDisable(GL_CULL_FACE);

    glClearColor(0.0f, 0.0f, 0.0f, 0.0f);
    glClear(GL_COLOR_BUFFER_BIT);
    glClear(GL_DEPTH_BUFFER_BIT);

    glDisable (GL_BLEND);

    glUseProgram(m_program);

    glBindVertexArray(m_vertexArray);

    // vertex attribute #0: vertex positions
    glEnableVertexAttribArray(0);
    glBindBuffer(GL_ARRAY_BUFFER, m_vertexBuffer);
    // vertex position attributes: 3 floats not normalized, stride = "packed", no offset
    glVertexAttribPointer(m_posID, 3, GL_FLOAT, GL_FALSE, 0, 0);

    float scaleX = 2.0f/m_windowWidth;
    float scaleY = 2.0f/m_windowHeight;

    float worldViewProj[16] =
    {
        m_zoom*scaleX, 0, 0, 0,
        0, m_zoom*scaleY, 0, 0,
        0, 0, 1, 0,
        -m_translation[0]*scaleX/m_zoom, -m_translation[1]*scaleY/m_zoom, 0, 1
    };

    glUniformMatrix4fv(m_projectionMatrixID, 1, GL_FALSE, worldViewProj);
    glUniform1f(m_radiusID, m_initialRadius);

    // bind the particle positions as a 1D texture
    glUniform1i(m_pointsID, 0);
    glActiveTexture(GL_TEXTURE0);
    glBindTexture(GL_TEXTURE_BUFFER, m_points_tb);

    glBindBuffer(GL_ELEMENT_ARRAY_BUFFER, m_indexBuffer);
    glDrawElements(GL_TRIANGLES, m_numPoints*6, GL_UNSIGNED_INT, 0);

    glBindTexture(GL_TEXTURE_2D, 0);
    glBindBuffer(GL_ELEMENT_ARRAY_BUFFER, 0);
    glDisableVertexAttribArray(0);
    glBindVertexArray(0);
}

void RenderGL::Resize(HWND in_hWnd)
{
    RECT rect;
    GetClientRect(in_hWnd, &rect);
    m_windowWidth = rect.right - rect.left;
    m_windowHeight = rect.bottom - rect.top;
    glViewport(0, 0, m_windowWidth, m_windowHeight);
}


void RenderGL::GetRC(HGLRC* out_pRC, HDC* out_pDC)
{
    *out_pRC = m_context;
    *out_pDC = m_hDC;
}

GLuint RenderGL::LoadShader(const char* in_path, GLuint in_shaderType, std::string* out_pBuildLog)
{
    if (0 != out_pBuildLog)
    {
        out_pBuildLog->clear();
    }
    GLuint shaderID = 0;

    std::ifstream ifs(in_path);
    if (ifs.is_open())
    {
        std::string s((std::istreambuf_iterator<char>(ifs)), std::istreambuf_iterator<char>());
        ifs.close();

        shaderID = glCreateShader(in_shaderType);
        const char* c_str = s.c_str();
        glShaderSource(shaderID, 1, &c_str, 0);
        glCompileShader(shaderID);
    }

    GLint success = GL_TRUE;
    GLint logLength;
    glGetShaderiv(shaderID, GL_COMPILE_STATUS, &success);
    if ((0 != out_pBuildLog) && (GL_TRUE != success))
    {

        std::string& buildLog = *out_pBuildLog;
        glGetShaderiv(shaderID, GL_INFO_LOG_LENGTH, &logLength);
        buildLog.resize(logLength);
        glGetShaderInfoLog(shaderID, logLength, NULL, &buildLog[0]);
    }

    return shaderID;
}

GLuint RenderGL::LoadProgram(const char* in_vertexPath, const char* in_fragmentPath, std::string* out_pBuildLog)
{
    if (0 != out_pBuildLog)
    {
        out_pBuildLog->clear();
    }

    GLuint fragmentShaderID = LoadShader(in_fragmentPath, GL_FRAGMENT_SHADER, out_pBuildLog);
    if (out_pBuildLog && out_pBuildLog->size())
    {
        return 0;
    }
    GLuint vertexShaderID   = LoadShader(in_vertexPath,   GL_VERTEX_SHADER, out_pBuildLog);
    if (out_pBuildLog && out_pBuildLog->size())
    {
        return 0;
    }

    GLuint programID = 0;
    if (fragmentShaderID && vertexShaderID)
    {
        programID = glCreateProgram();
        glAttachShader(programID, fragmentShaderID);
        glAttachShader(programID, vertexShaderID);
        glLinkProgram(programID);
        glDeleteShader(fragmentShaderID);
        glDeleteShader(vertexShaderID);

        GLint success = GL_TRUE;
        GLint logLength;
        glGetProgramiv(programID, GL_LINK_STATUS, &success);
        if ((0 != out_pBuildLog) && (GL_TRUE != success))
        {
            std::string& buildLog = *out_pBuildLog;
             glGetProgramiv(programID, GL_INFO_LOG_LENGTH, &logLength);
            buildLog.resize(logLength);
            glGetProgramInfoLog(programID, logLength, NULL, &buildLog[0]);
        }
    }
    return programID;
}
