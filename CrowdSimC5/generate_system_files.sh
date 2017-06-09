CL_FILE=CrowdSim.cl
aoc -s -v --board c5soc -l ../common/rtl_src/custom_library.aoclib $CL_FILE
./fixup_generated_rtl.py $CL_FILE
./postprocess_scripts.py $CL_FILE
