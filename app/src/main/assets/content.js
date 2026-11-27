const raw = [
  [
    "OS Fundamentals",
    [
      [
        "Operating system overview",
        "An OS manages hardware and provides abstractions and services to programs. It allocates CPU time, memory and devices, protects resources and handles errors. The kernel is its privileged core.",
        "What is the privileged core of an OS?",
        "Kernel",
        "Compiler",
        "Shell",
        "Browser"
      ],
      [
        "Computer system structure",
        "CPU, memory and device controllers communicate through interconnects. Interrupts notify the CPU of events; DMA transfers blocks between devices and memory with limited CPU intervention. User mode restricts privileged operations; kernel mode permits them.",
        "What transfers blocks with limited CPU involvement?",
        "DMA",
        "Shell",
        "Paging",
        "Compiler"
      ],
      [
        "OS structure and components",
        "Monolithic kernels place most services in kernel space; microkernels move many services to user space; layered systems organize services by dependency; modular kernels load extensions. Components include process, memory, file, storage, I/O and protection managers.",
        "Which design moves many services to user space?",
        "Microkernel",
        "Monolithic",
        "Batch",
        "Round robin"
      ]
    ]
  ],
  [
    "System Calls",
    [
      [
        "System call mechanism",
        "A system call requests a kernel service. A program passes arguments, executes a controlled trap or syscall instruction, the kernel validates and performs the operation, then returns a result. A library API may wrap a syscall.",
        "What requests a protected kernel service?",
        "System call",
        "Ordinary arithmetic",
        "Cache hit",
        "Compiler warning"
      ],
      [
        "Classes of system calls",
        "Process control: fork, exec, exit, wait. File management: open, read, write, close. Device management: ioctl. Information maintenance: getpid, time. Communication: pipe, socket. Protection: chmod. Names vary by OS.",
        "Which call replaces a UNIX process image?",
        "exec",
        "fork",
        "wait",
        "close"
      ]
    ]
  ],
  [
    "Processes and Threads",
    [
      [
        "Process model and lifecycle",
        "A process is a running program with an address space and process control block (PCB). States: new, ready, running, blocked, terminated. Creation allocates resources; termination releases them. UNIX fork creates a child; wait collects its exit status.",
        "Where is saved process state stored?",
        "PCB",
        "TLB",
        "Inode",
        "Disk arm"
      ],
      [
        "Thread model",
        "Threads share process code, data and open files but have individual stacks, registers and program counters. User-level threads are managed by a library; kernel-level threads are scheduled by the OS. Many-to-one can block all threads on a blocking syscall; one-to-one enables parallelism.",
        "What is private to each thread?",
        "Stack",
        "Process code",
        "Open files",
        "Shared heap"
      ],
      [
        "Scheduling algorithms",
        "FCFS serves arrival order; SJF selects shortest burst; SRTF is preemptive SJF; priority selects highest priority; round robin uses a time quantum. Aging reduces starvation. Turnaround = completion − arrival; waiting = turnaround − burst; response = first run − arrival.",
        "Which algorithm uses a time quantum?",
        "Round robin",
        "FCFS",
        "Nonpreemptive SJF",
        "FIFO paging"
      ],
      [
        "Dispatcher and context switch",
        "The scheduler selects a ready process; dispatcher transfers control by restoring context and switching mode as needed. Context switching saves and restores registers and program counter; it incurs overhead.",
        "What selects the next ready process?",
        "Scheduler",
        "Inode",
        "MMU",
        "Disk controller"
      ],
      [
        "Real-time scheduling",
        "Hard real-time deadlines must be met; soft real-time tolerates some misses. Rate monotonic assigns higher priority to shorter periods; earliest deadline first selects the nearest absolute deadline.",
        "Which selects the nearest deadline?",
        "EDF",
        "FCFS",
        "LRU",
        "SSTF"
      ]
    ]
  ],
  [
    "Concurrency and Synchronization",
    [
      [
        "IPC and inter-thread communication",
        "Processes communicate through shared memory or message passing (pipes, sockets, queues). Threads can share variables but require synchronization to avoid races. A race occurs when results depend on execution order.",
        "Which IPC uses a common addressable region?",
        "Shared memory",
        "Disk scheduling",
        "Paging",
        "Context switch"
      ],
      [
        "Critical region and critical section",
        "A critical section accesses shared data. Correct solutions ensure mutual exclusion, progress and bounded waiting. Entry and exit sections control access. Peterson’s two-process algorithm uses flags and turn under suitable memory ordering assumptions.",
        "What ensures only one participant enters at a time?",
        "Mutual exclusion",
        "Thrashing",
        "Fragmentation",
        "Spooling"
      ],
      [
        "Synchronization solutions",
        "Mutexes protect critical sections. Semaphores use atomic wait and signal; counting semaphores track multiple resources. Monitors encapsulate shared state and condition variables. Producer-consumer uses empty/full counts and a mutex; dining philosophers requires avoiding circular wait.",
        "Which primitive counts available resource units?",
        "Counting semaphore",
        "Program counter",
        "Inode",
        "TLB"
      ]
    ]
  ],
  [
    "Resource Management",
    [
      [
        "Deadlock and ostrich algorithm",
        "Deadlock is a set of processes permanently waiting for resources held by each other. Four necessary conditions: mutual exclusion, hold and wait, no preemption, circular wait. Ostrich approach ignores the problem when handling cost is judged too high.",
        "Which is a necessary deadlock condition?",
        "Circular wait",
        "Paging",
        "Time quantum",
        "DMA"
      ],
      [
        "Detection and recovery",
        "For single-instance resources a cycle in a wait-for graph indicates deadlock. Multiple instances require a resource detection algorithm. Recovery may terminate processes or preempt resources with rollback where possible.",
        "What can recover from deadlock?",
        "Terminate a selected process",
        "Increase font size",
        "Disable cache",
        "Rename files"
      ],
      [
        "Avoidance and prevention",
        "Prevention breaks a necessary condition, e.g. impose resource ordering. Avoidance grants requests only if a safe sequence remains. Banker’s algorithm uses Need = Max − Allocation and checks whether available resources can satisfy each remaining process in some order. Unsafe does not necessarily mean deadlocked.",
        "What is Need in Banker’s algorithm?",
        "Max − Allocation",
        "Allocation − Max",
        "Max + Allocation",
        "Available − Max"
      ],
      [
        "Starvation",
        "Starvation is indefinite postponement while others progress. Aging raises waiting processes’ priority; fair queues help. Deadlock differs because involved processes cannot progress.",
        "Which technique reduces priority starvation?",
        "Aging",
        "Swapping",
        "Formatting",
        "Segmentation"
      ]
    ]
  ],
  [
    "File Management",
    [
      [
        "File naming, structure, access and attributes",
        "Files are named persistent data collections. Structures include byte streams, records and indexed records. Access may be sequential, direct or indexed. Attributes include size, owner, permissions and timestamps. Extensions are naming conventions.",
        "Which access jumps directly to a position?",
        "Direct access",
        "Sequential only",
        "FIFO scheduling",
        "Swapping"
      ],
      [
        "File system calls and memory mapping",
        "open obtains a descriptor; read/write transfer bytes; seek changes offset; close releases descriptor; unlink removes a name. Memory mapping maps file contents into virtual address space; shared mappings can propagate modifications to the file.",
        "Which call changes a file offset?",
        "seek",
        "fork",
        "wait",
        "exit"
      ],
      [
        "Directories and organization",
        "Directories map names to file identifiers. Single-level, two-level, tree and graph organizations differ in sharing and naming. Absolute paths start at root; relative paths start at current directory. Users see names and folders; OS sees metadata and blocks.",
        "Where does an absolute UNIX path start?",
        "Root",
        "Current directory",
        "CPU",
        "Swap"
      ]
    ]
  ],
  [
    "File System Implementation",
    [
      [
        "File implementation and allocation",
        "Contiguous allocation uses adjacent blocks, supports fast access but may fragment. Linked allocation chains blocks, supports growth but slow random access. Indexed allocation stores block pointers in an index. Extents describe contiguous ranges.",
        "Which allocation uses an index of block pointers?",
        "Indexed",
        "Linked only",
        "Contiguous only",
        "Round robin"
      ],
      [
        "Directory implementation and UNIX inode",
        "Directories can use linear lists or hash tables. UNIX inode stores metadata and block references; the directory maps filename to inode number. Hard links share an inode; symbolic links store a path.",
        "Where is a UNIX filename normally stored?",
        "Directory entry",
        "CPU register",
        "TLB",
        "Inode data pointer"
      ],
      [
        "Block management and quota",
        "Free blocks can be tracked using bitmaps or free lists. Block size trades internal fragmentation against metadata overhead. Quotas limit users or groups by storage or inode usage.",
        "What tracks free blocks using bits?",
        "Bitmap",
        "Semaphore",
        "PCB",
        "Dispatcher"
      ]
    ]
  ],
  [
    "Memory and Virtual Memory",
    [
      [
        "Basic memory management and partitions",
        "Memory management tracks and allocates RAM. Fixed partitions can waste space internally; dynamic partitions suffer external fragmentation. First fit selects first sufficient hole, best fit smallest sufficient hole, worst fit largest. Compaction combines holes when relocation is possible.",
        "Which fragmentation occurs between allocated regions?",
        "External",
        "Internal only",
        "Page fault",
        "Deadlock"
      ],
      [
        "Segmentation, paging, swapping and MMU",
        "Segmentation uses variable-sized logical regions with base and limit. Paging splits virtual memory into fixed pages and physical RAM into equal frames. Swapping moves memory contents to backing storage. MMU translates addresses and checks protection.",
        "What translates virtual addresses?",
        "MMU",
        "PCB",
        "Inode",
        "Dispatcher"
      ],
      [
        "Page tables and TLB",
        "For page size P, page = floor(address/P), offset = address mod P. Physical address = frame × P + offset. Page tables map pages to frames; hierarchical tables reduce unused table storage. TLB caches translations.",
        "What caches address translations?",
        "TLB",
        "Disk queue",
        "Semaphore",
        "Inode"
      ],
      [
        "Page replacement",
        "FIFO evicts oldest loaded page; LRU evicts least recently used; Optimal evicts the page whose next use is farthest away. FIFO can exhibit Belady’s anomaly. A dirty victim may need writing back.",
        "Which policy uses future references?",
        "Optimal",
        "FIFO",
        "LRU",
        "FCFS"
      ],
      [
        "Exception vector and demand paging",
        "Exception vectors identify handlers for exceptions. A page fault transfers control to the OS; if access is valid but page absent, OS loads it, updates mapping and restarts instruction. Demand segmentation similarly loads segments as needed. Invalid access is rejected.",
        "What occurs when a valid demanded page is absent?",
        "Page fault",
        "Deadlock",
        "Disk formatting",
        "Thread creation"
      ],
      [
        "Thrashing and performance",
        "Thrashing occurs when frequent faults dominate useful execution. Working-set and page-fault-frequency control can reduce it. Effective access time depends on hit rates and fault cost; even small fault rates can be expensive.",
        "What characterizes thrashing?",
        "Excessive page faults",
        "Zero interrupts",
        "Fast CPU execution",
        "No memory references"
      ]
    ]
  ],
  [
    "Disk I/O Management",
    [
      [
        "Disk structure and performance",
        "HDDs have platters, tracks and sectors. Access time includes seek, rotational latency and transfer. SSDs have no mechanical seek. Low-level formatting establishes sector structure; modern drives generally perform it at factory.",
        "Which delay moves an HDD head?",
        "Seek time",
        "CPU burst",
        "Page offset",
        "Quantum"
      ],
      [
        "Disk arm scheduling",
        "FCFS follows request order; SSTF chooses nearest cylinder; SCAN sweeps to an end then reverses; C-SCAN sweeps in one direction and returns; LOOK reverses at last request. Total movement sums absolute differences between successive positions.",
        "Which chooses the nearest cylinder?",
        "SSTF",
        "FCFS",
        "C-SCAN",
        "FIFO paging"
      ],
      [
        "Error handling and stable storage",
        "Controllers use error detection/correction and retries; bad sectors may be remapped. Stable storage is an abstraction approximated through redundancy, carefully ordered writes and recovery. Backups and checksums protect against different failure modes.",
        "Which helps detect corrupted data?",
        "Checksum",
        "Time quantum",
        "Page offset",
        "Priority aging"
      ]
    ]
  ]
];