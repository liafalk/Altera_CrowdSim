cmake_minimum_required(VERSION 2.8)
project(CrowdSim)

set(CMAKE_CXX_FLAGS "${CMAKE_CXX_FLAGS} -std=gnu++11 -lrt -Wl,--no-as-needed -DNO_FREETYPE")

set(AOC_ROOT $ENV{ALTERAOCLSDKROOT})
message("[INFO] SETTING AOC_ROOT as " ${AOC_ROOT})

set(RVO2_FILE_DIR RVO2/src)
set(COMMON_FILE_DIR ../common)
set(AOCL_UTILS_DIR ../common/AOCLUtils)
AUX_SOURCE_DIRECTORY(src SOURCE_FILES)
AUX_SOURCE_DIRECTORY(${COMMON_FILE_DIR} COMMON_SOURCE_FILES)
AUX_SOURCE_DIRECTORY(${RVO2_FILE_DIR} RVO2_SOURCE_FILES)
AUX_SOURCE_DIRECTORY(${AOCL_UTILS_DIR} AOCL_UTILS_FILES)

set(OpenCL_LIBARY ${AOC_ROOT}/host/arm32/lib/)
set(OpenCL_INCLUDE_DIR ${AOC_ROOT}/host/include/)

message("[INFO] INCLUDE " ${OpenCL_INCLUDE_DIR})

include_directories(${OpenCL_INCLUDE_DIR} ${CMAKE_CURRENT_SOURCE_DIR}/include)
link_directories(${OpenCL_LIBRARY} ${AOC_ROOT}/board/c5soc/arm32/lib ${AOC_ROOT}/host/arm32/lib ${CMAKE_CURRENT_SOURCE_DIR}/lib)

include_directories(${COMMON_FILE_DIR})
include_directories(${RVO2_FILE_DIR})
include_directories(${AOCL_UTILS_DIR})
include_directories(src)
add_executable(CrowdSim_CL ${COMMON_SOURCE_FILES} ${SOURCE_FILES} ${RVO2_SOURCE_FILES} ${AOCL_UTILS_FILES})

target_link_libraries(CrowdSim_CL alteracl alterammdpcie elf  rt pngwriter)
