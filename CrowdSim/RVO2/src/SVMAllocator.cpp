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


#include <cassert>
#include "basic.hpp"

#include "SVMAllocator.h"

SVMAllocator::SVMAllocator (cl_context context, size_t pageSize) :
    context_(context),
    pageSize_(pageSize),
    residualSize_(0)
{
}

SVMAllocator::~SVMAllocator ()
{
    deallocateAll();
}

void SVMAllocator::deallocateAll ()
{
    for(size_t i = 0; i < pages_.size(); ++i)
    {
        clSVMFree(context_, pages_[i]);
    }

    // Do nothing with externalPtrs_ because they are not owned by this class
    // and should be deallocated externally.
}


void* SVMAllocator::allocate (size_t size)
{
    if(size > pageSize_)
    {
        // Big page is needed
        char* res = newPage(size, 0);

        if(residualSize_)
        {
            // Save incomplete page for future small allocations
            assert(!pages_.empty());
            char* lastPage = pages_.back();
            pages_.back() = res;
            pages_.push_back(lastPage);
        }
        else
        {
            pages_.push_back(res);
        }

        return res;
    }

    if(size > residualSize_)
    {
        pages_.push_back(newPage(pageSize_, 0));
        residualSize_ = pageSize_;
    }

    void* res = pages_.back() + pageSize_ - residualSize_;
    residualSize_ -= size;
    return res;
}

char* SVMAllocator::newPage (size_t size, unsigned int alignment)
{
    printf("new page, size = %d\n", int(size));
    char* allocation = (char*)clSVMAlloc(context_, CL_MEM_READ_WRITE | CL_MEM_SVM_FINE_GRAIN_BUFFER, size, alignment);
	return allocation;
}

void SVMAllocator::registerSVMPointer (void* ptr)
{
    if (!ptr)
        return;

    externalPointers_.insert(static_cast<char*>(ptr));
}

void SVMAllocator::unregisterSVMPointer(void *ptr)
{
    if (!ptr)
        return;

    std::set<char*>::iterator i = externalPointers_.find(static_cast<char*>(ptr));
    if (i == externalPointers_.end())
    {
        throw Error("Internal error: try call SVMAllocator::unregisterSVMPointer for a pointer that wasn't registered before");
    }

    externalPointers_.erase(i);
}

void SVMAllocator::setKernelSVMPointers(cl_kernel kernel)
{
    // Collect all SVM pointers from pages_ and externalPointers_.
    
    size_t countPtrs = pages_.size() + externalPointers_.size();
    std::vector<char*> allPtrs;
    allPtrs.reserve(countPtrs);
    allPtrs.insert(allPtrs.end(), pages_.begin(), pages_.end());
    allPtrs.insert(allPtrs.end(), externalPointers_.begin(), externalPointers_.end());

    cl_int err = clSetKernelExecInfo(
        kernel,
        CL_KERNEL_EXEC_INFO_SVM_PTRS,
        allPtrs.size() * sizeof(char*),
        &allPtrs[0]
    );
}