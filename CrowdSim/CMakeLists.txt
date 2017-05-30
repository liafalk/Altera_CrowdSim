cmake_minimum_required(VERSION 2.8)
project(CrowdSim)

set(CMAKE_CXX_FLAGS "${CMAKE_CXX_FLAGS} -std=c++11 -Wl,--no-as-needed")

set(RVO2_FILE_DIR RVO2/src)
set(COMMON_FILE_DIR ../common)
set(AOCL_UTILS_DIR ../common/AOCLUtils)
AUX_SOURCE_DIRECTORY(src SOURCE_FILES)
AUX_SOURCE_DIRECTORY(${COMMON_FILE_DIR} COMMON_SOURCE_FILES)
AUX_SOURCE_DIRECTORY(${RVO2_FILE_DIR} RVO2_SOURCE_FILES)
AUX_SOURCE_DIRECTORY(${AOCL_UTILS_DIR} AOCL_UTILS_FILES)

#set(OpenCL_LIBARY "/home/alex/intelFPGA/17.0/hld/host/linux64/lib")
#set(OpenCL_INCLUDE_DIR "/home/alex/intelFPGA/17.0/hld/host/include")

#include_directories(${OpenCL_INCLUDE_DIR})
include_directories("/mnt/applications/altera/16.1/hld/host/include" "/mnt/applications/altera/15.0/hld/board/nalla_pcie/software/include")
link_directories(${OpenCL_LIBRARY} "/mnt/applications/altera/16.1/hld/host/linux64/lib" "/mnt/applications/altera/15.0/hld/board/nalla_pcie/linux64/lib")
#include_directories("/mnt/applications/altera/aocl-sdk/host/include")

include_directories(${COMMON_FILE_DIR})
include_directories(${RVO2_FILE_DIR})
include_directories(${AOCL_UTILS_DIR})
include_directories(src)
add_executable(CrowdSim_CL ${COMMON_SOURCE_FILES} ${SOURCE_FILES} ${RVO2_SOURCE_FILES} ${AOCL_UTILS_FILES})

target_link_libraries(CrowdSim_CL ${OpenCL_LIBRARY} elf nalla_pcie_mmd alterahalmmd alteracl OpenCL rt pthread)

