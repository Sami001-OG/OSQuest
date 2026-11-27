const studyReference = [
  [
    "System architecture",
    "Applications\n    ↓ API / syscall\nSystem call interface\n    ↓\nKernel: process | memory | file | I/O | protection\n    ↓\nDrivers → CPU / RAM / disk / devices",
    "OS = resource manager + extended machine. User mode restricts privileged instructions; kernel mode allows them."
  ],
  [
    "System call and interrupt",
    "User program → syscall instruction\n       ↓ mode switch\nKernel dispatcher → validate → service\n       ↓ result / error\nResume user program\n\nDevice → interrupt → handler → resume / schedule",
    "A mode switch is not necessarily a context switch. DMA moves blocks between a device and memory after CPU setup."
  ],
  [
    "Process state diagram",
    "New ──admit──→ Ready ──dispatch──→ Running ──exit──→ Terminated\n                 ↑                  │\n                 │←──preemption─────┤\n                 │                  ↓ I/O wait\n                 └──I/O complete── Blocked",
    "PCB: PID, state, program counter, registers, memory mapping, scheduling, open resources."
  ],
  [
    "Threads and IPC",
    "Process A: [code | data | heap | files]\n             ↑                 ↑\n         Thread 1          Thread 2\n         PC/SP/registers   PC/SP/registers\n\nP1 → pipe / mailbox → P2\nP1 ↔ shared memory ↔ P2",
    "Each thread has its own stack and registers; processes normally have separate address spaces."
  ],
  [
    "CPU scheduling formulas",
    "FCFS example (all AT=0):\n0 ── P1 ── 5 ─ P2 ─ 8 ─ P3 ─ 9\nSJF:\n0 ─ P3 ─ 1 ─ P2 ─ 4 ── P1 ── 9",
    "TAT=CT−AT; WT=TAT−BT (single CPU burst); RT=first start−AT. Average WT=ΣWT/n; throughput=completed jobs/time; utilization=busy time/elapsed time ×100%. RMS sufficient bound n(2^(1/n)−1); EDF U=ΣC/T≤1 under ideal implicit-deadline assumptions."
  ],
  [
    "Critical section and producer-consumer",
    "ENTRY → CRITICAL → EXIT → REMAINDER\n\nProducer: wait(empty), wait(mutex)\n          insert\n          signal(mutex), signal(full)\nConsumer: wait(full), wait(mutex)\n          remove\n          signal(mutex), signal(empty)",
    "Initially empty=N, full=0, mutex=1. Mutual exclusion, progress, bounded waiting."
  ],
  [
    "Deadlock and Banker",
    "P1 → R2 → P2 → R1 → P1\nP→R request; R→P assignment\n\nWork = Available\nFind unfinished i with Need[i] ≤ Work\nWork += Allocation[i]\nMark i finished; repeat",
    "Need=Max−Allocation. Safety requires all processes simulated to finish. Coffman: mutual exclusion, hold-and-wait, no preemption, circular wait."
  ],
  [
    "File directories and inode",
    "/ (root)\n├── home\n│   └── student\n│       └── os.txt → inode 42\n└── tmp\n\ninode 42 → direct blocks\n         → indirect block → data blocks\n         → double indirect → pointer blocks",
    "Blocks=ceil(file size/block size). Internal waste=allocated bytes−file bytes. Pointer entries per block=block size/pointer size. Inode capacity (d direct, single, double, triple)=(d+n+n²+n³)×block size, subject to actual file-system limits."
  ],
  [
    "Memory partitions and segmentation",
    "Fixed: [OS][P1/waste][P2/waste]\nDynamic: [OS][P1][hole][P2][hole]\nCompacted: [OS][P1][P2][large hole]\n\n(segment,offset) → segment table\nif offset < limit → base + offset",
    "First fit: first sufficient hole; best fit: smallest sufficient; worst fit: largest. Internal waste is inside an allocated region; external fragmentation is between regions."
  ],
  [
    "Paging, MMU and TLB",
    "Virtual address [VPN | offset]\n       ↓\n   TLB lookup ── miss → page table\n       ↓ hit                ↓\n       frame ←──────────────┘\nPhysical address [frame | offset]\n       ↓\n      RAM",
    "VPN=floor(VA/P); offset=VA mod P; PA=frame×P+offset. Offset bits=log₂(P). Flat table size=number of virtual pages×PTE size. Serial single-level TLB EAT=h(t+m)+(1−h)(t+2m)."
  ],
  [
    "Page faults and replacement",
    "Reference → present? ─ yes → access RAM\n               │ no\n               ↓\n          validate access\n       invalid → error\n       valid → obtain frame\n          evict/write victim if needed\n          load page → update PTE/TLB\n          restart instruction",
    "FIFO oldest loaded, LRU oldest reference, OPT farthest future use, Clock reference bit. Fault EAT=(1−p)×normal+p×fault cost; convert ms to ns before calculating."
  ],
  [
    "Disk I/O and stable storage",
    "HDD: platter → track → sector\n      head → seek → rotation → transfer\n\nSCAN (upward):\n0 ───── head → requests → 199\n     requests ←────────────┘\n\nStable copies: A(v1), B(v1)\nwrite/verify A(v2) → write/verify B(v2)",
    "Average rotational latency=30/RPM seconds. Transfer time=bytes/rate. Total movement=Σ|next−current|. Bitmap bytes=ceil(number of blocks/8). Stable storage needs ordered writes, verification and recovery under stated failure assumptions."
  ]
];
