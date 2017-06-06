/**********************************************************************
* Felix Winterstein, Imperial College London, 2016
*
* File: host_memory_bridge.h
*
* Revision 1.01
* Additional Comments: distributed under a BSD license, see LICENSE.txt
*
**********************************************************************/

#ifndef HOST_MEMORY_BRIDGE_H_
#define HOST_MEMORY_BRIDGE_H_


typedef uint svm_pointer_t;

uint4 host_memory_bridge_ld_32bit (__global int *p0, svm_pointer_t ttbr0, svm_pointer_t va);
uint4 host_memory_bridge_st_32bit (__global int *p0, svm_pointer_t ttbr0, svm_pointer_t va, uint write_data);


uint16 host_memory_bridge_ld_512bit (__global int *p0, svm_pointer_t ttbr0, svm_pointer_t va);



#endif


