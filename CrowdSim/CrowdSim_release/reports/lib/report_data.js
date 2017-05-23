var loopsJSON={
  "columns":["Pipelined", "II", "Bottleneck"]
  , "functions":
  [
    {
      "name":"Block13"
      , "data":
      ["No", "n/a", "n/a"]
      , "debug":
      [
        [
          {
            "filename":"CrowdSim_release.cl"
            , "line":450
            , "level":0
          }
          , {
            "filename":"CrowdSim_release.cl"
            , "line":450
            , "level":0
          }
          , {
            "filename":"CrowdSim_release.cl"
            , "line":355
            , "level":0
          }
          , {
            "filename":"CrowdSim_release.cl"
            , "line":398
            , "level":0
          }
        ]
      ]
    }
    , {
      "name":"Block14"
      , "data":
      ["No", "n/a", "n/a"]
      , "debug":
      [
        [
          {
            "filename":"CrowdSim_release.cl"
            , "line":366
            , "level":1
          }
          , {
            "filename":"CrowdSim_release.cl"
            , "line":366
            , "level":1
          }
          , {
            "filename":"CrowdSim_release.cl"
            , "line":372
            , "level":1
          }
          , {
            "filename":"CrowdSim_release.cl"
            , "line":392
            , "level":1
          }
        ]
      ]
    }
    , {
      "name":"Block16"
      , "data":
      ["No", "n/a", "n/a"]
      , "debug":
      [
        [
          {
            "filename":"CrowdSim_release.cl"
            , "line":468
            , "level":0
          }
        ]
      ]
    }
    , {
      "name":"Block19"
      , "data":
      ["No", "n/a", "n/a"]
      , "debug":
      [
        [
          {
            "filename":"CrowdSim_release.cl"
            , "line":450
            , "level":1
          }
          , {
            "filename":"CrowdSim_release.cl"
            , "line":450
            , "level":1
          }
          , {
            "filename":"CrowdSim_release.cl"
            , "line":355
            , "level":1
          }
          , {
            "filename":"CrowdSim_release.cl"
            , "line":398
            , "level":1
          }
        ]
      ]
    }
    , {
      "name":"Block20"
      , "data":
      ["No", "n/a", "n/a"]
      , "debug":
      [
        [
          {
            "filename":"CrowdSim_release.cl"
            , "line":366
            , "level":2
          }
          , {
            "filename":"CrowdSim_release.cl"
            , "line":366
            , "level":2
          }
          , {
            "filename":"CrowdSim_release.cl"
            , "line":372
            , "level":2
          }
          , {
            "filename":"CrowdSim_release.cl"
            , "line":392
            , "level":2
          }
        ]
      ]
    }
    , {
      "name":"Block17"
      , "data":
      ["No", "n/a", "n/a"]
      , "debug":
      [
        [
          {
            "filename":"CrowdSim_release.cl"
            , "line":477
            , "level":1
          }
        ]
      ]
    }
    , {
      "name":"Block2"
      , "data":
      ["No", "n/a", "n/a"]
      , "debug":
      [
        [
          {
            "filename":"CrowdSim_release.cl"
            , "line":527
            , "level":0
          }
        ]
      ]
    }
    , {
      "name":"Block3"
      , "data":
      ["No", "n/a", "n/a"]
      , "debug":
      [
        [
          {
            "filename":"CrowdSim_release.cl"
            , "line":527
            , "level":1
          }
          , {
            "filename":"CrowdSim_release.cl"
            , "line":266
            , "level":1
          }
        ]
      ]
    }
    , {
      "name":"Block4"
      , "data":
      ["No", "n/a", "n/a"]
      , "debug":
      [
        [
        ]
      ]
    }
    , {
      "name":"Block5"
      , "data":
      ["No", "n/a", "n/a"]
      , "debug":
      [
        [
          {
            "filename":"CrowdSim_release.cl"
            , "line":267
            , "level":1
          }
        ]
      ]
    }
    , {
      "name":"Block6"
      , "data":
      ["No", "n/a", "n/a"]
      , "debug":
      [
        [
          {
            "filename":"CrowdSim_release.cl"
            , "line":222
            , "level":2
          }
        ]
      ]
    }
    , {
      "name":"Block11"
      , "data":
      ["No", "n/a", "n/a"]
      , "debug":
      [
        [
          {
            "filename":"CrowdSim_release.cl"
            , "line":546
            , "level":0
          }
        ]
      ]
    }
  ]
}
;var mavJSON={
  "nodes":
  [
    {
      "type":"kernel"
      , "id":136
      , "name":"computeNewVelocity"
      , "file":""
      , "line":"0"
      , "children":[
        {
          "type":"bb"
          , "id":3
          , "name":"Block0.wii_blk"
          , "file":""
          , "line":"0"
          , "details":
          {
            "Latency":"16"
          }
        }
        , {
          "type":"bb"
          , "id":4
          , "name":"Block1"
          , "file":""
          , "line":"0"
          , "children":[
            {
              "type":"inst"
              , "id":32
              , "name":"Store"
              , "file":"1"
              , "line":"335"
              , "details":
              {
                "Width":"32 bits"
                , "Type":"Burst-coalesced"
                , "Stall-free":"No"
                , "Start-Cycle":"8"
                , "Latency":"160"
              }
            }
            , {
              "type":"inst"
              , "id":33
              , "name":"Store"
              , "file":"1"
              , "line":"341"
              , "details":
              {
                "Width":"32 bits"
                , "Type":"Burst-coalesced"
                , "Stall-free":"No"
                , "Start-Cycle":"8"
                , "Latency":"160"
              }
            }
            , {
              "type":"inst"
              , "id":34
              , "name":"Load"
              , "file":"1"
              , "line":"343"
              , "details":
              {
                "Width":"32 bits"
                , "Type":"Burst-coalesced"
                , "Stall-free":"No"
                , "Start-Cycle":"8"
                , "Latency":"160"
              }
            }
            , {
              "type":"inst"
              , "id":35
              , "name":"Load"
              , "file":"1"
              , "line":"344"
              , "details":
              {
                "Width":"32 bits"
                , "Type":"Burst-coalesced"
                , "Stall-free":"No"
                , "Start-Cycle":"2"
                , "Latency":"160"
              }
            }
            , {
              "type":"inst"
              , "id":36
              , "name":"end"
              , "file":"1"
              , "line":"343"
              , "details":
              {
                "Start-Cycle":"168"
                , "Latency":"1"
                , "Additional Info":"Exit from a basic block. Control flow branches at this node to one or more merge nodes. There is no control branching between merge and branch node for the same basic block."
              }
            }
            , {
              "type":"inst"
              , "id":37
              , "name":"begin"
              , "file":""
              , "line":""
              , "details":
              {
                "Start-Cycle":"0"
                , "Latency":"1"
                , "Additional Info":"Entrance to a basic block. Control flow comes to this node from one or more branch nodes, unless it's the very first merge node in a kernel. There is no control branching between merge and branch node within the same basic block."
              }
            }
          ]
          , "details":
          {
            "Latency":"169"
          }
        }
        , {
          "type":"bb"
          , "id":5
          , "name":"Block2"
          , "file":""
          , "line":"0"
          , "II":1
          , "LoopInfo":"Entry to loop. "
          , "hasFmaxBottlenecks":"No"
          , "hasSubloops":"Yes"
          , "isPipelined":"No"
          , "loopTo":117
          , "details":
          {
            "Latency":"8134"
          }
        }
        , {
          "type":"bb"
          , "id":6
          , "name":"Block3"
          , "file":""
          , "line":"0"
          , "II":1
          , "LoopInfo":"Entry to loop. "
          , "hasFmaxBottlenecks":"No"
          , "hasSubloops":"Yes"
          , "isPipelined":"No"
          , "loopTo":60
          , "details":
          {
            "Latency":"387"
          }
        }
        , {
          "type":"bb"
          , "id":7
          , "name":"Block4"
          , "file":""
          , "line":"0"
          , "II":1
          , "LoopInfo":"Entry to loop. Loop is not pipelined. See Optimization Report for more information."
          , "hasFmaxBottlenecks":"No"
          , "hasSubloops":"No"
          , "isPipelined":"No"
          , "loopTo":66
          , "details":
          {
            "Latency":"1462"
          }
        }
        , {
          "type":"bb"
          , "id":8
          , "name":"Block5"
          , "file":""
          , "line":"0"
          , "II":1
          , "LoopInfo":"Entry to loop. "
          , "hasFmaxBottlenecks":"No"
          , "hasSubloops":"Yes"
          , "isPipelined":"No"
          , "children":[
            {
              "type":"inst"
              , "id":38
              , "name":"Load"
              , "file":"1"
              , "line":"268"
              , "details":
              {
                "Width":"32 bits"
                , "Type":"Burst-coalesced"
                , "Stall-free":"No"
                , "Start-Cycle":"2"
                , "Latency":"160"
              }
            }
            , {
              "type":"inst"
              , "id":39
              , "name":"Load"
              , "file":"1"
              , "line":"206"
              , "details":
              {
                "Width":"32 bits"
                , "Type":"Burst-coalesced"
                , "Stall-free":"No"
                , "Start-Cycle":"163"
                , "Latency":"160"
              }
            }
            , {
              "type":"inst"
              , "id":40
              , "name":"Load"
              , "file":"1"
              , "line":"207"
              , "details":
              {
                "Width":"64 bits"
                , "Type":"Burst-non-aligned"
                , "Stall-free":"No"
                , "Start-Cycle":"323"
                , "Latency":"160"
              }
            }
            , {
              "type":"inst"
              , "id":41
              , "name":"Load"
              , "file":"1"
              , "line":"207"
              , "details":
              {
                "Width":"64 bits"
                , "Type":"Burst-non-aligned"
                , "Stall-free":"No"
                , "Start-Cycle":"323"
                , "Latency":"160"
              }
            }
            , {
              "type":"inst"
              , "id":42
              , "name":"Load"
              , "file":"1"
              , "line":"210"
              , "details":
              {
                "Width":"64 bits"
                , "Type":"Burst-non-aligned"
                , "Stall-free":"No"
                , "Start-Cycle":"510"
                , "Latency":"160"
              }
            }
            , {
              "type":"inst"
              , "id":43
              , "name":"Store"
              , "file":"1"
              , "line":"212"
              , "details":
              {
                "Width":"64 bits"
                , "Type":"Burst-coalesced"
                , "Stall-free":"No"
                , "Start-Cycle":"675"
                , "Latency":"160"
              }
            }
            , {
              "type":"inst"
              , "id":44
              , "name":"Store"
              , "file":"1"
              , "line":"214"
              , "details":
              {
                "Width":"32 bits"
                , "Type":"Burst-coalesced"
                , "Stall-free":"No"
                , "Start-Cycle":"675"
                , "Latency":"160"
              }
            }
            , {
              "type":"inst"
              , "id":45
              , "name":"end"
              , "file":"1"
              , "line":"206"
              , "details":
              {
                "Start-Cycle":"835"
                , "Latency":"1"
                , "Additional Info":"Exit from a basic block. Control flow branches at this node to one or more merge nodes. There is no control branching between merge and branch node for the same basic block."
              }
            }
            , {
              "type":"inst"
              , "id":46
              , "name":"loop"
              , "file":""
              , "line":""
              , "loopTo":111
              , "details":
              {
                "Start-Cycle":"0"
                , "Latency":"1"
                , "Additional Info":"Entrance to a basic block. Control flow comes to this node from one or more branch nodes, unless it's the very first merge node in a kernel. There is no control branching between merge and branch node within the same basic block."
              }
            }
          ]
          , "details":
          {
            "Latency":"836"
          }
        }
        , {
          "type":"bb"
          , "id":9
          , "name":"Block6"
          , "file":""
          , "line":"0"
          , "II":1
          , "LoopInfo":"Loop is not pipelined. See Optimization Report for more information."
          , "hasFmaxBottlenecks":"No"
          , "hasSubloops":"No"
          , "isPipelined":"No"
          , "children":[
            {
              "type":"inst"
              , "id":47
              , "name":"Load"
              , "file":"1"
              , "line":"219"
              , "details":
              {
                "Width":"32 bits"
                , "Type":"Burst-coalesced"
                , "Stall-free":"No"
                , "Start-Cycle":"3"
                , "Latency":"160"
              }
            }
            , {
              "type":"inst"
              , "id":48
              , "name":"Load"
              , "file":"1"
              , "line":"220"
              , "details":
              {
                "Width":"64 bits"
                , "Type":"Burst-coalesced"
                , "Stall-free":"No"
                , "Start-Cycle":"166"
                , "Latency":"160"
              }
            }
            , {
              "type":"inst"
              , "id":49
              , "name":"Store"
              , "file":"1"
              , "line":"220"
              , "details":
              {
                "Width":"64 bits"
                , "Type":"Burst-coalesced"
                , "Stall-free":"No"
                , "Start-Cycle":"326"
                , "Latency":"160"
              }
            }
            , {
              "type":"inst"
              , "id":50
              , "name":"loop end"
              , "file":"1"
              , "line":"222"
              , "details":
              {
                "Start-Cycle":"486"
                , "Latency":"1"
                , "Additional Info":"Exit from a basic block. Control flow branches at this node to one or more merge nodes. There is no control branching between merge and branch node for the same basic block."
              }
            }
            , {
              "type":"inst"
              , "id":51
              , "name":"loop"
              , "file":""
              , "line":""
              , "loopTo":50
              , "details":
              {
                "Start-Cycle":"0"
                , "Latency":"1"
                , "Additional Info":"Entrance to a basic block. Control flow comes to this node from one or more branch nodes, unless it's the very first merge node in a kernel. There is no control branching between merge and branch node within the same basic block."
              }
            }
          ]
          , "details":
          {
            "Latency":"487"
          }
        }
        , {
          "type":"bb"
          , "id":10
          , "name":"Block7"
          , "file":""
          , "line":"0"
          , "II":1
          , "LoopInfo":"Exit which branches back to loop. "
          , "hasFmaxBottlenecks":"No"
          , "hasSubloops":"Yes"
          , "isPipelined":"No"
          , "children":[
            {
              "type":"inst"
              , "id":52
              , "name":"Load"
              , "file":"1"
              , "line":"266"
              , "details":
              {
                "Width":"64 bits"
                , "Type":"Burst-coalesced"
                , "Stall-free":"No"
                , "Start-Cycle":"2"
                , "Latency":"160"
              }
            }
            , {
              "type":"inst"
              , "id":53
              , "name":"Load"
              , "file":"1"
              , "line":"274"
              , "details":
              {
                "Width":"256 bits"
                , "Type":"Burst-coalesced"
                , "Stall-free":"No"
                , "Start-Cycle":"165"
                , "Latency":"160"
              }
            }
            , {
              "type":"inst"
              , "id":54
              , "name":"Load"
              , "file":"1"
              , "line":"274"
              , "details":
              {
                "Width":"64 bits"
                , "Type":"Burst-coalesced"
                , "Stall-free":"No"
                , "Start-Cycle":"326"
                , "Latency":"160"
              }
            }
            , {
              "type":"inst"
              , "id":55
              , "name":"Load"
              , "file":"1"
              , "line":"274"
              , "details":
              {
                "Width":"256 bits"
                , "Type":"Burst-coalesced"
                , "Stall-free":"No"
                , "Start-Cycle":"326"
                , "Latency":"160"
              }
            }
            , {
              "type":"inst"
              , "id":56
              , "name":"Load"
              , "file":"1"
              , "line":"527"
              , "details":
              {
                "Width":"256 bits"
                , "Type":"Burst-coalesced"
                , "Stall-free":"No"
                , "Start-Cycle":"326"
                , "Latency":"160"
              }
            }
            , {
              "type":"inst"
              , "id":57
              , "name":"Store"
              , "file":"1"
              , "line":"527"
              , "details":
              {
                "Width":"32 bits"
                , "Type":"Burst-coalesced"
                , "Stall-free":"No"
                , "Start-Cycle":"534"
                , "Latency":"160"
              }
            }
            , {
              "type":"inst"
              , "id":58
              , "name":"Load"
              , "file":"1"
              , "line":"527"
              , "details":
              {
                "Width":"32 bits"
                , "Type":"Burst-coalesced"
                , "Stall-free":"No"
                , "Start-Cycle":"534"
                , "Latency":"160"
              }
            }
            , {
              "type":"inst"
              , "id":59
              , "name":"Store"
              , "file":"1"
              , "line":"527"
              , "details":
              {
                "Width":"128 bits"
                , "Type":"Burst-non-aligned"
                , "Stall-free":"No"
                , "Start-Cycle":"694"
                , "Latency":"160"
              }
            }
            , {
              "type":"inst"
              , "id":60
              , "name":"end"
              , "file":"1"
              , "line":"266"
              , "details":
              {
                "Start-Cycle":"854"
                , "Latency":"1"
                , "Additional Info":"Exit from a basic block. Control flow branches at this node to one or more merge nodes. There is no control branching between merge and branch node for the same basic block."
              }
            }
            , {
              "type":"inst"
              , "id":61
              , "name":"begin"
              , "file":""
              , "line":""
              , "details":
              {
                "Start-Cycle":"0"
                , "Latency":"1"
                , "Additional Info":"Entrance to a basic block. Control flow comes to this node from one or more branch nodes, unless it's the very first merge node in a kernel. There is no control branching between merge and branch node within the same basic block."
              }
            }
          ]
          , "details":
          {
            "Latency":"855"
          }
        }
        , {
          "type":"bb"
          , "id":11
          , "name":"Block8"
          , "file":""
          , "line":"0"
          , "details":
          {
            "Latency":"2"
          }
        }
        , {
          "type":"bb"
          , "id":12
          , "name":"Block9"
          , "file":""
          , "line":"0"
          , "details":
          {
            "Latency":"2"
          }
        }
        , {
          "type":"bb"
          , "id":13
          , "name":"Block10"
          , "file":""
          , "line":"0"
          , "II":1
          , "LoopInfo":"Exit which branches back to loop. Loop is not pipelined. See Optimization Report for more information."
          , "hasFmaxBottlenecks":"No"
          , "hasSubloops":"No"
          , "isPipelined":"No"
          , "children":[
            {
              "type":"inst"
              , "id":62
              , "name":"Store"
              , "file":"1"
              , "line":"527"
              , "details":
              {
                "Width":"32 bits"
                , "Type":"Burst-coalesced"
                , "Stall-free":"No"
                , "Start-Cycle":"2"
                , "Latency":"160"
              }
            }
            , {
              "type":"inst"
              , "id":63
              , "name":"Store"
              , "file":"1"
              , "line":"527"
              , "details":
              {
                "Width":"32 bits"
                , "Type":"Burst-coalesced"
                , "Stall-free":"No"
                , "Start-Cycle":"162"
                , "Latency":"160"
              }
            }
            , {
              "type":"inst"
              , "id":64
              , "name":"Store"
              , "file":"1"
              , "line":"527"
              , "details":
              {
                "Width":"128 bits"
                , "Type":"Burst-non-aligned"
                , "Stall-free":"No"
                , "Start-Cycle":"322"
                , "Latency":"160"
              }
            }
            , {
              "type":"inst"
              , "id":65
              , "name":"Load"
              , "file":"1"
              , "line":"527"
              , "details":
              {
                "Width":"32 bits"
                , "Type":"Burst-coalesced"
                , "Stall-free":"No"
                , "Start-Cycle":"322"
                , "Latency":"160"
              }
            }
            , {
              "type":"inst"
              , "id":66
              , "name":"end"
              , "file":"0"
              , "line":"0"
              , "details":
              {
                "Start-Cycle":"482"
                , "Latency":"1"
                , "Additional Info":"Exit from a basic block. Control flow branches at this node to one or more merge nodes. There is no control branching between merge and branch node for the same basic block."
              }
            }
            , {
              "type":"inst"
              , "id":67
              , "name":"begin"
              , "file":""
              , "line":""
              , "details":
              {
                "Start-Cycle":"0"
                , "Latency":"1"
                , "Additional Info":"Entrance to a basic block. Control flow comes to this node from one or more branch nodes, unless it's the very first merge node in a kernel. There is no control branching between merge and branch node within the same basic block."
              }
            }
          ]
          , "details":
          {
            "Latency":"483"
          }
        }
        , {
          "type":"bb"
          , "id":14
          , "name":"Block11"
          , "file":""
          , "line":"0"
          , "II":1
          , "LoopInfo":"Loop is not pipelined. See Optimization Report for more information."
          , "hasFmaxBottlenecks":"No"
          , "hasSubloops":"No"
          , "isPipelined":"No"
          , "children":[
            {
              "type":"inst"
              , "id":68
              , "name":"Load"
              , "file":"1"
              , "line":"547"
              , "details":
              {
                "Width":"32 bits"
                , "Type":"Burst-coalesced"
                , "Stall-free":"No"
                , "Start-Cycle":"3"
                , "Latency":"160"
              }
            }
            , {
              "type":"inst"
              , "id":69
              , "name":"Load"
              , "file":"1"
              , "line":"549"
              , "details":
              {
                "Width":"64 bits"
                , "Type":"Burst-non-aligned"
                , "Stall-free":"No"
                , "Start-Cycle":"164"
                , "Latency":"160"
              }
            }
            , {
              "type":"inst"
              , "id":70
              , "name":"Load"
              , "file":"1"
              , "line":"550"
              , "details":
              {
                "Width":"64 bits"
                , "Type":"Burst-non-aligned"
                , "Stall-free":"No"
                , "Start-Cycle":"164"
                , "Latency":"160"
              }
            }
            , {
              "type":"inst"
              , "id":71
              , "name":"Load"
              , "file":"1"
              , "line":"552"
              , "details":
              {
                "Width":"32 bits"
                , "Type":"Burst-coalesced"
                , "Stall-free":"No"
                , "Start-Cycle":"164"
                , "Latency":"160"
              }
            }
            , {
              "type":"inst"
              , "id":72
              , "name":"Store"
              , "file":"1"
              , "line":"607"
              , "details":
              {
                "Width":"32 bits"
                , "Type":"Burst-coalesced"
                , "Stall-free":"No"
                , "Start-Cycle":"446"
                , "Latency":"4"
              }
            }
            , {
              "type":"inst"
              , "id":73
              , "name":"Store"
              , "file":"1"
              , "line":"607"
              , "details":
              {
                "Width":"128 bits"
                , "Type":"Burst-coalesced"
                , "Stall-free":"No"
                , "Start-Cycle":"446"
                , "Latency":"160"
              }
            }
            , {
              "type":"inst"
              , "id":74
              , "name":"loop end"
              , "file":"1"
              , "line":"546"
              , "details":
              {
                "Start-Cycle":"606"
                , "Latency":"1"
                , "Additional Info":"Exit from a basic block. Control flow branches at this node to one or more merge nodes. There is no control branching between merge and branch node for the same basic block."
              }
            }
            , {
              "type":"inst"
              , "id":75
              , "name":"loop"
              , "file":""
              , "line":""
              , "loopTo":74
              , "details":
              {
                "Start-Cycle":"0"
                , "Latency":"1"
                , "Additional Info":"Entrance to a basic block. Control flow comes to this node from one or more branch nodes, unless it's the very first merge node in a kernel. There is no control branching between merge and branch node within the same basic block."
              }
            }
          ]
          , "details":
          {
            "Latency":"607"
          }
        }
        , {
          "type":"bb"
          , "id":15
          , "name":"Block12"
          , "file":""
          , "line":"0"
          , "children":[
            {
              "type":"inst"
              , "id":76
              , "name":"Load"
              , "file":"1"
              , "line":"610"
              , "details":
              {
                "Width":"32 bits"
                , "Type":"Burst-coalesced"
                , "Stall-free":"No"
                , "Start-Cycle":"2"
                , "Latency":"160"
              }
            }
            , {
              "type":"inst"
              , "id":77
              , "name":"Load"
              , "file":"1"
              , "line":"610"
              , "details":
              {
                "Width":"64 bits"
                , "Type":"Burst-non-aligned"
                , "Stall-free":"No"
                , "Start-Cycle":"2"
                , "Latency":"160"
              }
            }
            , {
              "type":"inst"
              , "id":78
              , "name":"Load"
              , "file":"1"
              , "line":"451"
              , "details":
              {
                "Width":"128 bits"
                , "Type":"Burst-coalesced"
                , "Stall-free":"No"
                , "Start-Cycle":"2"
                , "Latency":"160"
              }
            }
            , {
              "type":"inst"
              , "id":79
              , "name":"Store"
              , "file":"1"
              , "line":"442"
              , "details":
              {
                "Width":"64 bits"
                , "Type":"Burst-coalesced"
                , "Stall-free":"No"
                , "Start-Cycle":"221"
                , "Latency":"160"
              }
            }
            , {
              "type":"inst"
              , "id":80
              , "name":"end"
              , "file":"0"
              , "line":"0"
              , "details":
              {
                "Start-Cycle":"381"
                , "Latency":"1"
                , "Additional Info":"Exit from a basic block. Control flow branches at this node to one or more merge nodes. There is no control branching between merge and branch node for the same basic block."
              }
            }
            , {
              "type":"inst"
              , "id":81
              , "name":"begin"
              , "file":""
              , "line":""
              , "details":
              {
                "Start-Cycle":"0"
                , "Latency":"1"
                , "Additional Info":"Entrance to a basic block. Control flow comes to this node from one or more branch nodes, unless it's the very first merge node in a kernel. There is no control branching between merge and branch node within the same basic block."
              }
            }
          ]
          , "details":
          {
            "Latency":"382"
          }
        }
        , {
          "type":"bb"
          , "id":16
          , "name":"Block13"
          , "file":""
          , "line":"0"
          , "II":1
          , "LoopInfo":"Entry to loop. "
          , "hasFmaxBottlenecks":"No"
          , "hasSubloops":"Yes"
          , "isPipelined":"No"
          , "loopTo":87
          , "details":
          {
            "Latency":"31"
          }
        }
        , {
          "type":"bb"
          , "id":17
          , "name":"Block14"
          , "file":""
          , "line":"0"
          , "II":1
          , "LoopInfo":"Loop is not pipelined. See Optimization Report for more information."
          , "hasFmaxBottlenecks":"No"
          , "hasSubloops":"No"
          , "isPipelined":"No"
          , "children":[
            {
              "type":"inst"
              , "id":82
              , "name":"Load"
              , "file":"1"
              , "line":"367"
              , "details":
              {
                "Width":"128 bits"
                , "Type":"Burst-coalesced"
                , "Stall-free":"No"
                , "Start-Cycle":"3"
                , "Latency":"160"
              }
            }
            , {
              "type":"inst"
              , "id":83
              , "name":"loop end"
              , "file":"1"
              , "line":"366"
              , "details":
              {
                "Start-Cycle":"210"
                , "Latency":"1"
                , "Additional Info":"Exit from a basic block. Control flow branches at this node to one or more merge nodes. There is no control branching between merge and branch node for the same basic block."
              }
            }
            , {
              "type":"inst"
              , "id":84
              , "name":"loop"
              , "file":""
              , "line":""
              , "loopTo":83
              , "details":
              {
                "Start-Cycle":"0"
                , "Latency":"1"
                , "Additional Info":"Entrance to a basic block. Control flow comes to this node from one or more branch nodes, unless it's the very first merge node in a kernel. There is no control branching between merge and branch node within the same basic block."
              }
            }
          ]
          , "details":
          {
            "Latency":"211"
          }
        }
        , {
          "type":"bb"
          , "id":18
          , "name":"Block15"
          , "file":""
          , "line":"0"
          , "II":1
          , "LoopInfo":"Exit which branches back to loop. "
          , "hasFmaxBottlenecks":"No"
          , "hasSubloops":"Yes"
          , "isPipelined":"No"
          , "children":[
            {
              "type":"inst"
              , "id":85
              , "name":"Store"
              , "file":"1"
              , "line":"417"
              , "details":
              {
                "Width":"64 bits"
                , "Type":"Burst-coalesced"
                , "Stall-free":"No"
                , "Start-Cycle":"62"
                , "Latency":"160"
              }
            }
            , {
              "type":"inst"
              , "id":86
              , "name":"Load"
              , "file":"1"
              , "line":"451"
              , "details":
              {
                "Width":"128 bits"
                , "Type":"Burst-coalesced"
                , "Stall-free":"No"
                , "Start-Cycle":"3"
                , "Latency":"160"
              }
            }
            , {
              "type":"inst"
              , "id":87
              , "name":"end"
              , "file":"1"
              , "line":"355"
              , "details":
              {
                "Start-Cycle":"222"
                , "Latency":"1"
                , "Additional Info":"Exit from a basic block. Control flow branches at this node to one or more merge nodes. There is no control branching between merge and branch node for the same basic block."
              }
            }
            , {
              "type":"inst"
              , "id":88
              , "name":"begin"
              , "file":""
              , "line":""
              , "details":
              {
                "Start-Cycle":"0"
                , "Latency":"1"
                , "Additional Info":"Entrance to a basic block. Control flow comes to this node from one or more branch nodes, unless it's the very first merge node in a kernel. There is no control branching between merge and branch node within the same basic block."
              }
            }
          ]
          , "details":
          {
            "Latency":"223"
          }
        }
        , {
          "type":"bb"
          , "id":19
          , "name":"Block16"
          , "file":""
          , "line":"0"
          , "II":1
          , "LoopInfo":"Entry to loop. "
          , "hasFmaxBottlenecks":"No"
          , "hasSubloops":"Yes"
          , "isPipelined":"No"
          , "children":[
            {
              "type":"inst"
              , "id":89
              , "name":"Load"
              , "file":"1"
              , "line":"469"
              , "details":
              {
                "Width":"128 bits"
                , "Type":"Burst-coalesced"
                , "Stall-free":"No"
                , "Start-Cycle":"3"
                , "Latency":"160"
              }
            }
            , {
              "type":"inst"
              , "id":90
              , "name":"end"
              , "file":"1"
              , "line":"469"
              , "details":
              {
                "Start-Cycle":"192"
                , "Latency":"1"
                , "Additional Info":"Exit from a basic block. Control flow branches at this node to one or more merge nodes. There is no control branching between merge and branch node for the same basic block."
              }
            }
            , {
              "type":"inst"
              , "id":91
              , "name":"loop"
              , "file":""
              , "line":""
              , "loopTo":130
              , "details":
              {
                "Start-Cycle":"0"
                , "Latency":"1"
                , "Additional Info":"Entrance to a basic block. Control flow comes to this node from one or more branch nodes, unless it's the very first merge node in a kernel. There is no control branching between merge and branch node within the same basic block."
              }
            }
          ]
          , "details":
          {
            "Latency":"193"
          }
        }
        , {
          "type":"bb"
          , "id":20
          , "name":"Block17"
          , "file":""
          , "line":"0"
          , "II":1
          , "LoopInfo":"Loop is not pipelined. See Optimization Report for more information."
          , "hasFmaxBottlenecks":"No"
          , "hasSubloops":"No"
          , "isPipelined":"No"
          , "children":[
            {
              "type":"inst"
              , "id":92
              , "name":"Load"
              , "file":"1"
              , "line":"480"
              , "details":
              {
                "Width":"64 bits"
                , "Type":"Burst-coalesced"
                , "Stall-free":"No"
                , "Start-Cycle":"3"
                , "Latency":"160"
              }
            }
            , {
              "type":"inst"
              , "id":93
              , "name":"Load"
              , "file":"1"
              , "line":"490"
              , "details":
              {
                "Width":"64 bits"
                , "Type":"Burst-coalesced"
                , "Stall-free":"No"
                , "Start-Cycle":"212"
                , "Latency":"160"
              }
            }
            , {
              "type":"inst"
              , "id":94
              , "name":"Store"
              , "file":"1"
              , "line":"498"
              , "details":
              {
                "Width":"128 bits"
                , "Type":"Burst-coalesced"
                , "Stall-free":"No"
                , "Start-Cycle":"428"
                , "Latency":"160"
              }
            }
            , {
              "type":"inst"
              , "id":95
              , "name":"loop end"
              , "file":"1"
              , "line":"477"
              , "details":
              {
                "Start-Cycle":"588"
                , "Latency":"1"
                , "Additional Info":"Exit from a basic block. Control flow branches at this node to one or more merge nodes. There is no control branching between merge and branch node for the same basic block."
              }
            }
            , {
              "type":"inst"
              , "id":96
              , "name":"loop"
              , "file":""
              , "line":""
              , "loopTo":95
              , "details":
              {
                "Start-Cycle":"0"
                , "Latency":"1"
                , "Additional Info":"Entrance to a basic block. Control flow comes to this node from one or more branch nodes, unless it's the very first merge node in a kernel. There is no control branching between merge and branch node within the same basic block."
              }
            }
          ]
          , "details":
          {
            "Latency":"589"
          }
        }
        , {
          "type":"bb"
          , "id":21
          , "name":"Block18"
          , "file":""
          , "line":"0"
          , "children":[
            {
              "type":"inst"
              , "id":97
              , "name":"Store"
              , "file":"1"
              , "line":"438"
              , "details":
              {
                "Width":"64 bits"
                , "Type":"Burst-coalesced"
                , "Stall-free":"No"
                , "Start-Cycle":"60"
                , "Latency":"160"
              }
            }
            , {
              "type":"inst"
              , "id":98
              , "name":"Load"
              , "file":"1"
              , "line":"451"
              , "details":
              {
                "Width":"128 bits"
                , "Type":"Burst-coalesced"
                , "Stall-free":"No"
                , "Start-Cycle":"1"
                , "Latency":"160"
              }
            }
            , {
              "type":"inst"
              , "id":99
              , "name":"end"
              , "file":"1"
              , "line":"450"
              , "details":
              {
                "Start-Cycle":"220"
                , "Latency":"1"
                , "Additional Info":"Exit from a basic block. Control flow branches at this node to one or more merge nodes. There is no control branching between merge and branch node for the same basic block."
              }
            }
            , {
              "type":"inst"
              , "id":100
              , "name":"begin"
              , "file":""
              , "line":""
              , "details":
              {
                "Start-Cycle":"0"
                , "Latency":"1"
                , "Additional Info":"Entrance to a basic block. Control flow comes to this node from one or more branch nodes, unless it's the very first merge node in a kernel. There is no control branching between merge and branch node within the same basic block."
              }
            }
          ]
          , "details":
          {
            "Latency":"221"
          }
        }
        , {
          "type":"bb"
          , "id":22
          , "name":"Block19"
          , "file":""
          , "line":"0"
          , "II":1
          , "LoopInfo":"Entry to loop. "
          , "hasFmaxBottlenecks":"No"
          , "hasSubloops":"Yes"
          , "isPipelined":"No"
          , "loopTo":106
          , "details":
          {
            "Latency":"31"
          }
        }
        , {
          "type":"bb"
          , "id":23
          , "name":"Block20"
          , "file":""
          , "line":"0"
          , "II":1
          , "LoopInfo":"Loop is not pipelined. See Optimization Report for more information."
          , "hasFmaxBottlenecks":"No"
          , "hasSubloops":"No"
          , "isPipelined":"No"
          , "children":[
            {
              "type":"inst"
              , "id":101
              , "name":"Load"
              , "file":"1"
              , "line":"367"
              , "details":
              {
                "Width":"128 bits"
                , "Type":"Burst-coalesced"
                , "Stall-free":"No"
                , "Start-Cycle":"3"
                , "Latency":"160"
              }
            }
            , {
              "type":"inst"
              , "id":102
              , "name":"loop end"
              , "file":"1"
              , "line":"366"
              , "details":
              {
                "Start-Cycle":"210"
                , "Latency":"1"
                , "Additional Info":"Exit from a basic block. Control flow branches at this node to one or more merge nodes. There is no control branching between merge and branch node for the same basic block."
              }
            }
            , {
              "type":"inst"
              , "id":103
              , "name":"loop"
              , "file":""
              , "line":""
              , "loopTo":102
              , "details":
              {
                "Start-Cycle":"0"
                , "Latency":"1"
                , "Additional Info":"Entrance to a basic block. Control flow comes to this node from one or more branch nodes, unless it's the very first merge node in a kernel. There is no control branching between merge and branch node within the same basic block."
              }
            }
          ]
          , "details":
          {
            "Latency":"211"
          }
        }
        , {
          "type":"bb"
          , "id":24
          , "name":"Block21"
          , "file":""
          , "line":"0"
          , "II":1
          , "LoopInfo":"Exit which branches back to loop. "
          , "hasFmaxBottlenecks":"No"
          , "hasSubloops":"Yes"
          , "isPipelined":"No"
          , "children":[
            {
              "type":"inst"
              , "id":104
              , "name":"Store"
              , "file":"1"
              , "line":"405"
              , "details":
              {
                "Width":"64 bits"
                , "Type":"Burst-coalesced"
                , "Stall-free":"No"
                , "Start-Cycle":"62"
                , "Latency":"160"
              }
            }
            , {
              "type":"inst"
              , "id":105
              , "name":"Load"
              , "file":"1"
              , "line":"451"
              , "details":
              {
                "Width":"128 bits"
                , "Type":"Burst-coalesced"
                , "Stall-free":"No"
                , "Start-Cycle":"3"
                , "Latency":"160"
              }
            }
            , {
              "type":"inst"
              , "id":106
              , "name":"end"
              , "file":"1"
              , "line":"355"
              , "details":
              {
                "Start-Cycle":"222"
                , "Latency":"1"
                , "Additional Info":"Exit from a basic block. Control flow branches at this node to one or more merge nodes. There is no control branching between merge and branch node for the same basic block."
              }
            }
            , {
              "type":"inst"
              , "id":107
              , "name":"begin"
              , "file":""
              , "line":""
              , "details":
              {
                "Start-Cycle":"0"
                , "Latency":"1"
                , "Additional Info":"Entrance to a basic block. Control flow comes to this node from one or more branch nodes, unless it's the very first merge node in a kernel. There is no control branching between merge and branch node within the same basic block."
              }
            }
          ]
          , "details":
          {
            "Latency":"223"
          }
        }
        , {
          "type":"bb"
          , "id":25
          , "name":"Block22"
          , "file":""
          , "line":"0"
          , "details":
          {
            "Latency":"2"
          }
        }
        , {
          "type":"bb"
          , "id":26
          , "name":"Block23"
          , "file":""
          , "line":"0"
          , "II":1
          , "LoopInfo":"Exit which branches back to loop. "
          , "hasFmaxBottlenecks":"No"
          , "hasSubloops":"Yes"
          , "isPipelined":"No"
          , "children":[
            {
              "type":"inst"
              , "id":108
              , "name":"Load"
              , "file":"1"
              , "line":"225"
              , "details":
              {
                "Width":"32 bits"
                , "Type":"Burst-coalesced"
                , "Stall-free":"No"
                , "Start-Cycle":"1"
                , "Latency":"160"
              }
            }
            , {
              "type":"inst"
              , "id":109
              , "name":"Store"
              , "file":"1"
              , "line":"224"
              , "details":
              {
                "Width":"64 bits"
                , "Type":"Burst-coalesced"
                , "Stall-free":"No"
                , "Start-Cycle":"161"
                , "Latency":"160"
              }
            }
            , {
              "type":"inst"
              , "id":110
              , "name":"Load"
              , "file":"1"
              , "line":"228"
              , "details":
              {
                "Width":"32 bits"
                , "Type":"Burst-coalesced"
                , "Stall-free":"No"
                , "Start-Cycle":"321"
                , "Latency":"160"
              }
            }
            , {
              "type":"inst"
              , "id":111
              , "name":"loop end"
              , "file":"1"
              , "line":"267"
              , "details":
              {
                "Start-Cycle":"481"
                , "Latency":"1"
                , "Additional Info":"Exit from a basic block. Control flow branches at this node to one or more merge nodes. There is no control branching between merge and branch node for the same basic block."
              }
            }
            , {
              "type":"inst"
              , "id":112
              , "name":"begin"
              , "file":""
              , "line":""
              , "details":
              {
                "Start-Cycle":"0"
                , "Latency":"1"
                , "Additional Info":"Entrance to a basic block. Control flow comes to this node from one or more branch nodes, unless it's the very first merge node in a kernel. There is no control branching between merge and branch node within the same basic block."
              }
            }
          ]
          , "details":
          {
            "Latency":"482"
          }
        }
        , {
          "type":"bb"
          , "id":27
          , "name":"Block24"
          , "file":""
          , "line":"0"
          , "children":[
            {
              "type":"inst"
              , "id":113
              , "name":"Load"
              , "file":"1"
              , "line":"206"
              , "details":
              {
                "Width":"32 bits"
                , "Type":"Burst-coalesced"
                , "Stall-free":"No"
                , "Start-Cycle":"2"
                , "Latency":"160"
              }
            }
            , {
              "type":"inst"
              , "id":114
              , "name":"end"
              , "file":"0"
              , "line":"0"
              , "details":
              {
                "Start-Cycle":"162"
                , "Latency":"1"
                , "Additional Info":"Exit from a basic block. Control flow branches at this node to one or more merge nodes. There is no control branching between merge and branch node for the same basic block."
              }
            }
            , {
              "type":"inst"
              , "id":115
              , "name":"begin"
              , "file":""
              , "line":""
              , "details":
              {
                "Start-Cycle":"0"
                , "Latency":"1"
                , "Additional Info":"Entrance to a basic block. Control flow comes to this node from one or more branch nodes, unless it's the very first merge node in a kernel. There is no control branching between merge and branch node within the same basic block."
              }
            }
          ]
          , "details":
          {
            "Latency":"163"
          }
        }
        , {
          "type":"bb"
          , "id":28
          , "name":"Block25"
          , "file":""
          , "line":"0"
          , "II":1
          , "LoopInfo":"Exit which branches back to loop. "
          , "hasFmaxBottlenecks":"No"
          , "hasSubloops":"Yes"
          , "isPipelined":"No"
          , "children":[
            {
              "type":"inst"
              , "id":116
              , "name":"Load"
              , "file":"1"
              , "line":"527"
              , "details":
              {
                "Width":"128 bits"
                , "Type":"Burst-non-aligned"
                , "Stall-free":"No"
                , "Start-Cycle":"3"
                , "Latency":"160"
              }
            }
            , {
              "type":"inst"
              , "id":117
              , "name":"end"
              , "file":"1"
              , "line":"527"
              , "details":
              {
                "Start-Cycle":"163"
                , "Latency":"1"
                , "Additional Info":"Exit from a basic block. Control flow branches at this node to one or more merge nodes. There is no control branching between merge and branch node for the same basic block."
              }
            }
            , {
              "type":"inst"
              , "id":118
              , "name":"begin"
              , "file":""
              , "line":""
              , "details":
              {
                "Start-Cycle":"0"
                , "Latency":"1"
                , "Additional Info":"Entrance to a basic block. Control flow comes to this node from one or more branch nodes, unless it's the very first merge node in a kernel. There is no control branching between merge and branch node within the same basic block."
              }
            }
          ]
          , "details":
          {
            "Latency":"164"
          }
        }
        , {
          "type":"bb"
          , "id":29
          , "name":"Block26"
          , "file":""
          , "line":"0"
          , "children":[
            {
              "type":"inst"
              , "id":119
              , "name":"Load"
              , "file":"1"
              , "line":"536"
              , "details":
              {
                "Width":"64 bits"
                , "Type":"Burst-non-aligned"
                , "Stall-free":"No"
                , "Start-Cycle":"22"
                , "Latency":"160"
              }
            }
            , {
              "type":"inst"
              , "id":120
              , "name":"Load"
              , "file":"1"
              , "line":"542"
              , "details":
              {
                "Width":"64 bits"
                , "Type":"Burst-non-aligned"
                , "Stall-free":"No"
                , "Start-Cycle":"19"
                , "Latency":"160"
              }
            }
            , {
              "type":"inst"
              , "id":121
              , "name":"Store"
              , "file":"1"
              , "line":"534"
              , "details":
              {
                "Width":"32 bits"
                , "Type":"Burst-coalesced"
                , "Stall-free":"No"
                , "Start-Cycle":"22"
                , "Latency":"160"
              }
            }
            , {
              "type":"inst"
              , "id":122
              , "name":"Load"
              , "file":"1"
              , "line":"535"
              , "details":
              {
                "Width":"32 bits"
                , "Type":"Burst-coalesced"
                , "Stall-free":"No"
                , "Start-Cycle":"22"
                , "Latency":"160"
              }
            }
            , {
              "type":"inst"
              , "id":123
              , "name":"Load"
              , "file":"1"
              , "line":"537"
              , "details":
              {
                "Width":"64 bits"
                , "Type":"Burst-non-aligned"
                , "Stall-free":"No"
                , "Start-Cycle":"22"
                , "Latency":"160"
              }
            }
            , {
              "type":"inst"
              , "id":124
              , "name":"Load"
              , "file":"1"
              , "line":"541"
              , "details":
              {
                "Width":"32 bits"
                , "Type":"Burst-coalesced"
                , "Stall-free":"No"
                , "Start-Cycle":"2"
                , "Latency":"160"
              }
            }
            , {
              "type":"inst"
              , "id":125
              , "name":"Load"
              , "file":"1"
              , "line":"543"
              , "details":
              {
                "Width":"32 bits"
                , "Type":"Burst-coalesced"
                , "Stall-free":"No"
                , "Start-Cycle":"19"
                , "Latency":"160"
              }
            }
            , {
              "type":"inst"
              , "id":126
              , "name":"end"
              , "file":"0"
              , "line":"0"
              , "details":
              {
                "Start-Cycle":"182"
                , "Latency":"1"
                , "Additional Info":"Exit from a basic block. Control flow branches at this node to one or more merge nodes. There is no control branching between merge and branch node for the same basic block."
              }
            }
            , {
              "type":"inst"
              , "id":127
              , "name":"begin"
              , "file":""
              , "line":""
              , "details":
              {
                "Start-Cycle":"0"
                , "Latency":"1"
                , "Additional Info":"Entrance to a basic block. Control flow comes to this node from one or more branch nodes, unless it's the very first merge node in a kernel. There is no control branching between merge and branch node within the same basic block."
              }
            }
          ]
          , "details":
          {
            "Latency":"183"
          }
        }
        , {
          "type":"bb"
          , "id":30
          , "name":"Block27"
          , "file":""
          , "line":"0"
          , "II":1
          , "LoopInfo":"Exit which branches back to loop. "
          , "hasFmaxBottlenecks":"No"
          , "hasSubloops":"Yes"
          , "isPipelined":"No"
          , "children":[
            {
              "type":"inst"
              , "id":128
              , "name":"Store"
              , "file":"1"
              , "line":"455"
              , "details":
              {
                "Width":"64 bits"
                , "Type":"Burst-coalesced"
                , "Stall-free":"No"
                , "Start-Cycle":"30"
                , "Latency":"160"
              }
            }
            , {
              "type":"inst"
              , "id":129
              , "name":"Store"
              , "file":"1"
              , "line":"509"
              , "details":
              {
                "Width":"64 bits"
                , "Type":"Burst-coalesced"
                , "Stall-free":"No"
                , "Start-Cycle":"190"
                , "Latency":"160"
              }
            }
            , {
              "type":"inst"
              , "id":130
              , "name":"loop end"
              , "file":"1"
              , "line":"468"
              , "details":
              {
                "Start-Cycle":"350"
                , "Latency":"1"
                , "Additional Info":"Exit from a basic block. Control flow branches at this node to one or more merge nodes. There is no control branching between merge and branch node for the same basic block."
              }
            }
            , {
              "type":"inst"
              , "id":131
              , "name":"begin"
              , "file":""
              , "line":""
              , "details":
              {
                "Start-Cycle":"0"
                , "Latency":"1"
                , "Additional Info":"Entrance to a basic block. Control flow comes to this node from one or more branch nodes, unless it's the very first merge node in a kernel. There is no control branching between merge and branch node within the same basic block."
              }
            }
          ]
          , "details":
          {
            "Latency":"351"
          }
        }
        , {
          "type":"bb"
          , "id":31
          , "name":"Block28"
          , "file":""
          , "line":"0"
          , "children":[
            {
              "type":"inst"
              , "id":132
              , "name":"Store"
              , "file":"1"
              , "line":"455"
              , "details":
              {
                "Width":"64 bits"
                , "Type":"Burst-coalesced"
                , "Stall-free":"No"
                , "Start-Cycle":"1"
                , "Latency":"160"
              }
            }
            , {
              "type":"inst"
              , "id":133
              , "name":"end"
              , "file":"1"
              , "line":"612"
              , "details":
              {
                "Start-Cycle":"161"
                , "Latency":"1"
                , "Additional Info":"Exit from a basic block. Control flow branches at this node to one or more merge nodes. There is no control branching between merge and branch node for the same basic block."
              }
            }
            , {
              "type":"inst"
              , "id":134
              , "name":"begin"
              , "file":""
              , "line":""
              , "details":
              {
                "Start-Cycle":"0"
                , "Latency":"1"
                , "Additional Info":"Entrance to a basic block. Control flow comes to this node from one or more branch nodes, unless it's the very first merge node in a kernel. There is no control branching between merge and branch node within the same basic block."
              }
            }
          ]
          , "details":
          {
            "Latency":"162"
          }
        }
      ]
    }
    , {
      "type":"kernel"
      , "id":150
      , "name":"update"
      , "file":""
      , "line":"0"
      , "children":[
        {
          "type":"bb"
          , "id":142
          , "name":"Block29"
          , "file":""
          , "line":"0"
          , "children":[
            {
              "type":"inst"
              , "id":143
              , "name":"Load"
              , "file":"1"
              , "line":"628"
              , "details":
              {
                "Width":"64 bits"
                , "Type":"Burst-non-aligned"
                , "Stall-free":"No"
                , "Start-Cycle":"2"
                , "Latency":"160"
              }
            }
            , {
              "type":"inst"
              , "id":144
              , "name":"Load"
              , "file":"1"
              , "line":"629"
              , "details":
              {
                "Width":"64 bits"
                , "Type":"Burst-non-aligned"
                , "Stall-free":"No"
                , "Start-Cycle":"2"
                , "Latency":"160"
              }
            }
            , {
              "type":"inst"
              , "id":145
              , "name":"Store"
              , "file":"1"
              , "line":"628"
              , "details":
              {
                "Width":"64 bits"
                , "Type":"Burst-non-aligned"
                , "Stall-free":"No"
                , "Start-Cycle":"181"
                , "Latency":"4"
              }
            }
            , {
              "type":"inst"
              , "id":146
              , "name":"Store"
              , "file":"1"
              , "line":"629"
              , "details":
              {
                "Width":"64 bits"
                , "Type":"Burst-non-aligned"
                , "Stall-free":"No"
                , "Start-Cycle":"181"
                , "Latency":"4"
              }
            }
            , {
              "type":"inst"
              , "id":147
              , "name":"end"
              , "file":"1"
              , "line":"630"
              , "details":
              {
                "Start-Cycle":"185"
                , "Latency":"1"
                , "Additional Info":"Exit from a basic block. Control flow branches at this node to one or more merge nodes. There is no control branching between merge and branch node for the same basic block."
              }
            }
            , {
              "type":"inst"
              , "id":148
              , "name":"begin"
              , "file":""
              , "line":""
              , "details":
              {
                "Start-Cycle":"0"
                , "Latency":"1"
                , "Additional Info":"Entrance to a basic block. Control flow comes to this node from one or more branch nodes, unless it's the very first merge node in a kernel. There is no control branching between merge and branch node within the same basic block."
              }
            }
          ]
          , "details":
          {
            "Latency":"186"
          }
        }
      ]
    }
    , {
      "type":"memtype"
      , "id":137
      , "name":"Global Memory"
      , "file":""
      , "line":"0"
      , "children":[
        {
          "type":"memsys"
          , "id":138
          , "name":""
          , "file":""
          , "line":"0"
          , "replFactor":"0"
          , "banks":2
          , "pumping":0
          , "children":[
            {
              "type":"bank"
              , "id":139
              , "name":"Bank 0"
              , "file":""
              , "line":"0"
            }
            , {
              "type":"bank"
              , "id":140
              , "name":"Bank 1"
              , "file":""
              , "line":"0"
            }
          ]
        }
      ]
    }
  ]
  ,
  "links":
  [
    {
      "from":107
      , "to":104
    }
    ,
    {
      "from":52
      , "to":59
    }
    ,
    {
      "from":55
      , "to":59
    }
    ,
    {
      "from":54
      , "to":59
    }
    ,
    {
      "from":56
      , "to":59
    }
    ,
    {
      "from":57
      , "to":59
    }
    ,
    {
      "from":63
      , "to":64
    }
    ,
    {
      "from":37
      , "to":33
    }
    ,
    {
      "from":47
      , "to":49
    }
    ,
    {
      "from":48
      , "to":49
    }
    ,
    {
      "from":39
      , "to":41
    }
    ,
    {
      "from":38
      , "to":41
    }
    ,
    {
      "from":131
      , "to":128
    }
    ,
    {
      "from":88
      , "to":85
    }
    ,
    {
      "from":77
      , "to":79
    }
    ,
    {
      "from":76
      , "to":79
    }
    ,
    {
      "from":78
      , "to":79
    }
    ,
    {
      "from":46
      , "to":38
    }
    ,
    {
      "from":93
      , "to":94
    }
    ,
    {
      "from":92
      , "to":94
    }
    ,
    {
      "from":127
      , "to":119
    }
    ,
    {
      "from":52
      , "to":58
    }
    ,
    {
      "from":55
      , "to":58
    }
    ,
    {
      "from":54
      , "to":58
    }
    ,
    {
      "from":56
      , "to":58
    }
    ,
    {
      "from":53
      , "to":56
    }
    ,
    {
      "from":52
      , "to":56
    }
    ,
    {
      "from":127
      , "to":122
    }
    ,
    {
      "from":39
      , "to":40
    }
    ,
    {
      "from":53
      , "to":55
    }
    ,
    {
      "from":52
      , "to":55
    }
    ,
    {
      "from":92
      , "to":93
    }
    ,
    {
      "from":96
      , "to":92
    }
    ,
    {
      "from":37
      , "to":34
    }
    ,
    {
      "from":81
      , "to":76
    }
    ,
    {
      "from":115
      , "to":113
    }
    ,
    {
      "from":47
      , "to":48
    }
    ,
    {
      "from":127
      , "to":123
    }
    ,
    {
      "from":134
      , "to":132
    }
    ,
    {
      "from":38
      , "to":39
    }
    ,
    {
      "from":52
      , "to":54
    }
    ,
    {
      "from":67
      , "to":65
    }
    ,
    {
      "from":52
      , "to":53
    }
    ,
    {
      "from":118
      , "to":116
    }
    ,
    {
      "from":69
      , "to":72
    }
    ,
    {
      "from":70
      , "to":72
    }
    ,
    {
      "from":71
      , "to":72
    }
    ,
    {
      "from":100
      , "to":97
    }
    ,
    {
      "from":128
      , "to":129
    }
    ,
    {
      "from":62
      , "to":63
    }
    ,
    {
      "from":107
      , "to":105
    }
    ,
    {
      "from":42
      , "to":43
    }
    ,
    {
      "from":40
      , "to":43
    }
    ,
    {
      "from":41
      , "to":43
    }
    ,
    {
      "from":39
      , "to":43
    }
    ,
    {
      "from":68
      , "to":69
    }
    ,
    {
      "from":81
      , "to":77
    }
    ,
    {
      "from":127
      , "to":120
    }
    ,
    {
      "from":68
      , "to":70
    }
    ,
    {
      "from":100
      , "to":98
    }
    ,
    {
      "from":112
      , "to":108
    }
    ,
    {
      "from":61
      , "to":52
    }
    ,
    {
      "from":127
      , "to":124
    }
    ,
    {
      "from":37
      , "to":32
    }
    ,
    {
      "from":42
      , "to":44
    }
    ,
    {
      "from":40
      , "to":44
    }
    ,
    {
      "from":41
      , "to":44
    }
    ,
    {
      "from":39
      , "to":44
    }
    ,
    {
      "from":51
      , "to":47
    }
    ,
    {
      "from":81
      , "to":78
    }
    ,
    {
      "from":109
      , "to":110
    }
    ,
    {
      "from":40
      , "to":42
    }
    ,
    {
      "from":41
      , "to":42
    }
    ,
    {
      "from":39
      , "to":42
    }
    ,
    {
      "from":103
      , "to":101
    }
    ,
    {
      "from":52
      , "to":57
    }
    ,
    {
      "from":55
      , "to":57
    }
    ,
    {
      "from":54
      , "to":57
    }
    ,
    {
      "from":56
      , "to":57
    }
    ,
    {
      "from":108
      , "to":109
    }
    ,
    {
      "from":88
      , "to":86
    }
    ,
    {
      "from":37
      , "to":35
    }
    ,
    {
      "from":67
      , "to":62
    }
    ,
    {
      "from":127
      , "to":125
    }
    ,
    {
      "from":91
      , "to":89
    }
    ,
    {
      "from":69
      , "to":73
    }
    ,
    {
      "from":70
      , "to":73
    }
    ,
    {
      "from":71
      , "to":73
    }
    ,
    {
      "from":127
      , "to":121
    }
    ,
    {
      "from":75
      , "to":68
    }
    ,
    {
      "from":68
      , "to":71
    }
    ,
    {
      "from":84
      , "to":82
    }
    ,
    {
      "from":98
      , "to":99
    }
    ,
    {
      "from":97
      , "to":99
    }
    ,
    {
      "from":60
      , "to":6
    }
    ,
    {
      "from":5
      , "to":6
    }
    ,
    {
      "from":130
      , "to":91
    }
    ,
    {
      "from":133
      , "to":91
    }
    ,
    {
      "from":3
      , "to":37
    }
    ,
    {
      "from":82
      , "to":83
    }
    ,
    {
      "from":111
      , "to":118
    }
    ,
    {
      "from":87
      , "to":16
    }
    ,
    {
      "from":80
      , "to":16
    }
    ,
    {
      "from":34
      , "to":36
    }
    ,
    {
      "from":35
      , "to":36
    }
    ,
    {
      "from":33
      , "to":36
    }
    ,
    {
      "from":32
      , "to":36
    }
    ,
    {
      "from":83
      , "to":84
    }
    ,
    {
      "from":16
      , "to":84
    }
    ,
    {
      "from":12
      , "to":67
    }
    ,
    {
      "from":11
      , "to":67
    }
    ,
    {
      "from":110
      , "to":111
    }
    ,
    {
      "from":101
      , "to":102
    }
    ,
    {
      "from":132
      , "to":133
    }
    ,
    {
      "from":64
      , "to":66
    }
    ,
    {
      "from":65
      , "to":66
    }
    ,
    {
      "from":50
      , "to":51
    }
    ,
    {
      "from":45
      , "to":51
    }
    ,
    {
      "from":116
      , "to":117
    }
    ,
    {
      "from":105
      , "to":106
    }
    ,
    {
      "from":104
      , "to":106
    }
    ,
    {
      "from":12
      , "to":61
    }
    ,
    {
      "from":11
      , "to":61
    }
    ,
    {
      "from":50
      , "to":112
    }
    ,
    {
      "from":120
      , "to":126
    }
    ,
    {
      "from":125
      , "to":126
    }
    ,
    {
      "from":124
      , "to":126
    }
    ,
    {
      "from":123
      , "to":126
    }
    ,
    {
      "from":119
      , "to":126
    }
    ,
    {
      "from":122
      , "to":126
    }
    ,
    {
      "from":121
      , "to":126
    }
    ,
    {
      "from":102
      , "to":107
    }
    ,
    {
      "from":7
      , "to":12
    }
    ,
    {
      "from":117
      , "to":127
    }
    ,
    {
      "from":74
      , "to":75
    }
    ,
    {
      "from":126
      , "to":75
    }
    ,
    {
      "from":129
      , "to":130
    }
    ,
    {
      "from":106
      , "to":22
    }
    ,
    {
      "from":99
      , "to":22
    }
    ,
    {
      "from":117
      , "to":5
    }
    ,
    {
      "from":36
      , "to":5
    }
    ,
    {
      "from":60
      , "to":115
    }
    ,
    {
      "from":74
      , "to":81
    }
    ,
    {
      "from":89
      , "to":90
    }
    ,
    {
      "from":76
      , "to":80
    }
    ,
    {
      "from":77
      , "to":80
    }
    ,
    {
      "from":78
      , "to":80
    }
    ,
    {
      "from":79
      , "to":80
    }
    ,
    {
      "from":106
      , "to":131
    }
    ,
    {
      "from":95
      , "to":100
    }
    ,
    {
      "from":130
      , "to":25
    }
    ,
    {
      "from":7
      , "to":11
    }
    ,
    {
      "from":42
      , "to":45
    }
    ,
    {
      "from":40
      , "to":45
    }
    ,
    {
      "from":41
      , "to":45
    }
    ,
    {
      "from":39
      , "to":45
    }
    ,
    {
      "from":38
      , "to":45
    }
    ,
    {
      "from":44
      , "to":45
    }
    ,
    {
      "from":43
      , "to":45
    }
    ,
    {
      "from":102
      , "to":103
    }
    ,
    {
      "from":22
      , "to":103
    }
    ,
    {
      "from":47
      , "to":50
    }
    ,
    {
      "from":49
      , "to":50
    }
    ,
    {
      "from":72
      , "to":74
    }
    ,
    {
      "from":73
      , "to":74
    }
    ,
    {
      "from":111
      , "to":46
    }
    ,
    {
      "from":114
      , "to":46
    }
    ,
    {
      "from":87
      , "to":134
    }
    ,
    {
      "from":66
      , "to":7
    }
    ,
    {
      "from":6
      , "to":7
    }
    ,
    {
      "from":83
      , "to":88
    }
    ,
    {
      "from":59
      , "to":60
    }
    ,
    {
      "from":52
      , "to":60
    }
    ,
    {
      "from":55
      , "to":60
    }
    ,
    {
      "from":54
      , "to":60
    }
    ,
    {
      "from":56
      , "to":60
    }
    ,
    {
      "from":58
      , "to":60
    }
    ,
    {
      "from":92
      , "to":95
    }
    ,
    {
      "from":94
      , "to":95
    }
    ,
    {
      "from":113
      , "to":114
    }
    ,
    {
      "from":95
      , "to":96
    }
    ,
    {
      "from":90
      , "to":96
    }
    ,
    {
      "from":86
      , "to":87
    }
    ,
    {
      "from":85
      , "to":87
    }
    ,
    {
      "from":104
      , "to":139
    }
    ,
    {
      "from":104
      , "to":140
    }
    ,
    {
      "from":59
      , "to":139
    }
    ,
    {
      "from":59
      , "to":140
    }
    ,
    {
      "from":64
      , "to":139
    }
    ,
    {
      "from":64
      , "to":140
    }
    ,
    {
      "from":33
      , "to":139
    }
    ,
    {
      "from":33
      , "to":140
    }
    ,
    {
      "from":49
      , "to":139
    }
    ,
    {
      "from":49
      , "to":140
    }
    ,
    {
      "from":139
      , "to":41
    }
    ,
    {
      "from":140
      , "to":41
    }
    ,
    {
      "from":128
      , "to":139
    }
    ,
    {
      "from":128
      , "to":140
    }
    ,
    {
      "from":85
      , "to":139
    }
    ,
    {
      "from":85
      , "to":140
    }
    ,
    {
      "from":79
      , "to":139
    }
    ,
    {
      "from":79
      , "to":140
    }
    ,
    {
      "from":139
      , "to":38
    }
    ,
    {
      "from":140
      , "to":38
    }
    ,
    {
      "from":94
      , "to":139
    }
    ,
    {
      "from":94
      , "to":140
    }
    ,
    {
      "from":139
      , "to":119
    }
    ,
    {
      "from":140
      , "to":119
    }
    ,
    {
      "from":139
      , "to":58
    }
    ,
    {
      "from":140
      , "to":58
    }
    ,
    {
      "from":139
      , "to":56
    }
    ,
    {
      "from":140
      , "to":56
    }
    ,
    {
      "from":139
      , "to":122
    }
    ,
    {
      "from":140
      , "to":122
    }
    ,
    {
      "from":139
      , "to":40
    }
    ,
    {
      "from":140
      , "to":40
    }
    ,
    {
      "from":139
      , "to":55
    }
    ,
    {
      "from":140
      , "to":55
    }
    ,
    {
      "from":139
      , "to":93
    }
    ,
    {
      "from":140
      , "to":93
    }
    ,
    {
      "from":139
      , "to":92
    }
    ,
    {
      "from":140
      , "to":92
    }
    ,
    {
      "from":139
      , "to":34
    }
    ,
    {
      "from":140
      , "to":34
    }
    ,
    {
      "from":139
      , "to":76
    }
    ,
    {
      "from":140
      , "to":76
    }
    ,
    {
      "from":139
      , "to":113
    }
    ,
    {
      "from":140
      , "to":113
    }
    ,
    {
      "from":139
      , "to":48
    }
    ,
    {
      "from":140
      , "to":48
    }
    ,
    {
      "from":139
      , "to":123
    }
    ,
    {
      "from":140
      , "to":123
    }
    ,
    {
      "from":132
      , "to":139
    }
    ,
    {
      "from":132
      , "to":140
    }
    ,
    {
      "from":139
      , "to":39
    }
    ,
    {
      "from":140
      , "to":39
    }
    ,
    {
      "from":139
      , "to":54
    }
    ,
    {
      "from":140
      , "to":54
    }
    ,
    {
      "from":139
      , "to":65
    }
    ,
    {
      "from":140
      , "to":65
    }
    ,
    {
      "from":139
      , "to":53
    }
    ,
    {
      "from":140
      , "to":53
    }
    ,
    {
      "from":139
      , "to":116
    }
    ,
    {
      "from":140
      , "to":116
    }
    ,
    {
      "from":72
      , "to":139
    }
    ,
    {
      "from":72
      , "to":140
    }
    ,
    {
      "from":97
      , "to":139
    }
    ,
    {
      "from":97
      , "to":140
    }
    ,
    {
      "from":129
      , "to":139
    }
    ,
    {
      "from":129
      , "to":140
    }
    ,
    {
      "from":63
      , "to":139
    }
    ,
    {
      "from":63
      , "to":140
    }
    ,
    {
      "from":139
      , "to":105
    }
    ,
    {
      "from":140
      , "to":105
    }
    ,
    {
      "from":43
      , "to":139
    }
    ,
    {
      "from":43
      , "to":140
    }
    ,
    {
      "from":139
      , "to":69
    }
    ,
    {
      "from":140
      , "to":69
    }
    ,
    {
      "from":139
      , "to":77
    }
    ,
    {
      "from":140
      , "to":77
    }
    ,
    {
      "from":139
      , "to":120
    }
    ,
    {
      "from":140
      , "to":120
    }
    ,
    {
      "from":139
      , "to":70
    }
    ,
    {
      "from":140
      , "to":70
    }
    ,
    {
      "from":139
      , "to":98
    }
    ,
    {
      "from":140
      , "to":98
    }
    ,
    {
      "from":139
      , "to":108
    }
    ,
    {
      "from":140
      , "to":108
    }
    ,
    {
      "from":139
      , "to":52
    }
    ,
    {
      "from":140
      , "to":52
    }
    ,
    {
      "from":139
      , "to":124
    }
    ,
    {
      "from":140
      , "to":124
    }
    ,
    {
      "from":32
      , "to":139
    }
    ,
    {
      "from":32
      , "to":140
    }
    ,
    {
      "from":44
      , "to":139
    }
    ,
    {
      "from":44
      , "to":140
    }
    ,
    {
      "from":139
      , "to":47
    }
    ,
    {
      "from":140
      , "to":47
    }
    ,
    {
      "from":139
      , "to":78
    }
    ,
    {
      "from":140
      , "to":78
    }
    ,
    {
      "from":139
      , "to":110
    }
    ,
    {
      "from":140
      , "to":110
    }
    ,
    {
      "from":139
      , "to":42
    }
    ,
    {
      "from":140
      , "to":42
    }
    ,
    {
      "from":139
      , "to":101
    }
    ,
    {
      "from":140
      , "to":101
    }
    ,
    {
      "from":57
      , "to":139
    }
    ,
    {
      "from":57
      , "to":140
    }
    ,
    {
      "from":109
      , "to":139
    }
    ,
    {
      "from":109
      , "to":140
    }
    ,
    {
      "from":139
      , "to":86
    }
    ,
    {
      "from":140
      , "to":86
    }
    ,
    {
      "from":139
      , "to":35
    }
    ,
    {
      "from":140
      , "to":35
    }
    ,
    {
      "from":62
      , "to":139
    }
    ,
    {
      "from":62
      , "to":140
    }
    ,
    {
      "from":139
      , "to":125
    }
    ,
    {
      "from":140
      , "to":125
    }
    ,
    {
      "from":139
      , "to":89
    }
    ,
    {
      "from":140
      , "to":89
    }
    ,
    {
      "from":73
      , "to":139
    }
    ,
    {
      "from":73
      , "to":140
    }
    ,
    {
      "from":121
      , "to":139
    }
    ,
    {
      "from":121
      , "to":140
    }
    ,
    {
      "from":139
      , "to":68
    }
    ,
    {
      "from":140
      , "to":68
    }
    ,
    {
      "from":139
      , "to":71
    }
    ,
    {
      "from":140
      , "to":71
    }
    ,
    {
      "from":139
      , "to":82
    }
    ,
    {
      "from":140
      , "to":82
    }
    ,
    {
      "from":148
      , "to":143
    }
    ,
    {
      "from":143
      , "to":145
    }
    ,
    {
      "from":144
      , "to":145
    }
    ,
    {
      "from":148
      , "to":144
    }
    ,
    {
      "from":143
      , "to":146
    }
    ,
    {
      "from":144
      , "to":146
    }
    ,
    {
      "from":145
      , "to":147
    }
    ,
    {
      "from":146
      , "to":147
    }
    ,
    {
      "from":139
      , "to":143
    }
    ,
    {
      "from":140
      , "to":143
    }
    ,
    {
      "from":145
      , "to":139
    }
    ,
    {
      "from":145
      , "to":140
    }
    ,
    {
      "from":139
      , "to":144
    }
    ,
    {
      "from":140
      , "to":144
    }
    ,
    {
      "from":146
      , "to":139
    }
    ,
    {
      "from":146
      , "to":140
    }
  ]
  , "fileIndexMap":
  {
    "/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl":"1"
  }
}
;var areaJSON={
  "columns":["ALUTs", "FFs", "RAMs", "DSPs"]
  , "debug_enabled":1
  , "total_percent":
  [133.75, 69.3725, 68.4894, 109.881, 13.0189]
  , "total":
  [239474, 472851, 2213, 207]
  , "name":"Kernel System"
  , "max_resources":
  [345200, 690400, 2014, 1590]
  , "partitions":
  [
  ]
  , "resources":
  [
    {
      "name":"Board interface"
      , "data":
      [39878, 50598, 288, 0]
      , "details":
      [
        "Platform interface logic."
      ]
    }
    , {
      "name":"Global interconnect"
      , "data":
      [28908, 46242, 104, 0]
      , "details":
      [
        "Global interconnect for 43 global loads and 24 global stores. Reduce number of global loads and stores to simplify global interconnect."
      ]
    }
  ]
  , "functions":
  [
    {
      "name":"computeNewVelocity"
      , "compute_units":1
      , "details":
      [
        "Number of compute units: 1"
      ]
      , "resources":
      [
        {
          "name":"Function overhead"
          , "data":
          [1570, 1685, 0, 0]
          , "details":
          [
            "Kernel dispatch logic."
          ]
        }
      ]
      , "basicblocks":
      [
        {
          "name":"Block0.wii_blk"
          , "resources":
          [
            {
              "name":"State"
              , "data":
              [64, 64, 0, 0]
              , "details":
              [
                "Resources for live values and control logic. To reduce this area:\n- reduce size of local variables\n- reduce scope of local variables, localizing them as much as possible\n- reduce number of nested loops"
              ]
              , "subinfos":
              [
                {
                  "info":
                  {
                    "name":"Control flow logic"
                    , "data":
                    [64, 64, 0, 0]
                  }
                  , "count":0
                }
              ]
            }
          ]
          , "computation":
          [
            {
              "name":"CrowdSim_release.cl:594"
              , "data":
              [185, 409, 5, 5]
              , "debug":
              [
                [
                  {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":594
                  }
                ]
              ]
              , "subinfos":
              [
                {
                  "info":
                  {
                    "name":"Floating Point Divide"
                    , "data":
                    [185, 409, 5, 5]
                    , "details":
                    [
                      "This instruction does not depend on thread ID. Consider moving it, and all related instructions to the host to save area."
                      , "Work-Item Invariant instruction."
                    ]
                  }
                  , "count":1
                }
              ]
            }
          ]
        }
        , {
          "name":"Block1"
          , "resources":
          [
            {
              "name":"State"
              , "data":
              [659, 1706, 3, 0]
              , "details":
              [
                "Resources for live values and control logic. To reduce this area:\n- reduce size of local variables\n- reduce scope of local variables, localizing them as much as possible\n- reduce number of nested loops"
              ]
              , "subinfos":
              [
                {
                  "info":
                  {
                    "name":"Control flow logic"
                    , "data":
                    [64, 160, 0, 0]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"CrowdSim_release.cl:527 > CrowdSim_release.cl:335"
                    , "data":
                    [64.8, 114.2, 0, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":527
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":335
                        }
                      ]
                    ]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"CrowdSim_release.cl:527 > CrowdSim_release.cl:341"
                    , "data":
                    [33.8, 83.2, 0, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":527
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":341
                        }
                      ]
                    ]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"CrowdSim_release.cl:527 > CrowdSim_release.cl:343"
                    , "data":
                    [194.6, 628.9, 2.5, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":527
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":343
                        }
                      ]
                    ]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"CrowdSim_release.cl:527 > CrowdSim_release.cl:344"
                    , "data":
                    [62, 62, 0, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":527
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":344
                        }
                      ]
                    ]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"CrowdSim_release.cl:527 > CrowdSim_release.cl:344 > \nCrowdSim_release.cl:201"
                    , "data":
                    [213, 554, 0, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":527
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":344
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":201
                        }
                      ]
                    ]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"CrowdSim_release.cl:527 > CrowdSim_release.cl:345 > \nCrowdSim_release.cl:254"
                    , "data":
                    [26.8, 103.7, 0.5, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":527
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":345
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":254
                        }
                      ]
                    ]
                  }
                  , "count":0
                }
              ]
            }
          ]
          , "computation":
          [
            {
              "name":"CrowdSim_release.cl:527 > CrowdSim_release.cl:335"
              , "data":
              [1311, 2057, 17, 0]
              , "debug":
              [
                [
                  {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":527
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":335
                  }
                ]
              ]
              , "subinfos":
              [
                {
                  "info":
                  {
                    "name":"Pointer Computation"
                    , "data":
                    [16, 0, 0, 0]
                  }
                  , "count":1
                }
                , {
                  "info":
                  {
                    "name":"Store"
                    , "data":
                    [1295, 2057, 17, 0]
                  }
                  , "count":1
                }
              ]
            }
            , {
              "name":"CrowdSim_release.cl:527 > CrowdSim_release.cl:341"
              , "data":
              [1311, 2057, 17, 0]
              , "debug":
              [
                [
                  {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":527
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":341
                  }
                ]
              ]
              , "subinfos":
              [
                {
                  "info":
                  {
                    "name":"Pointer Computation"
                    , "data":
                    [16, 0, 0, 0]
                  }
                  , "count":1
                }
                , {
                  "info":
                  {
                    "name":"Store"
                    , "data":
                    [1295, 2057, 17, 0]
                  }
                  , "count":1
                }
              ]
            }
            , {
              "name":"CrowdSim_release.cl:527 > CrowdSim_release.cl:343"
              , "data":
              [501, 2017, 13, 0]
              , "debug":
              [
                [
                  {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":527
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":343
                  }
                ]
              ]
              , "subinfos":
              [
                {
                  "info":
                  {
                    "name":"Load"
                    , "data":
                    [485, 2017, 13, 0]
                  }
                  , "count":1
                }
                , {
                  "info":
                  {
                    "name":"Pointer Computation"
                    , "data":
                    [16, 0, 0, 0]
                  }
                  , "count":1
                }
              ]
            }
            , {
              "name":"CrowdSim_release.cl:527 > CrowdSim_release.cl:344"
              , "data":
              [501, 2017, 13, 0]
              , "debug":
              [
                [
                  {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":527
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":344
                  }
                ]
              ]
              , "subinfos":
              [
                {
                  "info":
                  {
                    "name":"Load"
                    , "data":
                    [485, 2017, 13, 0]
                  }
                  , "count":1
                }
                , {
                  "info":
                  {
                    "name":"Pointer Computation"
                    , "data":
                    [16, 0, 0, 0]
                  }
                  , "count":1
                }
              ]
            }
            , {
              "name":"CrowdSim_release.cl:527 > CrowdSim_release.cl:344 > \nCrowdSim_release.cl:201"
              , "data":
              [34, 48, 0, 1]
              , "debug":
              [
                [
                  {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":527
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":344
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":201
                  }
                ]
              ]
              , "subinfos":
              [
                {
                  "info":
                  {
                    "name":"Fmul"
                    , "data":
                    [34, 48, 0, 1]
                  }
                  , "count":1
                }
              ]
            }
            , {
              "name":"CrowdSim_release.cl:527 > CrowdSim_release.cl:345 > \nCrowdSim_release.cl:254"
              , "data":
              [16, 0, 0, 0]
              , "debug":
              [
                [
                  {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":527
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":345
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":254
                  }
                ]
              ]
              , "subinfos":
              [
                {
                  "info":
                  {
                    "name":"Pointer Computation"
                    , "data":
                    [16, 0, 0, 0]
                  }
                  , "count":1
                }
              ]
            }
          ]
        }
        , {
          "name":"Block10"
          , "resources":
          [
            {
              "name":"State"
              , "data":
              [1352, 3343.5, 19, 0]
              , "details":
              [
                "Resources for live values and control logic. To reduce this area:\n- reduce size of local variables\n- reduce scope of local variables, localizing them as much as possible\n- reduce number of nested loops"
              ]
              , "subinfos":
              [
                {
                  "info":
                  {
                    "name":"Control flow logic"
                    , "data":
                    [357, 713.5, 0, 0]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"CrowdSim_release.cl:527"
                    , "data":
                    [629.85, 1371.62, 9.7, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":527
                        }
                      ]
                    ]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"CrowdSim_release.cl:527 > CrowdSim_release.cl:345 > \nCrowdSim_release.cl:288"
                    , "data":
                    [53, 192.5, 1.83333, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":527
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":345
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":288
                        }
                      ]
                    ]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"No Source Line"
                    , "data":
                    [312.15, 1065.88, 7.46667, 0]
                  }
                  , "count":0
                }
              ]
            }
          ]
          , "computation":
          [
            {
              "name":"CrowdSim_release.cl:527"
              , "data":
              [5658, 11525, 94, 0]
              , "debug":
              [
                [
                  {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":527
                  }
                ]
              ]
              , "subinfos":
              [
                {
                  "info":
                  {
                    "name":"Load"
                    , "data":
                    [3021, 4266, 43, 0]
                    , "details":
                    [
                      "Load with a private 512 kilobit cache. Cache is not shared with any other load. It is flushed on kernel start. Use Dynamic Profiler to verify cache effectiveness. Other kernels should not be updating the data in global memory while this kernel is using it. Cache is created when memory access pattern is data-dependent or appears to be repetitive. Simplify access pattern or mark pointer as 'volatile' to disable generation of this cache."
                    ]
                  }
                  , "count":1
                }
                , {
                  "info":
                  {
                    "name":"Pointer Computation"
                    , "data":
                    [32, 0, 0, 0]
                  }
                  , "count":6
                }
                , {
                  "info":
                  {
                    "name":"Store"
                    , "data":
                    [2605, 7259, 51, 0]
                  }
                  , "count":3
                }
              ]
            }
          ]
        }
        , {
          "name":"Block11"
          , "resources":
          [
            {
              "name":"State"
              , "data":
              [11193, 24659, 46, 0]
              , "details":
              [
                "Resources for live values and control logic. To reduce this area:\n- reduce size of local variables\n- reduce scope of local variables, localizing them as much as possible\n- reduce number of nested loops"
              ]
              , "subinfos":
              [
                {
                  "info":
                  {
                    "name":"Control flow logic"
                    , "data":
                    [480, 1136, 0, 0]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"CrowdSim_release.cl:546"
                    , "data":
                    [482.214, 1997.46, 11.7857, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":546
                        }
                      ]
                    ]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"CrowdSim_release.cl:547"
                    , "data":
                    [50.25, 293.125, 0, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":547
                        }
                      ]
                    ]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"CrowdSim_release.cl:549"
                    , "data":
                    [478.774, 943.982, 0.476191, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":549
                        }
                      ]
                    ]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"CrowdSim_release.cl:550"
                    , "data":
                    [478.774, 943.982, 0.476191, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":550
                        }
                      ]
                    ]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"CrowdSim_release.cl:551 > CrowdSim_release.cl:189 > \nCrowdSim_release.cl:164"
                    , "data":
                    [297.208, 648.417, 0, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":551
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":189
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":164
                        }
                      ]
                    ]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"CrowdSim_release.cl:552"
                    , "data":
                    [275.774, 506.982, 0.476191, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":552
                        }
                      ]
                    ]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"CrowdSim_release.cl:553 > CrowdSim_release.cl:201"
                    , "data":
                    [64.2, 142.2, 0.2, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":553
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":201
                        }
                      ]
                    ]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"CrowdSim_release.cl:560"
                    , "data":
                    [801.427, 1702.45, 0.4, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":560
                        }
                      ]
                    ]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"CrowdSim_release.cl:562 > CrowdSim_release.cl:189 > \nCrowdSim_release.cl:164"
                    , "data":
                    [262.308, 578.615, 0, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":562
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":189
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":164
                        }
                      ]
                    ]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"CrowdSim_release.cl:564 > CrowdSim_release.cl:164"
                    , "data":
                    [443.456, 955.912, 0, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":564
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":164
                        }
                      ]
                    ]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"CrowdSim_release.cl:566"
                    , "data":
                    [79, 184, 0, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":566
                        }
                      ]
                    ]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"CrowdSim_release.cl:566 > CrowdSim_release.cl:201"
                    , "data":
                    [76, 168, 0, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":566
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":201
                        }
                      ]
                    ]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"CrowdSim_release.cl:569"
                    , "data":
                    [39.125, 66.0042, 0.604167, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":569
                        }
                      ]
                    ]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"CrowdSim_release.cl:571"
                    , "data":
                    [32.7083, 48.7958, 0.8125, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":571
                        }
                      ]
                    ]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"CrowdSim_release.cl:572"
                    , "data":
                    [655.06, 1310.21, 4.61, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":572
                        }
                      ]
                    ]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"CrowdSim_release.cl:578 > CrowdSim_release.cl:195"
                    , "data":
                    [662.92, 1345.78, 2.24103, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":578
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":195
                        }
                      ]
                    ]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"CrowdSim_release.cl:580"
                    , "data":
                    [983.199, 2045.99, 3.41872, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":580
                        }
                      ]
                    ]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"CrowdSim_release.cl:584"
                    , "data":
                    [524.289, 1092.04, 1.85359, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":584
                        }
                      ]
                    ]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"CrowdSim_release.cl:587 > CrowdSim_release.cl:164"
                    , "data":
                    [515.727, 1070.85, 1.6, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":587
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":164
                        }
                      ]
                    ]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"CrowdSim_release.cl:589"
                    , "data":
                    [871.432, 1756.11, 4.65, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":589
                        }
                      ]
                    ]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"CrowdSim_release.cl:597"
                    , "data":
                    [730.548, 1509.1, 2, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":597
                        }
                      ]
                    ]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"CrowdSim_release.cl:599 > CrowdSim_release.cl:175"
                    , "data":
                    [334.667, 738.333, 0, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":599
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":175
                        }
                      ]
                    ]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"CrowdSim_release.cl:600"
                    , "data":
                    [22.625, 41.5875, 0.1875, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":600
                        }
                      ]
                    ]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"CrowdSim_release.cl:602"
                    , "data":
                    [23.875, 36.2125, 0.5625, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":602
                        }
                      ]
                    ]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"CrowdSim_release.cl:603"
                    , "data":
                    [558.227, 1123.79, 2.86, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":603
                        }
                      ]
                    ]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"CrowdSim_release.cl:606"
                    , "data":
                    [594, 1222, 2, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":606
                        }
                      ]
                    ]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"CrowdSim_release.cl:607"
                    , "data":
                    [230.214, 590.464, 4.78571, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":607
                        }
                      ]
                    ]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"No Source Line"
                    , "data":
                    [145, 460.6, 0, 0]
                  }
                  , "count":0
                }
              ]
            }
            , {
              "name":"Cluster logic"
              , "data":
              [562, 1262, 8, 0]
              , "details":
              [
                "Logic required to efficiently support sets of operations that do not stall. This area cannot be affected directly."
              ]
            }
          ]
          , "computation":
          [
            {
              "name":"No Source Line"
              , "data":
              [16, 0, 0, 0]
              , "debug":
              [
                [
                  {
                    "filename":""
                    , "line":0
                  }
                ]
              ]
              , "subinfos":
              [
                {
                  "info":
                  {
                    "name":"Pointer Computation"
                    , "data":
                    [16, 0, 0, 0]
                  }
                  , "count":1
                }
              ]
            }
            , {
              "name":"CrowdSim_release.cl:546"
              , "data":
              [16, 0, 0, 0]
              , "debug":
              [
                [
                  {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":546
                  }
                ]
              ]
              , "subinfos":
              [
                {
                  "info":
                  {
                    "name":"Integer Compare"
                    , "data":
                    [16, 0, 0, 0]
                  }
                  , "count":1
                }
              ]
            }
            , {
              "name":"CrowdSim_release.cl:547"
              , "data":
              [517, 2017, 13, 0]
              , "debug":
              [
                [
                  {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":547
                  }
                ]
              ]
              , "subinfos":
              [
                {
                  "info":
                  {
                    "name":"Add"
                    , "data":
                    [16, 0, 0, 0]
                  }
                  , "count":1
                }
                , {
                  "info":
                  {
                    "name":"Load"
                    , "data":
                    [485, 2017, 13, 0]
                  }
                  , "count":1
                }
                , {
                  "info":
                  {
                    "name":"Pointer Computation"
                    , "data":
                    [16, 0, 0, 0]
                  }
                  , "count":1
                }
              ]
            }
            , {
              "name":"CrowdSim_release.cl:549"
              , "data":
              [982.667, 2350, 16, 0]
              , "debug":
              [
                [
                  {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":549
                  }
                ]
              ]
              , "subinfos":
              [
                {
                  "info":
                  {
                    "name":"Fsub"
                    , "data":
                    [282, 0, 0, 0]
                  }
                  , "count":2
                }
                , {
                  "info":
                  {
                    "name":"Load"
                    , "data":
                    [678, 2350, 16, 0]
                  }
                  , "count":1
                }
                , {
                  "info":
                  {
                    "name":"Or"
                    , "data":
                    [6.66667, 0, 0, 0]
                  }
                  , "count":2
                }
                , {
                  "info":
                  {
                    "name":"Pointer Computation"
                    , "data":
                    [16, 0, 0, 0]
                  }
                  , "count":1
                }
              ]
            }
            , {
              "name":"CrowdSim_release.cl:550"
              , "data":
              [982.667, 2350, 16, 0]
              , "debug":
              [
                [
                  {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":550
                  }
                ]
              ]
              , "subinfos":
              [
                {
                  "info":
                  {
                    "name":"Fsub"
                    , "data":
                    [282, 0, 0, 0]
                  }
                  , "count":2
                }
                , {
                  "info":
                  {
                    "name":"Load"
                    , "data":
                    [678, 2350, 16, 0]
                  }
                  , "count":1
                }
                , {
                  "info":
                  {
                    "name":"Or"
                    , "data":
                    [6.66667, 0, 0, 0]
                  }
                  , "count":2
                }
                , {
                  "info":
                  {
                    "name":"Pointer Computation"
                    , "data":
                    [16, 0, 0, 0]
                  }
                  , "count":1
                }
              ]
            }
            , {
              "name":"CrowdSim_release.cl:551 > CrowdSim_release.cl:189 > \nCrowdSim_release.cl:164"
              , "data":
              [103, 96, 0, 2]
              , "debug":
              [
                [
                  {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":551
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":189
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":164
                  }
                ]
              ]
              , "subinfos":
              [
                {
                  "info":
                  {
                    "name":"Fadd"
                    , "data":
                    [69, 0, 0, 0]
                  }
                  , "count":1
                }
                , {
                  "info":
                  {
                    "name":"Fmul"
                    , "data":
                    [34, 96, 0, 2]
                  }
                  , "count":2
                }
              ]
            }
            , {
              "name":"CrowdSim_release.cl:552"
              , "data":
              [644.667, 2017, 13, 0]
              , "debug":
              [
                [
                  {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":552
                  }
                ]
              ]
              , "subinfos":
              [
                {
                  "info":
                  {
                    "name":"Fadd"
                    , "data":
                    [141, 0, 0, 0]
                  }
                  , "count":1
                }
                , {
                  "info":
                  {
                    "name":"Load"
                    , "data":
                    [485, 2017, 13, 0]
                  }
                  , "count":1
                }
                , {
                  "info":
                  {
                    "name":"Or"
                    , "data":
                    [2.66667, 0, 0, 0]
                  }
                  , "count":1
                }
                , {
                  "info":
                  {
                    "name":"Pointer Computation"
                    , "data":
                    [16, 0, 0, 0]
                  }
                  , "count":1
                }
              ]
            }
            , {
              "name":"CrowdSim_release.cl:553 > CrowdSim_release.cl:201"
              , "data":
              [17, 48, 0, 1]
              , "debug":
              [
                [
                  {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":553
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":201
                  }
                ]
              ]
              , "subinfos":
              [
                {
                  "info":
                  {
                    "name":"Fmul"
                    , "data":
                    [17, 48, 0, 1]
                  }
                  , "count":1
                }
              ]
            }
            , {
              "name":"CrowdSim_release.cl:558"
              , "data":
              [63, 28, 0, 0]
              , "debug":
              [
                [
                  {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":558
                  }
                ]
              ]
              , "subinfos":
              [
                {
                  "info":
                  {
                    "name":"Floating Point Compare"
                    , "data":
                    [63, 28, 0, 0]
                  }
                  , "count":1
                }
              ]
            }
            , {
              "name":"CrowdSim_release.cl:560"
              , "data":
              [350, 96, 0, 2]
              , "debug":
              [
                [
                  {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":560
                  }
                ]
              ]
              , "subinfos":
              [
                {
                  "info":
                  {
                    "name":"Fmul"
                    , "data":
                    [68, 96, 0, 2]
                  }
                  , "count":2
                }
                , {
                  "info":
                  {
                    "name":"Fsub"
                    , "data":
                    [282, 0, 0, 0]
                  }
                  , "count":2
                }
              ]
            }
            , {
              "name":"CrowdSim_release.cl:562 > CrowdSim_release.cl:189 > \nCrowdSim_release.cl:164"
              , "data":
              [103, 96, 0, 2]
              , "debug":
              [
                [
                  {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":562
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":189
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":164
                  }
                ]
              ]
              , "subinfos":
              [
                {
                  "info":
                  {
                    "name":"Fadd"
                    , "data":
                    [69, 0, 0, 0]
                  }
                  , "count":1
                }
                , {
                  "info":
                  {
                    "name":"Fmul"
                    , "data":
                    [34, 96, 0, 2]
                  }
                  , "count":2
                }
              ]
            }
            , {
              "name":"CrowdSim_release.cl:564 > CrowdSim_release.cl:164"
              , "data":
              [209, 96, 0, 2]
              , "debug":
              [
                [
                  {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":564
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":164
                  }
                ]
              ]
              , "subinfos":
              [
                {
                  "info":
                  {
                    "name":"Fadd"
                    , "data":
                    [141, 0, 0, 0]
                  }
                  , "count":1
                }
                , {
                  "info":
                  {
                    "name":"Fmul"
                    , "data":
                    [68, 96, 0, 2]
                  }
                  , "count":2
                }
              ]
            }
            , {
              "name":"CrowdSim_release.cl:566"
              , "data":
              [160, 104, 0, 1]
              , "debug":
              [
                [
                  {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":566
                  }
                ]
              ]
              , "subinfos":
              [
                {
                  "info":
                  {
                    "name":"Floating Point Compare"
                    , "data":
                    [126, 56, 0, 0]
                  }
                  , "count":2
                }
                , {
                  "info":
                  {
                    "name":"Fmul"
                    , "data":
                    [34, 48, 0, 1]
                  }
                  , "count":1
                }
              ]
            }
            , {
              "name":"CrowdSim_release.cl:566 > CrowdSim_release.cl:201"
              , "data":
              [17, 48, 0, 1]
              , "debug":
              [
                [
                  {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":566
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":201
                  }
                ]
              ]
              , "subinfos":
              [
                {
                  "info":
                  {
                    "name":"Fmul"
                    , "data":
                    [17, 48, 0, 1]
                  }
                  , "count":1
                }
              ]
            }
            , {
              "name":"CrowdSim_release.cl:568 > CrowdSim_release.cl:169"
              , "data":
              [43, 115.333, 1, 0.666667]
              , "debug":
              [
                [
                  {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":568
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":169
                  }
                ]
              ]
              , "subinfos":
              [
                {
                  "info":
                  {
                    "name":"'sqrtf' Function Call"
                    , "data":
                    [43, 115.333, 1, 0.666667]
                  }
                  , "count":1
                }
              ]
            }
            , {
              "name":"CrowdSim_release.cl:569"
              , "data":
              [370, 818, 10, 10]
              , "debug":
              [
                [
                  {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":569
                  }
                ]
              ]
              , "subinfos":
              [
                {
                  "info":
                  {
                    "name":"Floating Point Divide"
                    , "data":
                    [370, 818, 10, 10]
                  }
                  , "count":2
                }
              ]
            }
            , {
              "name":"CrowdSim_release.cl:572"
              , "data":
              [243, 144, 0, 3]
              , "debug":
              [
                [
                  {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":572
                  }
                ]
              ]
              , "subinfos":
              [
                {
                  "info":
                  {
                    "name":"Fmul"
                    , "data":
                    [102, 144, 0, 3]
                  }
                  , "count":3
                }
                , {
                  "info":
                  {
                    "name":"Fsub"
                    , "data":
                    [141, 0, 0, 0]
                  }
                  , "count":1
                }
              ]
            }
            , {
              "name":"CrowdSim_release.cl:576 > CrowdSim_release.cl:169"
              , "data":
              [43, 115.333, 1, 0.666667]
              , "debug":
              [
                [
                  {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":576
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":169
                  }
                ]
              ]
              , "subinfos":
              [
                {
                  "info":
                  {
                    "name":"'sqrtf' Function Call"
                    , "data":
                    [43, 115.333, 1, 0.666667]
                  }
                  , "count":1
                }
              ]
            }
            , {
              "name":"CrowdSim_release.cl:578"
              , "data":
              [63, 28, 0, 0]
              , "debug":
              [
                [
                  {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":578
                  }
                ]
              ]
              , "subinfos":
              [
                {
                  "info":
                  {
                    "name":"Floating Point Compare"
                    , "data":
                    [63, 28, 0, 0]
                  }
                  , "count":1
                }
              ]
            }
            , {
              "name":"CrowdSim_release.cl:578 > CrowdSim_release.cl:195"
              , "data":
              [209, 96, 0, 2]
              , "debug":
              [
                [
                  {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":578
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":195
                  }
                ]
              ]
              , "subinfos":
              [
                {
                  "info":
                  {
                    "name":"Fmul"
                    , "data":
                    [68, 96, 0, 2]
                  }
                  , "count":2
                }
                , {
                  "info":
                  {
                    "name":"Fsub"
                    , "data":
                    [141, 0, 0, 0]
                  }
                  , "count":1
                }
              ]
            }
            , {
              "name":"CrowdSim_release.cl:580"
              , "data":
              [543.5, 601, 5, 9]
              , "debug":
              [
                [
                  {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":580
                  }
                ]
              ]
              , "subinfos":
              [
                {
                  "info":
                  {
                    "name":"Combined Fadd and Fsub"
                    , "data":
                    [81.5, 0, 0, 0]
                  }
                  , "count":1
                }
                , {
                  "info":
                  {
                    "name":"Fadd"
                    , "data":
                    [141, 0, 0, 0]
                  }
                  , "count":1
                }
                , {
                  "info":
                  {
                    "name":"Floating Point Divide"
                    , "data":
                    [185, 409, 5, 5]
                  }
                  , "count":2
                }
                , {
                  "info":
                  {
                    "name":"Fmul"
                    , "data":
                    [136, 192, 0, 4]
                  }
                  , "count":4
                }
              ]
            }
            , {
              "name":"CrowdSim_release.cl:584"
              , "data":
              [441.5, 457, 5, 6]
              , "debug":
              [
                [
                  {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":584
                  }
                ]
              ]
              , "subinfos":
              [
                {
                  "info":
                  {
                    "name":"Combined Fadd and Fsub"
                    , "data":
                    [81.5, 0, 0, 0]
                  }
                  , "count":1
                }
                , {
                  "info":
                  {
                    "name":"Fadd"
                    , "data":
                    [141, 0, 0, 0]
                  }
                  , "count":1
                }
                , {
                  "info":
                  {
                    "name":"Floating Point Divide"
                    , "data":
                    [185, 409, 5, 5]
                  }
                  , "count":2
                }
                , {
                  "info":
                  {
                    "name":"Fmul"
                    , "data":
                    [34, 48, 0, 1]
                  }
                  , "count":1
                }
              ]
            }
            , {
              "name":"CrowdSim_release.cl:587 > CrowdSim_release.cl:164"
              , "data":
              [209, 96, 0, 2]
              , "debug":
              [
                [
                  {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":587
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":164
                  }
                ]
              ]
              , "subinfos":
              [
                {
                  "info":
                  {
                    "name":"Fadd"
                    , "data":
                    [141, 0, 0, 0]
                  }
                  , "count":1
                }
                , {
                  "info":
                  {
                    "name":"Fmul"
                    , "data":
                    [68, 96, 0, 2]
                  }
                  , "count":2
                }
              ]
            }
            , {
              "name":"CrowdSim_release.cl:589"
              , "data":
              [350, 96, 0, 2]
              , "debug":
              [
                [
                  {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":589
                  }
                ]
              ]
              , "subinfos":
              [
                {
                  "info":
                  {
                    "name":"Fmul"
                    , "data":
                    [68, 96, 0, 2]
                  }
                  , "count":2
                }
                , {
                  "info":
                  {
                    "name":"Fsub"
                    , "data":
                    [282, 0, 0, 0]
                  }
                  , "count":2
                }
              ]
            }
            , {
              "name":"CrowdSim_release.cl:597"
              , "data":
              [350, 96, 0, 2]
              , "debug":
              [
                [
                  {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":597
                  }
                ]
              ]
              , "subinfos":
              [
                {
                  "info":
                  {
                    "name":"Fmul"
                    , "data":
                    [68, 96, 0, 2]
                  }
                  , "count":2
                }
                , {
                  "info":
                  {
                    "name":"Fsub"
                    , "data":
                    [282, 0, 0, 0]
                  }
                  , "count":2
                }
              ]
            }
            , {
              "name":"CrowdSim_release.cl:599 > CrowdSim_release.cl:175"
              , "data":
              [175, 96, 0, 2]
              , "debug":
              [
                [
                  {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":599
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":175
                  }
                ]
              ]
              , "subinfos":
              [
                {
                  "info":
                  {
                    "name":"Fadd"
                    , "data":
                    [141, 0, 0, 0]
                  }
                  , "count":1
                }
                , {
                  "info":
                  {
                    "name":"Fmul"
                    , "data":
                    [34, 96, 0, 2]
                  }
                  , "count":2
                }
              ]
            }
            , {
              "name":"CrowdSim_release.cl:599 > CrowdSim_release.cl:175 > \nCrowdSim_release.cl:169"
              , "data":
              [43, 115.333, 1, 0.666667]
              , "debug":
              [
                [
                  {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":599
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":175
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":169
                  }
                ]
              ]
              , "subinfos":
              [
                {
                  "info":
                  {
                    "name":"'sqrtf' Function Call"
                    , "data":
                    [43, 115.333, 1, 0.666667]
                  }
                  , "count":1
                }
              ]
            }
            , {
              "name":"CrowdSim_release.cl:600"
              , "data":
              [370, 818, 10, 10]
              , "debug":
              [
                [
                  {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":600
                  }
                ]
              ]
              , "subinfos":
              [
                {
                  "info":
                  {
                    "name":"Floating Point Divide"
                    , "data":
                    [370, 818, 10, 10]
                  }
                  , "count":2
                }
              ]
            }
            , {
              "name":"CrowdSim_release.cl:603"
              , "data":
              [243, 144, 0, 3]
              , "debug":
              [
                [
                  {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":603
                  }
                ]
              ]
              , "subinfos":
              [
                {
                  "info":
                  {
                    "name":"Fmul"
                    , "data":
                    [102, 144, 0, 3]
                  }
                  , "count":3
                }
                , {
                  "info":
                  {
                    "name":"Fsub"
                    , "data":
                    [141, 0, 0, 0]
                  }
                  , "count":1
                }
              ]
            }
            , {
              "name":"CrowdSim_release.cl:606"
              , "data":
              [328, 0, 0, 0]
              , "debug":
              [
                [
                  {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":606
                  }
                ]
              ]
              , "subinfos":
              [
                {
                  "info":
                  {
                    "name":"Add"
                    , "data":
                    [16, 0, 0, 0]
                  }
                  , "count":4
                }
                , {
                  "info":
                  {
                    "name":"And"
                    , "data":
                    [16, 0, 0, 0]
                  }
                  , "count":8
                }
                , {
                  "info":
                  {
                    "name":"Fadd"
                    , "data":
                    [282, 0, 0, 0]
                  }
                  , "count":2
                }
                , {
                  "info":
                  {
                    "name":"Or"
                    , "data":
                    [14, 0, 0, 0]
                  }
                  , "count":10
                }
              ]
            }
            , {
              "name":"CrowdSim_release.cl:607"
              , "data":
              [781, 4428, 33, 0]
              , "debug":
              [
                [
                  {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":607
                  }
                ]
              ]
              , "subinfos":
              [
                {
                  "info":
                  {
                    "name":"Add"
                    , "data":
                    [16, 0, 0, 0]
                  }
                  , "count":2
                }
                , {
                  "info":
                  {
                    "name":"Store"
                    , "data":
                    [765, 4428, 33, 0]
                  }
                  , "count":2
                }
              ]
            }
          ]
        }
        , {
          "name":"Block12"
          , "resources":
          [
            {
              "name":"State"
              , "data":
              [3597.99, 8478.01, 21, 0]
              , "details":
              [
                "Resources for live values and control logic. To reduce this area:\n- reduce size of local variables\n- reduce scope of local variables, localizing them as much as possible\n- reduce number of nested loops"
              ]
              , "subinfos":
              [
                {
                  "info":
                  {
                    "name":"Control flow logic"
                    , "data":
                    [129, 369, 0, 0]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"CrowdSim_release.cl:610"
                    , "data":
                    [361.333, 629.667, 4.33333, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":610
                        }
                      ]
                    ]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"CrowdSim_release.cl:610 > CrowdSim_release.cl:440"
                    , "data":
                    [29.3333, 58.6667, 0, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":610
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":440
                        }
                      ]
                    ]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"CrowdSim_release.cl:610 > CrowdSim_release.cl:440 > \nCrowdSim_release.cl:189 > CrowdSim_release.cl:164"
                    , "data":
                    [340, 753, 0, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":610
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":440
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":189
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":164
                        }
                      ]
                    ]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"CrowdSim_release.cl:610 > CrowdSim_release.cl:440 > \nCrowdSim_release.cl:201"
                    , "data":
                    [78, 166.5, 0.5, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":610
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":440
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":201
                        }
                      ]
                    ]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"CrowdSim_release.cl:610 > CrowdSim_release.cl:442"
                    , "data":
                    [271.333, 495.167, 2.83333, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":610
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":442
                        }
                      ]
                    ]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"CrowdSim_release.cl:610 > CrowdSim_release.cl:442 > \nCrowdSim_release.cl:182"
                    , "data":
                    [15.3333, 23.6667, 0.333333, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":610
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":442
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":182
                        }
                      ]
                    ]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"CrowdSim_release.cl:610 > CrowdSim_release.cl:442 > \nCrowdSim_release.cl:183"
                    , "data":
                    [15.3333, 23.6667, 0.333333, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":610
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":442
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":183
                        }
                      ]
                    ]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"CrowdSim_release.cl:610 > CrowdSim_release.cl:454 > \nCrowdSim_release.cl:352 > CrowdSim_release.cl:164"
                    , "data":
                    [345, 763, 0, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":610
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":454
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":352
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":164
                        }
                      ]
                    ]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"CrowdSim_release.cl:610 > CrowdSim_release.cl:454 > \nCrowdSim_release.cl:353"
                    , "data":
                    [457.333, 981.667, 0, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":610
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":454
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":353
                        }
                      ]
                    ]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"CrowdSim_release.cl:610 > CrowdSim_release.cl:454 > \nCrowdSim_release.cl:353 > CrowdSim_release.cl:189 > \nCrowdSim_release.cl:164"
                    , "data":
                    [406.333, 857.667, 1.33333, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":610
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":454
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":353
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":189
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":164
                        }
                      ]
                    ]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"CrowdSim_release.cl:610 > CrowdSim_release.cl:454 > \nCrowdSim_release.cl:353 > CrowdSim_release.cl:201"
                    , "data":
                    [78.6, 172.2, 0, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":610
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":454
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":353
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":201
                        }
                      ]
                    ]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"CrowdSim_release.cl:610 > CrowdSim_release.cl:454 > \nCrowdSim_release.cl:361"
                    , "data":
                    [237.2, 494.9, 0.5, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":610
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":454
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":361
                        }
                      ]
                    ]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"CrowdSim_release.cl:610 > CrowdSim_release.cl:454 > \nCrowdSim_release.cl:362"
                    , "data":
                    [237.2, 494.9, 0.5, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":610
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":454
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":362
                        }
                      ]
                    ]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"No Source Line"
                    , "data":
                    [596.667, 2194.33, 10.3333, 0]
                  }
                  , "count":0
                }
              ]
            }
            , {
              "name":"Cluster logic"
              , "data":
              [469, 875, 4, 0]
              , "details":
              [
                "Logic required to efficiently support sets of operations that do not stall. This area cannot be affected directly."
              ]
            }
          ]
          , "computation":
          [
            {
              "name":"CrowdSim_release.cl:610"
              , "data":
              [1211, 4367, 29, 0]
              , "debug":
              [
                [
                  {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":610
                  }
                ]
              ]
              , "subinfos":
              [
                {
                  "info":
                  {
                    "name":"Load"
                    , "data":
                    [1163, 4367, 29, 0]
                  }
                  , "count":2
                }
                , {
                  "info":
                  {
                    "name":"Pointer Computation"
                    , "data":
                    [48, 0, 0, 0]
                  }
                  , "count":3
                }
              ]
            }
            , {
              "name":"CrowdSim_release.cl:610 > CrowdSim_release.cl:440"
              , "data":
              [63, 28, 0, 0]
              , "debug":
              [
                [
                  {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":610
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":440
                  }
                ]
              ]
              , "subinfos":
              [
                {
                  "info":
                  {
                    "name":"Floating Point Compare"
                    , "data":
                    [63, 28, 0, 0]
                  }
                  , "count":1
                }
              ]
            }
            , {
              "name":"CrowdSim_release.cl:610 > CrowdSim_release.cl:440 > \nCrowdSim_release.cl:189 > CrowdSim_release.cl:164"
              , "data":
              [209, 96, 0, 2]
              , "debug":
              [
                [
                  {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":610
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":440
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":189
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":164
                  }
                ]
              ]
              , "subinfos":
              [
                {
                  "info":
                  {
                    "name":"Fadd"
                    , "data":
                    [141, 0, 0, 0]
                  }
                  , "count":1
                }
                , {
                  "info":
                  {
                    "name":"Fmul"
                    , "data":
                    [68, 96, 0, 2]
                  }
                  , "count":2
                }
              ]
            }
            , {
              "name":"CrowdSim_release.cl:610 > CrowdSim_release.cl:440 > \nCrowdSim_release.cl:201"
              , "data":
              [34, 48, 0, 1]
              , "debug":
              [
                [
                  {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":610
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":440
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":201
                  }
                ]
              ]
              , "subinfos":
              [
                {
                  "info":
                  {
                    "name":"Fmul"
                    , "data":
                    [34, 48, 0, 1]
                  }
                  , "count":1
                }
              ]
            }
            , {
              "name":"CrowdSim_release.cl:610 > CrowdSim_release.cl:442"
              , "data":
              [451, 2336, 17, 2]
              , "debug":
              [
                [
                  {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":610
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":442
                  }
                ]
              ]
              , "subinfos":
              [
                {
                  "info":
                  {
                    "name":"Fmul"
                    , "data":
                    [68, 96, 0, 2]
                  }
                  , "count":2
                }
                , {
                  "info":
                  {
                    "name":"Store"
                    , "data":
                    [383, 2240, 17, 0]
                  }
                  , "count":1
                }
              ]
            }
            , {
              "name":"CrowdSim_release.cl:610 > CrowdSim_release.cl:442 > \nCrowdSim_release.cl:180 > CrowdSim_release.cl:175 > \nCrowdSim_release.cl:169"
              , "data":
              [129, 346, 3, 2]
              , "debug":
              [
                [
                  {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":610
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":442
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":180
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":175
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":169
                  }
                ]
              ]
              , "subinfos":
              [
                {
                  "info":
                  {
                    "name":"'sqrtf' Function Call"
                    , "data":
                    [129, 346, 3, 2]
                  }
                  , "count":1
                }
              ]
            }
            , {
              "name":"CrowdSim_release.cl:610 > CrowdSim_release.cl:442 > \nCrowdSim_release.cl:182"
              , "data":
              [185, 409, 5, 5]
              , "debug":
              [
                [
                  {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":610
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":442
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":182
                  }
                ]
              ]
              , "subinfos":
              [
                {
                  "info":
                  {
                    "name":"Floating Point Divide"
                    , "data":
                    [185, 409, 5, 5]
                  }
                  , "count":1
                }
              ]
            }
            , {
              "name":"CrowdSim_release.cl:610 > CrowdSim_release.cl:442 > \nCrowdSim_release.cl:183"
              , "data":
              [185, 409, 5, 5]
              , "debug":
              [
                [
                  {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":610
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":442
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":183
                  }
                ]
              ]
              , "subinfos":
              [
                {
                  "info":
                  {
                    "name":"Floating Point Divide"
                    , "data":
                    [185, 409, 5, 5]
                  }
                  , "count":1
                }
              ]
            }
            , {
              "name":"CrowdSim_release.cl:610 > CrowdSim_release.cl:451"
              , "data":
              [453, 1969, 13, 0]
              , "debug":
              [
                [
                  {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":610
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":451
                  }
                ]
              ]
              , "subinfos":
              [
                {
                  "info":
                  {
                    "name":"Load"
                    , "data":
                    [437, 1969, 13, 0]
                  }
                  , "count":1
                }
                , {
                  "info":
                  {
                    "name":"Pointer Computation"
                    , "data":
                    [16, 0, 0, 0]
                  }
                  , "count":1
                }
              ]
            }
            , {
              "name":"CrowdSim_release.cl:610 > CrowdSim_release.cl:454 > \nCrowdSim_release.cl:352 > CrowdSim_release.cl:164"
              , "data":
              [209, 96, 0, 2]
              , "debug":
              [
                [
                  {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":610
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":454
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":352
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":164
                  }
                ]
              ]
              , "subinfos":
              [
                {
                  "info":
                  {
                    "name":"Fadd"
                    , "data":
                    [141, 0, 0, 0]
                  }
                  , "count":1
                }
                , {
                  "info":
                  {
                    "name":"Fmul"
                    , "data":
                    [68, 96, 0, 2]
                  }
                  , "count":2
                }
              ]
            }
            , {
              "name":"CrowdSim_release.cl:610 > CrowdSim_release.cl:454 > \nCrowdSim_release.cl:353"
              , "data":
              [282, 0, 0, 0]
              , "debug":
              [
                [
                  {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":610
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":454
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":353
                  }
                ]
              ]
              , "subinfos":
              [
                {
                  "info":
                  {
                    "name":"Fadd"
                    , "data":
                    [141, 0, 0, 0]
                  }
                  , "count":1
                }
                , {
                  "info":
                  {
                    "name":"Fsub"
                    , "data":
                    [141, 0, 0, 0]
                  }
                  , "count":1
                }
              ]
            }
            , {
              "name":"CrowdSim_release.cl:610 > CrowdSim_release.cl:454 > \nCrowdSim_release.cl:353 > CrowdSim_release.cl:189 > \nCrowdSim_release.cl:164"
              , "data":
              [209, 96, 0, 2]
              , "debug":
              [
                [
                  {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":610
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":454
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":353
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":189
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":164
                  }
                ]
              ]
              , "subinfos":
              [
                {
                  "info":
                  {
                    "name":"Fadd"
                    , "data":
                    [141, 0, 0, 0]
                  }
                  , "count":1
                }
                , {
                  "info":
                  {
                    "name":"Fmul"
                    , "data":
                    [68, 96, 0, 2]
                  }
                  , "count":2
                }
              ]
            }
            , {
              "name":"CrowdSim_release.cl:610 > CrowdSim_release.cl:454 > \nCrowdSim_release.cl:353 > CrowdSim_release.cl:201"
              , "data":
              [17, 48, 0, 1]
              , "debug":
              [
                [
                  {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":610
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":454
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":353
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":201
                  }
                ]
              ]
              , "subinfos":
              [
                {
                  "info":
                  {
                    "name":"Fmul"
                    , "data":
                    [17, 48, 0, 1]
                  }
                  , "count":1
                }
              ]
            }
            , {
              "name":"CrowdSim_release.cl:610 > CrowdSim_release.cl:454 > \nCrowdSim_release.cl:360 > CrowdSim_release.cl:169"
              , "data":
              [129, 346, 3, 2]
              , "debug":
              [
                [
                  {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":610
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":454
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":360
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":169
                  }
                ]
              ]
              , "subinfos":
              [
                {
                  "info":
                  {
                    "name":"'sqrtf' Function Call"
                    , "data":
                    [129, 346, 3, 2]
                  }
                  , "count":1
                }
              ]
            }
            , {
              "name":"CrowdSim_release.cl:610 > CrowdSim_release.cl:454 > \nCrowdSim_release.cl:361"
              , "data":
              [141, 0, 0, 0]
              , "debug":
              [
                [
                  {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":610
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":454
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":361
                  }
                ]
              ]
              , "subinfos":
              [
                {
                  "info":
                  {
                    "name":"Fsub"
                    , "data":
                    [141, 0, 0, 0]
                  }
                  , "count":1
                }
              ]
            }
            , {
              "name":"CrowdSim_release.cl:610 > CrowdSim_release.cl:454 > \nCrowdSim_release.cl:362"
              , "data":
              [141, 0, 0, 0]
              , "debug":
              [
                [
                  {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":610
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":454
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":362
                  }
                ]
              ]
              , "subinfos":
              [
                {
                  "info":
                  {
                    "name":"Fsub"
                    , "data":
                    [141, 0, 0, 0]
                  }
                  , "count":1
                }
              ]
            }
          ]
        }
        , {
          "name":"Block13"
          , "resources":
          [
            {
              "name":"State"
              , "data":
              [1549, 4977.01, 1, 0]
              , "details":
              [
                "Resources for live values and control logic. To reduce this area:\n- reduce size of local variables\n- reduce scope of local variables, localizing them as much as possible\n- reduce number of nested loops"
              ]
              , "subinfos":
              [
                {
                  "info":
                  {
                    "name":"Control flow logic"
                    , "data":
                    [638, 1771, 0, 0]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"CrowdSim_release.cl:610 > CrowdSim_release.cl:450"
                    , "data":
                    [0, 42.6667, 0, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":610
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":450
                        }
                      ]
                    ]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"CrowdSim_release.cl:610 > CrowdSim_release.cl:451"
                    , "data":
                    [406, 874, 0, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":610
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":451
                        }
                      ]
                    ]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"CrowdSim_release.cl:610 > CrowdSim_release.cl:451 > \nCrowdSim_release.cl:195"
                    , "data":
                    [480, 1035, 0, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":610
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":451
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":195
                        }
                      ]
                    ]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"No Source Line"
                    , "data":
                    [25, 1254.33, 1, 0]
                  }
                  , "count":0
                }
              ]
            }
            , {
              "name":"Cluster logic"
              , "data":
              [218, 502, 2, 0]
              , "details":
              [
                "Logic required to efficiently support sets of operations that do not stall. This area cannot be affected directly."
              ]
            }
          ]
          , "computation":
          [
            {
              "name":"CrowdSim_release.cl:610 > CrowdSim_release.cl:450"
              , "data":
              [16, 0, 0, 0]
              , "debug":
              [
                [
                  {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":610
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":450
                  }
                ]
              ]
              , "subinfos":
              [
                {
                  "info":
                  {
                    "name":"Integer Compare"
                    , "data":
                    [16, 0, 0, 0]
                  }
                  , "count":1
                }
              ]
            }
            , {
              "name":"CrowdSim_release.cl:610 > CrowdSim_release.cl:451"
              , "data":
              [345, 28, 0, 0]
              , "debug":
              [
                [
                  {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":610
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":451
                  }
                ]
              ]
              , "subinfos":
              [
                {
                  "info":
                  {
                    "name":"Floating Point Compare"
                    , "data":
                    [63, 28, 0, 0]
                  }
                  , "count":1
                }
                , {
                  "info":
                  {
                    "name":"Fsub"
                    , "data":
                    [282, 0, 0, 0]
                  }
                  , "count":2
                }
              ]
            }
            , {
              "name":"CrowdSim_release.cl:610 > CrowdSim_release.cl:451 > \nCrowdSim_release.cl:195"
              , "data":
              [209, 96, 0, 2]
              , "debug":
              [
                [
                  {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":610
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":451
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":195
                  }
                ]
              ]
              , "subinfos":
              [
                {
                  "info":
                  {
                    "name":"Fmul"
                    , "data":
                    [68, 96, 0, 2]
                  }
                  , "count":2
                }
                , {
                  "info":
                  {
                    "name":"Fsub"
                    , "data":
                    [141, 0, 0, 0]
                  }
                  , "count":1
                }
              ]
            }
            , {
              "name":"CrowdSim_release.cl:610 > CrowdSim_release.cl:454 > \nCrowdSim_release.cl:355"
              , "data":
              [63, 28, 0, 0]
              , "debug":
              [
                [
                  {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":610
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":454
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":355
                  }
                ]
              ]
              , "subinfos":
              [
                {
                  "info":
                  {
                    "name":"Floating Point Compare"
                    , "data":
                    [63, 28, 0, 0]
                  }
                  , "count":1
                }
              ]
            }
          ]
        }
        , {
          "name":"Block14"
          , "resources":
          [
            {
              "name":"State"
              , "data":
              [2815.33, 7723.51, 12, 0]
              , "details":
              [
                "Resources for live values and control logic. To reduce this area:\n- reduce size of local variables\n- reduce scope of local variables, localizing them as much as possible\n- reduce number of nested loops"
              ]
              , "subinfos":
              [
                {
                  "info":
                  {
                    "name":"Control flow logic"
                    , "data":
                    [643, 1704.5, 0, 0]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"CrowdSim_release.cl:610 > CrowdSim_release.cl:454 > \nCrowdSim_release.cl:355"
                    , "data":
                    [27.6667, 19.5, 1.5, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":610
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":454
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":355
                        }
                      ]
                    ]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"CrowdSim_release.cl:610 > CrowdSim_release.cl:454 > \nCrowdSim_release.cl:361"
                    , "data":
                    [68.75, 125.125, 0.625, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":610
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":454
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":361
                        }
                      ]
                    ]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"CrowdSim_release.cl:610 > CrowdSim_release.cl:454 > \nCrowdSim_release.cl:362"
                    , "data":
                    [68.75, 125.125, 0.625, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":610
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":454
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":362
                        }
                      ]
                    ]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"CrowdSim_release.cl:610 > CrowdSim_release.cl:454 > \nCrowdSim_release.cl:366"
                    , "data":
                    [149.833, 1027, 3, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":610
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":454
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":366
                        }
                      ]
                    ]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"CrowdSim_release.cl:610 > CrowdSim_release.cl:454 > \nCrowdSim_release.cl:367"
                    , "data":
                    [8.5, 69.5, 0, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":610
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":454
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":367
                        }
                      ]
                    ]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"CrowdSim_release.cl:610 > CrowdSim_release.cl:454 > \nCrowdSim_release.cl:367 > CrowdSim_release.cl:195"
                    , "data":
                    [372, 817, 0, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":610
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":454
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":367
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":195
                        }
                      ]
                    ]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"CrowdSim_release.cl:610 > CrowdSim_release.cl:454 > \nCrowdSim_release.cl:368"
                    , "data":
                    [406.5, 874.5, 0, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":610
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":454
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":368
                        }
                      ]
                    ]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"CrowdSim_release.cl:610 > CrowdSim_release.cl:454 > \nCrowdSim_release.cl:368 > CrowdSim_release.cl:195"
                    , "data":
                    [496, 1067, 0, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":610
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":454
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":368
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":195
                        }
                      ]
                    ]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"CrowdSim_release.cl:610 > CrowdSim_release.cl:454 > \nCrowdSim_release.cl:370 > CrowdSim_release.cl:157"
                    , "data":
                    [80, 160, 0, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":610
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":454
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":370
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":157
                        }
                      ]
                    ]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"CrowdSim_release.cl:610 > CrowdSim_release.cl:454 > \nCrowdSim_release.cl:372"
                    , "data":
                    [60.4167, 447.25, 1.25, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":610
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":454
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":372
                        }
                      ]
                    ]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"CrowdSim_release.cl:610 > CrowdSim_release.cl:454 > \nCrowdSim_release.cl:381"
                    , "data":
                    [16, 32, 0, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":610
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":454
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":381
                        }
                      ]
                    ]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"CrowdSim_release.cl:610 > CrowdSim_release.cl:454 > \nCrowdSim_release.cl:383"
                    , "data":
                    [16, 32, 0, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":610
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":454
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":383
                        }
                      ]
                    ]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"CrowdSim_release.cl:610 > CrowdSim_release.cl:454 > \nCrowdSim_release.cl:385"
                    , "data":
                    [131.75, 240.625, 1.125, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":610
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":454
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":385
                        }
                      ]
                    ]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"CrowdSim_release.cl:610 > CrowdSim_release.cl:454 > \nCrowdSim_release.cl:389"
                    , "data":
                    [131.75, 240.625, 1.125, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":610
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":454
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":389
                        }
                      ]
                    ]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"CrowdSim_release.cl:610 > CrowdSim_release.cl:454 > \nCrowdSim_release.cl:392"
                    , "data":
                    [60.4167, 447.25, 1.25, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":610
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":454
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":392
                        }
                      ]
                    ]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"No Source Line"
                    , "data":
                    [78, 294.5, 1.5, 0]
                  }
                  , "count":0
                }
              ]
            }
            , {
              "name":"Cluster logic"
              , "data":
              [567.667, 1095, 7, 0]
              , "details":
              [
                "Logic required to efficiently support sets of operations that do not stall. This area cannot be affected directly."
              ]
            }
          ]
          , "computation":
          [
            {
              "name":"CrowdSim_release.cl:610 > CrowdSim_release.cl:454 > \nCrowdSim_release.cl:366"
              , "data":
              [16, 0, 0, 0]
              , "debug":
              [
                [
                  {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":610
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":454
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":366
                  }
                ]
              ]
              , "subinfos":
              [
                {
                  "info":
                  {
                    "name":"Integer Compare"
                    , "data":
                    [16, 0, 0, 0]
                  }
                  , "count":1
                }
              ]
            }
            , {
              "name":"CrowdSim_release.cl:610 > CrowdSim_release.cl:454 > \nCrowdSim_release.cl:367"
              , "data":
              [250.5, 984.5, 6.5, 0]
              , "debug":
              [
                [
                  {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":610
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":454
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":367
                  }
                ]
              ]
              , "subinfos":
              [
                {
                  "info":
                  {
                    "name":"Add"
                    , "data":
                    [16, 0, 0, 0]
                  }
                  , "count":1
                }
                , {
                  "info":
                  {
                    "name":"Load"
                    , "data":
                    [218.5, 984.5, 6.5, 0]
                  }
                  , "count":1
                }
                , {
                  "info":
                  {
                    "name":"Pointer Computation"
                    , "data":
                    [16, 0, 0, 0]
                  }
                  , "count":1
                }
              ]
            }
            , {
              "name":"CrowdSim_release.cl:610 > CrowdSim_release.cl:454 > \nCrowdSim_release.cl:367 > CrowdSim_release.cl:195"
              , "data":
              [209, 96, 0, 2]
              , "debug":
              [
                [
                  {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":610
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":454
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":367
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":195
                  }
                ]
              ]
              , "subinfos":
              [
                {
                  "info":
                  {
                    "name":"Fmul"
                    , "data":
                    [68, 96, 0, 2]
                  }
                  , "count":2
                }
                , {
                  "info":
                  {
                    "name":"Fsub"
                    , "data":
                    [141, 0, 0, 0]
                  }
                  , "count":1
                }
              ]
            }
            , {
              "name":"CrowdSim_release.cl:610 > CrowdSim_release.cl:454 > \nCrowdSim_release.cl:368"
              , "data":
              [500.5, 984.5, 6.5, 0]
              , "debug":
              [
                [
                  {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":610
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":454
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":368
                  }
                ]
              ]
              , "subinfos":
              [
                {
                  "info":
                  {
                    "name":"Fsub"
                    , "data":
                    [282, 0, 0, 0]
                  }
                  , "count":2
                }
                , {
                  "info":
                  {
                    "name":"Load"
                    , "data":
                    [218.5, 984.5, 6.5, 0]
                  }
                  , "count":1
                }
              ]
            }
            , {
              "name":"CrowdSim_release.cl:610 > CrowdSim_release.cl:454 > \nCrowdSim_release.cl:368 > CrowdSim_release.cl:195"
              , "data":
              [209, 96, 0, 2]
              , "debug":
              [
                [
                  {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":610
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":454
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":368
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":195
                  }
                ]
              ]
              , "subinfos":
              [
                {
                  "info":
                  {
                    "name":"Fmul"
                    , "data":
                    [68, 96, 0, 2]
                  }
                  , "count":2
                }
                , {
                  "info":
                  {
                    "name":"Fsub"
                    , "data":
                    [141, 0, 0, 0]
                  }
                  , "count":1
                }
              ]
            }
            , {
              "name":"CrowdSim_release.cl:610 > CrowdSim_release.cl:454 > \nCrowdSim_release.cl:370"
              , "data":
              [63, 28, 0, 0]
              , "debug":
              [
                [
                  {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":610
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":454
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":370
                  }
                ]
              ]
              , "subinfos":
              [
                {
                  "info":
                  {
                    "name":"Floating Point Compare"
                    , "data":
                    [63, 28, 0, 0]
                  }
                  , "count":1
                }
              ]
            }
            , {
              "name":"CrowdSim_release.cl:610 > CrowdSim_release.cl:454 > \nCrowdSim_release.cl:370 > CrowdSim_release.cl:156"
              , "data":
              [63, 28, 0, 0]
              , "debug":
              [
                [
                  {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":610
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":454
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":370
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":156
                  }
                ]
              ]
              , "subinfos":
              [
                {
                  "info":
                  {
                    "name":"Floating Point Compare"
                    , "data":
                    [63, 28, 0, 0]
                  }
                  , "count":1
                }
              ]
            }
            , {
              "name":"CrowdSim_release.cl:610 > CrowdSim_release.cl:454 > \nCrowdSim_release.cl:372"
              , "data":
              [63, 28, 0, 0]
              , "debug":
              [
                [
                  {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":610
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":454
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":372
                  }
                ]
              ]
              , "subinfos":
              [
                {
                  "info":
                  {
                    "name":"Floating Point Compare"
                    , "data":
                    [63, 28, 0, 0]
                  }
                  , "count":1
                }
              ]
            }
            , {
              "name":"CrowdSim_release.cl:610 > CrowdSim_release.cl:454 > \nCrowdSim_release.cl:381"
              , "data":
              [185, 409, 5, 5]
              , "debug":
              [
                [
                  {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":610
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":454
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":381
                  }
                ]
              ]
              , "subinfos":
              [
                {
                  "info":
                  {
                    "name":"Floating Point Divide"
                    , "data":
                    [185, 409, 5, 5]
                  }
                  , "count":1
                }
              ]
            }
            , {
              "name":"CrowdSim_release.cl:610 > CrowdSim_release.cl:454 > \nCrowdSim_release.cl:383"
              , "data":
              [63, 28, 0, 0]
              , "debug":
              [
                [
                  {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":610
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":454
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":383
                  }
                ]
              ]
              , "subinfos":
              [
                {
                  "info":
                  {
                    "name":"Floating Point Compare"
                    , "data":
                    [63, 28, 0, 0]
                  }
                  , "count":1
                }
              ]
            }
            , {
              "name":"CrowdSim_release.cl:610 > CrowdSim_release.cl:454 > \nCrowdSim_release.cl:385"
              , "data":
              [63, 28, 0, 0]
              , "debug":
              [
                [
                  {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":610
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":454
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":385
                  }
                ]
              ]
              , "subinfos":
              [
                {
                  "info":
                  {
                    "name":"Floating Point Compare"
                    , "data":
                    [63, 28, 0, 0]
                  }
                  , "count":1
                }
              ]
            }
            , {
              "name":"CrowdSim_release.cl:610 > CrowdSim_release.cl:454 > \nCrowdSim_release.cl:389"
              , "data":
              [63, 28, 0, 0]
              , "debug":
              [
                [
                  {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":610
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":454
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":389
                  }
                ]
              ]
              , "subinfos":
              [
                {
                  "info":
                  {
                    "name":"Floating Point Compare"
                    , "data":
                    [63, 28, 0, 0]
                  }
                  , "count":1
                }
              ]
            }
            , {
              "name":"CrowdSim_release.cl:610 > CrowdSim_release.cl:454 > \nCrowdSim_release.cl:392"
              , "data":
              [63, 28, 0, 0]
              , "debug":
              [
                [
                  {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":610
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":454
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":392
                  }
                ]
              ]
              , "subinfos":
              [
                {
                  "info":
                  {
                    "name":"Floating Point Compare"
                    , "data":
                    [63, 28, 0, 0]
                  }
                  , "count":1
                }
              ]
            }
          ]
        }
        , {
          "name":"Block15"
          , "resources":
          [
            {
              "name":"State"
              , "data":
              [6353, 14318.5, 30, 0]
              , "details":
              [
                "Resources for live values and control logic. To reduce this area:\n- reduce size of local variables\n- reduce scope of local variables, localizing them as much as possible\n- reduce number of nested loops"
              ]
              , "subinfos":
              [
                {
                  "info":
                  {
                    "name":"Control flow logic"
                    , "data":
                    [804, 1254.5, 0, 0]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"CrowdSim_release.cl:610"
                    , "data":
                    [21.4, 30.6, 0.4, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":610
                        }
                      ]
                    ]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"CrowdSim_release.cl:610 > CrowdSim_release.cl:442"
                    , "data":
                    [21.4, 30.6, 0.4, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":610
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":442
                        }
                      ]
                    ]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"CrowdSim_release.cl:610 > CrowdSim_release.cl:450"
                    , "data":
                    [36.8167, 267.625, 1.03333, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":610
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":450
                        }
                      ]
                    ]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"CrowdSim_release.cl:610 > CrowdSim_release.cl:451"
                    , "data":
                    [10.9167, 70.875, 0.208333, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":610
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":451
                        }
                      ]
                    ]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"CrowdSim_release.cl:610 > CrowdSim_release.cl:454 > \nCrowdSim_release.cl:352 > CrowdSim_release.cl:164"
                    , "data":
                    [340, 753, 0, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":610
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":454
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":352
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":164
                        }
                      ]
                    ]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"CrowdSim_release.cl:610 > CrowdSim_release.cl:454 > \nCrowdSim_release.cl:353"
                    , "data":
                    [498, 1042, 1, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":610
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":454
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":353
                        }
                      ]
                    ]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"CrowdSim_release.cl:610 > CrowdSim_release.cl:454 > \nCrowdSim_release.cl:353 > CrowdSim_release.cl:189 > \nCrowdSim_release.cl:164"
                    , "data":
                    [401.333, 847.667, 1.33333, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":610
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":454
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":353
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":189
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":164
                        }
                      ]
                    ]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"CrowdSim_release.cl:610 > CrowdSim_release.cl:454 > \nCrowdSim_release.cl:353 > CrowdSim_release.cl:201"
                    , "data":
                    [78.6, 172.2, 0, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":610
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":454
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":353
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":201
                        }
                      ]
                    ]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"CrowdSim_release.cl:610 > CrowdSim_release.cl:454 > \nCrowdSim_release.cl:355"
                    , "data":
                    [16.95, 132.875, 0.4125, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":610
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":454
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":355
                        }
                      ]
                    ]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"CrowdSim_release.cl:610 > CrowdSim_release.cl:454 > \nCrowdSim_release.cl:361"
                    , "data":
                    [237.2, 494.9, 0.5, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":610
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":454
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":361
                        }
                      ]
                    ]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"CrowdSim_release.cl:610 > CrowdSim_release.cl:454 > \nCrowdSim_release.cl:362"
                    , "data":
                    [237.2, 494.9, 0.5, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":610
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":454
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":362
                        }
                      ]
                    ]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"CrowdSim_release.cl:610 > CrowdSim_release.cl:454 > \nCrowdSim_release.cl:366"
                    , "data":
                    [7, 4.5, 0.5, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":610
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":454
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":366
                        }
                      ]
                    ]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"CrowdSim_release.cl:610 > CrowdSim_release.cl:454 > \nCrowdSim_release.cl:398"
                    , "data":
                    [16.95, 132.875, 0.4125, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":610
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":454
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":398
                        }
                      ]
                    ]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"CrowdSim_release.cl:610 > CrowdSim_release.cl:454 > \nCrowdSim_release.cl:414"
                    , "data":
                    [406, 874, 0, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":610
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":454
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":414
                        }
                      ]
                    ]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"CrowdSim_release.cl:610 > CrowdSim_release.cl:454 > \nCrowdSim_release.cl:414 > CrowdSim_release.cl:164"
                    , "data":
                    [408, 891, 0, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":610
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":454
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":414
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":164
                        }
                      ]
                    ]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"CrowdSim_release.cl:610 > CrowdSim_release.cl:454 > \nCrowdSim_release.cl:416"
                    , "data":
                    [15.3333, 23.6667, 0.333333, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":610
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":454
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":416
                        }
                      ]
                    ]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"CrowdSim_release.cl:610 > CrowdSim_release.cl:454 > \nCrowdSim_release.cl:417"
                    , "data":
                    [706.167, 1448.43, 2.53333, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":610
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":454
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":417
                        }
                      ]
                    ]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"CrowdSim_release.cl:610 > CrowdSim_release.cl:454 > \nCrowdSim_release.cl:419"
                    , "data":
                    [22.3333, 28.1667, 0.833333, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":610
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":454
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":419
                        }
                      ]
                    ]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"CrowdSim_release.cl:610 > CrowdSim_release.cl:454 > \nCrowdSim_release.cl:420"
                    , "data":
                    [706.166, 1448.43, 2.53333, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":610
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":454
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":420
                        }
                      ]
                    ]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"CrowdSim_release.cl:610 > CrowdSim_release.cl:454 > \nCrowdSim_release.cl:423"
                    , "data":
                    [727, 1498.6, 1.86667, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":610
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":454
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":423
                        }
                      ]
                    ]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"No Source Line"
                    , "data":
                    [634.233, 2377.08, 15.2, 0]
                  }
                  , "count":0
                }
              ]
            }
            , {
              "name":"Cluster logic"
              , "data":
              [612, 1763, 5, 0]
              , "details":
              [
                "Logic required to efficiently support sets of operations that do not stall. This area cannot be affected directly."
              ]
            }
          ]
          , "computation":
          [
            {
              "name":"CrowdSim_release.cl:610 > CrowdSim_release.cl:451"
              , "data":
              [469, 1969, 13, 0]
              , "debug":
              [
                [
                  {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":610
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":451
                  }
                ]
              ]
              , "subinfos":
              [
                {
                  "info":
                  {
                    "name":"Add"
                    , "data":
                    [16, 0, 0, 0]
                  }
                  , "count":1
                }
                , {
                  "info":
                  {
                    "name":"Load"
                    , "data":
                    [437, 1969, 13, 0]
                  }
                  , "count":1
                }
                , {
                  "info":
                  {
                    "name":"Pointer Computation"
                    , "data":
                    [16, 0, 0, 0]
                  }
                  , "count":1
                }
              ]
            }
            , {
              "name":"CrowdSim_release.cl:610 > CrowdSim_release.cl:454 > \nCrowdSim_release.cl:352 > CrowdSim_release.cl:164"
              , "data":
              [209, 96, 0, 2]
              , "debug":
              [
                [
                  {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":610
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":454
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":352
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":164
                  }
                ]
              ]
              , "subinfos":
              [
                {
                  "info":
                  {
                    "name":"Fadd"
                    , "data":
                    [141, 0, 0, 0]
                  }
                  , "count":1
                }
                , {
                  "info":
                  {
                    "name":"Fmul"
                    , "data":
                    [68, 96, 0, 2]
                  }
                  , "count":2
                }
              ]
            }
            , {
              "name":"CrowdSim_release.cl:610 > CrowdSim_release.cl:454 > \nCrowdSim_release.cl:353"
              , "data":
              [282, 0, 0, 0]
              , "debug":
              [
                [
                  {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":610
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":454
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":353
                  }
                ]
              ]
              , "subinfos":
              [
                {
                  "info":
                  {
                    "name":"Fadd"
                    , "data":
                    [141, 0, 0, 0]
                  }
                  , "count":1
                }
                , {
                  "info":
                  {
                    "name":"Fsub"
                    , "data":
                    [141, 0, 0, 0]
                  }
                  , "count":1
                }
              ]
            }
            , {
              "name":"CrowdSim_release.cl:610 > CrowdSim_release.cl:454 > \nCrowdSim_release.cl:353 > CrowdSim_release.cl:189 > \nCrowdSim_release.cl:164"
              , "data":
              [209, 96, 0, 2]
              , "debug":
              [
                [
                  {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":610
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":454
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":353
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":189
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":164
                  }
                ]
              ]
              , "subinfos":
              [
                {
                  "info":
                  {
                    "name":"Fadd"
                    , "data":
                    [141, 0, 0, 0]
                  }
                  , "count":1
                }
                , {
                  "info":
                  {
                    "name":"Fmul"
                    , "data":
                    [68, 96, 0, 2]
                  }
                  , "count":2
                }
              ]
            }
            , {
              "name":"CrowdSim_release.cl:610 > CrowdSim_release.cl:454 > \nCrowdSim_release.cl:353 > CrowdSim_release.cl:201"
              , "data":
              [17, 48, 0, 1]
              , "debug":
              [
                [
                  {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":610
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":454
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":353
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":201
                  }
                ]
              ]
              , "subinfos":
              [
                {
                  "info":
                  {
                    "name":"Fmul"
                    , "data":
                    [17, 48, 0, 1]
                  }
                  , "count":1
                }
              ]
            }
            , {
              "name":"CrowdSim_release.cl:610 > CrowdSim_release.cl:454 > \nCrowdSim_release.cl:360 > CrowdSim_release.cl:169"
              , "data":
              [129, 346, 3, 2]
              , "debug":
              [
                [
                  {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":610
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":454
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":360
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":169
                  }
                ]
              ]
              , "subinfos":
              [
                {
                  "info":
                  {
                    "name":"'sqrtf' Function Call"
                    , "data":
                    [129, 346, 3, 2]
                  }
                  , "count":1
                }
              ]
            }
            , {
              "name":"CrowdSim_release.cl:610 > CrowdSim_release.cl:454 > \nCrowdSim_release.cl:361"
              , "data":
              [141, 0, 0, 0]
              , "debug":
              [
                [
                  {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":610
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":454
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":361
                  }
                ]
              ]
              , "subinfos":
              [
                {
                  "info":
                  {
                    "name":"Fsub"
                    , "data":
                    [141, 0, 0, 0]
                  }
                  , "count":1
                }
              ]
            }
            , {
              "name":"CrowdSim_release.cl:610 > CrowdSim_release.cl:454 > \nCrowdSim_release.cl:362"
              , "data":
              [141, 0, 0, 0]
              , "debug":
              [
                [
                  {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":610
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":454
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":362
                  }
                ]
              ]
              , "subinfos":
              [
                {
                  "info":
                  {
                    "name":"Fsub"
                    , "data":
                    [141, 0, 0, 0]
                  }
                  , "count":1
                }
              ]
            }
            , {
              "name":"CrowdSim_release.cl:610 > CrowdSim_release.cl:454 > \nCrowdSim_release.cl:414"
              , "data":
              [282, 0, 0, 0]
              , "debug":
              [
                [
                  {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":610
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":454
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":414
                  }
                ]
              ]
              , "subinfos":
              [
                {
                  "info":
                  {
                    "name":"Fsub"
                    , "data":
                    [282, 0, 0, 0]
                  }
                  , "count":2
                }
              ]
            }
            , {
              "name":"CrowdSim_release.cl:610 > CrowdSim_release.cl:454 > \nCrowdSim_release.cl:414 > CrowdSim_release.cl:164"
              , "data":
              [209, 96, 0, 2]
              , "debug":
              [
                [
                  {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":610
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":454
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":414
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":164
                  }
                ]
              ]
              , "subinfos":
              [
                {
                  "info":
                  {
                    "name":"Fadd"
                    , "data":
                    [141, 0, 0, 0]
                  }
                  , "count":1
                }
                , {
                  "info":
                  {
                    "name":"Fmul"
                    , "data":
                    [68, 96, 0, 2]
                  }
                  , "count":2
                }
              ]
            }
            , {
              "name":"CrowdSim_release.cl:610 > CrowdSim_release.cl:454 > \nCrowdSim_release.cl:416"
              , "data":
              [63, 28, 0, 0]
              , "debug":
              [
                [
                  {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":610
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":454
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":416
                  }
                ]
              ]
              , "subinfos":
              [
                {
                  "info":
                  {
                    "name":"Floating Point Compare"
                    , "data":
                    [63, 28, 0, 0]
                  }
                  , "count":1
                }
              ]
            }
            , {
              "name":"CrowdSim_release.cl:610 > CrowdSim_release.cl:454 > \nCrowdSim_release.cl:417"
              , "data":
              [477.667, 842.667, 5.66667, 2]
              , "debug":
              [
                [
                  {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":610
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":454
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":417
                  }
                ]
              ]
              , "subinfos":
              [
                {
                  "info":
                  {
                    "name":"Fadd"
                    , "data":
                    [282, 0, 0, 0]
                  }
                  , "count":2
                }
                , {
                  "info":
                  {
                    "name":"Fmul"
                    , "data":
                    [68, 96, 0, 2]
                  }
                  , "count":2
                }
                , {
                  "info":
                  {
                    "name":"Store"
                    , "data":
                    [127.667, 746.667, 5.66667, 0]
                  }
                  , "count":1
                }
              ]
            }
            , {
              "name":"CrowdSim_release.cl:610 > CrowdSim_release.cl:454 > \nCrowdSim_release.cl:419"
              , "data":
              [63, 28, 0, 0]
              , "debug":
              [
                [
                  {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":610
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":454
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":419
                  }
                ]
              ]
              , "subinfos":
              [
                {
                  "info":
                  {
                    "name":"Floating Point Compare"
                    , "data":
                    [63, 28, 0, 0]
                  }
                  , "count":1
                }
              ]
            }
            , {
              "name":"CrowdSim_release.cl:610 > CrowdSim_release.cl:454 > \nCrowdSim_release.cl:420"
              , "data":
              [477.667, 842.667, 5.66667, 2]
              , "debug":
              [
                [
                  {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":610
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":454
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":420
                  }
                ]
              ]
              , "subinfos":
              [
                {
                  "info":
                  {
                    "name":"Fadd"
                    , "data":
                    [282, 0, 0, 0]
                  }
                  , "count":2
                }
                , {
                  "info":
                  {
                    "name":"Fmul"
                    , "data":
                    [68, 96, 0, 2]
                  }
                  , "count":2
                }
                , {
                  "info":
                  {
                    "name":"Store"
                    , "data":
                    [127.667, 746.667, 5.66667, 0]
                  }
                  , "count":1
                }
              ]
            }
            , {
              "name":"CrowdSim_release.cl:610 > CrowdSim_release.cl:454 > \nCrowdSim_release.cl:423"
              , "data":
              [477.667, 842.667, 5.66667, 2]
              , "debug":
              [
                [
                  {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":610
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":454
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":423
                  }
                ]
              ]
              , "subinfos":
              [
                {
                  "info":
                  {
                    "name":"Fadd"
                    , "data":
                    [282, 0, 0, 0]
                  }
                  , "count":2
                }
                , {
                  "info":
                  {
                    "name":"Fmul"
                    , "data":
                    [68, 96, 0, 2]
                  }
                  , "count":2
                }
                , {
                  "info":
                  {
                    "name":"Store"
                    , "data":
                    [127.667, 746.667, 5.66667, 0]
                  }
                  , "count":1
                }
              ]
            }
          ]
        }
        , {
          "name":"Block16"
          , "resources":
          [
            {
              "name":"State"
              , "data":
              [1761.17, 4631.5, 11.5, 0]
              , "details":
              [
                "Resources for live values and control logic. To reduce this area:\n- reduce size of local variables\n- reduce scope of local variables, localizing them as much as possible\n- reduce number of nested loops"
              ]
              , "subinfos":
              [
                {
                  "info":
                  {
                    "name":"Control flow logic"
                    , "data":
                    [413, 999.5, 0, 0]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"CrowdSim_release.cl:612"
                    , "data":
                    [48, 105, 1, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":612
                        }
                      ]
                    ]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"CrowdSim_release.cl:613 > CrowdSim_release.cl:469"
                    , "data":
                    [700.167, 2209, 4.5, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":613
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":469
                        }
                      ]
                    ]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"CrowdSim_release.cl:613 > CrowdSim_release.cl:469 > \nCrowdSim_release.cl:195"
                    , "data":
                    [379, 831, 0, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":613
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":469
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":195
                        }
                      ]
                    ]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"CrowdSim_release.cl:613 > CrowdSim_release.cl:477"
                    , "data":
                    [21, 13.5, 1.5, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":613
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":477
                        }
                      ]
                    ]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"No Source Line"
                    , "data":
                    [200, 473.5, 4.5, 0]
                  }
                  , "count":0
                }
              ]
            }
            , {
              "name":"Cluster logic"
              , "data":
              [461.833, 852, 4.5, 0]
              , "details":
              [
                "Logic required to efficiently support sets of operations that do not stall. This area cannot be affected directly."
              ]
            }
          ]
          , "computation":
          [
            {
              "name":"CrowdSim_release.cl:613 > CrowdSim_release.cl:469"
              , "data":
              [814, 1997, 13, 0]
              , "debug":
              [
                [
                  {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":613
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":469
                  }
                ]
              ]
              , "subinfos":
              [
                {
                  "info":
                  {
                    "name":"Add"
                    , "data":
                    [16, 0, 0, 0]
                  }
                  , "count":1
                }
                , {
                  "info":
                  {
                    "name":"Floating Point Compare"
                    , "data":
                    [63, 28, 0, 0]
                  }
                  , "count":1
                }
                , {
                  "info":
                  {
                    "name":"Fsub"
                    , "data":
                    [282, 0, 0, 0]
                  }
                  , "count":2
                }
                , {
                  "info":
                  {
                    "name":"Load"
                    , "data":
                    [437, 1969, 13, 0]
                  }
                  , "count":1
                }
                , {
                  "info":
                  {
                    "name":"Pointer Computation"
                    , "data":
                    [16, 0, 0, 0]
                  }
                  , "count":1
                }
              ]
            }
            , {
              "name":"CrowdSim_release.cl:613 > CrowdSim_release.cl:469 > \nCrowdSim_release.cl:195"
              , "data":
              [209, 96, 0, 2]
              , "debug":
              [
                [
                  {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":613
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":469
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":195
                  }
                ]
              ]
              , "subinfos":
              [
                {
                  "info":
                  {
                    "name":"Fmul"
                    , "data":
                    [68, 96, 0, 2]
                  }
                  , "count":2
                }
                , {
                  "info":
                  {
                    "name":"Fsub"
                    , "data":
                    [141, 0, 0, 0]
                  }
                  , "count":1
                }
              ]
            }
          ]
        }
        , {
          "name":"Block17"
          , "resources":
          [
            {
              "name":"State"
              , "data":
              [5109.8, 12205.7, 36.95, 0]
              , "details":
              [
                "Resources for live values and control logic. To reduce this area:\n- reduce size of local variables\n- reduce scope of local variables, localizing them as much as possible\n- reduce number of nested loops"
              ]
              , "subinfos":
              [
                {
                  "info":
                  {
                    "name":"Control flow logic"
                    , "data":
                    [609, 1458.5, 0, 0]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"CrowdSim_release.cl:613 > CrowdSim_release.cl:475"
                    , "data":
                    [23, 35.5, 0.5, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":613
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":475
                        }
                      ]
                    ]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"CrowdSim_release.cl:613 > CrowdSim_release.cl:477"
                    , "data":
                    [358.033, 1378.17, 10.9667, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":613
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":477
                        }
                      ]
                    ]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"CrowdSim_release.cl:613 > CrowdSim_release.cl:480"
                    , "data":
                    [19.5, 256.25, 0, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":613
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":480
                        }
                      ]
                    ]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"CrowdSim_release.cl:613 > CrowdSim_release.cl:480 > \nCrowdSim_release.cl:195"
                    , "data":
                    [357, 787, 0, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":613
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":480
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":195
                        }
                      ]
                    ]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"CrowdSim_release.cl:613 > CrowdSim_release.cl:482 > \nCrowdSim_release.cl:157"
                    , "data":
                    [60, 120, 0, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":613
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":482
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":157
                        }
                      ]
                    ]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"CrowdSim_release.cl:613 > CrowdSim_release.cl:484 > \nCrowdSim_release.cl:164"
                    , "data":
                    [345, 763, 0, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":613
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":484
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":164
                        }
                      ]
                    ]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"CrowdSim_release.cl:613 > CrowdSim_release.cl:490"
                    , "data":
                    [390.75, 878.75, 2.5, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":613
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":490
                        }
                      ]
                    ]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"CrowdSim_release.cl:613 > CrowdSim_release.cl:494"
                    , "data":
                    [1060.75, 2254.75, 6.5, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":613
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":494
                        }
                      ]
                    ]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"CrowdSim_release.cl:613 > CrowdSim_release.cl:494 > \nCrowdSim_release.cl:195"
                    , "data":
                    [489, 1051, 0, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":613
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":494
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":195
                        }
                      ]
                    ]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"CrowdSim_release.cl:613 > CrowdSim_release.cl:497"
                    , "data":
                    [506, 1032, 2, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":613
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":497
                        }
                      ]
                    ]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"CrowdSim_release.cl:613 > CrowdSim_release.cl:497 > \nCrowdSim_release.cl:180 > CrowdSim_release.cl:175"
                    , "data":
                    [297, 646, 0, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":613
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":497
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":180
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":175
                        }
                      ]
                    ]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"CrowdSim_release.cl:613 > CrowdSim_release.cl:498"
                    , "data":
                    [160, 265.5, 4, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":613
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":498
                        }
                      ]
                    ]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"No Source Line"
                    , "data":
                    [434.767, 1279.33, 10.4833, 0]
                  }
                  , "count":0
                }
              ]
            }
            , {
              "name":"Cluster logic"
              , "data":
              [744.2, 1725.75, 9.05, 0]
              , "details":
              [
                "Logic required to efficiently support sets of operations that do not stall. This area cannot be affected directly."
              ]
            }
          ]
          , "computation":
          [
            {
              "name":"No Source Line"
              , "data":
              [79, 28, 0, 0]
              , "debug":
              [
                [
                  {
                    "filename":""
                    , "line":0
                  }
                ]
              ]
              , "subinfos":
              [
                {
                  "info":
                  {
                    "name":"Floating Point Compare"
                    , "data":
                    [63, 28, 0, 0]
                  }
                  , "count":1
                }
                , {
                  "info":
                  {
                    "name":"Pointer Computation"
                    , "data":
                    [16, 0, 0, 0]
                  }
                  , "count":1
                }
              ]
            }
            , {
              "name":"CrowdSim_release.cl:613 > CrowdSim_release.cl:477"
              , "data":
              [16, 0, 0, 0]
              , "debug":
              [
                [
                  {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":613
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":477
                  }
                ]
              ]
              , "subinfos":
              [
                {
                  "info":
                  {
                    "name":"Integer Compare"
                    , "data":
                    [16, 0, 0, 0]
                  }
                  , "count":1
                }
              ]
            }
            , {
              "name":"CrowdSim_release.cl:613 > CrowdSim_release.cl:480"
              , "data":
              [401, 1165, 9, 0]
              , "debug":
              [
                [
                  {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":613
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":480
                  }
                ]
              ]
              , "subinfos":
              [
                {
                  "info":
                  {
                    "name":"Add"
                    , "data":
                    [16, 0, 0, 0]
                  }
                  , "count":1
                }
                , {
                  "info":
                  {
                    "name":"Load"
                    , "data":
                    [369, 1165, 9, 0]
                  }
                  , "count":1
                }
                , {
                  "info":
                  {
                    "name":"Pointer Computation"
                    , "data":
                    [16, 0, 0, 0]
                  }
                  , "count":1
                }
              ]
            }
            , {
              "name":"CrowdSim_release.cl:613 > CrowdSim_release.cl:480 > \nCrowdSim_release.cl:195"
              , "data":
              [209, 96, 0, 2]
              , "debug":
              [
                [
                  {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":613
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":480
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":195
                  }
                ]
              ]
              , "subinfos":
              [
                {
                  "info":
                  {
                    "name":"Fmul"
                    , "data":
                    [68, 96, 0, 2]
                  }
                  , "count":2
                }
                , {
                  "info":
                  {
                    "name":"Fsub"
                    , "data":
                    [141, 0, 0, 0]
                  }
                  , "count":1
                }
              ]
            }
            , {
              "name":"CrowdSim_release.cl:613 > CrowdSim_release.cl:482"
              , "data":
              [63, 28, 0, 0]
              , "debug":
              [
                [
                  {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":613
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":482
                  }
                ]
              ]
              , "subinfos":
              [
                {
                  "info":
                  {
                    "name":"Floating Point Compare"
                    , "data":
                    [63, 28, 0, 0]
                  }
                  , "count":1
                }
              ]
            }
            , {
              "name":"CrowdSim_release.cl:613 > CrowdSim_release.cl:482 > \nCrowdSim_release.cl:156"
              , "data":
              [63, 28, 0, 0]
              , "debug":
              [
                [
                  {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":613
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":482
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":156
                  }
                ]
              ]
              , "subinfos":
              [
                {
                  "info":
                  {
                    "name":"Floating Point Compare"
                    , "data":
                    [63, 28, 0, 0]
                  }
                  , "count":1
                }
              ]
            }
            , {
              "name":"CrowdSim_release.cl:613 > CrowdSim_release.cl:484 > \nCrowdSim_release.cl:164"
              , "data":
              [209, 96, 0, 2]
              , "debug":
              [
                [
                  {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":613
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":484
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":164
                  }
                ]
              ]
              , "subinfos":
              [
                {
                  "info":
                  {
                    "name":"Fadd"
                    , "data":
                    [141, 0, 0, 0]
                  }
                  , "count":1
                }
                , {
                  "info":
                  {
                    "name":"Fmul"
                    , "data":
                    [68, 96, 0, 2]
                  }
                  , "count":2
                }
              ]
            }
            , {
              "name":"CrowdSim_release.cl:613 > CrowdSim_release.cl:490"
              , "data":
              [435.5, 992.5, 6.5, 0]
              , "debug":
              [
                [
                  {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":613
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":490
                  }
                ]
              ]
              , "subinfos":
              [
                {
                  "info":
                  {
                    "name":"Add"
                    , "data":
                    [16, 0, 0, 0]
                  }
                  , "count":4
                }
                , {
                  "info":
                  {
                    "name":"And"
                    , "data":
                    [16, 0, 0, 0]
                  }
                  , "count":8
                }
                , {
                  "info":
                  {
                    "name":"Combined Fadd and Fsub"
                    , "data":
                    [163, 0, 0, 0]
                  }
                  , "count":2
                }
                , {
                  "info":
                  {
                    "name":"Load"
                    , "data":
                    [226.5, 992.5, 6.5, 0]
                  }
                  , "count":1
                }
                , {
                  "info":
                  {
                    "name":"Or"
                    , "data":
                    [14, 0, 0, 0]
                  }
                  , "count":10
                }
              ]
            }
            , {
              "name":"CrowdSim_release.cl:613 > CrowdSim_release.cl:494"
              , "data":
              [940.5, 1497.5, 11.5, 7]
              , "debug":
              [
                [
                  {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":613
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":494
                  }
                ]
              ]
              , "subinfos":
              [
                {
                  "info":
                  {
                    "name":"Combined Fadd and Fsub"
                    , "data":
                    [163, 0, 0, 0]
                  }
                  , "count":2
                }
                , {
                  "info":
                  {
                    "name":"Fadd"
                    , "data":
                    [282, 0, 0, 0]
                  }
                  , "count":2
                }
                , {
                  "info":
                  {
                    "name":"Floating Point Divide"
                    , "data":
                    [185, 409, 5, 5]
                  }
                  , "count":1
                }
                , {
                  "info":
                  {
                    "name":"Fmul"
                    , "data":
                    [68, 96, 0, 2]
                  }
                  , "count":2
                }
                , {
                  "info":
                  {
                    "name":"Load"
                    , "data":
                    [226.5, 992.5, 6.5, 0]
                  }
                  , "count":1
                }
                , {
                  "info":
                  {
                    "name":"Pointer Computation"
                    , "data":
                    [16, 0, 0, 0]
                  }
                  , "count":1
                }
              ]
            }
            , {
              "name":"CrowdSim_release.cl:613 > CrowdSim_release.cl:494 > \nCrowdSim_release.cl:195"
              , "data":
              [209, 96, 0, 2]
              , "debug":
              [
                [
                  {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":613
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":494
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":195
                  }
                ]
              ]
              , "subinfos":
              [
                {
                  "info":
                  {
                    "name":"Fmul"
                    , "data":
                    [68, 96, 0, 2]
                  }
                  , "count":2
                }
                , {
                  "info":
                  {
                    "name":"Fsub"
                    , "data":
                    [141, 0, 0, 0]
                  }
                  , "count":1
                }
              ]
            }
            , {
              "name":"CrowdSim_release.cl:613 > CrowdSim_release.cl:497"
              , "data":
              [282, 0, 0, 0]
              , "debug":
              [
                [
                  {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":613
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":497
                  }
                ]
              ]
              , "subinfos":
              [
                {
                  "info":
                  {
                    "name":"Fsub"
                    , "data":
                    [282, 0, 0, 0]
                  }
                  , "count":2
                }
              ]
            }
            , {
              "name":"CrowdSim_release.cl:613 > CrowdSim_release.cl:497 > \nCrowdSim_release.cl:180 > CrowdSim_release.cl:175"
              , "data":
              [103, 96, 0, 2]
              , "debug":
              [
                [
                  {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":613
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":497
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":180
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":175
                  }
                ]
              ]
              , "subinfos":
              [
                {
                  "info":
                  {
                    "name":"Fadd"
                    , "data":
                    [69, 0, 0, 0]
                  }
                  , "count":1
                }
                , {
                  "info":
                  {
                    "name":"Fmul"
                    , "data":
                    [34, 96, 0, 2]
                  }
                  , "count":2
                }
              ]
            }
            , {
              "name":"CrowdSim_release.cl:613 > CrowdSim_release.cl:497 > \nCrowdSim_release.cl:180 > CrowdSim_release.cl:175 > \nCrowdSim_release.cl:169"
              , "data":
              [129, 346, 3, 2]
              , "debug":
              [
                [
                  {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":613
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":497
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":180
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":175
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":169
                  }
                ]
              ]
              , "subinfos":
              [
                {
                  "info":
                  {
                    "name":"'sqrtf' Function Call"
                    , "data":
                    [129, 346, 3, 2]
                  }
                  , "count":1
                }
              ]
            }
            , {
              "name":"CrowdSim_release.cl:613 > CrowdSim_release.cl:497 > \nCrowdSim_release.cl:182"
              , "data":
              [185, 409, 5, 5]
              , "debug":
              [
                [
                  {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":613
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":497
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":182
                  }
                ]
              ]
              , "subinfos":
              [
                {
                  "info":
                  {
                    "name":"Floating Point Divide"
                    , "data":
                    [185, 409, 5, 5]
                  }
                  , "count":1
                }
              ]
            }
            , {
              "name":"CrowdSim_release.cl:613 > CrowdSim_release.cl:497 > \nCrowdSim_release.cl:183"
              , "data":
              [185, 409, 5, 5]
              , "debug":
              [
                [
                  {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":613
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":497
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":183
                  }
                ]
              ]
              , "subinfos":
              [
                {
                  "info":
                  {
                    "name":"Floating Point Divide"
                    , "data":
                    [185, 409, 5, 5]
                  }
                  , "count":1
                }
              ]
            }
            , {
              "name":"CrowdSim_release.cl:613 > CrowdSim_release.cl:498"
              , "data":
              [375, 2300, 17, 0]
              , "debug":
              [
                [
                  {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":613
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":498
                  }
                ]
              ]
              , "subinfos":
              [
                {
                  "info":
                  {
                    "name":"Store"
                    , "data":
                    [375, 2300, 17, 0]
                  }
                  , "count":1
                }
              ]
            }
          ]
        }
        , {
          "name":"Block18"
          , "resources":
          [
            {
              "name":"State"
              , "data":
              [3827.99, 10726.5, 15, 0]
              , "details":
              [
                "Resources for live values and control logic. To reduce this area:\n- reduce size of local variables\n- reduce scope of local variables, localizing them as much as possible\n- reduce number of nested loops"
              ]
              , "subinfos":
              [
                {
                  "info":
                  {
                    "name":"Control flow logic"
                    , "data":
                    [576, 880.5, 0, 0]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"CrowdSim_release.cl:613 > CrowdSim_release.cl:503"
                    , "data":
                    [16, 32, 0, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":613
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":503
                        }
                      ]
                    ]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"CrowdSim_release.cl:613 > CrowdSim_release.cl:503 > \nCrowdSim_release.cl:438"
                    , "data":
                    [80.8333, 399.333, 1.5, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":613
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":503
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":438
                        }
                      ]
                    ]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"CrowdSim_release.cl:613 > CrowdSim_release.cl:503 > \nCrowdSim_release.cl:450"
                    , "data":
                    [177.833, 1678.33, 4.5, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":613
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":503
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":450
                        }
                      ]
                    ]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"CrowdSim_release.cl:613 > CrowdSim_release.cl:503 > \nCrowdSim_release.cl:451"
                    , "data":
                    [0.333333, 0.333333, 0, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":613
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":503
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":451
                        }
                      ]
                    ]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"CrowdSim_release.cl:613 > CrowdSim_release.cl:503 > \nCrowdSim_release.cl:454 > CrowdSim_release.cl:352 > \nCrowdSim_release.cl:164"
                    , "data":
                    [340, 753, 0, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":613
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":503
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":454
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":352
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":164
                        }
                      ]
                    ]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"CrowdSim_release.cl:613 > CrowdSim_release.cl:503 > \nCrowdSim_release.cl:454 > CrowdSim_release.cl:353"
                    , "data":
                    [498, 1042, 1, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":613
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":503
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":454
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":353
                        }
                      ]
                    ]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"CrowdSim_release.cl:613 > CrowdSim_release.cl:503 > \nCrowdSim_release.cl:454 > CrowdSim_release.cl:353 > \nCrowdSim_release.cl:189 > CrowdSim_release.cl:164"
                    , "data":
                    [401.333, 847.667, 1.33333, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":613
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":503
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":454
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":353
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":189
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":164
                        }
                      ]
                    ]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"CrowdSim_release.cl:613 > CrowdSim_release.cl:503 > \nCrowdSim_release.cl:454 > CrowdSim_release.cl:353 > \nCrowdSim_release.cl:201"
                    , "data":
                    [78.6, 172.2, 0, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":613
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":503
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":454
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":353
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":201
                        }
                      ]
                    ]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"CrowdSim_release.cl:613 > CrowdSim_release.cl:503 > \nCrowdSim_release.cl:454 > CrowdSim_release.cl:361"
                    , "data":
                    [237.2, 494.9, 0.5, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":613
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":503
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":454
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":361
                        }
                      ]
                    ]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"CrowdSim_release.cl:613 > CrowdSim_release.cl:503 > \nCrowdSim_release.cl:454 > CrowdSim_release.cl:362"
                    , "data":
                    [237.2, 494.9, 0.5, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":613
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":503
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":454
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":362
                        }
                      ]
                    ]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"No Source Line"
                    , "data":
                    [1184.67, 3931.33, 5.66667, 0]
                  }
                  , "count":0
                }
              ]
            }
            , {
              "name":"Cluster logic"
              , "data":
              [1096, 2342, 10, 0]
              , "details":
              [
                "Logic required to efficiently support sets of operations that do not stall. This area cannot be affected directly."
              ]
            }
          ]
          , "computation":
          [
            {
              "name":"CrowdSim_release.cl:613 > CrowdSim_release.cl:503 > \nCrowdSim_release.cl:438"
              , "data":
              [451, 2336, 17, 2]
              , "debug":
              [
                [
                  {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":613
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":503
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":438
                  }
                ]
              ]
              , "subinfos":
              [
                {
                  "info":
                  {
                    "name":"Fmul"
                    , "data":
                    [68, 96, 0, 2]
                  }
                  , "count":2
                }
                , {
                  "info":
                  {
                    "name":"Store"
                    , "data":
                    [383, 2240, 17, 0]
                  }
                  , "count":1
                }
              ]
            }
            , {
              "name":"CrowdSim_release.cl:613 > CrowdSim_release.cl:503 > \nCrowdSim_release.cl:451"
              , "data":
              [437, 1969, 13, 0]
              , "debug":
              [
                [
                  {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":613
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":503
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":451
                  }
                ]
              ]
              , "subinfos":
              [
                {
                  "info":
                  {
                    "name":"Load"
                    , "data":
                    [437, 1969, 13, 0]
                  }
                  , "count":1
                }
              ]
            }
            , {
              "name":"CrowdSim_release.cl:613 > CrowdSim_release.cl:503 > \nCrowdSim_release.cl:454 > CrowdSim_release.cl:352 > \nCrowdSim_release.cl:164"
              , "data":
              [209, 96, 0, 2]
              , "debug":
              [
                [
                  {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":613
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":503
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":454
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":352
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":164
                  }
                ]
              ]
              , "subinfos":
              [
                {
                  "info":
                  {
                    "name":"Fadd"
                    , "data":
                    [141, 0, 0, 0]
                  }
                  , "count":1
                }
                , {
                  "info":
                  {
                    "name":"Fmul"
                    , "data":
                    [68, 96, 0, 2]
                  }
                  , "count":2
                }
              ]
            }
            , {
              "name":"CrowdSim_release.cl:613 > CrowdSim_release.cl:503 > \nCrowdSim_release.cl:454 > CrowdSim_release.cl:353"
              , "data":
              [282, 0, 0, 0]
              , "debug":
              [
                [
                  {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":613
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":503
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":454
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":353
                  }
                ]
              ]
              , "subinfos":
              [
                {
                  "info":
                  {
                    "name":"Fadd"
                    , "data":
                    [141, 0, 0, 0]
                  }
                  , "count":1
                }
                , {
                  "info":
                  {
                    "name":"Fsub"
                    , "data":
                    [141, 0, 0, 0]
                  }
                  , "count":1
                }
              ]
            }
            , {
              "name":"CrowdSim_release.cl:613 > CrowdSim_release.cl:503 > \nCrowdSim_release.cl:454 > CrowdSim_release.cl:353 > \nCrowdSim_release.cl:189 > CrowdSim_release.cl:164"
              , "data":
              [209, 96, 0, 2]
              , "debug":
              [
                [
                  {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":613
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":503
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":454
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":353
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":189
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":164
                  }
                ]
              ]
              , "subinfos":
              [
                {
                  "info":
                  {
                    "name":"Fadd"
                    , "data":
                    [141, 0, 0, 0]
                  }
                  , "count":1
                }
                , {
                  "info":
                  {
                    "name":"Fmul"
                    , "data":
                    [68, 96, 0, 2]
                  }
                  , "count":2
                }
              ]
            }
            , {
              "name":"CrowdSim_release.cl:613 > CrowdSim_release.cl:503 > \nCrowdSim_release.cl:454 > CrowdSim_release.cl:353 > \nCrowdSim_release.cl:201"
              , "data":
              [17, 48, 0, 1]
              , "debug":
              [
                [
                  {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":613
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":503
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":454
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":353
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":201
                  }
                ]
              ]
              , "subinfos":
              [
                {
                  "info":
                  {
                    "name":"Fmul"
                    , "data":
                    [17, 48, 0, 1]
                  }
                  , "count":1
                }
              ]
            }
            , {
              "name":"CrowdSim_release.cl:613 > CrowdSim_release.cl:503 > \nCrowdSim_release.cl:454 > CrowdSim_release.cl:360 > \nCrowdSim_release.cl:169"
              , "data":
              [129, 346, 3, 2]
              , "debug":
              [
                [
                  {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":613
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":503
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":454
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":360
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":169
                  }
                ]
              ]
              , "subinfos":
              [
                {
                  "info":
                  {
                    "name":"'sqrtf' Function Call"
                    , "data":
                    [129, 346, 3, 2]
                  }
                  , "count":1
                }
              ]
            }
            , {
              "name":"CrowdSim_release.cl:613 > CrowdSim_release.cl:503 > \nCrowdSim_release.cl:454 > CrowdSim_release.cl:361"
              , "data":
              [141, 0, 0, 0]
              , "debug":
              [
                [
                  {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":613
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":503
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":454
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":361
                  }
                ]
              ]
              , "subinfos":
              [
                {
                  "info":
                  {
                    "name":"Fsub"
                    , "data":
                    [141, 0, 0, 0]
                  }
                  , "count":1
                }
              ]
            }
            , {
              "name":"CrowdSim_release.cl:613 > CrowdSim_release.cl:503 > \nCrowdSim_release.cl:454 > CrowdSim_release.cl:362"
              , "data":
              [141, 0, 0, 0]
              , "debug":
              [
                [
                  {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":613
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":503
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":454
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":362
                  }
                ]
              ]
              , "subinfos":
              [
                {
                  "info":
                  {
                    "name":"Fsub"
                    , "data":
                    [141, 0, 0, 0]
                  }
                  , "count":1
                }
              ]
            }
          ]
        }
        , {
          "name":"Block19"
          , "resources":
          [
            {
              "name":"State"
              , "data":
              [1879, 6284, 2, 0]
              , "details":
              [
                "Resources for live values and control logic. To reduce this area:\n- reduce size of local variables\n- reduce scope of local variables, localizing them as much as possible\n- reduce number of nested loops"
              ]
              , "subinfos":
              [
                {
                  "info":
                  {
                    "name":"Control flow logic"
                    , "data":
                    [928, 2496, 0, 0]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"CrowdSim_release.cl:613 > CrowdSim_release.cl:503 > \nCrowdSim_release.cl:450"
                    , "data":
                    [0, 42.6667, 0, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":613
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":503
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":450
                        }
                      ]
                    ]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"CrowdSim_release.cl:613 > CrowdSim_release.cl:503 > \nCrowdSim_release.cl:451"
                    , "data":
                    [406, 874, 0, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":613
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":503
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":451
                        }
                      ]
                    ]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"CrowdSim_release.cl:613 > CrowdSim_release.cl:503 > \nCrowdSim_release.cl:451 > CrowdSim_release.cl:195"
                    , "data":
                    [480, 1035, 0, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":613
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":503
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":451
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":195
                        }
                      ]
                    ]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"No Source Line"
                    , "data":
                    [65, 1836.33, 2, 0]
                  }
                  , "count":0
                }
              ]
            }
            , {
              "name":"Cluster logic"
              , "data":
              [218, 502, 2, 0]
              , "details":
              [
                "Logic required to efficiently support sets of operations that do not stall. This area cannot be affected directly."
              ]
            }
          ]
          , "computation":
          [
            {
              "name":"CrowdSim_release.cl:613 > CrowdSim_release.cl:503 > \nCrowdSim_release.cl:450"
              , "data":
              [16, 0, 0, 0]
              , "debug":
              [
                [
                  {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":613
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":503
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":450
                  }
                ]
              ]
              , "subinfos":
              [
                {
                  "info":
                  {
                    "name":"Integer Compare"
                    , "data":
                    [16, 0, 0, 0]
                  }
                  , "count":1
                }
              ]
            }
            , {
              "name":"CrowdSim_release.cl:613 > CrowdSim_release.cl:503 > \nCrowdSim_release.cl:451"
              , "data":
              [345, 28, 0, 0]
              , "debug":
              [
                [
                  {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":613
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":503
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":451
                  }
                ]
              ]
              , "subinfos":
              [
                {
                  "info":
                  {
                    "name":"Floating Point Compare"
                    , "data":
                    [63, 28, 0, 0]
                  }
                  , "count":1
                }
                , {
                  "info":
                  {
                    "name":"Fsub"
                    , "data":
                    [282, 0, 0, 0]
                  }
                  , "count":2
                }
              ]
            }
            , {
              "name":"CrowdSim_release.cl:613 > CrowdSim_release.cl:503 > \nCrowdSim_release.cl:451 > CrowdSim_release.cl:195"
              , "data":
              [209, 96, 0, 2]
              , "debug":
              [
                [
                  {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":613
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":503
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":451
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":195
                  }
                ]
              ]
              , "subinfos":
              [
                {
                  "info":
                  {
                    "name":"Fmul"
                    , "data":
                    [68, 96, 0, 2]
                  }
                  , "count":2
                }
                , {
                  "info":
                  {
                    "name":"Fsub"
                    , "data":
                    [141, 0, 0, 0]
                  }
                  , "count":1
                }
              ]
            }
            , {
              "name":"CrowdSim_release.cl:613 > CrowdSim_release.cl:503 > \nCrowdSim_release.cl:454 > CrowdSim_release.cl:355"
              , "data":
              [63, 28, 0, 0]
              , "debug":
              [
                [
                  {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":613
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":503
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":454
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":355
                  }
                ]
              ]
              , "subinfos":
              [
                {
                  "info":
                  {
                    "name":"Floating Point Compare"
                    , "data":
                    [63, 28, 0, 0]
                  }
                  , "count":1
                }
              ]
            }
          ]
        }
        , {
          "name":"Block2"
          , "resources":
          [
            {
              "name":"State"
              , "data":
              [384, 1243.5, 0, 0]
              , "details":
              [
                "Resources for live values and control logic. To reduce this area:\n- reduce size of local variables\n- reduce scope of local variables, localizing them as much as possible\n- reduce number of nested loops"
              ]
              , "subinfos":
              [
                {
                  "info":
                  {
                    "name":"Control flow logic"
                    , "data":
                    [384, 859.5, 0, 0]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"No Source Line"
                    , "data":
                    [0, 384, 0, 0]
                  }
                  , "count":0
                }
              ]
            }
          ]
          , "computation":
          [
          ]
        }
        , {
          "name":"Block20"
          , "resources":
          [
            {
              "name":"State"
              , "data":
              [3216.33, 9092.5, 15, 0]
              , "details":
              [
                "Resources for live values and control logic. To reduce this area:\n- reduce size of local variables\n- reduce scope of local variables, localizing them as much as possible\n- reduce number of nested loops"
              ]
              , "subinfos":
              [
                {
                  "info":
                  {
                    "name":"Control flow logic"
                    , "data":
                    [933, 2429.5, 0, 0]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"CrowdSim_release.cl:613 > CrowdSim_release.cl:503 > \nCrowdSim_release.cl:454 > CrowdSim_release.cl:355"
                    , "data":
                    [41.6667, 28.5, 2.5, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":613
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":503
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":454
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":355
                        }
                      ]
                    ]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"CrowdSim_release.cl:613 > CrowdSim_release.cl:503 > \nCrowdSim_release.cl:454 > CrowdSim_release.cl:361"
                    , "data":
                    [68.75, 125.125, 0.625, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":613
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":503
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":454
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":361
                        }
                      ]
                    ]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"CrowdSim_release.cl:613 > CrowdSim_release.cl:503 > \nCrowdSim_release.cl:454 > CrowdSim_release.cl:362"
                    , "data":
                    [68.75, 125.125, 0.625, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":613
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":503
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":454
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":362
                        }
                      ]
                    ]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"CrowdSim_release.cl:613 > CrowdSim_release.cl:503 > \nCrowdSim_release.cl:454 > CrowdSim_release.cl:366"
                    , "data":
                    [214.583, 1377.5, 4.5, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":613
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":503
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":454
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":366
                        }
                      ]
                    ]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"CrowdSim_release.cl:613 > CrowdSim_release.cl:503 > \nCrowdSim_release.cl:454 > CrowdSim_release.cl:367"
                    , "data":
                    [8.5, 69.5, 0, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":613
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":503
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":454
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":367
                        }
                      ]
                    ]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"CrowdSim_release.cl:613 > CrowdSim_release.cl:503 > \nCrowdSim_release.cl:454 > CrowdSim_release.cl:367 > \nCrowdSim_release.cl:195"
                    , "data":
                    [372, 817, 0, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":613
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":503
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":454
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":367
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":195
                        }
                      ]
                    ]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"CrowdSim_release.cl:613 > CrowdSim_release.cl:503 > \nCrowdSim_release.cl:454 > CrowdSim_release.cl:368"
                    , "data":
                    [406.5, 874.5, 0, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":613
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":503
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":454
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":368
                        }
                      ]
                    ]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"CrowdSim_release.cl:613 > CrowdSim_release.cl:503 > \nCrowdSim_release.cl:454 > CrowdSim_release.cl:368 > \nCrowdSim_release.cl:195"
                    , "data":
                    [501, 1079, 0, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":613
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":503
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":454
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":368
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":195
                        }
                      ]
                    ]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"CrowdSim_release.cl:613 > CrowdSim_release.cl:503 > \nCrowdSim_release.cl:454 > CrowdSim_release.cl:370 > \nCrowdSim_release.cl:157"
                    , "data":
                    [80, 160, 0, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":613
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":503
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":454
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":370
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":157
                        }
                      ]
                    ]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"CrowdSim_release.cl:613 > CrowdSim_release.cl:503 > \nCrowdSim_release.cl:454 > CrowdSim_release.cl:372"
                    , "data":
                    [69.0417, 579, 1.5, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":613
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":503
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":454
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":372
                        }
                      ]
                    ]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"CrowdSim_release.cl:613 > CrowdSim_release.cl:503 > \nCrowdSim_release.cl:454 > CrowdSim_release.cl:381"
                    , "data":
                    [16, 32, 0, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":613
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":503
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":454
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":381
                        }
                      ]
                    ]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"CrowdSim_release.cl:613 > CrowdSim_release.cl:503 > \nCrowdSim_release.cl:454 > CrowdSim_release.cl:383"
                    , "data":
                    [16, 32, 0, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":613
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":503
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":454
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":383
                        }
                      ]
                    ]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"CrowdSim_release.cl:613 > CrowdSim_release.cl:503 > \nCrowdSim_release.cl:454 > CrowdSim_release.cl:385"
                    , "data":
                    [131.75, 240.625, 1.125, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":613
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":503
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":454
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":385
                        }
                      ]
                    ]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"CrowdSim_release.cl:613 > CrowdSim_release.cl:503 > \nCrowdSim_release.cl:454 > CrowdSim_release.cl:389"
                    , "data":
                    [131.75, 240.625, 1.125, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":613
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":503
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":454
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":389
                        }
                      ]
                    ]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"CrowdSim_release.cl:613 > CrowdSim_release.cl:503 > \nCrowdSim_release.cl:454 > CrowdSim_release.cl:392"
                    , "data":
                    [69.0417, 579, 1.5, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":613
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":503
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":454
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":392
                        }
                      ]
                    ]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"No Source Line"
                    , "data":
                    [88, 303.5, 1.5, 0]
                  }
                  , "count":0
                }
              ]
            }
            , {
              "name":"Cluster logic"
              , "data":
              [567.667, 1095, 7, 0]
              , "details":
              [
                "Logic required to efficiently support sets of operations that do not stall. This area cannot be affected directly."
              ]
            }
          ]
          , "computation":
          [
            {
              "name":"CrowdSim_release.cl:613 > CrowdSim_release.cl:503 > \nCrowdSim_release.cl:454 > CrowdSim_release.cl:366"
              , "data":
              [16, 0, 0, 0]
              , "debug":
              [
                [
                  {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":613
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":503
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":454
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":366
                  }
                ]
              ]
              , "subinfos":
              [
                {
                  "info":
                  {
                    "name":"Integer Compare"
                    , "data":
                    [16, 0, 0, 0]
                  }
                  , "count":1
                }
              ]
            }
            , {
              "name":"CrowdSim_release.cl:613 > CrowdSim_release.cl:503 > \nCrowdSim_release.cl:454 > CrowdSim_release.cl:367"
              , "data":
              [250.5, 984.5, 6.5, 0]
              , "debug":
              [
                [
                  {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":613
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":503
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":454
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":367
                  }
                ]
              ]
              , "subinfos":
              [
                {
                  "info":
                  {
                    "name":"Add"
                    , "data":
                    [16, 0, 0, 0]
                  }
                  , "count":1
                }
                , {
                  "info":
                  {
                    "name":"Load"
                    , "data":
                    [218.5, 984.5, 6.5, 0]
                  }
                  , "count":1
                }
                , {
                  "info":
                  {
                    "name":"Pointer Computation"
                    , "data":
                    [16, 0, 0, 0]
                  }
                  , "count":1
                }
              ]
            }
            , {
              "name":"CrowdSim_release.cl:613 > CrowdSim_release.cl:503 > \nCrowdSim_release.cl:454 > CrowdSim_release.cl:367 > \nCrowdSim_release.cl:195"
              , "data":
              [209, 96, 0, 2]
              , "debug":
              [
                [
                  {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":613
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":503
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":454
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":367
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":195
                  }
                ]
              ]
              , "subinfos":
              [
                {
                  "info":
                  {
                    "name":"Fmul"
                    , "data":
                    [68, 96, 0, 2]
                  }
                  , "count":2
                }
                , {
                  "info":
                  {
                    "name":"Fsub"
                    , "data":
                    [141, 0, 0, 0]
                  }
                  , "count":1
                }
              ]
            }
            , {
              "name":"CrowdSim_release.cl:613 > CrowdSim_release.cl:503 > \nCrowdSim_release.cl:454 > CrowdSim_release.cl:368"
              , "data":
              [500.5, 984.5, 6.5, 0]
              , "debug":
              [
                [
                  {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":613
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":503
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":454
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":368
                  }
                ]
              ]
              , "subinfos":
              [
                {
                  "info":
                  {
                    "name":"Fsub"
                    , "data":
                    [282, 0, 0, 0]
                  }
                  , "count":2
                }
                , {
                  "info":
                  {
                    "name":"Load"
                    , "data":
                    [218.5, 984.5, 6.5, 0]
                  }
                  , "count":1
                }
              ]
            }
            , {
              "name":"CrowdSim_release.cl:613 > CrowdSim_release.cl:503 > \nCrowdSim_release.cl:454 > CrowdSim_release.cl:368 > \nCrowdSim_release.cl:195"
              , "data":
              [209, 96, 0, 2]
              , "debug":
              [
                [
                  {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":613
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":503
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":454
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":368
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":195
                  }
                ]
              ]
              , "subinfos":
              [
                {
                  "info":
                  {
                    "name":"Fmul"
                    , "data":
                    [68, 96, 0, 2]
                  }
                  , "count":2
                }
                , {
                  "info":
                  {
                    "name":"Fsub"
                    , "data":
                    [141, 0, 0, 0]
                  }
                  , "count":1
                }
              ]
            }
            , {
              "name":"CrowdSim_release.cl:613 > CrowdSim_release.cl:503 > \nCrowdSim_release.cl:454 > CrowdSim_release.cl:370"
              , "data":
              [63, 28, 0, 0]
              , "debug":
              [
                [
                  {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":613
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":503
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":454
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":370
                  }
                ]
              ]
              , "subinfos":
              [
                {
                  "info":
                  {
                    "name":"Floating Point Compare"
                    , "data":
                    [63, 28, 0, 0]
                  }
                  , "count":1
                }
              ]
            }
            , {
              "name":"CrowdSim_release.cl:613 > CrowdSim_release.cl:503 > \nCrowdSim_release.cl:454 > CrowdSim_release.cl:370 > \nCrowdSim_release.cl:156"
              , "data":
              [63, 28, 0, 0]
              , "debug":
              [
                [
                  {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":613
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":503
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":454
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":370
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":156
                  }
                ]
              ]
              , "subinfos":
              [
                {
                  "info":
                  {
                    "name":"Floating Point Compare"
                    , "data":
                    [63, 28, 0, 0]
                  }
                  , "count":1
                }
              ]
            }
            , {
              "name":"CrowdSim_release.cl:613 > CrowdSim_release.cl:503 > \nCrowdSim_release.cl:454 > CrowdSim_release.cl:372"
              , "data":
              [63, 28, 0, 0]
              , "debug":
              [
                [
                  {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":613
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":503
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":454
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":372
                  }
                ]
              ]
              , "subinfos":
              [
                {
                  "info":
                  {
                    "name":"Floating Point Compare"
                    , "data":
                    [63, 28, 0, 0]
                  }
                  , "count":1
                }
              ]
            }
            , {
              "name":"CrowdSim_release.cl:613 > CrowdSim_release.cl:503 > \nCrowdSim_release.cl:454 > CrowdSim_release.cl:381"
              , "data":
              [185, 409, 5, 5]
              , "debug":
              [
                [
                  {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":613
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":503
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":454
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":381
                  }
                ]
              ]
              , "subinfos":
              [
                {
                  "info":
                  {
                    "name":"Floating Point Divide"
                    , "data":
                    [185, 409, 5, 5]
                  }
                  , "count":1
                }
              ]
            }
            , {
              "name":"CrowdSim_release.cl:613 > CrowdSim_release.cl:503 > \nCrowdSim_release.cl:454 > CrowdSim_release.cl:383"
              , "data":
              [63, 28, 0, 0]
              , "debug":
              [
                [
                  {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":613
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":503
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":454
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":383
                  }
                ]
              ]
              , "subinfos":
              [
                {
                  "info":
                  {
                    "name":"Floating Point Compare"
                    , "data":
                    [63, 28, 0, 0]
                  }
                  , "count":1
                }
              ]
            }
            , {
              "name":"CrowdSim_release.cl:613 > CrowdSim_release.cl:503 > \nCrowdSim_release.cl:454 > CrowdSim_release.cl:385"
              , "data":
              [63, 28, 0, 0]
              , "debug":
              [
                [
                  {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":613
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":503
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":454
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":385
                  }
                ]
              ]
              , "subinfos":
              [
                {
                  "info":
                  {
                    "name":"Floating Point Compare"
                    , "data":
                    [63, 28, 0, 0]
                  }
                  , "count":1
                }
              ]
            }
            , {
              "name":"CrowdSim_release.cl:613 > CrowdSim_release.cl:503 > \nCrowdSim_release.cl:454 > CrowdSim_release.cl:389"
              , "data":
              [63, 28, 0, 0]
              , "debug":
              [
                [
                  {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":613
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":503
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":454
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":389
                  }
                ]
              ]
              , "subinfos":
              [
                {
                  "info":
                  {
                    "name":"Floating Point Compare"
                    , "data":
                    [63, 28, 0, 0]
                  }
                  , "count":1
                }
              ]
            }
            , {
              "name":"CrowdSim_release.cl:613 > CrowdSim_release.cl:503 > \nCrowdSim_release.cl:454 > CrowdSim_release.cl:392"
              , "data":
              [63, 28, 0, 0]
              , "debug":
              [
                [
                  {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":613
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":503
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":454
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":392
                  }
                ]
              ]
              , "subinfos":
              [
                {
                  "info":
                  {
                    "name":"Floating Point Compare"
                    , "data":
                    [63, 28, 0, 0]
                  }
                  , "count":1
                }
              ]
            }
          ]
        }
        , {
          "name":"Block21"
          , "resources":
          [
            {
              "name":"State"
              , "data":
              [5512, 13058.3, 30.2, 0]
              , "details":
              [
                "Resources for live values and control logic. To reduce this area:\n- reduce size of local variables\n- reduce scope of local variables, localizing them as much as possible\n- reduce number of nested loops"
              ]
              , "subinfos":
              [
                {
                  "info":
                  {
                    "name":"Control flow logic"
                    , "data":
                    [1094, 1689.5, 0, 0]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"CrowdSim_release.cl:613 > CrowdSim_release.cl:503 > \nCrowdSim_release.cl:438"
                    , "data":
                    [35.3333, 50.3333, 1, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":613
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":503
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":438
                        }
                      ]
                    ]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"CrowdSim_release.cl:613 > CrowdSim_release.cl:503 > \nCrowdSim_release.cl:450"
                    , "data":
                    [59.025, 369.5, 1.85, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":613
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":503
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":450
                        }
                      ]
                    ]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"CrowdSim_release.cl:613 > CrowdSim_release.cl:503 > \nCrowdSim_release.cl:451"
                    , "data":
                    [17, 75.3, 0.5, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":613
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":503
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":451
                        }
                      ]
                    ]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"CrowdSim_release.cl:613 > CrowdSim_release.cl:503 > \nCrowdSim_release.cl:454 > CrowdSim_release.cl:352 > \nCrowdSim_release.cl:164"
                    , "data":
                    [340, 753, 0, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":613
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":503
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":454
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":352
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":164
                        }
                      ]
                    ]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"CrowdSim_release.cl:613 > CrowdSim_release.cl:503 > \nCrowdSim_release.cl:454 > CrowdSim_release.cl:353"
                    , "data":
                    [498, 1042, 1, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":613
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":503
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":454
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":353
                        }
                      ]
                    ]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"CrowdSim_release.cl:613 > CrowdSim_release.cl:503 > \nCrowdSim_release.cl:454 > CrowdSim_release.cl:353 > \nCrowdSim_release.cl:189 > CrowdSim_release.cl:164"
                    , "data":
                    [401.333, 847.667, 1.33333, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":613
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":503
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":454
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":353
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":189
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":164
                        }
                      ]
                    ]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"CrowdSim_release.cl:613 > CrowdSim_release.cl:503 > \nCrowdSim_release.cl:454 > CrowdSim_release.cl:353 > \nCrowdSim_release.cl:201"
                    , "data":
                    [73.6, 160.2, 0, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":613
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":503
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":454
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":353
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":201
                        }
                      ]
                    ]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"CrowdSim_release.cl:613 > CrowdSim_release.cl:503 > \nCrowdSim_release.cl:454 > CrowdSim_release.cl:355"
                    , "data":
                    [26.0125, 182.5, 0.675, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":613
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":503
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":454
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":355
                        }
                      ]
                    ]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"CrowdSim_release.cl:613 > CrowdSim_release.cl:503 > \nCrowdSim_release.cl:454 > CrowdSim_release.cl:361"
                    , "data":
                    [237.2, 494.9, 0.5, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":613
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":503
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":454
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":361
                        }
                      ]
                    ]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"CrowdSim_release.cl:613 > CrowdSim_release.cl:503 > \nCrowdSim_release.cl:454 > CrowdSim_release.cl:362"
                    , "data":
                    [237.2, 494.9, 0.5, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":613
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":503
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":454
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":362
                        }
                      ]
                    ]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"CrowdSim_release.cl:613 > CrowdSim_release.cl:503 > \nCrowdSim_release.cl:454 > CrowdSim_release.cl:398"
                    , "data":
                    [26.0125, 182.5, 0.675, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":613
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":503
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":454
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":398
                        }
                      ]
                    ]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"CrowdSim_release.cl:613 > CrowdSim_release.cl:503 > \nCrowdSim_release.cl:454 > CrowdSim_release.cl:403 > \nCrowdSim_release.cl:164"
                    , "data":
                    [340, 753, 0, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":613
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":503
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":454
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":403
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":164
                        }
                      ]
                    ]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"CrowdSim_release.cl:613 > CrowdSim_release.cl:503 > \nCrowdSim_release.cl:454 > CrowdSim_release.cl:405"
                    , "data":
                    [732.234, 1570.83, 1.2, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":613
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":503
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":454
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":405
                        }
                      ]
                    ]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"CrowdSim_release.cl:613 > CrowdSim_release.cl:503 > \nCrowdSim_release.cl:454 > CrowdSim_release.cl:409"
                    , "data":
                    [727.233, 1558.83, 1.2, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":613
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":503
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":454
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":409
                        }
                      ]
                    ]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"No Source Line"
                    , "data":
                    [667.816, 2833.33, 19.7667, 0]
                  }
                  , "count":0
                }
              ]
            }
            , {
              "name":"Cluster logic"
              , "data":
              [640, 1810.2, 5.8, 0]
              , "details":
              [
                "Logic required to efficiently support sets of operations that do not stall. This area cannot be affected directly."
              ]
            }
          ]
          , "computation":
          [
            {
              "name":"No Source Line"
              , "data":
              [63, 28, 0, 0]
              , "debug":
              [
                [
                  {
                    "filename":""
                    , "line":0
                  }
                ]
              ]
              , "subinfos":
              [
                {
                  "info":
                  {
                    "name":"Floating Point Compare"
                    , "data":
                    [63, 28, 0, 0]
                  }
                  , "count":1
                }
              ]
            }
            , {
              "name":"CrowdSim_release.cl:613 > CrowdSim_release.cl:503 > \nCrowdSim_release.cl:451"
              , "data":
              [469, 1969, 13, 0]
              , "debug":
              [
                [
                  {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":613
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":503
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":451
                  }
                ]
              ]
              , "subinfos":
              [
                {
                  "info":
                  {
                    "name":"Add"
                    , "data":
                    [16, 0, 0, 0]
                  }
                  , "count":1
                }
                , {
                  "info":
                  {
                    "name":"Load"
                    , "data":
                    [437, 1969, 13, 0]
                  }
                  , "count":1
                }
                , {
                  "info":
                  {
                    "name":"Pointer Computation"
                    , "data":
                    [16, 0, 0, 0]
                  }
                  , "count":1
                }
              ]
            }
            , {
              "name":"CrowdSim_release.cl:613 > CrowdSim_release.cl:503 > \nCrowdSim_release.cl:454 > CrowdSim_release.cl:352 > \nCrowdSim_release.cl:164"
              , "data":
              [209, 96, 0, 2]
              , "debug":
              [
                [
                  {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":613
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":503
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":454
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":352
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":164
                  }
                ]
              ]
              , "subinfos":
              [
                {
                  "info":
                  {
                    "name":"Fadd"
                    , "data":
                    [141, 0, 0, 0]
                  }
                  , "count":1
                }
                , {
                  "info":
                  {
                    "name":"Fmul"
                    , "data":
                    [68, 96, 0, 2]
                  }
                  , "count":2
                }
              ]
            }
            , {
              "name":"CrowdSim_release.cl:613 > CrowdSim_release.cl:503 > \nCrowdSim_release.cl:454 > CrowdSim_release.cl:353"
              , "data":
              [282, 0, 0, 0]
              , "debug":
              [
                [
                  {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":613
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":503
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":454
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":353
                  }
                ]
              ]
              , "subinfos":
              [
                {
                  "info":
                  {
                    "name":"Fadd"
                    , "data":
                    [141, 0, 0, 0]
                  }
                  , "count":1
                }
                , {
                  "info":
                  {
                    "name":"Fsub"
                    , "data":
                    [141, 0, 0, 0]
                  }
                  , "count":1
                }
              ]
            }
            , {
              "name":"CrowdSim_release.cl:613 > CrowdSim_release.cl:503 > \nCrowdSim_release.cl:454 > CrowdSim_release.cl:353 > \nCrowdSim_release.cl:189 > CrowdSim_release.cl:164"
              , "data":
              [209, 96, 0, 2]
              , "debug":
              [
                [
                  {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":613
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":503
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":454
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":353
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":189
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":164
                  }
                ]
              ]
              , "subinfos":
              [
                {
                  "info":
                  {
                    "name":"Fadd"
                    , "data":
                    [141, 0, 0, 0]
                  }
                  , "count":1
                }
                , {
                  "info":
                  {
                    "name":"Fmul"
                    , "data":
                    [68, 96, 0, 2]
                  }
                  , "count":2
                }
              ]
            }
            , {
              "name":"CrowdSim_release.cl:613 > CrowdSim_release.cl:503 > \nCrowdSim_release.cl:454 > CrowdSim_release.cl:353 > \nCrowdSim_release.cl:201"
              , "data":
              [17, 48, 0, 1]
              , "debug":
              [
                [
                  {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":613
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":503
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":454
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":353
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":201
                  }
                ]
              ]
              , "subinfos":
              [
                {
                  "info":
                  {
                    "name":"Fmul"
                    , "data":
                    [17, 48, 0, 1]
                  }
                  , "count":1
                }
              ]
            }
            , {
              "name":"CrowdSim_release.cl:613 > CrowdSim_release.cl:503 > \nCrowdSim_release.cl:454 > CrowdSim_release.cl:360 > \nCrowdSim_release.cl:169"
              , "data":
              [129, 346, 3, 2]
              , "debug":
              [
                [
                  {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":613
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":503
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":454
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":360
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":169
                  }
                ]
              ]
              , "subinfos":
              [
                {
                  "info":
                  {
                    "name":"'sqrtf' Function Call"
                    , "data":
                    [129, 346, 3, 2]
                  }
                  , "count":1
                }
              ]
            }
            , {
              "name":"CrowdSim_release.cl:613 > CrowdSim_release.cl:503 > \nCrowdSim_release.cl:454 > CrowdSim_release.cl:361"
              , "data":
              [141, 0, 0, 0]
              , "debug":
              [
                [
                  {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":613
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":503
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":454
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":361
                  }
                ]
              ]
              , "subinfos":
              [
                {
                  "info":
                  {
                    "name":"Fsub"
                    , "data":
                    [141, 0, 0, 0]
                  }
                  , "count":1
                }
              ]
            }
            , {
              "name":"CrowdSim_release.cl:613 > CrowdSim_release.cl:503 > \nCrowdSim_release.cl:454 > CrowdSim_release.cl:362"
              , "data":
              [141, 0, 0, 0]
              , "debug":
              [
                [
                  {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":613
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":503
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":454
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":362
                  }
                ]
              ]
              , "subinfos":
              [
                {
                  "info":
                  {
                    "name":"Fsub"
                    , "data":
                    [141, 0, 0, 0]
                  }
                  , "count":1
                }
              ]
            }
            , {
              "name":"CrowdSim_release.cl:613 > CrowdSim_release.cl:503 > \nCrowdSim_release.cl:454 > CrowdSim_release.cl:403 > \nCrowdSim_release.cl:164"
              , "data":
              [209, 96, 0, 2]
              , "debug":
              [
                [
                  {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":613
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":503
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":454
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":403
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":164
                  }
                ]
              ]
              , "subinfos":
              [
                {
                  "info":
                  {
                    "name":"Fadd"
                    , "data":
                    [141, 0, 0, 0]
                  }
                  , "count":1
                }
                , {
                  "info":
                  {
                    "name":"Fmul"
                    , "data":
                    [68, 96, 0, 2]
                  }
                  , "count":2
                }
              ]
            }
            , {
              "name":"CrowdSim_release.cl:613 > CrowdSim_release.cl:503 > \nCrowdSim_release.cl:454 > CrowdSim_release.cl:405"
              , "data":
              [541.5, 1216, 8.5, 2]
              , "debug":
              [
                [
                  {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":613
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":503
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":454
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":405
                  }
                ]
              ]
              , "subinfos":
              [
                {
                  "info":
                  {
                    "name":"Fadd"
                    , "data":
                    [282, 0, 0, 0]
                  }
                  , "count":2
                }
                , {
                  "info":
                  {
                    "name":"Fmul"
                    , "data":
                    [68, 96, 0, 2]
                  }
                  , "count":2
                }
                , {
                  "info":
                  {
                    "name":"Store"
                    , "data":
                    [191.5, 1120, 8.5, 0]
                  }
                  , "count":1
                }
              ]
            }
            , {
              "name":"CrowdSim_release.cl:613 > CrowdSim_release.cl:503 > \nCrowdSim_release.cl:454 > CrowdSim_release.cl:409"
              , "data":
              [541.5, 1216, 8.5, 2]
              , "debug":
              [
                [
                  {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":613
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":503
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":454
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":409
                  }
                ]
              ]
              , "subinfos":
              [
                {
                  "info":
                  {
                    "name":"Fadd"
                    , "data":
                    [282, 0, 0, 0]
                  }
                  , "count":2
                }
                , {
                  "info":
                  {
                    "name":"Fmul"
                    , "data":
                    [68, 96, 0, 2]
                  }
                  , "count":2
                }
                , {
                  "info":
                  {
                    "name":"Store"
                    , "data":
                    [191.5, 1120, 8.5, 0]
                  }
                  , "count":1
                }
              ]
            }
          ]
        }
        , {
          "name":"Block22"
          , "resources":
          [
            {
              "name":"State"
              , "data":
              [32, 270.5, 0, 0]
              , "details":
              [
                "Resources for live values and control logic. To reduce this area:\n- reduce size of local variables\n- reduce scope of local variables, localizing them as much as possible\n- reduce number of nested loops"
              ]
              , "subinfos":
              [
                {
                  "info":
                  {
                    "name":"Control flow logic"
                    , "data":
                    [32, 270.5, 0, 0]
                  }
                  , "count":0
                }
              ]
            }
          ]
          , "computation":
          [
          ]
        }
        , {
          "name":"Block23"
          , "resources":
          [
            {
              "name":"State"
              , "data":
              [1298, 3191.5, 12, 0]
              , "details":
              [
                "Resources for live values and control logic. To reduce this area:\n- reduce size of local variables\n- reduce scope of local variables, localizing them as much as possible\n- reduce number of nested loops"
              ]
              , "subinfos":
              [
                {
                  "info":
                  {
                    "name":"Control flow logic"
                    , "data":
                    [710, 1097.5, 0, 0]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"CrowdSim_release.cl:527 > CrowdSim_release.cl:344 > \nCrowdSim_release.cl:201"
                    , "data":
                    [39.5, 67.6667, 0.833333, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":527
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":344
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":201
                        }
                      ]
                    ]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"CrowdSim_release.cl:527 > CrowdSim_release.cl:345 > \nCrowdSim_release.cl:267"
                    , "data":
                    [149, 850, 3.25, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":527
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":345
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":267
                        }
                      ]
                    ]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"CrowdSim_release.cl:527 > CrowdSim_release.cl:345 > \nCrowdSim_release.cl:268 > CrowdSim_release.cl:224"
                    , "data":
                    [97, 148.5, 1.5, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":527
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":345
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":268
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":224
                        }
                      ]
                    ]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"CrowdSim_release.cl:527 > CrowdSim_release.cl:345 > \nCrowdSim_release.cl:268 > CrowdSim_release.cl:225"
                    , "data":
                    [81, 77.5, 0.5, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":527
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":345
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":268
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":225
                        }
                      ]
                    ]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"CrowdSim_release.cl:527 > CrowdSim_release.cl:345 > \nCrowdSim_release.cl:268 > CrowdSim_release.cl:228"
                    , "data":
                    [97.5, 359.667, 1.83333, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":527
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":345
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":268
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":228
                        }
                      ]
                    ]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"No Source Line"
                    , "data":
                    [124, 590.667, 4.08333, 0]
                  }
                  , "count":0
                }
              ]
            }
          ]
          , "computation":
          [
            {
              "name":"CrowdSim_release.cl:527 > CrowdSim_release.cl:345 > \nCrowdSim_release.cl:267"
              , "data":
              [16, 0, 0, 0]
              , "debug":
              [
                [
                  {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":527
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":345
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":267
                  }
                ]
              ]
              , "subinfos":
              [
                {
                  "info":
                  {
                    "name":"Integer Compare"
                    , "data":
                    [16, 0, 0, 0]
                  }
                  , "count":1
                }
              ]
            }
            , {
              "name":"CrowdSim_release.cl:527 > CrowdSim_release.cl:345 > \nCrowdSim_release.cl:268 > CrowdSim_release.cl:224"
              , "data":
              [191.5, 1120, 8.5, 0]
              , "debug":
              [
                [
                  {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":527
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":345
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":268
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":224
                  }
                ]
              ]
              , "subinfos":
              [
                {
                  "info":
                  {
                    "name":"Store"
                    , "data":
                    [191.5, 1120, 8.5, 0]
                  }
                  , "count":1
                }
              ]
            }
            , {
              "name":"CrowdSim_release.cl:527 > CrowdSim_release.cl:345 > \nCrowdSim_release.cl:268 > CrowdSim_release.cl:225"
              , "data":
              [676.5, 3137, 21.5, 0]
              , "debug":
              [
                [
                  {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":527
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":345
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":268
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":225
                  }
                ]
              ]
              , "subinfos":
              [
                {
                  "info":
                  {
                    "name":"Load"
                    , "data":
                    [485, 2017, 13, 0]
                  }
                  , "count":1
                }
                , {
                  "info":
                  {
                    "name":"Store"
                    , "data":
                    [191.5, 1120, 8.5, 0]
                  }
                  , "count":1
                }
              ]
            }
            , {
              "name":"CrowdSim_release.cl:527 > CrowdSim_release.cl:345 > \nCrowdSim_release.cl:268 > CrowdSim_release.cl:227"
              , "data":
              [16, 0, 0, 0]
              , "debug":
              [
                [
                  {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":527
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":345
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":268
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":227
                  }
                ]
              ]
              , "subinfos":
              [
                {
                  "info":
                  {
                    "name":"Integer Compare"
                    , "data":
                    [16, 0, 0, 0]
                  }
                  , "count":1
                }
              ]
            }
            , {
              "name":"CrowdSim_release.cl:527 > CrowdSim_release.cl:345 > \nCrowdSim_release.cl:268 > CrowdSim_release.cl:228"
              , "data":
              [433, 1197, 9, 0]
              , "debug":
              [
                [
                  {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":527
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":345
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":268
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":228
                  }
                ]
              ]
              , "subinfos":
              [
                {
                  "info":
                  {
                    "name":"Add"
                    , "data":
                    [16, 0, 0, 0]
                  }
                  , "count":1
                }
                , {
                  "info":
                  {
                    "name":"Load"
                    , "data":
                    [401, 1197, 9, 0]
                  }
                  , "count":1
                }
                , {
                  "info":
                  {
                    "name":"Pointer Computation"
                    , "data":
                    [16, 0, 0, 0]
                  }
                  , "count":1
                }
              ]
            }
          ]
        }
        , {
          "name":"Block24"
          , "resources":
          [
            {
              "name":"State"
              , "data":
              [481, 1593.5, 0, 0]
              , "details":
              [
                "Resources for live values and control logic. To reduce this area:\n- reduce size of local variables\n- reduce scope of local variables, localizing them as much as possible\n- reduce number of nested loops"
              ]
              , "subinfos":
              [
                {
                  "info":
                  {
                    "name":"Control flow logic"
                    , "data":
                    [387, 660.5, 0, 0]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"CrowdSim_release.cl:527 > CrowdSim_release.cl:345 > \nCrowdSim_release.cl:267"
                    , "data":
                    [0, 21.3333, 0, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":527
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":345
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":267
                        }
                      ]
                    ]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"CrowdSim_release.cl:527 > CrowdSim_release.cl:345 > \nCrowdSim_release.cl:268 > CrowdSim_release.cl:206"
                    , "data":
                    [62, 62, 0, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":527
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":345
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":268
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":206
                        }
                      ]
                    ]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"No Source Line"
                    , "data":
                    [32, 849.667, 0, 0]
                  }
                  , "count":0
                }
              ]
            }
          ]
          , "computation":
          [
            {
              "name":"No Source Line"
              , "data":
              [16, 0, 0, 0]
              , "debug":
              [
                [
                  {
                    "filename":""
                    , "line":0
                  }
                ]
              ]
              , "subinfos":
              [
                {
                  "info":
                  {
                    "name":"Pointer Computation"
                    , "data":
                    [16, 0, 0, 0]
                  }
                  , "count":1
                }
              ]
            }
            , {
              "name":"CrowdSim_release.cl:527 > CrowdSim_release.cl:345 > \nCrowdSim_release.cl:267"
              , "data":
              [16, 0, 0, 0]
              , "debug":
              [
                [
                  {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":527
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":345
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":267
                  }
                ]
              ]
              , "subinfos":
              [
                {
                  "info":
                  {
                    "name":"Integer Compare"
                    , "data":
                    [16, 0, 0, 0]
                  }
                  , "count":1
                }
              ]
            }
            , {
              "name":"CrowdSim_release.cl:527 > CrowdSim_release.cl:345 > \nCrowdSim_release.cl:268 > CrowdSim_release.cl:206"
              , "data":
              [485, 2017, 13, 0]
              , "debug":
              [
                [
                  {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":527
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":345
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":268
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":206
                  }
                ]
              ]
              , "subinfos":
              [
                {
                  "info":
                  {
                    "name":"Load"
                    , "data":
                    [485, 2017, 13, 0]
                  }
                  , "count":1
                }
              ]
            }
          ]
        }
        , {
          "name":"Block25"
          , "resources":
          [
            {
              "name":"State"
              , "data":
              [725, 2245.5, 4, 0]
              , "details":
              [
                "Resources for live values and control logic. To reduce this area:\n- reduce size of local variables\n- reduce scope of local variables, localizing them as much as possible\n- reduce number of nested loops"
              ]
              , "subinfos":
              [
                {
                  "info":
                  {
                    "name":"Control flow logic"
                    , "data":
                    [358, 586.5, 0, 0]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"CrowdSim_release.cl:527"
                    , "data":
                    [186.5, 1295.5, 4, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":527
                        }
                      ]
                    ]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"No Source Line"
                    , "data":
                    [180.5, 363.5, 0, 0]
                  }
                  , "count":0
                }
              ]
            }
            , {
              "name":"Cluster logic"
              , "data":
              [436, 1004, 4, 0]
              , "details":
              [
                "Logic required to efficiently support sets of operations that do not stall. This area cannot be affected directly."
              ]
            }
          ]
          , "computation":
          [
            {
              "name":"CrowdSim_release.cl:527"
              , "data":
              [905, 2478, 16, 0]
              , "debug":
              [
                [
                  {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":527
                  }
                ]
              ]
              , "subinfos":
              [
                {
                  "info":
                  {
                    "name":"Integer Compare"
                    , "data":
                    [27, 0, 0, 0]
                  }
                  , "count":1
                }
                , {
                  "info":
                  {
                    "name":"Load"
                    , "data":
                    [878, 2478, 16, 0]
                  }
                  , "count":1
                }
              ]
            }
          ]
        }
        , {
          "name":"Block26"
          , "resources":
          [
            {
              "name":"State"
              , "data":
              [1274.67, 3408, 17.1667, 0]
              , "details":
              [
                "Resources for live values and control logic. To reduce this area:\n- reduce size of local variables\n- reduce scope of local variables, localizing them as much as possible\n- reduce number of nested loops"
              ]
              , "subinfos":
              [
                {
                  "info":
                  {
                    "name":"Control flow logic"
                    , "data":
                    [221, 444.5, 0, 0]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"CrowdSim_release.cl:534"
                    , "data":
                    [59.0167, 221.267, 0.7, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":534
                        }
                      ]
                    ]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"CrowdSim_release.cl:535"
                    , "data":
                    [90.0167, 252.267, 0.7, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":535
                        }
                      ]
                    ]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"CrowdSim_release.cl:536"
                    , "data":
                    [156, 454, 4, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":536
                        }
                      ]
                    ]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"CrowdSim_release.cl:537"
                    , "data":
                    [197.017, 481.267, 2.7, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":537
                        }
                      ]
                    ]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"CrowdSim_release.cl:541"
                    , "data":
                    [62, 62, 0, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":541
                        }
                      ]
                    ]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"CrowdSim_release.cl:542"
                    , "data":
                    [5.66667, 4.5, 0.166667, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":542
                        }
                      ]
                    ]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"CrowdSim_release.cl:543"
                    , "data":
                    [83.6, 119.35, 0.7, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":543
                        }
                      ]
                    ]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"CrowdSim_release.cl:546"
                    , "data":
                    [92.5, 223.5, 2, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":546
                        }
                      ]
                    ]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"No Source Line"
                    , "data":
                    [307.85, 1145.35, 6.2, 0]
                  }
                  , "count":0
                }
              ]
            }
            , {
              "name":"Cluster logic"
              , "data":
              [629.333, 1307.5, 6.83333, 0]
              , "details":
              [
                "Logic required to efficiently support sets of operations that do not stall. This area cannot be affected directly."
              ]
            }
          ]
          , "computation":
          [
            {
              "name":"CrowdSim_release.cl:534"
              , "data":
              [1311, 2057, 17, 0]
              , "debug":
              [
                [
                  {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":534
                  }
                ]
              ]
              , "subinfos":
              [
                {
                  "info":
                  {
                    "name":"Pointer Computation"
                    , "data":
                    [16, 0, 0, 0]
                  }
                  , "count":1
                }
                , {
                  "info":
                  {
                    "name":"Store"
                    , "data":
                    [1295, 2057, 17, 0]
                  }
                  , "count":1
                }
              ]
            }
            , {
              "name":"CrowdSim_release.cl:535"
              , "data":
              [501, 2017, 13, 0]
              , "debug":
              [
                [
                  {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":535
                  }
                ]
              ]
              , "subinfos":
              [
                {
                  "info":
                  {
                    "name":"Load"
                    , "data":
                    [485, 2017, 13, 0]
                  }
                  , "count":1
                }
                , {
                  "info":
                  {
                    "name":"Pointer Computation"
                    , "data":
                    [16, 0, 0, 0]
                  }
                  , "count":1
                }
              ]
            }
            , {
              "name":"CrowdSim_release.cl:536"
              , "data":
              [678, 2350, 16, 0]
              , "debug":
              [
                [
                  {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":536
                  }
                ]
              ]
              , "subinfos":
              [
                {
                  "info":
                  {
                    "name":"Load"
                    , "data":
                    [678, 2350, 16, 0]
                  }
                  , "count":1
                }
              ]
            }
            , {
              "name":"CrowdSim_release.cl:537"
              , "data":
              [694, 2350, 16, 0]
              , "debug":
              [
                [
                  {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":537
                  }
                ]
              ]
              , "subinfos":
              [
                {
                  "info":
                  {
                    "name":"Load"
                    , "data":
                    [678, 2350, 16, 0]
                  }
                  , "count":1
                }
                , {
                  "info":
                  {
                    "name":"Pointer Computation"
                    , "data":
                    [16, 0, 0, 0]
                  }
                  , "count":1
                }
              ]
            }
            , {
              "name":"CrowdSim_release.cl:541"
              , "data":
              [686, 2426, 18, 5]
              , "debug":
              [
                [
                  {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":541
                  }
                ]
              ]
              , "subinfos":
              [
                {
                  "info":
                  {
                    "name":"Floating Point Divide"
                    , "data":
                    [185, 409, 5, 5]
                  }
                  , "count":1
                }
                , {
                  "info":
                  {
                    "name":"Load"
                    , "data":
                    [485, 2017, 13, 0]
                  }
                  , "count":1
                }
                , {
                  "info":
                  {
                    "name":"Pointer Computation"
                    , "data":
                    [16, 0, 0, 0]
                  }
                  , "count":1
                }
              ]
            }
            , {
              "name":"CrowdSim_release.cl:542"
              , "data":
              [339, 1207, 8, 2]
              , "debug":
              [
                [
                  {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":542
                  }
                ]
              ]
              , "subinfos":
              [
                {
                  "info":
                  {
                    "name":"Load"
                    , "data":
                    [339, 1175, 8, 0]
                  }
                  , "count":1
                }
                , {
                  "info":
                  {
                    "name":"Mul"
                    , "data":
                    [0, 32, 0, 2]
                  }
                  , "count":1
                }
              ]
            }
            , {
              "name":"CrowdSim_release.cl:543"
              , "data":
              [517, 2049, 13, 2]
              , "debug":
              [
                [
                  {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":543
                  }
                ]
              ]
              , "subinfos":
              [
                {
                  "info":
                  {
                    "name":"Add"
                    , "data":
                    [16, 0, 0, 0]
                  }
                  , "count":1
                }
                , {
                  "info":
                  {
                    "name":"Load"
                    , "data":
                    [485, 2017, 13, 0]
                  }
                  , "count":1
                }
                , {
                  "info":
                  {
                    "name":"Mul"
                    , "data":
                    [0, 32, 0, 2]
                  }
                  , "count":1
                }
                , {
                  "info":
                  {
                    "name":"Pointer Computation"
                    , "data":
                    [16, 0, 0, 0]
                  }
                  , "count":1
                }
              ]
            }
            , {
              "name":"CrowdSim_release.cl:546"
              , "data":
              [339, 1175, 8, 0]
              , "debug":
              [
                [
                  {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":546
                  }
                ]
              ]
              , "subinfos":
              [
                {
                  "info":
                  {
                    "name":"Load"
                    , "data":
                    [339, 1175, 8, 0]
                  }
                  , "count":1
                }
              ]
            }
          ]
        }
        , {
          "name":"Block27"
          , "resources":
          [
            {
              "name":"State"
              , "data":
              [2473, 5783, 16, 0]
              , "details":
              [
                "Resources for live values and control logic. To reduce this area:\n- reduce size of local variables\n- reduce scope of local variables, localizing them as much as possible\n- reduce number of nested loops"
              ]
              , "subinfos":
              [
                {
                  "info":
                  {
                    "name":"Control flow logic"
                    , "data":
                    [991, 1663, 0, 0]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"CrowdSim_release.cl:610"
                    , "data":
                    [32, 64.5833, 0, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":610
                        }
                      ]
                    ]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"CrowdSim_release.cl:610 > CrowdSim_release.cl:442"
                    , "data":
                    [32, 64.5833, 0, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":610
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":442
                        }
                      ]
                    ]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"CrowdSim_release.cl:613 > CrowdSim_release.cl:468"
                    , "data":
                    [154.15, 1140.75, 5.7, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":613
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":468
                        }
                      ]
                    ]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"CrowdSim_release.cl:613 > CrowdSim_release.cl:503"
                    , "data":
                    [46, 74.5833, 1, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":613
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":503
                        }
                      ]
                    ]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"CrowdSim_release.cl:613 > CrowdSim_release.cl:503 > \nCrowdSim_release.cl:455"
                    , "data":
                    [61.8, 279, 2.4, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":613
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":503
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":455
                        }
                      ]
                    ]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"CrowdSim_release.cl:613 > CrowdSim_release.cl:509"
                    , "data":
                    [56.05, 256.25, 1.9, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":613
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":509
                        }
                      ]
                    ]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"CrowdSim_release.cl:613 > CrowdSim_release.cl:512"
                    , "data":
                    [438, 942, 0, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":613
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":512
                        }
                      ]
                    ]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"CrowdSim_release.cl:613 > CrowdSim_release.cl:512 > \nCrowdSim_release.cl:195"
                    , "data":
                    [540, 1115.25, 2, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":613
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":512
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":195
                        }
                      ]
                    ]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"No Source Line"
                    , "data":
                    [122, 183, 3, 0]
                  }
                  , "count":0
                }
              ]
            }
            , {
              "name":"Cluster logic"
              , "data":
              [218, 502, 2, 0]
              , "details":
              [
                "Logic required to efficiently support sets of operations that do not stall. This area cannot be affected directly."
              ]
            }
          ]
          , "computation":
          [
            {
              "name":"CrowdSim_release.cl:613 > CrowdSim_release.cl:503"
              , "data":
              [16, 0, 0, 0]
              , "debug":
              [
                [
                  {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":613
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":503
                  }
                ]
              ]
              , "subinfos":
              [
                {
                  "info":
                  {
                    "name":"Integer Compare"
                    , "data":
                    [16, 0, 0, 0]
                  }
                  , "count":1
                }
              ]
            }
            , {
              "name":"CrowdSim_release.cl:613 > CrowdSim_release.cl:503 > \nCrowdSim_release.cl:455"
              , "data":
              [383, 2240, 17, 0]
              , "debug":
              [
                [
                  {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":613
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":503
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":455
                  }
                ]
              ]
              , "subinfos":
              [
                {
                  "info":
                  {
                    "name":"Store"
                    , "data":
                    [383, 2240, 17, 0]
                  }
                  , "count":1
                }
              ]
            }
            , {
              "name":"CrowdSim_release.cl:613 > CrowdSim_release.cl:509"
              , "data":
              [383, 2240, 17, 0]
              , "debug":
              [
                [
                  {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":613
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":509
                  }
                ]
              ]
              , "subinfos":
              [
                {
                  "info":
                  {
                    "name":"Store"
                    , "data":
                    [383, 2240, 17, 0]
                  }
                  , "count":1
                }
              ]
            }
            , {
              "name":"CrowdSim_release.cl:613 > CrowdSim_release.cl:512"
              , "data":
              [282, 0, 0, 0]
              , "debug":
              [
                [
                  {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":613
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":512
                  }
                ]
              ]
              , "subinfos":
              [
                {
                  "info":
                  {
                    "name":"Fsub"
                    , "data":
                    [282, 0, 0, 0]
                  }
                  , "count":2
                }
              ]
            }
            , {
              "name":"CrowdSim_release.cl:613 > CrowdSim_release.cl:512 > \nCrowdSim_release.cl:195"
              , "data":
              [209, 96, 0, 2]
              , "debug":
              [
                [
                  {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":613
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":512
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":195
                  }
                ]
              ]
              , "subinfos":
              [
                {
                  "info":
                  {
                    "name":"Fmul"
                    , "data":
                    [68, 96, 0, 2]
                  }
                  , "count":2
                }
                , {
                  "info":
                  {
                    "name":"Fsub"
                    , "data":
                    [141, 0, 0, 0]
                  }
                  , "count":1
                }
              ]
            }
          ]
        }
        , {
          "name":"Block28"
          , "resources":
          [
            {
              "name":"State"
              , "data":
              [846, 2374, 2, 0]
              , "details":
              [
                "Resources for live values and control logic. To reduce this area:\n- reduce size of local variables\n- reduce scope of local variables, localizing them as much as possible\n- reduce number of nested loops"
              ]
              , "subinfos":
              [
                {
                  "info":
                  {
                    "name":"Control flow logic"
                    , "data":
                    [670, 1197, 0, 0]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"CrowdSim_release.cl:610 > CrowdSim_release.cl:455"
                    , "data":
                    [64, 64, 0, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":610
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":455
                        }
                      ]
                    ]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"CrowdSim_release.cl:612"
                    , "data":
                    [92, 609.917, 1.75, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":612
                        }
                      ]
                    ]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"CrowdSim_release.cl:613 > CrowdSim_release.cl:503 > \nCrowdSim_release.cl:451"
                    , "data":
                    [0, 172, 0, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":613
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":503
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":451
                        }
                      ]
                    ]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"No Source Line"
                    , "data":
                    [20, 331.083, 0.25, 0]
                  }
                  , "count":0
                }
              ]
            }
          ]
          , "computation":
          [
            {
              "name":"CrowdSim_release.cl:610 > CrowdSim_release.cl:455"
              , "data":
              [383, 2240, 17, 0]
              , "debug":
              [
                [
                  {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":610
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":455
                  }
                ]
              ]
              , "subinfos":
              [
                {
                  "info":
                  {
                    "name":"Store"
                    , "data":
                    [383, 2240, 17, 0]
                  }
                  , "count":1
                }
              ]
            }
            , {
              "name":"CrowdSim_release.cl:612"
              , "data":
              [32, 0, 0, 0]
              , "debug":
              [
                [
                  {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":612
                  }
                ]
              ]
              , "subinfos":
              [
                {
                  "info":
                  {
                    "name":"Integer Compare"
                    , "data":
                    [16, 0, 0, 0]
                  }
                  , "count":1
                }
                , {
                  "info":
                  {
                    "name":"Sub"
                    , "data":
                    [16, 0, 0, 0]
                  }
                  , "count":1
                }
              ]
            }
            , {
              "name":"CrowdSim_release.cl:613 > CrowdSim_release.cl:503 > \nCrowdSim_release.cl:451"
              , "data":
              [16, 0, 0, 0]
              , "debug":
              [
                [
                  {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":613
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":503
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":451
                  }
                ]
              ]
              , "subinfos":
              [
                {
                  "info":
                  {
                    "name":"Pointer Computation"
                    , "data":
                    [16, 0, 0, 0]
                  }
                  , "count":1
                }
              ]
            }
          ]
        }
        , {
          "name":"Block3"
          , "resources":
          [
            {
              "name":"State"
              , "data":
              [531, 1832.5, 3, 0]
              , "details":
              [
                "Resources for live values and control logic. To reduce this area:\n- reduce size of local variables\n- reduce scope of local variables, localizing them as much as possible\n- reduce number of nested loops"
              ]
              , "subinfos":
              [
                {
                  "info":
                  {
                    "name":"Control flow logic"
                    , "data":
                    [384, 1041.5, 0, 0]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"CrowdSim_release.cl:527"
                    , "data":
                    [81.6667, 225, 1.66667, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":527
                        }
                      ]
                    ]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"No Source Line"
                    , "data":
                    [65.3333, 566, 1.33333, 0]
                  }
                  , "count":0
                }
              ]
            }
          ]
          , "computation":
          [
            {
              "name":"CrowdSim_release.cl:527"
              , "data":
              [126, 56, 0, 0]
              , "debug":
              [
                [
                  {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":527
                  }
                ]
              ]
              , "subinfos":
              [
                {
                  "info":
                  {
                    "name":"Floating Point Compare"
                    , "data":
                    [126, 56, 0, 0]
                  }
                  , "count":2
                }
              ]
            }
          ]
        }
        , {
          "name":"Block4"
          , "resources":
          [
            {
              "name":"State"
              , "data":
              [443, 1625, 4, 0]
              , "details":
              [
                "Resources for live values and control logic. To reduce this area:\n- reduce size of local variables\n- reduce scope of local variables, localizing them as much as possible\n- reduce number of nested loops"
              ]
              , "subinfos":
              [
                {
                  "info":
                  {
                    "name":"Control flow logic"
                    , "data":
                    [386, 1126, 0, 0]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"No Source Line"
                    , "data":
                    [57, 499, 4, 0]
                  }
                  , "count":0
                }
              ]
            }
          ]
          , "computation":
          [
          ]
        }
        , {
          "name":"Block5"
          , "resources":
          [
            {
              "name":"State"
              , "data":
              [2824.17, 7779.67, 28.5, 0]
              , "details":
              [
                "Resources for live values and control logic. To reduce this area:\n- reduce size of local variables\n- reduce scope of local variables, localizing them as much as possible\n- reduce number of nested loops"
              ]
              , "subinfos":
              [
                {
                  "info":
                  {
                    "name":"Control flow logic"
                    , "data":
                    [457, 1110.5, 0, 0]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"CrowdSim_release.cl:527 > CrowdSim_release.cl:343"
                    , "data":
                    [17, 13.5, 0.5, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":527
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":343
                        }
                      ]
                    ]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"CrowdSim_release.cl:527 > CrowdSim_release.cl:345 > \nCrowdSim_release.cl:268"
                    , "data":
                    [44, 225.667, 0, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":527
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":345
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":268
                        }
                      ]
                    ]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"CrowdSim_release.cl:527 > CrowdSim_release.cl:345 > \nCrowdSim_release.cl:268 > CrowdSim_release.cl:206"
                    , "data":
                    [552, 2077.5, 15.6667, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":527
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":345
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":268
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":206
                        }
                      ]
                    ]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"CrowdSim_release.cl:527 > CrowdSim_release.cl:345 > \nCrowdSim_release.cl:268 > CrowdSim_release.cl:207"
                    , "data":
                    [541.5, 1152.5, 2, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":527
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":345
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":268
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":207
                        }
                      ]
                    ]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"CrowdSim_release.cl:527 > CrowdSim_release.cl:345 > \nCrowdSim_release.cl:268 > CrowdSim_release.cl:207 > \nCrowdSim_release.cl:189 > CrowdSim_release.cl:164"
                    , "data":
                    [310, 674, 0, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":527
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":345
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":268
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":207
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":189
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":164
                        }
                      ]
                    ]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"CrowdSim_release.cl:527 > CrowdSim_release.cl:345 > \nCrowdSim_release.cl:268 > CrowdSim_release.cl:209"
                    , "data":
                    [46, 71, 1, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":527
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":345
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":268
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":209
                        }
                      ]
                    ]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"CrowdSim_release.cl:527 > CrowdSim_release.cl:345 > \nCrowdSim_release.cl:268 > CrowdSim_release.cl:210"
                    , "data":
                    [0.25, 0.25, 0, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":527
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":345
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":268
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":210
                        }
                      ]
                    ]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"CrowdSim_release.cl:527 > CrowdSim_release.cl:345 > \nCrowdSim_release.cl:268 > CrowdSim_release.cl:211"
                    , "data":
                    [4.25, 11.5, 0, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":527
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":345
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":268
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":211
                        }
                      ]
                    ]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"CrowdSim_release.cl:527 > CrowdSim_release.cl:345 > \nCrowdSim_release.cl:268 > CrowdSim_release.cl:212"
                    , "data":
                    [72.75, 293, 1, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":527
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":345
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":268
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":212
                        }
                      ]
                    ]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"CrowdSim_release.cl:527 > CrowdSim_release.cl:345 > \nCrowdSim_release.cl:268 > CrowdSim_release.cl:213"
                    , "data":
                    [78.75, 284, 2, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":527
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":345
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":268
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":213
                        }
                      ]
                    ]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"CrowdSim_release.cl:527 > CrowdSim_release.cl:345 > \nCrowdSim_release.cl:268 > CrowdSim_release.cl:214"
                    , "data":
                    [66.3333, 316.75, 1.66667, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":527
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":345
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":268
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":214
                        }
                      ]
                    ]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"CrowdSim_release.cl:527 > CrowdSim_release.cl:345 > \nCrowdSim_release.cl:268 > CrowdSim_release.cl:219"
                    , "data":
                    [8, 16, 0, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":527
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":345
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":268
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":219
                        }
                      ]
                    ]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"No Source Line"
                    , "data":
                    [626.333, 1533.5, 4.66667, 0]
                  }
                  , "count":0
                }
              ]
            }
            , {
              "name":"Cluster logic"
              , "data":
              [1403.83, 2700.83, 19.5, 0]
              , "details":
              [
                "Logic required to efficiently support sets of operations that do not stall. This area cannot be affected directly."
              ]
            }
          ]
          , "computation":
          [
            {
              "name":"CrowdSim_release.cl:527 > CrowdSim_release.cl:345 > \nCrowdSim_release.cl:268"
              , "data":
              [3037, 4266, 43, 0]
              , "debug":
              [
                [
                  {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":527
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":345
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":268
                  }
                ]
              ]
              , "subinfos":
              [
                {
                  "info":
                  {
                    "name":"Load"
                    , "data":
                    [3021, 4266, 43, 0]
                    , "details":
                    [
                      "Load with a private 512 kilobit cache. Cache is not shared with any other load. It is flushed on kernel start. Use Dynamic Profiler to verify cache effectiveness. Other kernels should not be updating the data in global memory while this kernel is using it. Cache is created when memory access pattern is data-dependent or appears to be repetitive. Simplify access pattern or mark pointer as 'volatile' to disable generation of this cache."
                    ]
                  }
                  , "count":1
                }
                , {
                  "info":
                  {
                    "name":"Pointer Computation"
                    , "data":
                    [16, 0, 0, 0]
                  }
                  , "count":1
                }
              ]
            }
            , {
              "name":"CrowdSim_release.cl:527 > CrowdSim_release.cl:345 > \nCrowdSim_release.cl:268 > CrowdSim_release.cl:206"
              , "data":
              [517, 2017, 13, 0]
              , "debug":
              [
                [
                  {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":527
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":345
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":268
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":206
                  }
                ]
              ]
              , "subinfos":
              [
                {
                  "info":
                  {
                    "name":"Integer Compare"
                    , "data":
                    [16, 0, 0, 0]
                  }
                  , "count":1
                }
                , {
                  "info":
                  {
                    "name":"Load"
                    , "data":
                    [485, 2017, 13, 0]
                  }
                  , "count":1
                }
                , {
                  "info":
                  {
                    "name":"Pointer Computation"
                    , "data":
                    [16, 0, 0, 0]
                  }
                  , "count":1
                }
              ]
            }
            , {
              "name":"CrowdSim_release.cl:527 > CrowdSim_release.cl:345 > \nCrowdSim_release.cl:268 > CrowdSim_release.cl:207"
              , "data":
              [4230, 5889, 59, 0]
              , "debug":
              [
                [
                  {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":527
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":345
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":268
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":207
                  }
                ]
              ]
              , "subinfos":
              [
                {
                  "info":
                  {
                    "name":"Fsub"
                    , "data":
                    [282, 0, 0, 0]
                  }
                  , "count":2
                }
                , {
                  "info":
                  {
                    "name":"Load"
                    , "data":
                    [3932, 5889, 59, 0]
                    , "details":
                    [
                      "Load with a private 512 kilobit cache. Cache is not shared with any other load. It is flushed on kernel start. Use Dynamic Profiler to verify cache effectiveness. Other kernels should not be updating the data in global memory while this kernel is using it. Cache is created when memory access pattern is data-dependent or appears to be repetitive. Simplify access pattern or mark pointer as 'volatile' to disable generation of this cache."
                    ]
                  }
                  , "count":2
                }
                , {
                  "info":
                  {
                    "name":"Pointer Computation"
                    , "data":
                    [16, 0, 0, 0]
                  }
                  , "count":1
                }
              ]
            }
            , {
              "name":"CrowdSim_release.cl:527 > CrowdSim_release.cl:345 > \nCrowdSim_release.cl:268 > CrowdSim_release.cl:207 > \nCrowdSim_release.cl:189 > CrowdSim_release.cl:164"
              , "data":
              [103, 96, 0, 2]
              , "debug":
              [
                [
                  {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":527
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":345
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":268
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":207
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":189
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":164
                  }
                ]
              ]
              , "subinfos":
              [
                {
                  "info":
                  {
                    "name":"Fadd"
                    , "data":
                    [69, 0, 0, 0]
                  }
                  , "count":1
                }
                , {
                  "info":
                  {
                    "name":"Fmul"
                    , "data":
                    [34, 96, 0, 2]
                  }
                  , "count":2
                }
              ]
            }
            , {
              "name":"CrowdSim_release.cl:527 > CrowdSim_release.cl:345 > \nCrowdSim_release.cl:268 > CrowdSim_release.cl:209"
              , "data":
              [63, 28, 0, 0]
              , "debug":
              [
                [
                  {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":527
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":345
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":268
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":209
                  }
                ]
              ]
              , "subinfos":
              [
                {
                  "info":
                  {
                    "name":"Floating Point Compare"
                    , "data":
                    [63, 28, 0, 0]
                  }
                  , "count":1
                }
              ]
            }
            , {
              "name":"CrowdSim_release.cl:527 > CrowdSim_release.cl:345 > \nCrowdSim_release.cl:268 > CrowdSim_release.cl:210"
              , "data":
              [339, 1207, 8, 2]
              , "debug":
              [
                [
                  {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":527
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":345
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":268
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":210
                  }
                ]
              ]
              , "subinfos":
              [
                {
                  "info":
                  {
                    "name":"Load"
                    , "data":
                    [339, 1175, 8, 0]
                  }
                  , "count":1
                }
                , {
                  "info":
                  {
                    "name":"Mul"
                    , "data":
                    [0, 32, 0, 2]
                  }
                  , "count":1
                }
              ]
            }
            , {
              "name":"CrowdSim_release.cl:527 > CrowdSim_release.cl:345 > \nCrowdSim_release.cl:268 > CrowdSim_release.cl:211"
              , "data":
              [355, 1175, 8, 0]
              , "debug":
              [
                [
                  {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":527
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":345
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":268
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":211
                  }
                ]
              ]
              , "subinfos":
              [
                {
                  "info":
                  {
                    "name":"Integer Compare"
                    , "data":
                    [16, 0, 0, 0]
                  }
                  , "count":1
                }
                , {
                  "info":
                  {
                    "name":"Load"
                    , "data":
                    [339, 1175, 8, 0]
                  }
                  , "count":1
                }
              ]
            }
            , {
              "name":"CrowdSim_release.cl:527 > CrowdSim_release.cl:345 > \nCrowdSim_release.cl:268 > CrowdSim_release.cl:212"
              , "data":
              [223.5, 1120, 8.5, 0]
              , "debug":
              [
                [
                  {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":527
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":345
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":268
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":212
                  }
                ]
              ]
              , "subinfos":
              [
                {
                  "info":
                  {
                    "name":"Add"
                    , "data":
                    [16, 0, 0, 0]
                  }
                  , "count":1
                }
                , {
                  "info":
                  {
                    "name":"Pointer Computation"
                    , "data":
                    [16, 0, 0, 0]
                  }
                  , "count":1
                }
                , {
                  "info":
                  {
                    "name":"Store"
                    , "data":
                    [191.5, 1120, 8.5, 0]
                  }
                  , "count":1
                }
              ]
            }
            , {
              "name":"CrowdSim_release.cl:527 > CrowdSim_release.cl:345 > \nCrowdSim_release.cl:268 > CrowdSim_release.cl:213"
              , "data":
              [191.5, 1120, 8.5, 0]
              , "debug":
              [
                [
                  {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":527
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":345
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":268
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":213
                  }
                ]
              ]
              , "subinfos":
              [
                {
                  "info":
                  {
                    "name":"Store"
                    , "data":
                    [191.5, 1120, 8.5, 0]
                  }
                  , "count":1
                }
              ]
            }
            , {
              "name":"CrowdSim_release.cl:527 > CrowdSim_release.cl:345 > \nCrowdSim_release.cl:268 > CrowdSim_release.cl:214"
              , "data":
              [399, 2216, 17, 0]
              , "debug":
              [
                [
                  {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":527
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":345
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":268
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":214
                  }
                ]
              ]
              , "subinfos":
              [
                {
                  "info":
                  {
                    "name":"Store"
                    , "data":
                    [399, 2216, 17, 0]
                  }
                  , "count":1
                }
              ]
            }
          ]
        }
        , {
          "name":"Block6"
          , "resources":
          [
            {
              "name":"State"
              , "data":
              [1476, 4928.5, 16, 0]
              , "details":
              [
                "Resources for live values and control logic. To reduce this area:\n- reduce size of local variables\n- reduce scope of local variables, localizing them as much as possible\n- reduce number of nested loops"
              ]
              , "subinfos":
              [
                {
                  "info":
                  {
                    "name":"Control flow logic"
                    , "data":
                    [714, 1783.5, 0, 0]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"CrowdSim_release.cl:527 > CrowdSim_release.cl:343"
                    , "data":
                    [25.0833, 20.75, 0.5, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":527
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":343
                        }
                      ]
                    ]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"CrowdSim_release.cl:527 > CrowdSim_release.cl:345 > \nCrowdSim_release.cl:267"
                    , "data":
                    [10.75, 9, 0.25, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":527
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":345
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":267
                        }
                      ]
                    ]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"CrowdSim_release.cl:527 > CrowdSim_release.cl:345 > \nCrowdSim_release.cl:268 > CrowdSim_release.cl:209"
                    , "data":
                    [33, 26, 1, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":527
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":345
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":268
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":209
                        }
                      ]
                    ]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"CrowdSim_release.cl:527 > CrowdSim_release.cl:345 > \nCrowdSim_release.cl:268 > CrowdSim_release.cl:219"
                    , "data":
                    [188, 476.083, 3.25, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":527
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":345
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":268
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":219
                        }
                      ]
                    ]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"CrowdSim_release.cl:527 > CrowdSim_release.cl:345 > \nCrowdSim_release.cl:268 > CrowdSim_release.cl:220"
                    , "data":
                    [219.833, 693.333, 3, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":527
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":345
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":268
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":220
                        }
                      ]
                    ]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"CrowdSim_release.cl:527 > CrowdSim_release.cl:345 > \nCrowdSim_release.cl:268 > CrowdSim_release.cl:222"
                    , "data":
                    [285.333, 1919.83, 8, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":527
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":345
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":268
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":222
                        }
                      ]
                    ]
                  }
                  , "count":0
                }
              ]
            }
          ]
          , "computation":
          [
            {
              "name":"CrowdSim_release.cl:527 > CrowdSim_release.cl:345 > \nCrowdSim_release.cl:268 > CrowdSim_release.cl:219"
              , "data":
              [496, 1225, 9, 0]
              , "debug":
              [
                [
                  {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":527
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":345
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":268
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":219
                  }
                ]
              ]
              , "subinfos":
              [
                {
                  "info":
                  {
                    "name":"Add"
                    , "data":
                    [16, 0, 0, 0]
                  }
                  , "count":1
                }
                , {
                  "info":
                  {
                    "name":"Floating Point Compare"
                    , "data":
                    [63, 28, 0, 0]
                  }
                  , "count":1
                }
                , {
                  "info":
                  {
                    "name":"Load"
                    , "data":
                    [401, 1197, 9, 0]
                  }
                  , "count":1
                }
                , {
                  "info":
                  {
                    "name":"Pointer Computation"
                    , "data":
                    [16, 0, 0, 0]
                  }
                  , "count":1
                }
              ]
            }
            , {
              "name":"CrowdSim_release.cl:527 > CrowdSim_release.cl:345 > \nCrowdSim_release.cl:268 > CrowdSim_release.cl:220"
              , "data":
              [884, 4225, 30, 0]
              , "debug":
              [
                [
                  {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":527
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":345
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":268
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":220
                  }
                ]
              ]
              , "subinfos":
              [
                {
                  "info":
                  {
                    "name":"Add"
                    , "data":
                    [16, 0, 0, 0]
                  }
                  , "count":2
                }
                , {
                  "info":
                  {
                    "name":"Load"
                    , "data":
                    [453, 1985, 13, 0]
                  }
                  , "count":1
                }
                , {
                  "info":
                  {
                    "name":"Pointer Computation"
                    , "data":
                    [32, 0, 0, 0]
                  }
                  , "count":2
                }
                , {
                  "info":
                  {
                    "name":"Store"
                    , "data":
                    [383, 2240, 17, 0]
                  }
                  , "count":1
                }
              ]
            }
          ]
        }
        , {
          "name":"Block7"
          , "resources":
          [
            {
              "name":"State"
              , "data":
              [6098.63, 13871.2, 45.2917, 0]
              , "details":
              [
                "Resources for live values and control logic. To reduce this area:\n- reduce size of local variables\n- reduce scope of local variables, localizing them as much as possible\n- reduce number of nested loops"
              ]
              , "subinfos":
              [
                {
                  "info":
                  {
                    "name":"Control flow logic"
                    , "data":
                    [294, 650.5, 0, 0]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"CrowdSim_release.cl:527"
                    , "data":
                    [4671.49, 10372.2, 24.0595, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":527
                        }
                      ]
                    ]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"CrowdSim_release.cl:527 > CrowdSim_release.cl:345 > \nCrowdSim_release.cl:266"
                    , "data":
                    [264.667, 771.958, 7.5, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":527
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":345
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":266
                        }
                      ]
                    ]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"CrowdSim_release.cl:527 > CrowdSim_release.cl:345 > \nCrowdSim_release.cl:274"
                    , "data":
                    [591.5, 1121.08, 4.75, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":527
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":345
                        }
                        , {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":274
                        }
                      ]
                    ]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"No Source Line"
                    , "data":
                    [276.958, 955.576, 8.98214, 0]
                  }
                  , "count":0
                }
              ]
            }
            , {
              "name":"Cluster logic"
              , "data":
              [882.375, 1351.22, 4.70833, 0]
              , "details":
              [
                "Logic required to efficiently support sets of operations that do not stall. This area cannot be affected directly."
              ]
            }
          ]
          , "computation":
          [
            {
              "name":"No Source Line"
              , "data":
              [32, 0, 0, 0]
              , "debug":
              [
                [
                  {
                    "filename":""
                    , "line":0
                  }
                ]
              ]
              , "subinfos":
              [
                {
                  "info":
                  {
                    "name":"Pointer Computation"
                    , "data":
                    [32, 0, 0, 0]
                  }
                  , "count":2
                }
              ]
            }
            , {
              "name":"CrowdSim_release.cl:527"
              , "data":
              [13552, 18919, 163, 8]
              , "debug":
              [
                [
                  {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":527
                  }
                ]
              ]
              , "subinfos":
              [
                {
                  "info":
                  {
                    "name":"Fadd"
                    , "data":
                    [846, 0, 0, 0]
                  }
                  , "count":6
                }
                , {
                  "info":
                  {
                    "name":"Floating Point Compare"
                    , "data":
                    [630, 280, 0, 0]
                  }
                  , "count":10
                }
                , {
                  "info":
                  {
                    "name":"Fmul"
                    , "data":
                    [272, 384, 0, 8]
                  }
                  , "count":8
                }
                , {
                  "info":
                  {
                    "name":"Fsub"
                    , "data":
                    [987, 0, 0, 0]
                  }
                  , "count":7
                }
                , {
                  "info":
                  {
                    "name":"Load"
                    , "data":
                    [8979, 12798, 129, 0]
                    , "details":
                    [
                      "Load with a private 512 kilobit cache. Cache is not shared with any other load. It is flushed on kernel start. Use Dynamic Profiler to verify cache effectiveness. Other kernels should not be updating the data in global memory while this kernel is using it. Cache is created when memory access pattern is data-dependent or appears to be repetitive. Simplify access pattern or mark pointer as 'volatile' to disable generation of this cache."
                    ]
                  }
                  , "count":4
                }
                , {
                  "info":
                  {
                    "name":"Pointer Computation"
                    , "data":
                    [16, 0, 0, 0]
                  }
                  , "count":4
                }
                , {
                  "info":
                  {
                    "name":"Store"
                    , "data":
                    [1822, 5457, 34, 0]
                  }
                  , "count":2
                }
              ]
            }
            , {
              "name":"CrowdSim_release.cl:527 > CrowdSim_release.cl:345 > \nCrowdSim_release.cl:266"
              , "data":
              [2099, 2310, 13, 0]
              , "debug":
              [
                [
                  {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":527
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":345
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":266
                  }
                ]
              ]
              , "subinfos":
              [
                {
                  "info":
                  {
                    "name":"Load"
                    , "data":
                    [2067, 2310, 13, 0]
                    , "details":
                    [
                      "Load with a private 512 kilobit cache. Cache is not shared with any other load. It is flushed on kernel start. Use Dynamic Profiler to verify cache effectiveness. Other kernels should not be updating the data in global memory while this kernel is using it. Cache is created when memory access pattern is data-dependent or appears to be repetitive. Simplify access pattern or mark pointer as 'volatile' to disable generation of this cache."
                    ]
                  }
                  , "count":1
                }
                , {
                  "info":
                  {
                    "name":"Pointer Computation"
                    , "data":
                    [16, 0, 0, 0]
                  }
                  , "count":1
                }
                , {
                  "info":
                  {
                    "name":"Sub"
                    , "data":
                    [16, 0, 0, 0]
                  }
                  , "count":1
                }
              ]
            }
            , {
              "name":"CrowdSim_release.cl:527 > CrowdSim_release.cl:345 > \nCrowdSim_release.cl:274"
              , "data":
              [6212, 8560, 86, 0]
              , "debug":
              [
                [
                  {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":527
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":345
                  }
                  , {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":274
                  }
                ]
              ]
              , "subinfos":
              [
                {
                  "info":
                  {
                    "name":"Floating Point Compare"
                    , "data":
                    [63, 28, 0, 0]
                  }
                  , "count":1
                }
                , {
                  "info":
                  {
                    "name":"Fsub"
                    , "data":
                    [141, 0, 0, 0]
                  }
                  , "count":1
                }
                , {
                  "info":
                  {
                    "name":"Load"
                    , "data":
                    [5976, 8532, 86, 0]
                    , "details":
                    [
                      "Load with a private 512 kilobit cache. Cache is not shared with any other load. It is flushed on kernel start. Use Dynamic Profiler to verify cache effectiveness. Other kernels should not be updating the data in global memory while this kernel is using it. Cache is created when memory access pattern is data-dependent or appears to be repetitive. Simplify access pattern or mark pointer as 'volatile' to disable generation of this cache."
                    ]
                  }
                  , "count":3
                }
                , {
                  "info":
                  {
                    "name":"Pointer Computation"
                    , "data":
                    [32, 0, 0, 0]
                  }
                  , "count":2
                }
              ]
            }
          ]
        }
        , {
          "name":"Block8"
          , "resources":
          [
            {
              "name":"State"
              , "data":
              [356, 534.5, 0, 0]
              , "details":
              [
                "Resources for live values and control logic. To reduce this area:\n- reduce size of local variables\n- reduce scope of local variables, localizing them as much as possible\n- reduce number of nested loops"
              ]
              , "subinfos":
              [
                {
                  "info":
                  {
                    "name":"Control flow logic"
                    , "data":
                    [356, 534.5, 0, 0]
                  }
                  , "count":0
                }
              ]
            }
          ]
          , "computation":
          [
          ]
        }
        , {
          "name":"Block9"
          , "resources":
          [
            {
              "name":"State"
              , "data":
              [357, 535.5, 0, 0]
              , "details":
              [
                "Resources for live values and control logic. To reduce this area:\n- reduce size of local variables\n- reduce scope of local variables, localizing them as much as possible\n- reduce number of nested loops"
              ]
              , "subinfos":
              [
                {
                  "info":
                  {
                    "name":"Control flow logic"
                    , "data":
                    [357, 535.5, 0, 0]
                  }
                  , "count":0
                }
              ]
            }
          ]
          , "computation":
          [
          ]
        }
      ]
    }
    , {
      "name":"update"
      , "compute_units":1
      , "details":
      [
        "Number of compute units: 1"
      ]
      , "resources":
      [
        {
          "name":"Function overhead"
          , "data":
          [1570, 1685, 0, 0]
          , "details":
          [
            "Kernel dispatch logic."
          ]
        }
      ]
      , "basicblocks":
      [
        {
          "name":"Block29"
          , "resources":
          [
            {
              "name":"State"
              , "data":
              [971, 2123, 6, 0]
              , "details":
              [
                "Resources for live values and control logic. To reduce this area:\n- reduce size of local variables\n- reduce scope of local variables, localizing them as much as possible\n- reduce number of nested loops"
              ]
              , "subinfos":
              [
                {
                  "info":
                  {
                    "name":"Control flow logic"
                    , "data":
                    [32, 32, 0, 0]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"CrowdSim_release.cl:628"
                    , "data":
                    [111, 287, 2, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":628
                        }
                      ]
                    ]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"CrowdSim_release.cl:629"
                    , "data":
                    [750, 1669, 2, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                          , "line":629
                        }
                      ]
                    ]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"No Source Line"
                    , "data":
                    [78, 135, 2, 0]
                  }
                  , "count":0
                }
              ]
            }
            , {
              "name":"Cluster logic"
              , "data":
              [346, 630, 2, 0]
              , "details":
              [
                "Logic required to efficiently support sets of operations that do not stall. This area cannot be affected directly."
              ]
            }
          ]
          , "computation":
          [
            {
              "name":"CrowdSim_release.cl:628"
              , "data":
              [2177, 5353, 32, 0]
              , "debug":
              [
                [
                  {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":628
                  }
                ]
              ]
              , "subinfos":
              [
                {
                  "info":
                  {
                    "name":"Load"
                    , "data":
                    [678, 2350, 16, 0]
                  }
                  , "count":1
                }
                , {
                  "info":
                  {
                    "name":"Pointer Computation"
                    , "data":
                    [64, 0, 0, 0]
                  }
                  , "count":2
                }
                , {
                  "info":
                  {
                    "name":"Store"
                    , "data":
                    [1435, 3003, 16, 0]
                  }
                  , "count":1
                }
              ]
            }
            , {
              "name":"CrowdSim_release.cl:629"
              , "data":
              [2495, 5449, 32, 2]
              , "debug":
              [
                [
                  {
                    "filename":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl"
                    , "line":629
                  }
                ]
              ]
              , "subinfos":
              [
                {
                  "info":
                  {
                    "name":"Fadd"
                    , "data":
                    [282, 0, 0, 0]
                  }
                  , "count":2
                }
                , {
                  "info":
                  {
                    "name":"Fmul"
                    , "data":
                    [68, 96, 0, 2]
                  }
                  , "count":2
                }
                , {
                  "info":
                  {
                    "name":"Load"
                    , "data":
                    [678, 2350, 16, 0]
                  }
                  , "count":1
                }
                , {
                  "info":
                  {
                    "name":"Pointer Computation"
                    , "data":
                    [32, 0, 0, 0]
                  }
                  , "count":1
                }
                , {
                  "info":
                  {
                    "name":"Store"
                    , "data":
                    [1435, 3003, 16, 0]
                  }
                  , "count":1
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}
;var fileJSON=[{"index":0, "path":"/home/af2213/Altera_CrowdSim/CrowdSim/CrowdSim_release.cl", "name":"CrowdSim_release.cl", "content":"// Copyright (c) 2009-2013 Intel Corporation\012// All rights reserved.\012//\012// WARRANTY DISCLAIMER\012//\012// THESE MATERIALS ARE PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS\012// \"AS IS\" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT\012// LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR\012// A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL INTEL OR ITS\012// CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,\012// EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,\012// PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR\012// PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY\012// OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY OR TORT (INCLUDING\012// NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THESE\012// MATERIALS, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.\012//\012// Intel Corporation is the author of the Materials, and requests that all\012// problem reports or change requests be submitted to it directly\012\012\012#include \"Constants.h\"\012#pragma OPENCL EXTENSION cl_khr_fp16 : enable\012\012#define TESTID 0\012typedef float2 Vector2;\012\012// The following structures definitions use pack pragma\012// to eliminate any differencies between packing of struct\012// data fields in the host and the device sides.\012// On the device side, the pack is called with the same value.\012\012#pragma pack(4)\012typedef struct __Line {\012    Vector2 direction;\012    Vector2 point;\012} Line;\012\012\012struct __Agent;\012\012#pragma pack(4)\012typedef struct __Obstacle\012{\012    int isConvex_;\012    __global struct __Obstacle *nextObstacle_;\012    Vector2 point_;\012    __global struct __Obstacle *prevObstacle_;\012    Vector2 unitDir_;\012\012    uint id_;\012} Obstacle;\012\012\012#pragma pack(4)\012typedef struct __AgentNeighbor\012{\012    float first;\012    __global const struct __Agent * second;\012} AgentNeighbor;\012\012#pragma pack(4)\012typedef struct __AgentNeighborBuf\012{\012    float first;\012    uint second;\012} AgentNeighborBuf;\012\012#pragma pack(4)\012typedef struct __ObstacleNeighbor\012{\012    float first;\012    __global const struct __Obstacle * second;\012} ObstacleNeighbor;\012\012/*\012#pragma pack(4)\012typedef struct __Agent {\012    uint numAgentNeighbors_; // number of filled elements in agentNeighbors\012    uint maxNeighbors_;\012    float maxSpeed_;\012    float neighborDist_;\012    Vector2 newVelocity_;\012    uint numObstacleNeighbors_; // number of filled elements in agentNeighbors\012    uint maxObstacleNeighbors_;  // number of allocated positions in obstacleNeighbors, can be increased dynamically\012    uint numOrcaLines_;\012    Vector2 position_;\012    Vector2 prefVelocity_;\012    float radius_;\012    float timeHorizon_;\012    float timeHorizonObst_;\012    Vector2 velocity_;\012    uint id_;\012} Agent;\012*/\012\012#pragma pack(4)\012typedef struct __Agent {\012    //__global AgentNeighbor* agentNeighbors_;\012    long spacer1;\012    uint numAgentNeighbors_; // number of filled elements in agentNeighbors\012    uint maxNeighbors_;\012    float maxSpeed_;\012    float neighborDist_;\012    Vector2 newVelocity_;\012    //__global ObstacleNeighbor* obstacleNeighbors_;\012    long spacer2;\012    uint numObstacleNeighbors_; // number of filled elements in agentNeighbors\012    uint maxObstacleNeighbors_;  // number of allocated positions in obstacleNeighbors, can be increased dynamically\012    //__global Line* orcaLines_;\012    long spacer3;\012    uint numOrcaLines_;\012    //__global Line* projLines_;   // used as a scratch buffer for calling linearProgram3\012    long spacer4;\012    Vector2 position_;\012    Vector2 prefVelocity_;\012    float radius_;\012    //__global void *sim_;\012    long spacer5;\012    float timeHorizon_;\012    float timeHorizonObst_;\012    Vector2 velocity_;\012    uint id_;\012} Agent;\012\012#pragma pack(4)\012typedef struct __PAgent\012{\012    __global Agent* value;\012} PAgent;\012\012\012#pragma pack(4)\012typedef struct __AgentTreeNode\012{\012    uint begin;\012    uint end;\012    uint left;\012    float maxX;\012    float maxY;\012    float minX;\012    float minY;\012    uint right;\012} AgentTreeNode;\012\012#pragma pack(4)\012typedef struct __ObstacleTreeNode\012{\012    __global struct __ObstacleTreeNode *left;\012    __global const struct __Obstacle *obstacle;\012    __global struct __ObstacleTreeNode *right;\012} ObstacleTreeNode;\012\012inline float simFabs(float a)\012{\012    if (a < 0.0f)\012        return -a;\012    else\012        return a;\012}\012\012inline float simDot(Vector2 a, Vector2 b)\012{\012    return a.x*b.x+a.y*b.y;\012}\012\012inline float simSqrt(float a)\012{\012    float r = sqrt((float)a);\012    return (float)r;\012}\012\012inline float simLength(Vector2 a)\012{\012    return simSqrt(a.x*a.x+a.y*a.y);\012}\012\012inline Vector2 simNormalize(Vector2 a)\012{\012    float len = simLength(a);\012    Vector2 res;\012    res.x = a.x/len;\012    res.y = a.y/len;\012    return res;\012}\012\012inline float absSq(Vector2 vector)\012{\012    return simDot(vector, vector);\012}\012\012\012inline float det(Vector2 vector1, Vector2 vector2)\012{\012    return vector1.x * vector2.y - vector1.y * vector2.x;\012}\012\012\012inline float sqr (float x)\012{\012    return x*x;\012}\012\012void insertAgentNeighbor(__global Agent *thisAgent, __global const Agent *agent, float *rangeSq, __global AgentNeighborBuf* agentNeighbors)\012{\012    if (thisAgent->id_ != agent->id_) {\012        const float distSq = absSq(thisAgent->position_ - agent->position_);\012\012        if (distSq < *rangeSq) {\012            uint indexBias = thisAgent->maxNeighbors_*get_global_id(0);\012            if (thisAgent->numAgentNeighbors_ < thisAgent->maxNeighbors_) {\012                agentNeighbors[indexBias + thisAgent->numAgentNeighbors_].first = distSq;\012                agentNeighbors[indexBias + thisAgent->numAgentNeighbors_].second = agent->id_;\012                thisAgent->numAgentNeighbors_++;\012            }\012\012            uint i = thisAgent->numAgentNeighbors_ - 1;\012\012            while (i != 0 && distSq < agentNeighbors[indexBias + i - 1].first) {\012                agentNeighbors[indexBias+i] = agentNeighbors[indexBias + i - 1];\012                --i;\012            }\012\012            agentNeighbors[indexBias+i].first = distSq;\012            agentNeighbors[indexBias+i].second = agent->id_;\012\012            if (thisAgent->numAgentNeighbors_ == thisAgent->maxNeighbors_) {\012                *rangeSq = agentNeighbors[indexBias+thisAgent->numAgentNeighbors_ - 1].first;\012            }\012        }\012    }\012}\012\012typedef struct __StackNode\012{\012    uint retCode;\012    float distSqLeft;\012    float distSqRight;\012    uint node;\012} StackNode;\012\012__global StackNode* push (__global StackNode* stackNode, uint retCode, float distSqLeft, float distSqRight, uint node)\012{\012    stackNode->retCode = retCode;\012    stackNode->distSqLeft = distSqLeft;\012    stackNode->distSqRight = distSqRight;\012    stackNode->node = node;\012    return stackNode + 1;\012}\012\012void queryAgentTreeRecursive(__global Agent* agents_, __global Agent *agent, __global AgentTreeNode* agentTree_, float* rangeSq, uint node, __global AgentNeighborBuf* agentNeighbors, __global unsigned* agentsForTree, __global StackNode* stack)\012{\012    //StackNode stack[MAX_KDTREE_DEPTH];\012    __global StackNode* stackTop = &stack[get_global_id(0)];\012    //StackNode* stackTop = &stack[0];\012    uint retCode = 0;\012\012    float distSqLeft;\012    float distSqRight;\012\012    for(;;)\012    {\012        switch(retCode)\012        {\012            case 0:\012                if (agentTree_[node].end - agentTree_[node].begin <= RVO_MAX_LEAF_SIZE) {                    \012                    for (uint i = agentTree_[node].begin; i < agentTree_[node].end; ++i) {\012                        insertAgentNeighbor(agent, &agents_[agentsForTree[i]], rangeSq, agentNeighbors);\012                    }\012                    break;\012                }\012                else {\012                    distSqLeft =\012                        sqr(max(0.0f, agentTree_[agentTree_[node].left].minX - agent->position_.x)) +\012                        sqr(max(0.0f, agent->position_.x - agentTree_[agentTree_[node].left].maxX)) +\012                        sqr(max(0.0f, agentTree_[agentTree_[node].left].minY - agent->position_.y)) +\012                        sqr(max(0.0f, agent->position_.y - agentTree_[agentTree_[node].left].maxY));\012\012                    distSqRight =\012                        sqr(max(0.0f, agentTree_[agentTree_[node].right].minX - agent->position_.x)) +\012                        sqr(max(0.0f, agent->position_.x - agentTree_[agentTree_[node].right].maxX)) +\012                        sqr(max(0.0f, agentTree_[agentTree_[node].right].minY - agent->position_.y)) +\012                        sqr(max(0.0f, agent->position_.y - agentTree_[agentTree_[node].right].maxY));\012                    \012					if (distSqLeft < distSqRight) {\012                        if (distSqLeft < *rangeSq) {\012                            //queryAgentTreeRecursive(agents_, agent, agentTree_, rangeSq, agentTree_[node].left);    // RECURSION\012                            stackTop = push(stackTop, 1, distSqLeft, distSqRight, node); node = agentTree_[node].left; retCode = 0;\012                            continue;\012\012            case 1:\012\012                            if (distSqRight < *rangeSq) {\012                                //queryAgentTreeRecursive(agents_, agent, agentTree_, rangeSq, agentTree_[node].right);    // RECURSION\012                                stackTop = push(stackTop, 3, distSqLeft, distSqRight, node); node = agentTree_[node].right; retCode = 0;\012                                continue;\012                            }\012                        }\012                    }\012                    else {\012                        if (distSqRight < *rangeSq) {\012                            //queryAgentTreeRecursive(agents_, agent, agentTree_, rangeSq, agentTree_[node].right);    // RECURSION\012                            stackTop = push(stackTop, 2, distSqLeft, distSqRight, node); node = agentTree_[node].right; retCode = 0;\012                            continue;\012            case 2:\012\012                            if (distSqLeft < *rangeSq) {\012                                //queryAgentTreeRecursive(agents_, agent, agentTree_, rangeSq, agentTree_[node].left);    // RECURSION\012                                stackTop = push(stackTop, 3, distSqLeft, distSqRight, node); node = agentTree_[node].left; retCode = 0;\012                                continue;\012                            }\012                        }\012                    }\012                }\012            case 3: break;\012        }\012\012        if(&stack[0] == stackTop)\012        {\012            break;\012        }\012\012        stackTop--;\012\012        retCode = stackTop->retCode;\012        distSqLeft = stackTop->distSqLeft;\012        distSqRight = stackTop->distSqRight;\012        node = stackTop->node;\012    }\012}\012\012\012void computeAgentNeighbors(__global Agent* agent, __global Agent* agents, __global AgentTreeNode* agentTree_, __global AgentNeighborBuf* agentNeighbors, __global unsigned* agentsForTree, __global StackNode* stack)\012{\012    agent->numObstacleNeighbors_ = 0;\012    float rangeSq = sqr(agent->timeHorizonObst_ * agent->maxSpeed_ + agent->radius_);\012        \012    // Obstacles are not processed. This is current limitation of this OpenCL port\012    // sim_->kdTree_->computeObstacleNeighbors(this, rangeSq);\012\012    agent->numAgentNeighbors_ = 0;\012\012    if (agent->maxNeighbors_ > 0) {\012        rangeSq = sqr(agent->neighborDist_);\012        queryAgentTreeRecursive(agents, agent, agentTree_, &rangeSq, 0, agentNeighbors, agentsForTree, stack);\012    }\012}\012\012\012bool linearProgram1(const __global Line* lines, uint lineNo, float radius, const Vector2 optVelocity, bool directionOpt, __global Vector2 *result, uint orcaBias)\012{\012    const float dotProduct = simDot(lines[orcaBias + lineNo].point, lines[orcaBias + lineNo].direction);\012    const float discriminant = sqr(dotProduct) + sqr(radius) - absSq(lines[orcaBias + lineNo].point);\012\012    if (discriminant < 0.0f) {\012        /* Max speed circle fully invalidates line lineNo. */\012        return false;\012    }\012\012    const float sqrtDiscriminant = simSqrt(discriminant);\012    float tLeft = -dotProduct - sqrtDiscriminant;\012    float tRight = -dotProduct + sqrtDiscriminant;\012\012    int returnnow = 0;\012\012    for (uint i = 0; i < lineNo; ++i) {\012        const float denominator = det(lines[orcaBias + lineNo].direction, lines[orcaBias + i].direction);\012        const float numerator = det(lines[orcaBias + i].direction, lines[orcaBias + lineNo].point - lines[orcaBias + i].point);\012\012        if (simFabs(denominator) <= RVO_EPSILON) {\012            /* Lines lineNo and i are (almost) parallel. */\012            if (numerator < 0.0f) {\012                returnnow = 1;\012                break;\012            }\012            else {\012                continue;\012            }\012        }\012\012        const float t = numerator / denominator;\012\012        if (denominator >= 0.0f) {\012            /* Line i bounds line lineNo on the right. */\012            tRight = (tRight < t) ? tRight : t;\012        }\012        else {\012            /* Line i bounds line lineNo on the left. */\012            tLeft = (tLeft > t) ? tLeft : t;\012        }\012\012        if (tLeft > tRight) {\012            returnnow = 1;\012            break;\012        }\012    }\012\012    if(returnnow == 1)\012        return false;\012\012    if (directionOpt) {\012        /* Optimize direction. */\012        if (simDot(optVelocity, lines[orcaBias + lineNo].direction) > 0.0f) {\012            /* Take right extreme. */\012            *result = lines[orcaBias + lineNo].point + tRight * lines[orcaBias + lineNo].direction;\012        }\012        else {\012            /* Take left extreme. */  \012            *result = lines[orcaBias + lineNo].point + tLeft * lines[orcaBias + lineNo].direction;\012        }\012    }\012    else {\012        /* Optimize closest point. */\012        const float t = simDot(lines[orcaBias + lineNo].direction, (optVelocity - lines[orcaBias + lineNo].point));\012\012        if (t < tLeft) {\012            *result = lines[orcaBias + lineNo].point + tLeft * lines[orcaBias + lineNo].direction;\012        }\012        else if (t > tRight) {\012            *result = lines[orcaBias + lineNo].point + tRight * lines[orcaBias + lineNo].direction;\012        }\012        else {\012            *result = lines[orcaBias + lineNo].point + t * lines[orcaBias + lineNo].direction;\012        }\012    }\012\012    return true;\012}\012\012uint linearProgram2(const __global Line* lines, uint numLines, float radius, const Vector2 optVelocity, bool directionOpt, __global Vector2 *result, uint orcaBias)\012{\012    \012    if (directionOpt) {\012        /*\012            * Optimize direction. Note that the optimization velocity is of unit\012            * length in this case.\012            */\012        *result = optVelocity * radius;\012    }\012    else if (absSq(optVelocity) > sqr(radius)) {\012        /* Optimize closest point and outside circle. */  \012        *result = simNormalize(optVelocity) * radius;\012    }\012    else {\012        /* Optimize closest point and inside circle. */ \012        *result = optVelocity;\012    }\012\012 \012    for (uint i = 0; i < numLines; ++i) {  \012        if (det(lines[orcaBias + i].direction, lines[orcaBias + i].point - *result) > 0.0f) {\012            /* Result does not satisfy constraint i. Compute new optimal result. */\012            const Vector2 tempResult = *result;\012            if (!linearProgram1(lines, i, radius, optVelocity, directionOpt, result, orcaBias)) {\012                *result = tempResult;\012                return i;\012            }\012        }\012    }\012\012    return numLines;\012}\012\012void linearProgram3(const __global Line* lines, uint numLines, uint numObstLines, uint beginLine, float radius, __global Vector2 *result, uint orcaBias, __global Line* projLines)\012{\012    float distance = 0.0f;\012\012    for (uint i = beginLine; i < numLines; ++i) {\012        if (det(lines[orcaBias + i].direction, lines[orcaBias + i].point - *result) > distance) {\012            /* Result does not satisfy constraint of line i. */\012            for(uint k = 0; k < numObstLines; ++k)\012            {\012                projLines[orcaBias + k] = lines[orcaBias + k];\012            }\012            uint numProjLines = numObstLines;\012\012            for (uint j = numObstLines; j < i; ++j) {\012                Line line;\012\012                float determinant = det(lines[orcaBias + i].direction, lines[orcaBias + j].direction);\012\012                if (simFabs(determinant) <= RVO_EPSILON) {\012                    /* Line i and line j are parallel. */\012                    if (simDot(lines[orcaBias + i].direction, lines[orcaBias + j].direction) > 0.0f) {\012                        /* Line i and line j point in the same direction. */\012                        continue;\012                    }\012                    else {\012                        /* Line i and line j point in opposite direction. */\012                        line.point = (float)0.5f * (lines[orcaBias + i].point + lines[orcaBias + j].point);\012                    }\012                }\012                else {\012                    line.point = lines[orcaBias + i].point + (det(lines[orcaBias + j].direction, lines[orcaBias + i].point - lines[orcaBias + j].point) / determinant) * lines[orcaBias + i].direction;\012                }\012\012                line.direction = simNormalize(lines[orcaBias + j].direction - lines[orcaBias + i].direction);\012                projLines[numProjLines++] = line;\012            }\012\012            const Vector2 tempResult = *result;\012\012            if (linearProgram2(projLines, numProjLines, radius, (Vector2)(-lines[orcaBias + i].direction.y, lines[orcaBias + i].direction.x), true, result, orcaBias) < numProjLines) {\012                /* This should in principle not happen.  The result is by definition\012                    * already in the feasible region of this linear program. If it fails,\012                    * it is due to small floating point error, and the current result is\012                    * kept.\012                    */\012                *result = tempResult;\012            }\012\012            distance = det(lines[orcaBias + i].direction, lines[orcaBias + i].point - *result);\012        }\012    }\012}\012\012\012__kernel\012void computeNewVelocity(__global Agent* restrict agents, __global AgentTreeNode* restrict agentTree_, float timeStep, __global AgentNeighborBuf* restrict agentNeighbors, __global Line* restrict orcaLines, __global Line* restrict projLines, __global unsigned* restrict agentsForTree, __global StackNode* restrict stack)\012{\012    #if 1\012    __global Agent* agent = &agents[get_global_id(0)];\012\012    \012    #ifndef FORCE_C_NEIGHBORS_KERNEL\012\012    computeAgentNeighbors(agent, agents, agentTree_, agentNeighbors, agentsForTree, stack);\012\012    #endif\012\012\012    #ifndef FORCE_C_VELOCITY_KERNEL\012\012    agent->numOrcaLines_ = 0;\012    float radius_ = agent->radius_;\012    Vector2 position_ = agent->position_;\012    Vector2 velocity_ = agent->velocity_;\012\012    const uint numObstLines = agent->numOrcaLines_;\012\012    const float invTimeHorizon = 1.0f / agent->timeHorizon_;\012    uint neighborBias = agent->maxNeighbors_*get_global_id(0);\012    uint orcaBias = (agent->maxNeighbors_ + agent->maxObstacleNeighbors_)*get_global_id(0);\012\012    /* Create agent ORCA lines. */\012    for (uint i = 0; i < agent->numAgentNeighbors_; ++i) {\012        const __global Agent *const other = &agents[agentNeighbors[neighborBias+i].second];\012\012        const Vector2 relativePosition = other->position_ - position_;\012        const Vector2 relativeVelocity = velocity_ - other->velocity_;\012        const float distSq = absSq(relativePosition);\012        const float combinedRadius = radius_ + other->radius_;\012        const float combinedRadiusSq = sqr(combinedRadius);\012\012        Line line;\012        Vector2 u;\012\012        if (distSq > combinedRadiusSq) {\012            /* No collision. */\012            const Vector2 w = relativeVelocity - invTimeHorizon * relativePosition;\012            /* Vector from cutoff center to relative velocity. */\012            const float wLengthSq = absSq(w);\012\012            const float dotProduct1 = simDot(w, relativePosition);\012\012            if (dotProduct1 < 0.0f && sqr(dotProduct1) > combinedRadiusSq * wLengthSq) {\012                /* Project on cut-off circle. */\012                const float wLength = simSqrt(wLengthSq);\012                const Vector2 unitW = w / wLength;\012\012                line.direction = (Vector2)(unitW.y, -unitW.x);\012                u = (combinedRadius * invTimeHorizon - wLength) * unitW;\012            }\012            else {\012                /* Project on legs. */\012                const float leg = simSqrt(distSq - combinedRadiusSq);\012\012                if (det(relativePosition, w) > 0.0f) {\012                    /* Project on left leg. */\012                    line.direction = (Vector2)(relativePosition.x * leg - relativePosition.y * combinedRadius, relativePosition.x * combinedRadius + relativePosition.y * leg) / distSq;\012                }\012                else {\012                    /* Project on right leg. */\012                    line.direction = -(Vector2)(relativePosition.x * leg + relativePosition.y * combinedRadius, -relativePosition.x * combinedRadius + relativePosition.y * leg) / distSq;\012                }\012\012                const float dotProduct2 = simDot(relativeVelocity, line.direction);\012\012                u = dotProduct2 * line.direction - relativeVelocity;\012            }\012        }\012        else {\012            /* Collision. Project on cut-off circle of time timeStep. */\012            const float invTimeStep = 1.0f / timeStep;\012\012            /* Vector from cutoff center to relative velocity. */\012            const Vector2 w = relativeVelocity - invTimeStep * relativePosition;\012\012            const float wLength = simLength(w);\012            const Vector2 unitW = w / wLength;\012\012            line.direction = (Vector2)(unitW.y, -unitW.x);\012            u = (combinedRadius * invTimeStep - wLength) * unitW;\012        }\012\012        line.point = velocity_ + (float)0.5f * u;\012        orcaLines[orcaBias + agent->numOrcaLines_++] = line;\012    }\012\012    uint lineFail = linearProgram2(orcaLines, agent->numOrcaLines_, agent->maxSpeed_, agent->prefVelocity_, false, &agent->newVelocity_, orcaBias);\012    \012    if (lineFail < agent->numOrcaLines_) {\012        linearProgram3(orcaLines, agent->numOrcaLines_, numObstLines, lineFail, agent->maxSpeed_, &agent->newVelocity_, orcaBias, projLines);\012    }\012\012    #endif\012    #endif\012}\012\012\012// Do regular update of current velocity and position for an agent\012__kernel void update (__global Agent* restrict agents, float timeStep)\012{\012    int id = get_global_id(0);\012    __global Agent* agent = &agents[id];\012\012    // Update agent velocity and position\012    agent->velocity_ = agent->newVelocity_;\012    agent->position_ += agent->velocity_ * timeStep;\012}\012\012/*\012// Do regular update of current velocity and position for an agent\012// plus do update in side buffer to pack positions to be reused\012// during visualization step (for example).\012__kernel void updateCustom (__global Agent* restrict agents, float timeStep, __global float4* restrict positionsForRendering)\012{\012    int id = get_global_id(0);\012    __global Agent* agent = &agents[id];\012\012    // Update agent velocity and position\012    agent->velocity_ = agent->newVelocity_;\012    agent->position_ += agent->velocity_ * timeStep;\012\012    // Update side vector with agent coordinates\012    positionsForRendering[id].xy = agent->position_.xy;\012}\012*/\012"}];