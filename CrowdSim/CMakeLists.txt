cmake_minimum_required(VERSION 3.6)
project(CrowdSim)

set(CMAKE_CXX_FLAGS "${CMAKE_CXX_FLAGS} -std=c++11")

#include_directories("src/")
set(COMMON_FILE_DIR src)
set(SOURCE_FILE_DIR ../common)

add_subdirectory(${SOURCE_FILE_DIR})
add_executable(CrowdSim ${SOURCE_FILE_DIR}/main.cpp)