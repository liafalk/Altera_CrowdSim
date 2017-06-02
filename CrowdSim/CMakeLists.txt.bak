cmake_minimum_required(VERSION 2.8)
project(CrowdSim)

set(CMAKE_CXX_FLAGS "${CMAKE_CXX_FLAGS} -std=c++11 -Wno-deprecated-declarations -L -Wl,--no-as-needed -lalteracl -lalterahalmmd -lnalla_pcie_mmd -lelf")

set(RVO2_FILE_DIR RVO2/src)
set(COMMON_FILE_DIR ../common)
set(AOCL_UTILS_DIR ../common/AOCLUtils)
AUX_SOURCE_DIRECTORY(src SOURCE_FILES)
AUX_SOURCE_DIRECTORY(${COMMON_FILE_DIR} COMMON_SOURCE_FILES)
AUX_SOURCE_DIRECTORY(${RVO2_FILE_DIR} RVO2_SOURCE_FILES)
AUX_SOURCE_DIRECTORY(${AOCL_UTILS_DIR} AOCL_UTILS_FILES)

set(OpenCL_LIBARY $ALTERAOCLSDKROOT/host/linux64/lib)
set(OpenCL_INCLUDE_DIR $ALTERAOCLSDKROOT/host/include)
#find_package(OpenGL REQUIRED)
#find_package(GLEW REQUIRED)

include_directories(${OpenCL_INCLUDE_DIR} "/mnt/applications/altera/15.0/hld/board/nalla_pcie/software/include")
link_directories(${OpenCL_LIBRARY})

if(WIN32)
	message( STATUS "Detecting WIN32")
	include_directories("D:/Intel/OpenCL SDK/6.3/include")
else()
	message( STATUS "Detecting LINUX")
	include_directories("/mnt/applications/altera/aocl-sdk/host/include")
#	include_directories("/usr/include")
endif()

include_directories(${COMMON_FILE_DIR})
include_directories(${RVO2_FILE_DIR})
include_directories(${AOCL_UTILS_DIR})
include_directories(src)
#add_subdirectory(${RVO2_DIR})
add_executable(CrowdSim_CL ${COMMON_SOURCE_FILES} ${SOURCE_FILES}
${RVO2_SOURCE_FILES} ${AOCL_UTILS_FILES})

target_link_libraries (CrowdSim_CL ${OpenCL_LIBRARY} "/mnt/applications/altera/16.1/hld/host/linux64/lib" "/mnt/applications/altera/15.0/hld/board/nalla_pcie/linux64/lib")
#target_link_libraries(CrowdSim_CL LINK_PUBLIC RVO)

