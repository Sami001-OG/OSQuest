const auditCore={
  "0-0": [
    [
      "Operating system",
      "System software that manages hardware resources and provides abstractions and services to programs."
    ],
    [
      "Resource manager",
      "OS role that allocates CPU time, memory and devices among competing programs."
    ],
    [
      "Extended machine",
      "OS role that hides hardware complexity behind convenient abstractions such as files and virtual addresses."
    ],
    [
      "Batch processing",
      "Jobs are collected and executed with little interactive input during execution."
    ],
    [
      "Multiprogramming",
      "Several jobs are available in memory so the CPU can execute another while one waits."
    ],
    [
      "Multitasking",
      "Concurrent progress of tasks through scheduling, often by preemption."
    ],
    [
      "Time-sharing",
      "Interactive multitasking using CPU time slices to provide responsive service."
    ],
    [
      "Multiprocessing",
      "Use of multiple processors or cores to execute work in parallel."
    ],
    [
      "Real-time OS",
      "An OS designed to meet specified timing constraints with predictable behavior."
    ],
    [
      "Kernel",
      "Privileged core that controls essential hardware and resource-management mechanisms."
    ],
    [
      "Shell",
      "User-facing command interpreter that launches programs; not the kernel itself."
    ],
    [
      "Protection",
      "Mechanisms controlling which subjects can access which resources."
    ],
    [
      "Security",
      "Protection of system and information against unauthorized access, modification or disruption."
    ],
    [
      "Resource allocation",
      "Assignment of finite resources to requests according to a policy."
    ]
  ],
  "0-1": [
    [
      "Computer system",
      "Hardware, OS, applications and users considered together."
    ],
    [
      "CPU",
      "Processor that fetches, decodes and executes instructions."
    ],
    [
      "Register",
      "Small fast processor storage used for operands or execution state."
    ],
    [
      "Cache",
      "Fast storage retaining copies of frequently or recently used data."
    ],
    [
      "Main memory",
      "Directly accessible working storage for currently executing programs and data."
    ],
    [
      "Secondary storage",
      "Persistent storage used to retain programs and data beyond power loss."
    ],
    [
      "Bus",
      "Communication interconnect carrying information between hardware components."
    ],
    [
      "Device controller",
      "Hardware that manages a device and communicates with the processor or memory."
    ],
    [
      "Device driver",
      "Software that translates OS I/O requests into device-specific operations."
    ],
    [
      "Interrupt",
      "Asynchronous event notification that transfers control to a handler."
    ],
    [
      "Exception",
      "Synchronous event associated with instruction execution, such as an illegal instruction or page fault."
    ],
    [
      "Trap",
      "A synchronous transfer to a privileged handler; terminology varies across architectures."
    ],
    [
      "Interrupt service routine",
      "Handler invoked to process an interrupt and arrange continuation."
    ],
    [
      "Polling",
      "Repeatedly checking device status to detect an event."
    ],
    [
      "DMA",
      "Direct memory access: controller transfers a block between device and memory after CPU setup."
    ],
    [
      "User mode",
      "Restricted execution mode preventing ordinary programs from issuing privileged operations."
    ],
    [
      "Kernel mode",
      "Privileged execution mode allowing controlled access to hardware and system resources."
    ],
    [
      "Timer",
      "Hardware mechanism generating timed events, enabling preemption."
    ]
  ],
  "0-2": [
    [
      "Monolithic kernel",
      "Kernel organization where most OS services execute in one privileged address space."
    ],
    [
      "Layered OS",
      "Architecture organized into levels using services of lower layers."
    ],
    [
      "Microkernel",
      "Architecture keeping a small privileged core and placing many services in separate processes."
    ],
    [
      "Loadable module",
      "Kernel component that can be loaded or unloaded through defined interfaces."
    ],
    [
      "Hybrid kernel",
      "Architecture combining design elements of multiple kernel styles."
    ],
    [
      "Process management",
      "Creation, scheduling, coordination and termination of processes."
    ],
    [
      "Memory management",
      "Allocation, mapping, protection and reclamation of memory."
    ],
    [
      "File management",
      "Naming, organization, access and persistence of files."
    ],
    [
      "I/O management",
      "Coordination of devices, drivers, buffering, caching and request handling."
    ],
    [
      "Policy",
      "Decision about which resource allocation or action is preferred."
    ],
    [
      "Mechanism",
      "Implementation that carries out a decision."
    ]
  ],
  "1-0": [
    [
      "System call",
      "Controlled request by a user program for a kernel service."
    ],
    [
      "API",
      "Application programming interface specifying callable operations and their behavior."
    ],
    [
      "System call number",
      "Identifier selecting a kernel service at syscall entry."
    ],
    [
      "System call table",
      "Mapping from syscall identifiers to service routines."
    ],
    [
      "Mode switch",
      "Transition between privilege modes; need not change the running process."
    ],
    [
      "Return value",
      "Result or status delivered to the caller after an operation."
    ],
    [
      "Error code",
      "Value identifying failure or exceptional conditions according to an interface."
    ]
  ],
  "1-1": [
    [
      "fork",
      "UNIX operation creating a child process, with distinguishable return values in parent and child."
    ],
    [
      "exec",
      "Family of UNIX operations replacing the calling process image with another program."
    ],
    [
      "wait",
      "Operation obtaining child process termination status or waiting for a child state change."
    ],
    [
      "exit",
      "Operation terminating the calling process and reporting status."
    ],
    [
      "open",
      "Resolves a file path and establishes open-file state, returning a descriptor on success."
    ],
    [
      "read",
      "Transfers up to a requested number of bytes into a caller buffer."
    ],
    [
      "write",
      "Transfers bytes from a caller buffer to a file or other descriptor."
    ],
    [
      "lseek",
      "Changes offset of a seekable open file."
    ],
    [
      "close",
      "Releases a file descriptor."
    ],
    [
      "stat",
      "Obtains file metadata."
    ],
    [
      "ioctl",
      "Interface for device-specific control operations."
    ],
    [
      "getpid",
      "Returns the caller's process identifier."
    ],
    [
      "chmod",
      "Changes file permission mode subject to authority."
    ],
    [
      "pipe",
      "Creates a communication channel, typically with read and write descriptors."
    ],
    [
      "socket",
      "Communication endpoint usable for local or network IPC."
    ]
  ],
  "2-0": [
    [
      "Program",
      "Passive stored instructions and associated data."
    ],
    [
      "Process",
      "Active execution instance with address space, resources and execution state."
    ],
    [
      "PCB",
      "Process control block storing identity, state, saved context and management information."
    ],
    [
      "PID",
      "Process identifier."
    ],
    [
      "Program counter",
      "Register identifying the next instruction location according to processor semantics."
    ],
    [
      "Stack",
      "Region for call frames, local data and return information."
    ],
    [
      "Heap",
      "Region typically used for dynamic allocation."
    ],
    [
      "New",
      "Process is being created."
    ],
    [
      "Ready",
      "Process is eligible to execute but awaiting CPU time."
    ],
    [
      "Running",
      "Process is executing instructions on a CPU."
    ],
    [
      "Blocked",
      "Process is waiting for an event other than CPU availability."
    ],
    [
      "Terminated",
      "Process execution has ended."
    ],
    [
      "Ready queue",
      "Collection of runnable tasks available to the scheduler."
    ],
    [
      "Copy-on-write",
      "Initially share data and create a private copy upon a permitted write."
    ],
    [
      "Zombie process",
      "Terminated child whose exit status has not yet been reaped."
    ],
    [
      "Orphan process",
      "Living child whose parent has exited."
    ],
    [
      "Process hierarchy",
      "Parent-child relationships produced by process creation."
    ]
  ],
  "2-1": [
    [
      "Thread",
      "Execution unit with private registers, program counter and stack, sharing process resources."
    ],
    [
      "TCB",
      "Thread control block storing thread-specific management and saved execution state."
    ],
    [
      "User-level thread",
      "Thread managed by a user-space runtime."
    ],
    [
      "Kernel-level thread",
      "Thread recognized and scheduled by the kernel."
    ],
    [
      "Many-to-one",
      "Multiple user threads multiplexed over one kernel thread."
    ],
    [
      "One-to-one",
      "Each user thread mapped to a kernel thread."
    ],
    [
      "Many-to-many",
      "Multiple user threads multiplexed over multiple kernel threads."
    ],
    [
      "Concurrency",
      "Overlapping progress of multiple tasks, not necessarily simultaneous execution."
    ],
    [
      "Parallelism",
      "Simultaneous execution of work on separate execution resources."
    ],
    [
      "Thread join",
      "Wait for a thread to terminate and optionally collect its result."
    ],
    [
      "Thread detach",
      "Allow automatic reclamation of thread resources after termination without joining."
    ]
  ],
  "2-2": [
    [
      "CPU burst",
      "Interval of CPU execution between waits or termination."
    ],
    [
      "I/O burst",
      "Interval in which a process performs or waits for I/O."
    ],
    [
      "CPU scheduling",
      "Selection of a runnable task for execution on a processor."
    ],
    [
      "Preemptive scheduling",
      "Scheduler may interrupt running work before its CPU burst completes."
    ],
    [
      "Non-preemptive scheduling",
      "Running task retains CPU until it blocks, yields or completes its burst."
    ],
    [
      "Arrival time",
      "Time at which a job enters the relevant ready queue in a scheduling problem."
    ],
    [
      "Burst time",
      "CPU execution duration required by a job or burst."
    ],
    [
      "Completion time",
      "Time at which the specified job completes."
    ],
    [
      "Turnaround time",
      "Completion time minus arrival time."
    ],
    [
      "Waiting time",
      "Time spent ready but not running; for single-burst exercises TAT minus BT."
    ],
    [
      "Response time",
      "Time from arrival until first CPU service in standard scheduling exercises."
    ],
    [
      "Throughput",
      "Number of jobs completed per unit time."
    ],
    [
      "CPU utilization",
      "Fraction of elapsed time CPU is busy, often expressed as a percentage."
    ],
    [
      "FCFS",
      "First-come, first-served: service in ready-queue arrival order."
    ],
    [
      "SJF",
      "Shortest job first: choose smallest predicted next CPU burst."
    ],
    [
      "SRTF",
      "Shortest remaining time first: preemptive shortest-job policy."
    ],
    [
      "Priority scheduling",
      "Select runnable task by priority using stated tie-breaking rules."
    ],
    [
      "Round robin",
      "Rotate ready tasks through fixed maximum time quanta."
    ],
    [
      "Quantum",
      "Maximum uninterrupted CPU allocation in round-robin scheduling."
    ],
    [
      "Convoy effect",
      "Short jobs wait behind a long job, reducing responsiveness and potentially utilization."
    ],
    [
      "Multilevel queue",
      "Separate ready queues with distinct policies and normally fixed task classes."
    ],
    [
      "Multilevel feedback queue",
      "Tasks can move between priority queues based on observed behavior."
    ],
    [
      "Aging",
      "Increase priority with waiting time to reduce starvation."
    ],
    [
      "HRRN",
      "Highest response ratio next: nonpreemptive selection maximizing (waiting+service)/service."
    ],
    [
      "Lottery scheduling",
      "Proportional-share policy selecting a ticket randomly among runnable tasks."
    ]
  ],
  "2-3": [
    [
      "Long-term scheduler",
      "Controls admission of jobs into the active workload."
    ],
    [
      "Medium-term scheduler",
      "Suspends or resumes tasks to manage resource pressure."
    ],
    [
      "Short-term scheduler",
      "Selects the next runnable task for CPU execution."
    ],
    [
      "Dispatcher",
      "Mechanism that transfers execution to the selected task."
    ],
    [
      "Dispatch latency",
      "Elapsed time required to stop one task and start another."
    ],
    [
      "Context switch",
      "Save execution state of one task and restore another task's state."
    ],
    [
      "Scheduling overhead",
      "Time and resources spent on scheduling and switching rather than application work."
    ]
  ],
  "2-4": [
    [
      "Deadline",
      "Latest required completion time for a task instance."
    ],
    [
      "Hard real-time",
      "Missing a critical deadline is unacceptable."
    ],
    [
      "Soft real-time",
      "Deadline misses reduce quality but may be tolerated."
    ],
    [
      "Firm real-time",
      "Late results have no value, though occasional misses may be tolerated."
    ],
    [
      "Periodic task",
      "Task releasing jobs at regular intervals."
    ],
    [
      "Rate-monotonic scheduling",
      "Fixed priority based on period, shorter period receiving higher priority."
    ],
    [
      "Earliest deadline first",
      "Dynamic priority choosing job with earliest absolute deadline."
    ],
    [
      "Admission control",
      "Check whether additional work can be accepted while maintaining guarantees."
    ],
    [
      "Priority inversion",
      "High-priority task blocked by lower-priority holder while intermediate work may delay holder."
    ],
    [
      "Priority inheritance",
      "Temporarily raise resource holder's priority to that of a blocked higher-priority task."
    ]
  ],
  "3-0": [
    [
      "IPC",
      "Interprocess communication: mechanisms for data exchange and coordination."
    ],
    [
      "Shared memory",
      "Memory region mapped into multiple execution contexts for communication."
    ],
    [
      "Message passing",
      "Communication via explicit send and receive operations."
    ],
    [
      "Blocking operation",
      "Operation that may suspend caller until required condition occurs."
    ],
    [
      "Nonblocking operation",
      "Operation returning without waiting for completion or availability."
    ],
    [
      "Mailbox",
      "Named or identified endpoint used for indirect message passing."
    ],
    [
      "Pipe",
      "Ordered communication stream connecting endpoints."
    ],
    [
      "Named pipe",
      "Pipe accessible via a name in the relevant namespace."
    ],
    [
      "Message queue",
      "Mechanism buffering discrete messages for later receipt."
    ],
    [
      "Socket",
      "Endpoint for communication between processes locally or over a network."
    ],
    [
      "RPC",
      "Remote procedure call: request execution of a procedure in another process or host."
    ],
    [
      "Race condition",
      "Outcome depends on ordering or timing of concurrent operations."
    ],
    [
      "Lost update",
      "Concurrent update overwrites another update because the read-modify-write sequence is not atomic."
    ]
  ],
  "3-1": [
    [
      "Critical region",
      "Protected region of code accessing shared state; in a conditional critical region, entry also depends on a predicate."
    ],
    [
      "Critical section",
      "Code accessing shared resources requiring coordinated execution."
    ],
    [
      "Entry section",
      "Code acquiring permission to enter a critical section."
    ],
    [
      "Exit section",
      "Code releasing permission after protected work."
    ],
    [
      "Mutual exclusion",
      "At most one participant executes a mutually exclusive critical section at a time."
    ],
    [
      "Progress",
      "Eligible contenders cannot be indefinitely delayed by noncontending tasks."
    ],
    [
      "Bounded waiting",
      "Bound on other entries after a task requests entry before it is granted."
    ],
    [
      "Atomic operation",
      "Operation appearing indivisible to relevant concurrent observers."
    ],
    [
      "Busy waiting",
      "Repeatedly checking a condition without sleeping."
    ],
    [
      "Strict alternation",
      "Two-task mutual exclusion method using a turn variable, which can violate progress."
    ],
    [
      "Peterson's algorithm",
      "Classic two-process software mutual exclusion algorithm using intent flags and a turn variable."
    ],
    [
      "Test-and-set",
      "Atomic primitive reading old value and setting a new value."
    ],
    [
      "Compare-and-swap",
      "Atomic primitive updating a location only if its value matches the expected value."
    ],
    [
      "Spinlock",
      "Lock whose waiter repeatedly checks availability."
    ]
  ],
  "3-2": [
    [
      "Mutex",
      "Ownership-oriented mutual exclusion lock."
    ],
    [
      "Semaphore",
      "Synchronization object providing atomic wait and signal over permits."
    ],
    [
      "Binary semaphore",
      "Semaphore with at most one available permit."
    ],
    [
      "Counting semaphore",
      "Semaphore tracking multiple resource permits."
    ],
    [
      "wait / P / down",
      "Acquire a semaphore permit, blocking when unavailable in the blocking model."
    ],
    [
      "signal / V / up",
      "Release a semaphore permit and potentially wake a waiter."
    ],
    [
      "Monitor",
      "Abstraction combining shared state and mutually exclusive procedures."
    ],
    [
      "Condition variable",
      "Object allowing threads to wait for predicates while releasing and later reacquiring a lock."
    ],
    [
      "Producer-consumer problem",
      "Coordinate producers and consumers using a finite shared buffer."
    ],
    [
      "Readers-writers problem",
      "Allow concurrent readers but require writers exclusive access."
    ],
    [
      "Dining philosophers",
      "Classic resource-sharing problem demonstrating circular waiting and starvation."
    ],
    [
      "Barrier",
      "Synchronization point where participants wait until a required group arrives."
    ],
    [
      "Sleeping lock",
      "Lock that blocks rather than continuously spinning while unavailable."
    ]
  ],
  "4-0": [
    [
      "Resource",
      "Entity required for execution, such as a lock, buffer or device."
    ],
    [
      "Preemptible resource",
      "Resource reclaimable without unacceptable loss of correctness in the specified context."
    ],
    [
      "Nonpreemptible resource",
      "Resource that cannot safely be forcibly reclaimed in the specified context."
    ],
    [
      "Deadlock",
      "Set of tasks waiting indefinitely for resources or events that only members can provide."
    ],
    [
      "Hold and wait",
      "Holding at least one resource while requesting another."
    ],
    [
      "No preemption",
      "Held resources cannot be forcibly taken in the assumed resource model."
    ],
    [
      "Circular wait",
      "Cycle of tasks where each waits for a resource held by the next."
    ],
    [
      "Resource-allocation graph",
      "Directed graph of processes and resources with request and assignment edges."
    ],
    [
      "Request edge",
      "Process-to-resource edge showing an outstanding request."
    ],
    [
      "Assignment edge",
      "Resource-to-process edge showing a resource held by the process."
    ],
    [
      "Ostrich algorithm",
      "Strategy of ignoring general deadlock handling when costs of active handling exceed judged risks."
    ]
  ],
  "4-1": [
    [
      "Deadlock detection",
      "Determine whether actual outstanding resource requests cause a deadlocked set."
    ],
    [
      "Wait-for graph",
      "Directed process graph with edge from waiting process to resource holder."
    ],
    [
      "Available",
      "Vector of currently unallocated units of each resource type."
    ],
    [
      "Allocation",
      "Matrix of resource units currently held by each process."
    ],
    [
      "Request",
      "Matrix of current outstanding resource requests in detection."
    ],
    [
      "Work",
      "Temporary vector representing resources available during a simulated completion test."
    ],
    [
      "Recovery",
      "Action restoring progress after deadlock, such as termination or rollback."
    ],
    [
      "Victim selection",
      "Choose task or allocation to abort or preempt based on recovery cost."
    ],
    [
      "Checkpoint",
      "Saved execution state that can support recovery or restart."
    ],
    [
      "Rollback",
      "Return execution or data to a previous consistent state."
    ]
  ],
  "4-2": [
    [
      "Deadlock prevention",
      "Design policies that break at least one necessary deadlock condition."
    ],
    [
      "Deadlock avoidance",
      "Grant requests only when resulting states satisfy a safety policy."
    ],
    [
      "Safe state",
      "State with at least one simulated sequence allowing all tasks to finish within maximum claims."
    ],
    [
      "Unsafe state",
      "State lacking guaranteed safe sequence; not necessarily currently deadlocked."
    ],
    [
      "Safe sequence",
      "Order in which every process can meet its remaining claim and release held resources."
    ],
    [
      "Banker's algorithm",
      "Resource avoidance algorithm based on maximum claims and a safety test."
    ],
    [
      "Max",
      "Matrix of each task's declared maximum claim by resource type."
    ],
    [
      "Need",
      "Remaining maximum claim, computed as Max minus Allocation."
    ],
    [
      "Resource ordering",
      "Assign an order to resources and require acquisition in that order to break circular wait."
    ]
  ],
  "4-3": [
    [
      "Starvation",
      "Indefinite postponement of a task while others progress."
    ],
    [
      "Livelock",
      "Tasks continue changing state without accomplishing useful progress."
    ],
    [
      "Fairness",
      "Scheduling or synchronization property governing equitable opportunity for progress."
    ],
    [
      "Aging",
      "Increase waiting task priority to reduce indefinite postponement."
    ],
    [
      "Bounded waiting",
      "Limit on how many competing admissions occur before a waiting request is served."
    ]
  ]
};
