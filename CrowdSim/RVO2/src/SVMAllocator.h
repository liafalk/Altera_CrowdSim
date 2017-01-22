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


// This file contains a couple of handy structures and functions for
// selection, creation and automatic deletion of basic OpenCL objects,
// such as platform, device, context, queue, program, kernel and buffer.


#ifndef _INTEL_SVMALLOCATOR_H_
#define _INTEL_SVMALLOCATOR_H_

#include <CL/cl.h>
#include <vector>
#include <set>

class SVMAllocator
{
public:

    SVMAllocator (cl_context context, size_t pageSize = 2*1024*1024);
    ~SVMAllocator ();
    void* allocate (size_t size);
    void deallocateAll ();

    // Pass all collected SVM pointers to a given kernel with clSetKernelExecInfo.
    void setKernelSVMPointers(cl_kernel kernel);

    // Register a pointer to SVM allocation made outside SVMAllocator.
    // This function passes the pointer with clSetKernelExecInfo for all registered kernels.
    void registerSVMPointer (void* ptr);

    void unregisterSVMPointer (void* ptr);

private:

    char* newPage (size_t size, unsigned int alignment);

    cl_context context_;    // OpenCL context where SVM regions are allocated
    size_t pageSize_;   // size of one page
    std::vector<char*> pages_;  // all allocated pages
    size_t residualSize_;   // how many bytes are free on the current page (pages_.back())

	std::vector<cl_kernel> kernels_;

    // Contains all external pointers managed by functions registerSVMPointer and
    // unregisterSVMPointer. Use std::set to accelerate unregistering operation.
    std::set<char*> externalPointers_;
};

#endif
