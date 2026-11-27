const guideCore = {
  "0-0": [
    [
      "Definition",
      2,
      "Define an operating system and state its principal objective.",
      "An operating system is system software that manages computer hardware and supplies common services and abstractions to application programs. Its principal objective is to make computing convenient while using resources efficiently and protecting programs and data."
    ],
    [
      "Description",
      5,
      "Describe five services provided by an OS.",
      "1. Program execution: load, run and terminate programs.\n2. I/O: provide device-independent access through drivers.\n3. File management: create, read, write and organize persistent data.\n4. Communication: exchange data between processes.\n5. Protection: authenticate users and enforce resource permissions."
    ],
    [
      "Comparison",
      4,
      "Differentiate between time-sharing and batch systems.",
      "Criterion | Batch | Time-sharing\nInteraction | Little during execution | Interactive\nScheduling | Jobs queued for execution | Frequent CPU time slices\nMain goal | Throughput | Responsiveness and fairness\nExample | Overnight payroll | Multiuser terminal"
    ],
    [
      "Short note",
      4,
      "Write short notes on multiprogramming and multiprocessing.",
      "Multiprogramming keeps multiple jobs available so another can run when one waits for I/O. It improves CPU utilization even on a single CPU. Multiprocessing uses multiple processors or cores to execute work in parallel. Symmetric multiprocessing lets peers schedule tasks; asymmetric multiprocessing assigns special roles or uses a controlling processor."
    ],
    [
      "Comparison",
      4,
      "Contrast command-line and graphical user interfaces.",
      "CLI: typed commands, scriptable and resource-efficient, requires command knowledge. GUI: windows, icons and menus, easier visual discovery, often greater graphics overhead. Both are user interfaces, not necessarily kernel components."
    ]
  ],
  "0-1": [
    [
      "Definition",
      2,
      "Define an interrupt and distinguish it from an exception.",
      "An interrupt is an asynchronous event, typically raised by hardware such as a timer or device. An exception is a synchronous event associated with an executing instruction, such as a divide-by-zero or page fault. Both can transfer control to kernel handlers."
    ],
    [
      "Diagram",
      5,
      "Illustrate a DMA-based disk read.",
      "CPU ── setup(address, count) ──→ DMA/controller\nDisk ── data block ──→ DMA ──→ RAM\nController ── completion interrupt ──→ CPU\nThe CPU initializes the transfer, the controller moves data, and an interrupt signals completion."
    ],
    [
      "Reasoning",
      4,
      "Why does a time-sharing OS require timer interrupts?",
      "A timer interrupt returns control to the kernel even when a user program does not voluntarily yield. The scheduler can preempt the task, select another and maintain responsiveness. User-mode restrictions prevent ordinary programs from disabling the mechanism."
    ],
    [
      "Comparison",
      4,
      "Compare polling and interrupt-driven I/O.",
      "Polling repeatedly examines device status; it is simple and can be efficient for very frequent events, but can waste CPU time. Interrupt-driven I/O lets the CPU perform other work until the device signals an event; handler and context overhead matter at high event rates."
    ]
  ],
  "0-2": [
    [
      "Classification",
      5,
      "Classify kernel structures and give their main characteristics.",
      "Monolithic: most services execute in kernel space. Layered: services are arranged in levels. Microkernel: minimal privileged core with services communicating through IPC. Modular: dynamically loadable components extend a kernel. Hybrid: combines multiple architectural approaches."
    ],
    [
      "Diagram",
      5,
      "Draw the layered structure of an operating system.",
      "Applications\n↓\nSystem call interface\n↓\nProcess | Memory | File | I/O managers\n↓\nDevice drivers\n↓\nHardware\nEach higher layer uses services of lower layers; interfaces support modularity."
    ],
    [
      "Advantages",
      4,
      "State merits and limitations of microkernels.",
      "Merits: service isolation, smaller privileged core, modular maintenance, potential recovery of failed user-space services. Limitations: message-passing and switching overhead, complex IPC protocol design, possible performance costs. Actual performance depends on implementation."
    ],
    [
      "Description",
      4,
      "Describe the main responsibilities of an OS kernel.",
      "Process management schedules execution; memory management allocates and protects address spaces; file management organizes persistent data; I/O management controls devices; protection mediates access. These services coordinate through kernel data structures and interfaces."
    ]
  ],
  "1-0": [
    [
      "Definition",
      2,
      "What is a system call?",
      "A system call is a controlled interface through which a user program requests a service from the operating-system kernel, such as opening a file or creating a process."
    ],
    [
      "Explanation",
      6,
      "Explain the steps of a system call from user mode to return.",
      "1. Program invokes a wrapper or syscall instruction with arguments.\n2. Hardware transfers execution to a privileged entry point.\n3. Kernel identifies the service and validates arguments/permissions.\n4. Kernel executes the requested operation, possibly blocking the process.\n5. Result or error is placed in the appropriate register.\n6. Saved execution state is restored and control returns to user mode."
    ],
    [
      "Application",
      5,
      "A program calls read on a valid descriptor but the disk data is not cached. Trace what may happen.",
      "Kernel validates descriptor and buffer, submits I/O, blocks the calling process and schedules another ready process. A completion interrupt makes data available and wakes the blocked task. When scheduled again, it returns the actual number of bytes read or an error."
    ],
    [
      "Reasoning",
      3,
      "Why is an ordinary library function not necessarily a system call?",
      "A library function is an API implemented in user space and may compute a result without privileged services, such as strlen. A wrapper for read may enter the kernel. Thus API and syscall are distinct concepts."
    ]
  ],
  "1-1": [
    [
      "Classification",
      6,
      "Classify system calls into six functional groups with examples.",
      "Process control: fork, exec, wait, exit.\nFile management: open, read, write, close.\nDevice management: ioctl, read/write.\nInformation maintenance: getpid, stat.\nCommunication: pipe, socket, send/receive.\nProtection: chmod, identity/access operations."
    ],
    [
      "Explanation",
      5,
      "Explain how a UNIX shell launches a foreground command.",
      "The shell calls fork to create a child. The child sets up descriptors if necessary and calls exec to load the requested program. The parent calls wait to collect termination status. The child exits when finished. Errors from fork/exec must be handled."
    ],
    [
      "Comparison",
      4,
      "Differentiate fork and exec.",
      "fork creates a new process with a distinct PID, commonly initially sharing copy-on-write pages. exec replaces the current process image and usually preserves its PID. fork returns in both parent and child; successful exec does not return to the old program."
    ],
    [
      "Application",
      3,
      "A file descriptor is valid, but read returns fewer bytes than requested. Explain.",
      "read returns the number actually read. End-of-file, available pipe/socket data or interruption can result in a short read. A correct program uses the returned count and handles EOF and errors rather than assuming the requested size was delivered."
    ]
  ],
  "2-0": [
    [
      "Definition",
      2,
      "Define a process and PCB.",
      "A process is a program in execution with its own execution context and resources. A process control block is the kernel record storing information required to manage and resume that process."
    ],
    [
      "Diagram",
      6,
      "Draw the five-state process model and explain transitions.",
      "New → Ready → Running → Terminated\nRunning → Ready (preemption)\nRunning → Blocked (I/O/event wait)\nBlocked → Ready (event completed)\nAdmission creates a ready task; dispatch assigns CPU; preemption releases CPU without completion; blocking awaits an event; termination ends execution."
    ],
    [
      "Description",
      5,
      "State five major fields of a PCB.",
      "Process ID and state; saved program counter and registers; CPU scheduling information; memory-management information such as page-table reference; accounting and I/O information such as open files. These let the kernel identify, schedule and restore a process."
    ],
    [
      "Application",
      4,
      "Trace a process that requests disk I/O, then receives completion while another task runs.",
      "Running → Blocked when request must wait. Scheduler dispatches another ready task. Device interrupt completes the request, moving the blocked task to Ready. It returns to Running only when the scheduler dispatches it."
    ],
    [
      "Short note",
      3,
      "Write a short note on zombie and orphan processes.",
      "A zombie has exited but retains termination status until its parent reaps it. An orphan is a living process whose parent terminates; the OS arranges reparenting or equivalent cleanup. They are distinct lifecycle situations."
    ]
  ],
  "2-1": [
    [
      "Definition",
      2,
      "Define a thread.",
      "A thread is an execution unit within a process. It has its own program counter, registers and stack, but shares process resources such as code, heap and open files."
    ],
    [
      "Comparison",
      5,
      "Compare a process and a thread.",
      "Criterion | Process | Thread\nAddress space | Usually separate | Shared within process\nContext | Own resources and execution state | Own stack/registers, shared resources\nCommunication | IPC normally required | Direct shared-memory access\nIsolation | Stronger | Weaker within process\nOverhead | Usually higher | Usually lower"
    ],
    [
      "Comparison",
      5,
      "Compare user-level and kernel-level threads.",
      "User-level threads are managed by a user-space runtime and may switch without a kernel scheduler. Kernel-level threads are individually scheduled by the OS. Many-to-one user threading cannot achieve simultaneous multicore execution and a blocking syscall may block all; one-to-one kernel mapping supports parallelism but adds kernel overhead."
    ],
    [
      "Diagram",
      4,
      "Sketch the three thread mapping models.",
      "Many-to-one: U1,U2,U3 → K1.\nOne-to-one: U1→K1; U2→K2; U3→K3.\nMany-to-many: U1,U2,U3 ↔ K1,K2.\nU means user thread; K means kernel thread."
    ]
  ],
  "2-2": [
    [
      "Definition",
      3,
      "Define turnaround, waiting and response times.",
      "Turnaround = completion time − arrival time. Waiting = turnaround − CPU burst for the standard single-burst model. Response = first CPU start − arrival. All quantities must use the same time unit."
    ],
    [
      "Comparison",
      5,
      "Compare preemptive and non-preemptive scheduling.",
      "Preemptive scheduling can interrupt a running task, improves response and supports priority changes, but increases context switching and synchronization complexity (RR, SRTF). Non-preemptive scheduling retains CPU until burst ends or blocks, simpler but may delay urgent tasks (FCFS, non-preemptive SJF)."
    ],
    [
      "Numerical",
      10,
      "All processes arrive at time 0: A=6, B=2, C=4 ms. Find FCFS and SJF waiting and turnaround times.",
      "FCFS: 0 A 6 B 8 C 12. CT=(6,8,12); TAT=(6,8,12); WT=(0,6,8). Avg WT=14/3=4.67 ms; avg TAT=26/3=8.67 ms.\nSJF: 0 B 2 C 6 A 12. In A,B,C order CT/TAT=(12,2,6), WT=(6,0,2). Avg WT=8/3=2.67 ms; avg TAT=20/3=6.67 ms."
    ],
    [
      "Numerical",
      10,
      "A arrives at 0 with burst 6; B at 1 with burst 2; C at 3 with burst 3. Solve SRTF.",
      "0–1 A; 1–3 B; 3–6 C; 6–11 A. CT=(11,3,6); TAT=(11,2,3); WT=(5,0,0). Avg WT=5/3=1.67; avg TAT=16/3=5.33. First starts=(0,1,3); RT=(0,0,0)."
    ],
    [
      "Numerical",
      8,
      "Use RR with quantum 2 for A=5, B=3, C=2; all arrive at 0.",
      "0–2 A; 2–4 B; 4–6 C; 6–8 A; 8–9 B; 9–10 A. CT=(10,9,6); TAT=(10,9,6); WT=(5,6,4); avg WT=5. RT=(0,2,4); avg RT=2. Avg TAT=25/3=8.33."
    ],
    [
      "Numerical",
      6,
      "All arrive at 0: A burst 4 priority 2, B burst 3 priority 1, C burst 2 priority 3. Smaller number is higher. Solve non-preemptive priority.",
      "Order B,A,C. Gantt: 0 B 3 A 7 C 9. CT=(7,3,9), WT=(3,0,7), avg WT=10/3=3.33; TAT=(7,3,9), avg TAT=19/3=6.33."
    ],
    [
      "Reasoning",
      4,
      "Why does a very small round-robin quantum reduce efficiency?",
      "Frequent preemption raises the number of context switches. The CPU spends more time saving/restoring state and may lose cache locality. A large quantum reduces overhead but approaches FCFS and may hurt response."
    ]
  ],
  "2-3": [
    [
      "Definition",
      2,
      "Define dispatcher and dispatch latency.",
      "The dispatcher transfers CPU control to the process chosen by the short-term scheduler. Dispatch latency is the time required to stop the current task and start the selected task."
    ],
    [
      "Comparison",
      5,
      "Distinguish long-, medium- and short-term scheduling.",
      "Long-term admits jobs and influences multiprogramming level. Medium-term suspends/resumes jobs to manage memory/load. Short-term frequently selects the next ready process for CPU execution. Their frequency and objectives differ."
    ],
    [
      "Explanation",
      5,
      "Describe a context switch triggered by a timer.",
      "Timer interrupt enters kernel; save running task registers, PC and stack pointer; update state and ready queue; choose next task; switch address-space context if needed; restore next task registers; return to its execution. Context switching incurs overhead."
    ],
    [
      "Application",
      4,
      "A CPU runs a task for 4 ms and spends 0.2 ms switching to the next task. Find overhead percentage.",
      "Cycle duration=4+0.2=4.2 ms. Overhead fraction=0.2/4.2×100≈4.76%. This ignores other scheduling and cache costs."
    ]
  ],
  "2-4": [
    [
      "Comparison",
      4,
      "Distinguish hard and soft real-time systems.",
      "Hard real-time requires meeting critical deadlines; a miss can be unacceptable (e.g., safety control). Soft real-time tolerates occasional misses with reduced quality (e.g., video playback). Predictability is central to hard real-time design."
    ],
    [
      "Comparison",
      5,
      "Compare RMS and EDF scheduling.",
      "RMS assigns fixed priorities based on period (shorter period first). EDF assigns dynamic priority based on earliest absolute deadline. Under ideal independent preemptible implicit-deadline assumptions, RMS has a sufficient utilization bound n(2^(1/n)−1), while EDF can schedule utilization up to 1."
    ],
    [
      "Numerical",
      5,
      "Tasks have C/T of 1/5 and 2/6. Check the two-task RMS sufficient bound and EDF test.",
      "U=0.2+0.3333=0.5333. RMS bound=2(√2−1)=0.8284. U below bound, so RMS feasible under assumptions. EDF U≤1 also feasible."
    ],
    [
      "Explanation",
      4,
      "Explain priority inversion and one remedy.",
      "A high-priority task waits for a lock held by low-priority task while intermediate-priority tasks preempt the holder. Priority inheritance temporarily raises holder priority so it can finish its critical section and release the lock."
    ]
  ],
  "3-0": [
    [
      "Definition",
      2,
      "Define IPC and race condition.",
      "IPC means mechanisms for processes to exchange data or coordinate. A race condition arises when the outcome of concurrent operations depends on their timing or interleaving."
    ],
    [
      "Comparison",
      5,
      "Compare shared-memory and message-passing IPC.",
      "Shared memory maps common data into processes; fast after setup, but requires synchronization. Message passing exchanges messages through channels such as pipes or sockets; offers clearer isolation and network suitability but may incur copying/kernel overhead."
    ],
    [
      "Short note",
      4,
      "Write a short note on RPC.",
      "Remote procedure call makes a request to a procedure in another process or machine appear similar to a local call. Client stub marshals arguments, transport sends request, server stub unmarshals and invokes procedure, response returns. Network failure, retries and duplicate requests require careful semantics."
    ],
    [
      "Application",
      5,
      "Two threads each increment x once, starting at zero. Show an interleaving that loses an update and fix it.",
      "T1 reads x=0; T2 reads x=0; T1 writes 1; T2 writes 1. Final x=1 instead of 2. Protect the complete read-modify-write with the same mutex or use an atomic increment."
    ]
  ],
  "3-1": [
    [
      "Definition",
      2,
      "Define a critical section.",
      "A critical section is a code region accessing shared mutable data or resources that must be protected against incompatible concurrent accesses."
    ],
    [
      "Description",
      5,
      "State and explain three requirements of the critical-section problem.",
      "Mutual exclusion: at most one participant enters protected region at a time. Progress: eligible contenders can choose the next entrant without indefinite delay from noncontenders. Bounded waiting: after a request, there is a bound on others' entries before it is served."
    ],
    [
      "Algorithm",
      6,
      "Give Peterson's two-process algorithm and explain its operation.",
      "For process i, j=1−i:\nflag[i]=true;\nturn=j;\nwhile(flag[j] && turn==j) { }\ncritical_section();\nflag[i]=false;\nremainder_section();\nFlags express intent; turn resolves simultaneous contention. Classic correctness assumes sequential consistency and atomic accesses; modern implementations need proper atomics."
    ],
    [
      "Reasoning",
      4,
      "Why does strict alternation fail the progress condition?",
      "If P0 finishes and gives turn to P1, but P1 stays outside its critical section, P0 cannot re-enter even though nobody is inside. An uninterested process prevents progress."
    ],
    [
      "Comparison",
      4,
      "Compare spinlocks and blocking locks.",
      "Spinlocks repeatedly check availability and consume CPU while waiting; useful for very short waits in appropriate multicore contexts. Blocking locks suspend waiters, saving CPU but introducing scheduling overhead; suited to longer waits."
    ]
  ],
  "3-2": [
    [
      "Definition",
      2,
      "Define counting semaphore and mutex.",
      "A counting semaphore maintains permits, atomically acquired by wait and released by signal. A mutex is a mutual-exclusion lock usually associated with an owner. A binary semaphore has at most one permit but is not necessarily an ownership lock."
    ],
    [
      "Algorithm",
      8,
      "Write a semaphore solution for a bounded buffer of N slots.",
      "Initial empty=N, full=0, mutex=1.\nProducer: wait(empty); wait(mutex); insert(); signal(mutex); signal(full).\nConsumer: wait(full); wait(mutex); remove(); signal(mutex); signal(empty).\nempty/full count available slots/items; mutex protects the buffer. Acquire counting permit before mutex to avoid blocking while holding it."
    ],
    [
      "Explanation",
      5,
      "Explain the dining-philosophers problem and a deadlock-free solution.",
      "Each philosopher needs two adjacent forks. If all hold one and wait for the next, a circular wait occurs. Number forks and require every philosopher to acquire lower-numbered fork first, then higher; a strictly increasing acquisition order prevents resource cycles. Fairness still needs attention."
    ],
    [
      "Comparison",
      4,
      "Differentiate semaphore and monitor.",
      "Semaphore exposes atomic wait/signal and requires programmer discipline. Monitor encapsulates shared data and synchronized operations with condition variables; waiting releases the monitor lock and reacquires it before return. Both coordinate concurrency."
    ],
    [
      "Application",
      4,
      "A buffer of capacity 6 receives four items, then two are consumed. Give semaphore values at rest.",
      "Initial empty=6, full=0. After four inserts empty=2, full=4. After two removals empty=4, full=2. Mutex=1 after all operations release it."
    ]
  ],
  "4-0": [
    [
      "Definition",
      2,
      "Define deadlock and give an example.",
      "Deadlock is a state in which a set of processes waits indefinitely for resources or events that only other members can provide. Example: A holds lock X and waits for Y while B holds Y and waits for X."
    ],
    [
      "Description",
      6,
      "Explain the four necessary conditions for resource deadlock.",
      "Mutual exclusion: resource cannot be shared simultaneously. Hold and wait: process holds one resource while requesting others. No preemption: held resources cannot be forcibly reclaimed safely. Circular wait: each process waits for a resource held by the next in a cycle."
    ],
    [
      "Diagram",
      5,
      "Draw a resource-allocation graph for two mutually waiting processes.",
      "P1 → R2 → P2 → R1 → P1\nP→R is request; R→P is assignment. With one instance of each resource, the cycle establishes deadlock. With multiple instances, cycle is not sufficient by itself."
    ],
    [
      "Short note",
      4,
      "Discuss the ostrich approach to deadlocks.",
      "The ostrich approach deliberately avoids general prevention or detection when deadlocks are judged rare and handling overhead excessive. It relies on recovery such as restart if problems occur. Suitable only where occasional failure is acceptable; inappropriate for critical reliability requirements."
    ]
  ],
  "4-1": [
    [
      "Algorithm",
      6,
      "Describe a multiple-instance deadlock detection algorithm.",
      "Set Work=Available. Set Finish[i]=true for zero-allocation processes, otherwise false. Repeatedly find unfinished i with Request[i]≤Work, add Allocation[i] to Work, mark finished. If no such i exists, remaining unfinished processes are deadlocked under standard reusable-resource assumptions."
    ],
    [
      "Description",
      5,
      "Explain three deadlock recovery approaches.",
      "Abort all deadlocked processes: quick but loses work. Abort one at a time: minimizes disruption but repeats detection. Resource preemption: reclaim a resource with safe rollback or checkpoint. Victim choice considers priority, work done and rollback history."
    ],
    [
      "Application",
      4,
      "Three single-instance locks form waits A→B, B→C, C→A. What does detection report?",
      "The wait-for graph contains a directed cycle A→B→C→A, so the three processes are deadlocked. Terminating or safely rolling back one holder can break the cycle."
    ],
    [
      "Comparison",
      4,
      "Distinguish detection from avoidance.",
      "Detection permits potentially unsafe allocations, then checks current outstanding requests for actual deadlock. Avoidance checks maximum claims and safe-state conditions before granting requests. Detection may require recovery; avoidance restricts allocations."
    ]
  ],
  "4-2": [
    [
      "Comparison",
      5,
      "Compare deadlock prevention and avoidance.",
      "Prevention structurally breaks a necessary deadlock condition, such as resource ordering. Avoidance dynamically checks whether each allocation leaves a safe completion sequence; needs advance maximum claims. Prevention can reduce utilization, avoidance incurs checking and may delay requests."
    ],
    [
      "Algorithm",
      6,
      "Write the Banker's safety and resource-request procedures.",
      "Need=Max−Allocation. Work=Available. Find unfinished i with Need≤Work; add Allocation[i] to Work, mark finished; repeat. All finished means safe. For a request, ensure Request≤Need and Request≤Available. Tentatively update Available, Allocation and Need, run safety check, commit only if safe."
    ],
    [
      "Numerical",
      10,
      "Available=(1,1). Allocations A=(1,0), B=(0,1), C=(1,1). Max A=(2,1), B=(1,2), C=(3,2). Find Need, safe sequence and whether C can request (1,1).",
      "Need A=(1,1), B=(1,1), C=(2,1). Work initially (1,1). A finishes → (2,1); C finishes → (3,2); B finishes → (3,3). Safe. Granting C's request provisionally leaves Work=(0,0), C Need=(1,0), A/B=(1,1). None can finish; deny request for now."
    ],
    [
      "Reasoning",
      3,
      "Why is an unsafe state not necessarily deadlocked?",
      "Unsafe means no completion sequence can be guaranteed under declared maximum future demands. Actual processes may request less than those maxima or release resources, so they may still finish. A deadlock is actual indefinite waiting."
    ]
  ],
  "4-3": [
    [
      "Definition",
      2,
      "Define starvation.",
      "Starvation is indefinite postponement of a process or request while other processes continue making progress, often because a policy repeatedly favors others."
    ],
    [
      "Comparison",
      4,
      "Distinguish starvation, deadlock and livelock.",
      "Starvation: particular task waits while others progress. Deadlock: members of a waiting set cannot proceed. Livelock: participants keep changing state but make no useful progress."
    ],
    [
      "Explanation",
      4,
      "Explain how aging reduces starvation.",
      "Aging gradually increases priority as waiting time grows. Under a fair tie-breaking rule and bounded priority range, an initially low-priority task can eventually compete at the highest priority rather than waiting indefinitely."
    ],
    [
      "Application",
      3,
      "A reader-preference lock lets new readers enter while a writer waits. Diagnose and remedy.",
      "The writer can starve if readers arrive continuously. Use a fair queue or a writer-aware reader-writer policy that prevents new readers from indefinitely bypassing a waiting writer."
    ]
  ]
};
