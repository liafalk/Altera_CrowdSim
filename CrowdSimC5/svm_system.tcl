package require -exact qsys 14.0

set kernel [lindex $::argv 0]
set num_lsu_instances [lindex $::argv 1]
set num_lsu_atomic_instances [lindex $::argv 2]

load_system system.qsys

for { set i 0}  {$i < ${num_lsu_instances}} {incr i} {
    # connect kernel svm interface i with svm_avalon_clock_crossing_s0
    add_connection ${kernel}_system.avm_svm_port_${i}_rw acl_iface.svm_avalon_clock_crossing_s0
    set_connection_parameter_value ${kernel}_system.avm_svm_port_${i}_rw/acl_iface.svm_avalon_clock_crossing_s0 arbitrationPriority {1}
    set_connection_parameter_value ${kernel}_system.avm_svm_port_${i}_rw/acl_iface.svm_avalon_clock_crossing_s0 baseAddress {0x0000}
    set_connection_parameter_value ${kernel}_system.avm_svm_port_${i}_rw/acl_iface.svm_avalon_clock_crossing_s0 defaultConnection {0}   
}

for { set i 0}  {$i < ${num_lsu_atomic_instances}} {incr i} {
    # connect kernel lockservice interface i with lock_server_avalon_clock_crossing_s0
    add_connection ${kernel}_system.avm_lockservice_port_${i}_rw acl_iface.lock_server_avalon_clock_crossing_s0
    set_connection_parameter_value ${kernel}_system.avm_lockservice_port_${i}_rw/acl_iface.lock_server_avalon_clock_crossing_s0 arbitrationPriority {1} 
    set_connection_parameter_value ${kernel}_system.avm_lockservice_port_${i}_rw/acl_iface.lock_server_avalon_clock_crossing_s0 baseAddress {0x0000}
    set_connection_parameter_value ${kernel}_system.avm_lockservice_port_${i}_rw/acl_iface.lock_server_avalon_clock_crossing_s0 defaultConnection {0} 
}

save_system

