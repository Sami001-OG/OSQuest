const auditDepth={
  "0-0": [
    [
      "Comparison",
      5,
      "Compare multiprogramming, multitasking and multiprocessing.",
      "Multiprogramming keeps several jobs available to avoid CPU idle time during I/O; multitasking schedules overlapping task progress, often using short preemptive time slices; multiprocessing executes tasks on multiple processing units simultaneously. The first two do not require multiple CPUs. A modern OS may support all three."
    ]
  ],
  "0-1": [
    [
      "Explanation",
      5,
      "Explain the computer storage hierarchy and its tradeoffs.",
      "Registers → cache → RAM → secondary storage → archival storage. Upper levels have lower latency, less capacity and typically higher cost per byte. Registers, cache and conventional RAM are volatile; disk and flash retain data. Temporal/spatial locality make caching effective. The OS manages memory, files and I/O across levels; hardware usually manages CPU caches."
    ],
    [
      "Comparison",
      4,
      "Compare interrupt and trap.",
      "Interrupts typically arise asynchronously from devices or timers. Traps are synchronous control transfers associated with instructions, e.g. intentional system-call entry or some exceptions. Both use a privileged handler and saved state; architecture-specific terminology varies."
    ]
  ],
  "0-2": [
    [
      "Comparison",
      5,
      "Compare monolithic, layered, microkernel and modular designs.",
      "Monolithic: direct privileged service calls, low communication overhead but weaker fault isolation. Layered: clear interfaces and easier debugging, but strict layers can constrain design. Microkernel: user-space servers and minimal core improve isolation but require IPC. Modular: loadable components extend kernel, flexible and efficient but faulty modules may affect kernel."
    ]
  ],
  "1-0": [
    [
      "Diagram",
      5,
      "Draw the system-call interface and distinguish mode and context switching.",
      "User program → library wrapper → syscall instruction → kernel entry → service table → validation and execution → return result. A mode switch changes privilege; a context switch changes execution task by saving and restoring registers/state. A syscall that completes immediately may return without a context switch."
    ]
  ],
  "1-1": [
    [
      "Application",
      5,
      "Explain how fork, exec, wait and exit work together, including error behavior.",
      "fork creates a child, returns child PID to parent and zero to child; on failure returns −1 in parent. Child calls exec, replacing its program image on success; on failure it handles error and exits. Parent uses wait/waitpid to obtain child status; wait can block. exit ends child execution; kernel releases resources and retains status until reaped."
    ]
  ],
  "2-0": [
    [
      "Explanation",
      6,
      "Explain reasons for process creation and termination and show process creation steps.",
      "Creation may result from system startup, a running process requesting a child, a user launching a program, or batch-job submission. OS allocates identity and PCB, initializes or inherits address space/resources, sets registers and inserts task into ready queue. Termination may be normal exit, error exit, fatal exception or authorized external termination. OS releases resources, notifies waiters and preserves exit status when needed."
    ]
  ],
  "2-1": [
    [
      "Explanation",
      5,
      "Explain thread creation, termination, join and detach.",
      "Creation allocates a TCB and stack, establishes entry routine and argument, and schedules the thread through a runtime or kernel. Returning from entry or explicit thread exit terminates the thread; process-wide exit terminates all threads. Join waits for a joinable thread and reclaims its remaining resources; detached threads are reclaimed automatically. Shared process resources remain while the process exists."
    ]
  ],
  "2-2": [
    [
      "Explanation",
      6,
      "Explain multilevel queue and multilevel feedback queue scheduling with an example.",
      "Multilevel queue assigns tasks to fixed classes, e.g. interactive RR and batch FCFS, with priority or time sharing between queues. MLFQ permits movement: new task enters high-priority queue; repeated full quantum use demotes it, while periodic priority boosts help prevent starvation. Example: Q0 q=2, Q1 q=4, Q2 FCFS; a CPU-bound job uses 2 units in Q0 then moves to Q1, while short interactive work often completes or blocks before quantum expires. Exact policies vary."
    ],
    [
      "Numerical",
      8,
      "Solve preemptive priority scheduling: A(AT=0,BT=6,P=3), B(AT=1,BT=3,P=1), C(AT=2,BT=2,P=2). Smaller P is higher.",
      "0–1 A; 1–4 B; 4–6 C; 6–11 A. CT A,B,C=11,4,6. TAT=11,3,4. WT=5,0,2. Average WT=7/3=2.33; average TAT=18/3=6. Response=0,0,2. B preempts A; C cannot preempt B."
    ],
    [
      "Numerical",
      6,
      "Calculate CPU utilization and throughput if 4 jobs finish in 20 ms and CPU is busy for 17 ms.",
      "Utilization=17/20×100=85%. Throughput=4/20=0.2 jobs/ms=200 jobs/s for this observation interval. Idle fraction=15%."
    ]
  ],
  "2-3": [
    [
      "Comparison",
      4,
      "Distinguish a process switch from a thread switch within the same process.",
      "Both save and restore execution registers and scheduling context. Process switch between different address spaces may change page-table root and invalidate or retag TLB state. Same-process thread switch can retain address space and open resources, although stacks/registers differ. Costs depend on hardware and implementation."
    ]
  ],
  "2-4": [
    [
      "Application",
      6,
      "Trace EDF for two independent jobs released at 0: A requires 3 ms, deadline 7; B requires 2 ms, deadline 4. At t=1 C arrives, needs 1 ms, deadline 2.",
      "At t=0 choose B (earliest deadline 4). Run B 0–1; C arrives with deadline 2, preempts B; run C 1–2 and finish. Resume B 2–3 and finish before 4. Run A 3–6 and finish before 7. All deadlines met. EDF compares absolute deadlines among ready jobs."
    ]
  ],
  "3-0": [
    [
      "Classification",
      5,
      "Explain zero, bounded and unbounded buffering in message passing.",
      "Zero-capacity channel has no queued message storage; send and receive rendezvous. Bounded queue stores up to N messages; blocking sender waits when full or nonblocking send returns failure. Conceptually unbounded queue accepts arbitrarily many messages, though real implementations have resource limits. Receivers may block when queue empty or return immediately."
    ],
    [
      "Explanation",
      4,
      "Explain inter-thread communication with a condition variable.",
      "Threads share process memory; protect a shared predicate with a mutex. Consumer acquires lock, while predicate false calls condition wait (atomically releases lock and sleeps); producer updates predicate under lock and signals. Consumer wakes, reacquires lock, rechecks predicate and consumes data. A loop handles spurious wakeups and competing consumers."
    ]
  ],
  "3-1": [
    [
      "Algorithm",
      6,
      "Write a test-and-set spinlock and discuss its limitation.",
      "Initially lock=false. Acquire: while(test_and_set(lock)) { } ; critical section; release: atomic_store_release(lock,false). Test-and-set atomically returns old value and sets true, so only one task observes false before release. Use suitable acquire/release ordering. Busy waiting consumes CPU and this simple lock does not guarantee bounded waiting."
    ],
    [
      "Explanation",
      4,
      "Explain a conditional critical region.",
      "A conditional critical region can be written conceptually as region v when B do S. Shared state v is protected from concurrent incompatible access; B is a predicate evaluated under protection. If B is false, the task waits and rechecks when state changes. Example: remove from a buffer only when count>0. Monitors and condition variables implement a similar discipline."
    ]
  ],
  "3-2": [
    [
      "Algorithm",
      8,
      "Give a reader-preference semaphore solution for readers-writers and discuss starvation.",
      "Initialize mutex=1, rw=1, readcount=0. Reader entry: wait(mutex); readcount++; if(readcount==1) wait(rw); signal(mutex). Read. Reader exit: wait(mutex); readcount--; if(readcount==0) signal(rw); signal(mutex). Writer: wait(rw); write; signal(rw). First reader excludes writers, last releases. Continuous arriving readers may starve writers; fair arrival queue or writer-aware policy can improve fairness."
    ],
    [
      "Algorithm",
      5,
      "Give monitor-style pseudocode for a bounded buffer.",
      "put(x): lock monitor; while count==N wait(notFull); insert x; count++; signal(notEmpty); unlock. get(): lock monitor; while count==0 wait(notEmpty); remove x; count--; signal(notFull); unlock; return x. Condition wait atomically releases and reacquires monitor lock. Predicates must be rechecked."
    ]
  ],
  "4-0": [
    [
      "Reasoning",
      4,
      "Explain why a resource-allocation graph cycle is not sufficient for deadlock with multiple instances.",
      "A cycle indicates circular dependency among some requests and holders, but an additional instance held by a task outside the cycle may be released and satisfy a pending request. With one instance per resource type, the cycle is sufficient under the standard model. With several instances, use a matrix detection algorithm."
    ]
  ],
  "4-1": [
    [
      "Numerical",
      8,
      "Use detection for Available=(0,0), Allocation A=(1,0), B=(0,1), C=(1,1), Request A=(0,1), B=(1,0), C=(0,0).",
      "Work=(0,0). C has Request=(0,0), can finish; Work=(1,1). A needs (0,1), finishes and releases (1,0), Work=(2,1). B needs (1,0), finishes, Work=(2,2). All finish: no deadlock. If C instead requests (1,0), none can finish initially and all three are deadlocked under this model."
    ]
  ],
  "4-2": [
    [
      "Description",
      6,
      "Show how to prevent each of the four deadlock conditions.",
      "Mutual exclusion: make resources shareable when possible. Hold and wait: require all resources before execution or release old ones before new requests. No preemption: reclaim resources when safe and restart later. Circular wait: enforce increasing resource-order acquisition. These approaches may be impractical for nonshareable resources and reduce utilization or fairness."
    ]
  ],
  "4-3": [
    [
      "Reasoning",
      4,
      "Explain starvation during deadlock recovery and a mitigation.",
      "If the same low-priority or cheap-to-abort process is repeatedly chosen as victim, it may never finish. Include previous rollback count, waiting time and progress in victim-selection cost, or increase its effective priority. Avoid guaranteeing fairness unless the policy actually bounds waiting."
    ]
  ],
  "5-0": [
    [
      "Description",
      5,
      "Explain file naming rules and organization, including file types.",
      "File names identify directory entries; rules include length, permitted characters, case sensitivity and separators. Extensions are naming conventions, not always enforced file types. Regular files hold data, directories organize names, special files can represent devices, symbolic links hold paths. Byte-stream and record-based file organization support sequential, direct or indexed access."
    ],
    [
      "Numerical",
      4,
      "Interpret UNIX mode 754 and give the numeric value for rw-r----- .",
      "754 means owner rwx (4+2+1), group r-x (4+1), others r-- (4). rw-r----- means owner rw-=6, group r--=4, others ---=0, thus 640. Directory execute means traversal, not execution of a program."
    ]
  ],
  "5-1": [
    [
      "Application",
      5,
      "Trace open, read, lseek, write and close using a file offset.",
      "Open a seekable read/write file with offset 0. Successful read of 20 bytes sets offset 20; lseek(fd,5,SEEK_SET) sets offset 5; successful write of 3 bytes overwrites offsets 5–7 and sets offset 8 (assuming no append flag). close releases descriptor. Error and short I/O returns must be checked."
    ]
  ],
  "5-2": [
    [
      "Comparison",
      6,
      "Compare tree, acyclic graph and general graph directory organizations.",
      "Tree gives unique parent paths in the basic model and simple traversal. Acyclic graph permits sharing via multiple links while forbidding cycles; deletion needs reference accounting. General graph can contain cycles; traversal must track visited nodes and reclamation may require cycle handling. Sharing flexibility increases management complexity."
    ]
  ],
  "6-0": [
    [
      "Explanation",
      5,
      "Explain FAT allocation and its difference from linked allocation inside data blocks.",
      "FAT holds successor cluster indices in a central table; directory entry records first cluster. Follow entries until end-of-chain marker. Example 5→12→8→EOF means file occupies clusters 5,12,8. Unlike pointers embedded in each data block, FAT concentrates metadata and can be cached; long-chain random access still requires traversal."
    ],
    [
      "Numerical",
      4,
      "A contiguous file starts at block 120 and spans 12 blocks. Find logical block 7 and determine whether logical block 12 is valid.",
      "Physical block=start+logical=120+7=127. Logical blocks 0–11 are valid; 12 is outside the file allocation."
    ]
  ],
  "6-1": [
    [
      "Numerical",
      8,
      "Find maximum addressable file size for 12 direct pointers plus one single, double and triple indirect pointer with 4 KiB blocks and 4-byte pointers.",
      "n=4096/4=1024. Data blocks=12+1024+1024²+1024³=1,074,791,436. Bytes=1,074,791,436×4096=4,402,345,721,856 (about 4.004 TiB). This is theoretical pointer capacity, ignoring other metadata/address limits."
    ]
  ],
  "6-2": [
    [
      "Application",
      4,
      "A user has a soft limit of 100 MiB, hard limit 120 MiB, usage 95 MiB. What happens when requesting 10 MiB then 20 MiB?",
      "First allocation reaches 105 MiB: may succeed while grace period permits. Second would reach 125 MiB, beyond hard limit, so must fail or be partially serviced according to interface/accounting. After grace expiration, further allocation above soft limit can be denied."
    ]
  ],
  "7-0": [
    [
      "Numerical",
      6,
      "Apply worst fit to holes 100, 500, 200, 300, 600 KB and requests 212,417,112,426 KB.",
      "212→600 leaves 388; 417→500 leaves 83; 112→388 leaves 276; largest remaining hole is 300, so 426 fails. Final holes 100,83,200,300,276 KB. Total free is 959 KB but no contiguous 426 KB hole."
    ],
    [
      "Comparison",
      4,
      "Compare compile-time, load-time and execution-time address binding.",
      "Compile-time binding generates absolute addresses when location known. Load-time binding uses relocatable code resolved when loaded. Execution-time binding translates addresses dynamically using MMU, allowing relocation during execution. Runtime mapping supports protection and virtual memory."
    ]
  ],
  "7-1": [
    [
      "Numerical",
      5,
      "A 32-bit virtual address space uses 4 KiB pages, RAM is 1 GiB. Find VPN bits, offset bits, and physical frame-number bits.",
      "4 KiB=2^12, offset=12 bits. VPN=32−12=20 bits. RAM=2^30 bytes, frames=2^30/2^12=2^18; frame number=18 bits. Physical address=18+12=30 bits, ignoring hardware reservations."
    ],
    [
      "Explanation",
      5,
      "Explain memory swapping and distinguish it from paging.",
      "Traditional swapping removes a whole process image to backing store and restores it when scheduled/resumed. Paging maps fixed-size pieces independently; demand paging loads only referenced pages and can evict individual pages. Modern swap commonly refers to backing storage for individual anonymous pages. Both incur I/O delay and must preserve correct mappings."
    ]
  ],
  "7-2": [
    [
      "Explanation",
      6,
      "Explain hashed and inverted page tables and why ASIDs matter.",
      "Hashed page table uses virtual page number (and address-space identity) to select bucket, searches entries for match, then returns frame. Inverted table records approximately one entry per physical frame containing owner/address-space identity and VPN, reducing table memory for huge virtual spaces but requiring efficient lookup. ASIDs distinguish identical VPNs belonging to different address spaces; TLB tagging reduces needless flushes."
    ]
  ],
  "7-3": [
    [
      "Algorithm",
      6,
      "Explain NRU and aging page replacement.",
      "NRU classifies pages by (reference,dirty): (0,0), (0,1), (1,0), (1,1); choose a page from lowest nonempty class, periodically clear reference bits. Aging approximates LRU: on timer tick shift each counter right, insert current reference bit into high bit, clear reference bit; choose smallest counter. Both approximate recency with lower bookkeeping than exact LRU."
    ],
    [
      "Numerical",
      8,
      "Trace Clock replacement for references 1,2,3,1,4,2 with three empty frames and hand initially at frame 0.",
      "Load 1,2,3 in frames 0,1,2, each bit=1; hand returns to 0. Reference 1 hits, bit stays 1. On 4, scan 0,1,2 clearing bits, then replace frame 0 with 4 and set bit=1; hand=1. Reference 2 hits, set bit=1. Four faults (1,2,3,4), two hits (1,2). Final frames [4,2,3], bits [1,1,0]."
    ]
  ],
  "7-4": [
    [
      "Advantages",
      5,
      "Discuss pure demand paging and prepaging.",
      "Pure demand paging avoids loading unused pages, saves initial I/O and memory, but first references incur faults. Prepaging predicts future references and reads multiple pages early, potentially reducing faults and exploiting sequential I/O; wrong predictions waste RAM and bandwidth. Both depend on locality and workload."
    ]
  ],
  "7-5": [
    [
      "Diagram",
      5,
      "Draw and explain CPU utilization versus degree of multiprogramming during thrashing.",
      "CPU utilization\n high |      /\\\n      |     /  \\\n low  |____/    \\____\n      +--------------→ degree of multiprogramming\nInitially adding jobs increases usable CPU work. Beyond the point where total active working sets exceed available frames, frequent faults and I/O waits reduce useful CPU utilization. Curve is qualitative, not universal."
    ],
    [
      "Numerical",
      5,
      "Find maximum page-fault probability if normal access=100 ns, full fault cost=8 ms, and EAT must not exceed 200 ns.",
      "Convert 8 ms=8,000,000 ns. EAT=100+p(8,000,000−100)≤200. Thus p≤100/7,999,900≈0.0000125002 (about 0.00125%, or one fault per 80,000 references)."
    ]
  ],
  "8-0": [
    [
      "Explanation",
      5,
      "Explain low-level disk formatting and error-control information.",
      "A physical sector format includes identification/synchronization or control fields, a data area and error-control information such as ECC. Low-level formatting establishes these recording structures; modern HDDs generally receive factory-level formatting. Partitioning sets logical ranges, and high-level formatting creates file-system metadata. The OS normally uses logical block addresses rather than direct physical geometry."
    ]
  ],
  "8-1": [
    [
      "Numerical",
      8,
      "Head=50, requests 10,20,70,90, cylinders 0–99, direction downward. Calculate SCAN, LOOK and C-SCAN counting wrap.",
      "SCAN: 50→20→10→0→70→90 =50+90=140. LOOK: 50→20→10→70→90 =40+80=120. C-SCAN: 50→20→10→0→99→90→70 =50+99+29=178. Movement counts all traversals including wrap; stop at last request."
    ],
    [
      "Application",
      4,
      "Explain how disk scheduling differs for SSDs and HDDs.",
      "HDD arm policies reduce mechanical seek and rotation, using request locality and sweep order. SSD has no mechanical arm; scheduling emphasizes latency, queue depth, fairness, parallelism and write/erase behavior. The classical cylinder-distance problem is an HDD abstraction, not an SSD latency model."
    ]
  ],
  "8-2": [
    [
      "Application",
      6,
      "A stable-storage copy A is corrupted during write; B is valid old version. Later A is valid new version but B is old. Explain recovery.",
      "If A is torn and fails integrity checks, recover old valid B unless separate committed data exists. If A is valid new and B old, choose authoritative version by the commit protocol; valid newer data alone need not mean committed. Repair the other copy from authoritative valid data, verify and flush. Independent copies and correctly ordered durable writes are necessary assumptions."
    ],
    [
      "Comparison",
      4,
      "Differentiate transient and permanent disk errors and corresponding handling.",
      "Transient failures may disappear on retry; check controller status and bounded retries. Permanent defects persist; remap affected sectors to spare locations if data recoverable, otherwise report error and restore from redundancy or backup. ECC may correct some errors, while checksum verifies integrity."
    ]
  ]
};
