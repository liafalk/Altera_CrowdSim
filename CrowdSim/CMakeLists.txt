cmake_minimum_required(VERSION 2.8)
project(CrowdSim)

set(CMAKE_CXX_FLAGS "${CMAKE_CXX_FLAGS} -std=c++11")

set(COMMON_FILE_DIR ../common)
AUX_SOURCE_DIRECTORY(src SOURCE_FILES)
AUX_SOURCE_DIRECTORY(${COMMON_FILE_DIR} COMMON_SOURCE_FILES)
set(RVO2_DIR RVO2)

if(WIN32)
	message( STATUS "Detecting WIN32")
	include_directories("D:/Intel/OpenCL SDK/6.3/include")
else()
	message( STATUS "Detecting LINUX")
	include_directories("/mnt/applications/altera/aocl-sdk/host/include")
endif()

include_directories(${COMMON_FILE_DIR})
include_directories(src)
add_subdirectory(${RVO2_DIR})
add_executable(CrowdSim_CL ${COMMON_SOURCE_FILES} ${SOURCE_FILES})

target_link_libraries(CrowdSim_CL LINK_PUBLIC RVO)
