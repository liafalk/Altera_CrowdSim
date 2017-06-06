/**********************************************************************
* Felix Winterstein, Imperial College London, 2016
*
* File: host_memory_bridge.h
*
* Revision 1.01
* Additional Comments: distributed under a BSD license, see LICENSE.txt
*
**********************************************************************/


uint4 host_memory_bridge_ld_32bit (__global int *p0,  uint ttbr0, uint va)
{
    return 0;
}

uint4 host_memory_bridge_st_32bit (__global int *p0,  uint ttbr0, uint va, uint write_data)
{
    return 0;
}



uint16 host_memory_bridge_ld_512bit (__global int *p0,  uint ttbr0, uint va)
{
    return 0;
}

