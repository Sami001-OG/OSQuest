const masteryData={
  "0-0": [
    [
      "Advantages",
      5,
      "Explain the advantages and limitations of time-sharing systems.",
      "Advantages: short interactive response through preemption; multiple users share expensive resources; idle periods can be used by other jobs; centralized files and administration. Limitations: context-switch overhead, resource contention and variable response under load; protection and accounting are essential. A short quantum improves responsiveness but can reduce efficiency."
    ],
    [
      "Comparison",
      5,
      "Explain command-line and graphical interfaces with examples and compare their features.",
      "CLI interprets typed commands, supports pipelines and scripting, consumes relatively few interface resources and enables reproducible automation. Example: a shell running ls and grep. GUI provides visual controls, windows and menus, makes discovery easier, and may require more graphics resources. Example: a graphical file manager. Both use OS APIs; neither is necessarily part of the kernel."
    ]
  ],
  "0-1": [
    [
      "Explanation",
      5,
      "Describe system booting, from power-on to the first user process.",
      "Firmware initializes essential hardware and identifies a boot target. A bootloader loads the kernel and any required initial image into memory and transfers control. Kernel initializes memory management, interrupt handling, drivers and scheduling, mounts a root file system and starts initial user-space services. Exact stages differ by platform. Booting is distinct from ordinary process creation."
    ],
    [
      "Application",
      6,
      "A device produces many small transfers. When is polling, interrupt I/O or DMA preferable?",
      "Polling is useful when events are frequent and a tight wait is cheaper than interrupt delivery, but consumes CPU when idle. Interrupt-driven I/O is efficient for sporadic events: the device notifies CPU when service is needed. DMA is useful for larger transfers: CPU sets up address, length and direction, controller moves data, completion interrupt signals finish. Drivers may combine these methods. Compare transfer size, rate, latency and CPU overhead."
    ]
  ],
  "0-2": [
    [
      "Explanation",
      8,
      "Explain virtual machine structure of an operating system, with diagram, advantages and disadvantages.",
      "A virtual machine (VM) is an isolated software-defined computer that presents virtual CPU, memory, storage and devices to a guest OS. A hypervisor multiplexes physical hardware across guests and controls privileged operations, memory mapping and virtual I/O.\nType 1: hardware → hypervisor → guest OS A / guest OS B → applications.\nType 2: hardware → host OS → hosted hypervisor → guests → applications.\nBenefits: isolation between guests, consolidation, snapshots/testing, portability and support for different OS environments. Limitations: virtualization overhead and resource contention, complex management, hypervisor vulnerabilities and device compatibility. Hardware virtualization can reduce trapping overhead. A container shares a host kernel, unlike a full VM with a guest kernel."
    ],
    [
      "Comparison",
      4,
      "Distinguish virtual machines, virtual memory and containers.",
      "A VM emulates or virtualizes an entire computer so a guest kernel can run. Virtual memory gives a process an address-space abstraction mapped to physical memory, possibly with backing storage; it is not an entire guest computer. A container isolates processes through host-kernel mechanisms while sharing that kernel. They solve different abstraction and isolation problems."
    ]
  ],
  "1-0": [
    [
      "Algorithm",
      8,
      "Sketch a simplified system-call dispatcher for a read operation. Explain safe argument validation and return.",
      "User wrapper places syscall identifier READ and fd, buffer, count in agreed registers; executes a trap/syscall. Kernel entry saves user context and obtains syscall number. Reject out-of-range number; dispatch to read handler. Validate descriptor, requested count, readable file mode, and writable user buffer; use safe copy routines rather than blindly trusting pointers. Request data from file/driver, possibly block and resume; copy up to count bytes to user space; return actual byte count, zero at EOF or an error. Restore context and return to user mode. Pseudocode: dispatch(n,args): if invalid(n) return error; return table[n](validated args). Exact ABI and error conventions vary."
    ],
    [
      "Reasoning",
      4,
      "Why must a kernel validate both the syscall number and user-supplied addresses?",
      "An invalid syscall number may index outside dispatch table. User pointers may be unmapped, inaccessible, or point to privileged memory. Validate ranges, permissions and lengths, handle copy faults and avoid time-of-check/time-of-use mistakes. Without validation, a program could crash the kernel or access resources without authorization."
    ]
  ],
  "1-1": [
    [
      "Application",
      6,
      "Trace a simple UNIX fork example: a process calls fork once and both successful paths print a message. How many prints occur?",
      "On success one child is created; both parent and child continue after fork. Parent receives child PID, child receives 0. Each executes its own print statement once, so two prints occur, with ordering unspecified unless synchronized. If a buffered print occurred before fork, duplicated buffers could cause extra output when flushed; assume no pending buffered output. Parent can wait for child to impose completion ordering."
    ]
  ],
  "2-0": [
    [
      "Application",
      6,
      "Compare process creation by fork with creation using a spawn-style interface, including resource inheritance.",
      "fork creates a child with a logical copy of the parent's address space, often copy-on-write, and inherits resources such as descriptors according to OS rules. Child can replace its image using exec. Spawn-style creation starts a specified program directly with configured environment/handles; API hides or avoids separate fork/exec steps. Both establish identity, PCB, address space, execution context and scheduling state. Error handling and inherited resources differ by OS."
    ],
    [
      "Description",
      8,
      "Explain process context, memory layout and PCB together.",
      "A process has executable code, initialized/uninitialized data, heap for dynamic allocation, stacks for execution, mapped files/libraries and virtual address mappings. Its execution context includes PC, stack pointer, general registers and processor flags. PCB stores identity, state, saved context, priority/queue links, memory mapping reference, accounting and resource handles. During context switch kernel saves old execution state, changes scheduling state and restores selected task; its memory mappings and resource references identify the correct environment. Diagram: PCB → saved CPU context, scheduler state, page table, descriptor table; page table → code/data/heap/stack."
    ]
  ],
  "2-1": [
    [
      "Reasoning",
      5,
      "Why can one blocking call stop many user-level threads in a many-to-one model, and how can a runtime address this?",
      "Kernel sees one schedulable execution entity. If it blocks on a syscall, none of the user-level threads multiplexed on it can execute. A runtime may use nonblocking/asynchronous I/O or multiple kernel threads; the latter allows other user threads to continue and use separate cores. Runtime scheduling alone cannot create physical parallelism with a single kernel thread."
    ]
  ],
  "2-2": [
    [
      "Numerical",
      10,
      "For P1(AT=0,BT=5), P2(AT=1,BT=4), P3(AT=3,BT=2), P4(AT=7,BT=1), run round robin with q=2. New arrivals at a slice boundary enter before the requeued task. Calculate CT, TAT, WT and RT.",
      "Ready-queue trace: 0–2 P1; 2–4 P2; 4–6 P1; 6–8 P3; 8–10 P2; 10–11 P1; 11–12 P4.\nProcess | CT | TAT | WT | RT\nP1 | 11 | 11 | 6 | 0\nP2 | 10 | 9 | 5 | 1\nP3 | 8 | 5 | 3 | 3\nP4 | 12 | 5 | 4 | 4\nMean WT=(6+5+3+4)/4=4.5; mean TAT=30/4=7.5; mean RT=8/4=2. Show queue after each slice; TAT=CT−AT, WT=TAT−BT, RT=first start−AT."
    ],
    [
      "Numerical",
      8,
      "Nonpreemptive SJF: A(AT=2,BT=5), B(AT=3,BT=2), C(AT=3,BT=1), D(AT=9,BT=2). Find Gantt chart, waiting and turnaround.",
      "CPU idle 0–2; A 2–7; C 7–8; B 8–10; D 10–12. A,B,C,D: CT=(7,10,8,12); TAT=(5,7,5,3); WT=(0,5,4,1). Avg WT=2.5; avg TAT=5. CPU utilization over 0–12=10/12=83.33%. SJF selects only jobs already ready; it cannot choose C at time 2."
    ],
    [
      "Numerical",
      6,
      "Given three ready jobs, burst/wait values A=(6,3), B=(4,4), C=(2,1), select the next job using HRRN.",
      "Response ratio=(waiting+burst)/burst. A=9/6=1.5; B=8/4=2; C=3/2=1.5. Choose B. Recompute ratios at each scheduling decision; waiting raises the ratio, improving fairness relative to pure SJF."
    ]
  ],
  "2-3": [
    [
      "Application",
      6,
      "Explain how a hardware timer and a separate deferred context-switch interrupt can cooperate in a preemptive scheduler.",
      "Timer handler records elapsed time and updates time-slice accounting. If a different runnable task should execute, it requests or invokes scheduler action at a safe point. A deferred switch handler saves outgoing registers/stack pointer, updates task state and restores selected task's context. It returns to the new task. Separating tick and switching can simplify interrupt-priority handling; the exact interrupt names depend on architecture."
    ]
  ],
  "2-4": [
    [
      "Numerical",
      8,
      "Two periodic tasks A(C=2,T=5,D=5), B(C=2,T=7,D=7) release together at t=0. Trace RMS over t=0–14 assuming preemption and no overhead.",
      "A higher priority (T=5). 0–2 A; 2–4 B; 4–5 idle; 5–7 A; 7–9 B; 9–10 idle; 10–12 A; 12–14 idle. A deadlines 5,10,15; B deadlines 7,14; all jobs released before 14 finish on time. U=2/5+2/7≈0.6857 below two-task sufficient bound 0.8284. This trace illustrates feasibility; the bound supplies the ideal-model general guarantee."
    ]
  ],
  "3-0": [
    [
      "Explanation",
      8,
      "Discuss client-server communication using remote procedure calls (RPC), including failures.",
      "Client calls local stub; stub marshals procedure identifier and arguments into message; transport sends to server; server stub unmarshals, invokes server procedure, marshals result and replies; client stub returns result. Diagram: client → client stub → network/IPC → server stub → service; reply travels in reverse. Benefits: familiar procedure interface, modular separation, location abstraction. Limitations: network latency, timeout, server failure, incompatible representation, partial execution and duplicate requests. Request IDs and deduplication can support at-most-once behavior under assumptions; retries alone may duplicate non-idempotent actions. No general guarantee that failed calls had no effect."
    ]
  ],
  "3-1": [
    [
      "Application",
      6,
      "Two tasks disable interrupts before accessing shared data. Is this sufficient for mutual exclusion on a multicore machine? Explain alternatives.",
      "Disabling interrupts on CPU 0 prevents local interrupt-driven preemption but does not stop CPU 1 from accessing the same data. It is privileged and long disabled intervals harm responsiveness. Use an atomic lock shared across cores, such as a spinlock with acquire/release ordering, or a blocking mutex where sleeping is allowed. In a kernel short sections may combine interrupt disabling with a lock to avoid local interrupt deadlock."
    ]
  ],
  "3-2": [
    [
      "Application",
      8,
      "A bounded buffer producer acquires mutex before waiting on empty. Explain a deadlock scenario and repair the pseudocode.",
      "When buffer full, empty=0. Producer acquires mutex then waits on empty while holding mutex. Consumer needs mutex to remove an item and signal empty; it cannot acquire mutex, so both are stuck. Correct producer: wait(empty); wait(mutex); insert; signal(mutex); signal(full). Consumer: wait(full); wait(mutex); remove; signal(mutex); signal(empty). Acquire availability permit before exclusive lock. Also ensure every successful wait is matched by appropriate release even on error."
    ]
  ],
  "4-1": [
    [
      "Algorithm",
      6,
      "Give a graph-based deadlock detection method for single-instance resources.",
      "Construct wait-for graph: each node is a process; add P→Q if P waits for a resource currently held by Q. Run depth-first search with white (unvisited), gray (active) and black (finished) states. Edge to gray node indicates directed cycle; record cycle participants. In single-instance reusable-resource model, cycle means deadlock. For multiple instances use matrix-based detection; resource graph cycles alone are insufficient."
    ]
  ],
  "4-2": [
    [
      "Numerical",
      10,
      "Five-process Banker exercise. Available=(3,3,2). Allocation P0=(0,1,0), P1=(2,0,0), P2=(3,0,2), P3=(2,1,1), P4=(0,0,2). Max P0=(7,5,3), P1=(3,2,2), P2=(9,0,2), P3=(2,2,2), P4=(4,3,3). Determine safety and whether P1 may request (1,0,2).",
      "Need=Max−Allocation:\nP0=(7,4,3), P1=(1,2,2), P2=(6,0,0), P3=(0,1,1), P4=(4,3,1).\nWork=(3,3,2); P1→(5,3,2); P3→(7,4,3); P4→(7,4,5); P0→(7,5,5); P2→(10,5,7). Safe sequence P1,P3,P4,P0,P2.\nRequest P1=(1,0,2)≤Need and Available. Tentative Available=(2,3,0), P1 Allocation=(3,0,2), P1 Need=(0,2,0). P1 finishes→(5,3,2); P3→(7,4,3); P4→(7,4,5); P0→(7,5,5); P2→(10,5,7). Safe; grant request. Show component-wise comparisons and provisional updates."
    ]
  ],
  "5-0": [
    [
      "Application",
      5,
      "A file has 100 fixed-length 32-byte records. Show how sequential, direct and indexed access retrieve a record.",
      "Sequential: read records from start until target, suitable for streaming. Direct: for zero-based index 42, seek to 42×32=1344, then read 32 bytes. Indexed: maintain mapping from a key, e.g. student ID, to record number/offset; look up key, then retrieve record. Index costs storage and update time but supports key-based lookup."
    ]
  ],
  "5-1": [
    [
      "Reasoning",
      5,
      "Explain the advantages and disadvantages of memory-mapped file I/O compared with explicit read/write.",
      "Mapping allows ordinary memory loads/stores, on-demand paging, sharing cached file data and potentially fewer explicit syscall/copy operations. It suits random access to large files. Drawbacks: page faults introduce latency, mapping lifetime/permissions require care, truncation may cause invalid access, concurrent updates need synchronization, and writes are not automatically durable. Explicit read/write provides clearer transfer boundaries and error/count handling."
    ]
  ],
  "6-0": [
    [
      "Numerical",
      6,
      "A linked allocation uses 1024-byte blocks with a 4-byte next pointer inside each data block. How many blocks store a 10,000-byte file? Compare with contiguous allocation.",
      "Linked payload per block=1024−4=1020 bytes. ceil(10000/1020)=10 blocks. Physical bytes=10240; pointers use 40 bytes; unused payload=10200−10000=200 bytes. Contiguous ceil(10000/1024)=10 blocks; unused tail=240 bytes, no per-data-block link. Both happen to need ten blocks here; larger files may differ."
    ]
  ],
  "6-1": [
    [
      "Numerical",
      6,
      "A hypothetical inode has 12 direct pointers, 4 KiB blocks and 4-byte pointers. Identify mapping path for zero-based logical blocks 11,12,1035,1036.",
      "n=4096/4=1024 pointers per indirect block. Direct covers 0–11. Single indirect covers 12–1035 inclusive: block 12 uses index 0, block 1035 uses index 1023. Double indirect begins at 1036; first-level and second-level indexes both 0 for that block. General double offset k=logical−1036, indexes floor(k/1024) and k mod 1024."
    ]
  ],
  "6-2": [
    [
      "Application",
      5,
      "Explain why a free-space bitmap can be more useful than a free list when allocating a contiguous file.",
      "A bitmap provides one bit per block, allowing search for adjacent free-bit runs and efficient word-level scanning. A linked free list records free addresses but may not be sorted, making contiguous-run detection expensive. Bitmap consumes fixed metadata proportional to volume size; free lists can be simpler when only individual blocks are needed. Both need synchronization and crash-consistency mechanisms."
    ]
  ],
  "7-0": [
    [
      "Numerical",
      6,
      "Memory has 4 fixed partitions of 256 KiB. Processes of 200,100,256 and 50 KiB are loaded one per partition. Find total internal fragmentation.",
      "Waste per partition=56,156,0,206 KiB. Sum=418 KiB. Allocated=1024 KiB, useful=606 KiB, difference=418 KiB. No assumption about external fragmentation is needed; the unused capacity is inside occupied fixed partitions."
    ]
  ],
  "7-1": [
    [
      "Advantages",
      6,
      "Discuss virtual memory's advantages and limitations.",
      "Advantages: large logical address spaces independent of installed RAM; partial residency allows more processes; isolation and per-page permissions; sharing code/files and copy-on-write; simplifies relocation and sparse allocation. Limitations: translation structures consume RAM, TLB misses add latency, page faults may require slow storage I/O, working-set pressure causes thrashing, and implementation is complex. Virtual memory is an address-space abstraction, not unlimited physical memory."
    ],
    [
      "Numerical",
      6,
      "A segmented-paged system uses 1 KiB pages. Segment 2 length=3000 bytes; segment page 2 maps to frame 8. Translate (segment 2, offset 2500) and test offset 3100.",
      "2500<3000, so segment offset valid. Page=floor(2500/1024)=2; page offset=452. Physical=8×1024+452=8644 bytes. Offset 3100≥3000 is invalid even if a corresponding physical page exists. Check segment bounds before translation."
    ]
  ],
  "7-2": [
    [
      "Numerical",
      8,
      "A 32-bit address uses 4 KiB pages, two levels of 10 bits each. For VA=0x00403ABC find directory index, table index and offset. If frame=0x123, find physical address.",
      "Offset = low 12 bits = 0xABC. VPN=0x00403. Directory index=VPN>>10=1. Table index=VPN & 0x3FF=3. Physical=(0x123<<12)+0xABC=0x123ABC. Page table directory selects second-level table; PTE supplies frame and permissions."
    ]
  ],
  "7-3": [
    [
      "Numerical",
      10,
      "Trace FIFO, LRU and Optimal for references 7,0,1,2,0,3,0,4,2,3,0,3,2 with three empty frames.",
      "Write each column as reference then resident frames; F=fault,H=hit.\nFIFO: [7]F [7,0]F [7,0,1]F [0,1,2]F [0,1,2]H [1,2,3]F [2,3,0]F [3,0,4]F [0,4,2]F [4,2,3]F [2,3,0]F [2,3,0]H [2,3,0]H. Total 10.\nLRU: [7]F [7,0]F [7,0,1]F [0,1,2]F [0,1,2]H [0,2,3]F [0,2,3]H [0,3,4]F [0,4,2]F [4,2,3]F [2,3,0]F [2,3,0]H [2,3,0]H. Total 9.\nOPT: [7]F [7,0]F [7,0,1]F [0,1,2]F [0,1,2]H [0,2,3]F [0,2,3]H [2,3,4]F [2,3,4]H [2,3,4]H [2,3,0]F [2,3,0]H [2,3,0]H. Total 7. Frame positions may differ with tie rules."
    ]
  ],
  "7-4": [
    [
      "Application",
      5,
      "Explain how a valid nonresident anonymous page and a valid nonresident file-backed page can be supplied differently.",
      "A first-touch anonymous page can be zero-filled; an evicted anonymous page may be restored from swap. File-backed page can be obtained from page cache or read from file storage at the relevant offset. Kernel validates mapping and access, obtains frame, updates PTE and resumes faulting instruction. A protection fault instead needs permission handling or copy-on-write, not necessarily storage I/O."
    ]
  ],
  "7-5": [
    [
      "Numerical",
      6,
      "A page-reference window of length 4 moves across 1,2,1,3,4,3,2. Give the distinct-page working set at each complete window.",
      "Windows ending at positions 4,5,6,7: [1,2,1,3]→{1,2,3} size3; [2,1,3,4]→{1,2,3,4} size4; [1,3,4,3]→{1,3,4} size3; [3,4,3,2]→{2,3,4} size3. Working-set size approximates current resident-frame needs; total demand over capacity may cause thrashing."
    ]
  ],
  "8-0": [
    [
      "Numerical",
      6,
      "A disk rotates at 5400 RPM, average seek is 7 ms, transfer speed 90 MiB/s. Estimate mean read time for 256 KiB, excluding other overhead.",
      "Mean rotation=30/5400 s=5.556 ms. Transfer=256/(90×1024) seconds≈2.778 ms. Total≈7+5.556+2.778=15.334 ms. Assume random rotational position and steady transfer rate."
    ]
  ],
  "8-1": [
    [
      "Numerical",
      10,
      "Disk requests: 82,170,43,140,24,16,190; initial head 50, cylinders 0–199, direction upward. Find FCFS, SSTF, SCAN, LOOK, C-SCAN and C-LOOK movement including wraps.",
      "FCFS: 50→82→170→43→140→24→16→190 =642.\nSSTF: 50→43→24→16→82→140→170→190 =208.\nSCAN: 50→82→140→170→190→199→43→24→16 =149+183=332.\nLOOK: 50→82→140→170→190→43→24→16 =140+174=314.\nC-SCAN: 50→82→140→170→190→199→0→16→24→43 =149+199+43=391.\nC-LOOK: 50→82→140→170→190→16→24→43 =140+174+27=341. All distances in cylinders; stop when final request serviced."
    ]
  ],
  "8-2": [
    [
      "Explanation",
      6,
      "Explain how checksums, redundancy and ordered writes work together to approximate stable storage.",
      "Checksum verifies whether a stored copy matches recorded integrity information, redundancy provides another recoverable copy, ordered durable writes and commit metadata identify authoritative state after interruption. If first copy is torn, recover previous committed copy; if first is valid but second is stale, choose version according to the commit protocol and repair stale copy. A simultaneous failure of all copies exceeds the assumed failure model. Independent backups protect against wider data-loss events."
    ]
  ],
  "4-0": [
    [
      "Application",
      5,
      "A database thread holds a lock A and waits for lock B while another holds B and waits for A. Discuss four deadlock conditions and a prevention policy.",
      "Mutual exclusion: A and B are exclusive locks. Hold and wait: both hold one and request the other. No preemption: locks cannot safely be forcibly taken while protecting shared updates. Circular wait: each waits for the other's lock. Both tasks are deadlocked. Enforce a global acquisition order A before B, release after protected work. This removes circular wait; it may constrain concurrency but does not require maximum-claim knowledge."
    ]
  ],
  "4-3": [
    [
      "Application",
      5,
      "Compare starvation under priority scheduling with starvation caused by SSTF disk scheduling. Give remedies.",
      "Priority scheduling can indefinitely postpone low-priority tasks if high-priority work continually arrives; aging or fair queues can help. SSTF can indefinitely postpone distant requests as nearby requests arrive; sweeping (SCAN/LOOK) or request aging can improve service guarantees. Starvation affects particular tasks while others progress, unlike a deadlocked set."
    ]
  ],
  "5-2": [
    [
      "Application",
      6,
      "A user creates a hard link and symbolic link to file X, then removes the original filename. Explain what happens.",
      "A hard link is another directory entry referencing the same inode; it still accesses the contents after original name removed. A symbolic link holds a pathname; if the stored path was the removed original name and is not recreated, it becomes dangling. File data remain while hard link(s) or open references exist. Directories map names to identifiers, while inode stores metadata and block mappings."
    ]
  ]
};
