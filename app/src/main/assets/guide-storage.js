const guideStorage = {
  "5-0": [
    [
      "Definition",
      2,
      "Define a file and file attribute.",
      "A file is a named collection of persistent information. A file attribute is metadata describing the file, such as size, owner, permissions, type or timestamps."
    ],
    [
      "Classification",
      5,
      "Describe common file structures and access methods.",
      "Structures: byte streams, fixed/variable records, indexed records. Sequential access processes data in order; direct access seeks to a selected location; indexed access uses a lookup structure to locate records by key. A byte stream can support both sequential and random access."
    ],
    [
      "Comparison",
      4,
      "Differentiate sequential and direct access.",
      "Sequential access follows a logical sequence and suits logs or streams. Direct access selects a specified byte or record offset, suits databases and allows random retrieval. Direct access requires an appropriate seekable device/file representation."
    ],
    [
      "Description",
      4,
      "List six typical file attributes.",
      "File identifier, type, size, owner/group, protection permissions and timestamps. The OS maintains these to locate, control and account for files."
    ],
    [
      "Numerical",
      3,
      "A fixed-record file uses 160 bytes per record. Find the byte offset of record 12, numbered from zero.",
      "Offset=record index×record size=12×160=1920 bytes. The first byte of record 12 is at byte 1920."
    ]
  ],
  "5-1": [
    [
      "Description",
      6,
      "Explain six basic file operations.",
      "Create allocates metadata and a name. Open resolves name and establishes open-file state. Read transfers bytes to memory. Write stores bytes and may extend size. Seek changes current position. Close releases descriptor. Unlink removes a name; file data may remain until all links and open references disappear."
    ],
    [
      "Definition",
      2,
      "Define a memory-mapped file.",
      "A memory-mapped file has some or all of its contents mapped into a process's virtual address space so ordinary memory accesses can read or modify file-backed pages, subject to mapping permissions."
    ],
    [
      "Explanation",
      5,
      "Explain how an access to an absent memory-mapped page is serviced.",
      "MMU detects absent mapping and raises a page fault. Kernel validates range and protection, obtains a frame, loads file data or locates cached page, updates page table and resumes the instruction. Shared writes may become dirty and be written back later."
    ],
    [
      "Comparison",
      4,
      "Distinguish shared and private file mappings.",
      "Shared mappings may expose modifications to other shared mappings and update the backing file. Private mappings use copy-on-write for changes, which do not update the original file. Both may use the same physical pages initially; protection flags control permitted access."
    ],
    [
      "Reasoning",
      3,
      "Why does close not always delete an unlinked file immediately?",
      "An unlink removes a directory entry. If other hard links or open references remain, the inode/data are still reachable or needed. Reclamation occurs after the final link and reference are gone, according to file-system semantics."
    ]
  ],
  "5-2": [
    [
      "Definition",
      2,
      "Define a directory and a pathname.",
      "A directory maps component names to file identifiers or metadata references. A pathname is a sequence of components used to locate an object in the directory hierarchy."
    ],
    [
      "Diagram",
      6,
      "Draw and explain single-level, two-level and tree directories.",
      "Single-level: root→all files; naming conflicts common.\nTwo-level: root→user A→files; root→user B→files; separate user namespaces.\nTree: root→folders→subfolders→files; supports grouping and hierarchical names. Acyclic graphs additionally allow shared subtrees; general graphs require cycle handling."
    ],
    [
      "Comparison",
      4,
      "Compare OS and user views of a file.",
      "User sees meaningful names, folders, bytes/records and permissions. OS resolves directory entries to metadata identifiers, checks access, maintains open-file state and maps logical offsets to physical storage. Abstraction hides hardware layout."
    ],
    [
      "Comparison",
      4,
      "Distinguish hard links and symbolic links.",
      "A hard link is another directory name for the same inode; link count tracks names, and deleting one does not remove others. A symbolic link is a separate object storing a path; it can cross file-system boundaries and dangle when the target disappears. Hard links to directories are generally restricted."
    ],
    [
      "Application",
      3,
      "Current directory is /home/ali/course. Resolve ../notes/os.txt assuming no symlinks.",
      "The parent of /home/ali/course is /home/ali. Therefore the absolute path is /home/ali/notes/os.txt."
    ]
  ],
  "6-0": [
    [
      "Definition",
      2,
      "Define file allocation.",
      "File allocation is the method by which a file system assigns storage blocks to a file and records the mapping between logical file blocks and physical or logical device blocks."
    ],
    [
      "Comparison",
      6,
      "Compare contiguous, linked and indexed allocation.",
      "Criterion | Contiguous | Linked | Indexed\nMetadata | Start,length | First block/links | Index of pointers\nRandom access | Fast | Slow traversal | Fast lookup\nGrowth | Difficult if adjacent blocks busy | Easy | Index can expand\nSpace cost | External fragmentation | Link overhead | Index overhead\nReliability | Simple mapping | Broken link may lose chain | Index damage affects many blocks"
    ],
    [
      "Diagram",
      5,
      "Draw the three allocation methods.",
      "Contiguous: file→[20][21][22].\nLinked: file→[20]→[8]→[43]→END.\nIndexed: file→index block[20,8,43]→data blocks 20,8,43.\nThe arrows represent the block mapping, not physical adjacency except in contiguous allocation."
    ],
    [
      "Numerical",
      5,
      "A file contains 13,000 bytes; block size is 4096 bytes. Find blocks and internal waste.",
      "Blocks=ceil(13000/4096)=4. Allocated bytes=4×4096=16384. Internal waste=16384−13000=3384 bytes, ignoring metadata."
    ],
    [
      "Advantages",
      4,
      "Discuss advantages and limitations of extent allocation.",
      "An extent represents a consecutive run by start and length. Advantages: compact metadata and good sequential I/O; multiple extents allow growth. Limitations: fragmentation can create many extents, allocation search and extent-tree management may add complexity."
    ]
  ],
  "6-1": [
    [
      "Definition",
      2,
      "Define UNIX inode and file control block (FCB).",
      "An FCB is a file-system metadata record describing a file and its storage mapping. A UNIX inode is a particular metadata structure containing attributes and block references, ordinarily without the filename; directory entries map names to inode numbers."
    ],
    [
      "Diagram",
      6,
      "Illustrate direct, single-indirect and double-indirect inode pointers.",
      "Inode → direct pointer → data block\nInode → single-indirect → pointer block → data blocks\nInode → double-indirect → pointer block → second-level pointer blocks → data blocks\nAdditional indirection expands addressable data at the cost of metadata and lookup operations."
    ],
    [
      "Numerical",
      8,
      "An inode has 10 direct pointers, one single and one double indirect pointer. Block size 1024 bytes; pointers 4 bytes. Calculate maximum data size.",
      "Entries per pointer block n=1024/4=256. Data blocks=10+256+256²=65,802. Maximum data bytes=65,802×1024=67,381,248 bytes, ignoring other file-size limits and triple indirection."
    ],
    [
      "Comparison",
      4,
      "Compare linear-list and hash-table directory implementation.",
      "Linear entries are simple but may need O(n) search. Hash tables provide expected fast name lookup using hash values; collisions and resizing must be handled. Both store or reference file identifiers."
    ],
    [
      "Short note",
      4,
      "Write a short note on virtual file system (VFS).",
      "VFS provides a common interface for file operations across different file-system implementations. It resolves paths and dispatches operations to appropriate mounted file systems using common objects or interfaces, so applications need not know the underlying disk format."
    ]
  ],
  "6-2": [
    [
      "Classification",
      5,
      "Describe four free-space management techniques.",
      "Bitmap uses one bit per block. Free list links free blocks. Grouping stores many free block addresses together. Counting records start and length of consecutive free runs. Bitmap is efficient for finding runs; free lists are simple but may be inefficient for contiguous searches."
    ],
    [
      "Numerical",
      4,
      "A disk has 2,400,000 allocatable blocks. Find raw bitmap size in bytes.",
      "One bit per block: 2,400,000 bits. Divide by eight: 300,000 bytes (about 293 KiB), excluding metadata and padding."
    ],
    [
      "Definition",
      2,
      "Define disk quota.",
      "A disk quota is a file-system policy limiting the storage space or number of files/inodes that a user, group or project may consume."
    ],
    [
      "Comparison",
      3,
      "Compare soft and hard quotas.",
      "A soft limit may be exceeded temporarily during a grace period. A hard limit cannot be exceeded by additional allocation. Quotas may account for blocks or inode counts independently."
    ],
    [
      "Reasoning",
      4,
      "Why can large blocks both improve performance and waste capacity?",
      "Large blocks reduce pointer/index overhead and may improve sequential transfer efficiency. A small file or final partial block wastes more unused space within the allocated block. The best size balances workload, metadata and storage efficiency."
    ]
  ],
  "7-0": [
    [
      "Definition",
      2,
      "Define internal and external fragmentation.",
      "Internal fragmentation is unused space inside an allocated memory region. External fragmentation is free space divided into noncontiguous holes such that a sufficiently large contiguous allocation may fail despite enough total free space."
    ],
    [
      "Comparison",
      4,
      "Compare fixed and dynamic partition allocation.",
      "Fixed partitions have predetermined sizes, simple management and possible internal waste. Dynamic partitions allocate variable-size regions fitting requests, improving fit but producing external holes. Compaction can combine external holes when relocation is feasible."
    ],
    [
      "Numerical",
      8,
      "Holes in order: 100, 300, 200, 400 KB. Requests: 180, 280, 90 KB. Show first fit and best fit.",
      "First fit: 180→300 (120 left); 280→400 (120 left); 90→100 (10 left). Final holes 10,120,200,120.\nBest fit: 180→200 (20 left); 280→300 (20 left); 90→100 (10 left). Final holes 10,20,20,400.\nBoth succeed; choices differ."
    ],
    [
      "Application",
      4,
      "There are two free holes of 60 KB each. A 100 KB process cannot fit. Explain and remedy.",
      "Total free is 120 KB, but no contiguous hole reaches 100 KB: external fragmentation. Compaction can relocate allocated regions and merge holes if relocation is supported; paging can avoid requiring contiguous physical frames."
    ],
    [
      "Numerical",
      3,
      "Base=12000, limit=800. Translate offsets 650 and 800.",
      "650 is valid because 650<800; physical address=12650. Offset 800 is invalid because valid offsets are 0–799."
    ]
  ],
  "7-1": [
    [
      "Definition",
      3,
      "Define virtual address, physical address and MMU.",
      "A virtual address is an address issued within a process's logical address space; physical address identifies a location in RAM. MMU is hardware that translates addresses and enforces memory protection using mapping information."
    ],
    [
      "Comparison",
      6,
      "Differentiate paging and segmentation.",
      "Criterion | Paging | Segmentation\nUnit | Fixed-size pages/frames | Variable-size logical segments\nAddress | Page, offset | Segment, offset\nMapping | Page table gives frame | Segment table gives base,limit\nFragmentation | Internal tail waste | External holes\nProgram view | Usually transparent | Reflects logical code/data/stack regions"
    ],
    [
      "Numerical",
      5,
      "Page size=2048 bytes, virtual address=7310, page 3 maps to frame 9. Find physical address.",
      "Page=floor(7310/2048)=3; offset=7310−6144=1166. Physical=9×2048+1166=19598 bytes. Offset unchanged."
    ],
    [
      "Numerical",
      4,
      "Segment 1 has base 9000 and limit 700. Translate (1,650) and (1,720).",
      "650<700, so physical=9650. Offset 720 exceeds limit, so access is invalid and traps."
    ],
    [
      "Reasoning",
      4,
      "Why combine segmentation and paging?",
      "Segmentation preserves logical regions and independent protection/sharing. Paging divides segments into fixed-size units to avoid contiguous physical placement and reduce external fragmentation. The scheme adds translation-table complexity."
    ],
    [
      "Short note",
      3,
      "Write a short note on swapping.",
      "Swapping moves memory contents to backing storage to free RAM and later restores them. Traditional swapping may move a whole process; modern virtual-memory systems often evict individual pages. Storage I/O creates significant latency."
    ]
  ],
  "7-2": [
    [
      "Definition",
      2,
      "Define page table and TLB.",
      "A page table records virtual-page to physical-frame mappings and associated status/protection information. A TLB is a small associative cache of recently used address translations."
    ],
    [
      "Diagram",
      6,
      "Draw paging address translation with TLB and explain hit/miss.",
      "VA → [VPN, offset] → TLB lookup\nHit → frame number → combine frame+offset → RAM\nMiss → page-table walk → present? yes: refill TLB; no: fault handler if valid\nProtection checks apply in both paths. TLB miss is not necessarily a page fault."
    ],
    [
      "Classification",
      5,
      "Describe linear, hierarchical and inverted page tables.",
      "Linear: one indexed entry per virtual page; potentially large. Hierarchical: multi-level indexes allocate lower tables only for mapped regions; more walk steps. Inverted: approximately one entry per physical frame with address-space identity and virtual page; lookup requires suitable hashing/search."
    ],
    [
      "Numerical",
      5,
      "A 32-bit virtual address uses 8 KiB pages and 4-byte PTEs. Find page number bits and flat table size.",
      "8 KiB=2¹³ bytes, so offset=13 bits; VPN=32−13=19 bits. Entries=2¹⁹=524288. Table bytes=524288×4=2097152=2 MiB."
    ],
    [
      "Numerical",
      6,
      "TLB lookup=8 ns, RAM=80 ns, hit ratio=.90. Compute EAT for one-level serial lookup, ignoring page faults.",
      "Hit cost=8+80=88 ns. Miss cost=8+2×80=168 ns. EAT=.9×88+.1×168=79.2+16.8=96 ns. State the serial lookup assumption."
    ],
    [
      "Description",
      4,
      "List typical fields of a page-table entry.",
      "Physical frame number; present/valid indicator; permissions such as read/write/execute; referenced/accessed bit; dirty/modified bit. Actual layout depends on architecture."
    ]
  ],
  "7-3": [
    [
      "Classification",
      5,
      "Describe FIFO, LRU, Optimal and Clock replacement.",
      "FIFO removes oldest loaded page. LRU removes least recently referenced. Optimal removes page whose next reference is farthest away. Clock checks reference bits in circular order, clearing set bits and selecting an unreferenced page. Optimal is a theoretical benchmark because future references are unknown."
    ],
    [
      "Numerical",
      10,
      "For 1,2,3,1,4,2,5, use 3 empty frames and count FIFO, LRU and Optimal faults.",
      "Reference: 1 2 3 1 4 2 5\nFIFO: F F F H F H F = 5. After 4: [2,3,4]; after 5: [3,4,5].\nLRU: F F F H F F F = 6. On 4 evict 2; on 2 evict 3; on 5 evict 1.\nOPT: F F F H F H F = 5. On 4 evict 1 or 3, neither needed again; 2 remains. F=fault,H=hit."
    ],
    [
      "Reasoning",
      4,
      "Explain Belady's anomaly and state which standard algorithms avoid it.",
      "Belady's anomaly occurs when increasing frames increases faults for certain reference strings under FIFO. For example, 1,2,3,4,1,2,5,1,2,3,4,5 gives 9 faults with 3 frames and 10 with 4. LRU and Optimal are stack algorithms and do not exhibit the anomaly under their standard definitions."
    ],
    [
      "Application",
      4,
      "A victim page is dirty. Explain how it differs from evicting a clean page.",
      "Dirty means modified since its backing copy was valid. The OS generally must write it to appropriate backing storage before reusing the frame, unless the contents can be discarded by policy. A clean recoverable page can be dropped without writeback."
    ]
  ],
  "7-4": [
    [
      "Definition",
      2,
      "Define demand paging and page fault.",
      "Demand paging loads a page into memory when it is needed rather than preloading all pages. A page fault is a synchronous exception caused by an access requiring OS handling, often because a valid page is absent."
    ],
    [
      "Explanation",
      6,
      "Explain the OS actions after a valid nonresident-page fault.",
      "1. Trap to the page-fault handler using exception dispatch.\n2. Validate address and requested access.\n3. Obtain free frame or select victim; write dirty data if needed.\n4. Load required page or initialize zero page.\n5. Update page table and invalidate/refill stale TLB information.\n6. Resume or restart faulting instruction."
    ],
    [
      "Diagram",
      4,
      "Illustrate the role of an exception vector.",
      "Instruction → synchronous exception → exception number/cause\n→ vector table or architecture-specific dispatch → privileged handler\n→ repair or report failure → return if recoverable.\nThe vector identifies the appropriate handler, e.g. page fault or invalid instruction."
    ],
    [
      "Comparison",
      4,
      "Compare demand paging and demand segmentation.",
      "Demand paging loads fixed-size pages when referenced and uses frame allocation. Demand segmentation loads logical variable-size segments on demand; contiguous placement may cause external fragmentation. Both exploit locality and defer loading until needed."
    ],
    [
      "Application",
      4,
      "A process writes to a valid read-only page. Is loading the page necessarily the solution?",
      "No. This may be a protection fault, not an absent page. Kernel checks permissions. A valid copy-on-write mapping may create a writable private copy; otherwise unauthorized write is rejected. Loading an already present page does not fix lack of permission."
    ]
  ],
  "7-5": [
    [
      "Definition",
      2,
      "Define thrashing.",
      "Thrashing is a state in which excessive paging activity consumes much of system time because resident frames cannot hold the actively needed pages, severely reducing useful execution."
    ],
    [
      "Explanation",
      5,
      "Explain working-set and page-fault-frequency control.",
      "Working set is distinct pages referenced within a recent window. Estimate each process's frame need and reduce multiprogramming if combined demand exceeds RAM. Page-fault-frequency control gives more frames when faults are too frequent and reclaims excess frames when faults are low, subject to capacity."
    ],
    [
      "Numerical",
      6,
      "Normal access takes 100 ns; a fault costs 5 ms. Fault probability is 0.0002. Calculate EAT.",
      "5 ms=5,000,000 ns. EAT=(1−.0002)×100+.0002×5,000,000=99.98+1000=1099.98 ns, about 1.10 μs. Fault cost includes full service under this model."
    ],
    [
      "Reasoning",
      4,
      "Why can increasing multiprogramming reduce CPU utilization?",
      "Additional processes compete for limited frames. If resident working sets no longer fit, faults and storage waits rise. CPU spends less time on useful execution despite more admitted tasks. Reduce load or allocate sufficient frames."
    ],
    [
      "Application",
      3,
      "The last seven page references are 4,2,4,1,2,3,1. Find the working set for that window.",
      "Distinct pages are {1,2,3,4}, so working-set size=4 frames if one page per frame."
    ]
  ],
  "8-0": [
    [
      "Definition",
      3,
      "Define track, sector and cylinder.",
      "Track is a circular data path on a magnetic platter surface. Sector is a subdivided region used for block storage. Cylinder is the set of tracks at a common radial position across platter surfaces in conventional geometry."
    ],
    [
      "Description",
      5,
      "Explain the components of HDD access time.",
      "Seek moves head to target track. Rotational latency waits for target sector to pass under head. Transfer time moves bytes. Controller and queue delays may add overhead. Sequential transfers can amortize mechanical delays."
    ],
    [
      "Numerical",
      5,
      "A 7200 RPM disk has 6 ms seek and transfers 128 KiB at 64 MiB/s. Estimate average access time ignoring queue/controller delay.",
      "Average rotation=30/7200 seconds=4.167 ms. Transfer=(128/65536) s=1.953 ms. Total=6+4.167+1.953≈12.12 ms."
    ],
    [
      "Comparison",
      4,
      "Differentiate low-level formatting, partitioning and high-level formatting.",
      "Low-level formatting establishes physical sector structures and integrity fields, usually at manufacture in modern HDDs. Partitioning divides address space into regions. High-level formatting builds a file system's metadata and data layout."
    ],
    [
      "Comparison",
      4,
      "Compare HDD and SSD from an OS perspective.",
      "HDD has mechanical seek/rotation; request order strongly affects latency. SSD has no moving arm, uses flash translation, erase-block management and limited write endurance; access latency and scheduling priorities differ. Both expose logical storage blocks."
    ]
  ],
  "8-1": [
    [
      "Classification",
      5,
      "Describe FCFS, SSTF, SCAN, C-SCAN, LOOK and C-LOOK.",
      "FCFS serves arrival order. SSTF picks nearest cylinder. SCAN sweeps to physical end and reverses; C-SCAN services one direction and wraps. LOOK reverses at final request rather than end; C-LOOK jumps between extreme pending requests. State direction and wrap accounting."
    ],
    [
      "Numerical",
      10,
      "Head=50, requests in arrival order 90,10,70,20, cylinders 0–99. Initial direction upward. Find all six head movements, counting wraps.",
      "FCFS: 50→90→10→70→20 =40+80+60+50=230.\nSSTF: 50→70→90→20→10 =20+20+70+10=120.\nSCAN: 50→70→90→99→20→10 =49+89=138.\nLOOK: 50→70→90→20→10=40+80=120.\nC-SCAN: 50→70→90→99→0→10→20=49+99+20=168.\nC-LOOK: 50→70→90→10→20=40+80+10=130."
    ],
    [
      "Reasoning",
      4,
      "Why can SSTF cause starvation?",
      "A continuous stream of nearby requests can repeatedly be selected before a distant pending request. The latter may wait indefinitely. Aging, bounded service guarantees or sweep-based policies can improve fairness."
    ],
    [
      "Comparison",
      4,
      "Differentiate SCAN and LOOK.",
      "Both service requests in one direction then reverse. SCAN proceeds to the physical boundary before reversing; LOOK reverses at the last request in the current direction, avoiding unnecessary travel. Under fixed queues, specify direction and whether final boundary travel is required."
    ]
  ],
  "8-2": [
    [
      "Definition",
      2,
      "Define stable storage.",
      "Stable storage is an idealized storage abstraction designed to preserve committed data despite specified failures, approximated using redundancy, integrity checks, ordered writes and recovery procedures."
    ],
    [
      "Description",
      5,
      "Describe disk error handling mechanisms.",
      "ECC corrects certain errors; checksums detect corruption; retries can recover transient failures; spare-sector remapping replaces bad sectors; unrecoverable failures are reported. Backups protect against loss beyond local fault tolerance. Monitoring may detect degradation but does not guarantee prediction."
    ],
    [
      "Diagram",
      6,
      "Explain a dual-copy stable-storage write and recovery scheme.",
      "Initially A(v1), B(v1).\nWrite new A(v2) → verify/flush → write B(v2) → verify/flush.\nAfter interruption, inspect integrity and version/commit metadata; repair from authoritative valid copy according to protocol. If writing A is torn, B may still hold v1. Independent failure domains and commit ordering are needed."
    ],
    [
      "Comparison",
      4,
      "Distinguish redundancy, journaling and backup.",
      "Redundancy keeps extra copies/parity to tolerate specified component failures. Journaling records updates/transactions to support consistent crash recovery. Backup stores recoverable historical copies, preferably independent of original failure domain. None alone solves every failure type."
    ],
    [
      "Reasoning",
      3,
      "Why is RAID not a substitute for backup?",
      "RAID may tolerate some disk failures but does not necessarily protect against accidental deletion, malware, logical corruption, simultaneous failures or site damage. Independent backups preserve recoverable versions under broader failure scenarios."
    ]
  ]
};
