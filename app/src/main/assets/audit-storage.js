const auditStorage={
  "5-0": [
    [
      "File",
      "Named collection of persistent information."
    ],
    [
      "File name",
      "Human-usable name for a file in a directory."
    ],
    [
      "Extension",
      "Conventional suffix of a filename; not necessarily authoritative for file type."
    ],
    [
      "Regular file",
      "File representing user or program data, commonly as a byte stream."
    ],
    [
      "Special file",
      "File-system object representing a device or other special interface."
    ],
    [
      "Record",
      "Logical unit of structured data within a file."
    ],
    [
      "Sequential access",
      "Process data in logical order."
    ],
    [
      "Direct access",
      "Read or write at a selected offset without processing all preceding data."
    ],
    [
      "Indexed access",
      "Use a lookup index to locate records or offsets."
    ],
    [
      "File attributes",
      "Metadata such as size, type, ownership, permissions and timestamps."
    ],
    [
      "File protection",
      "Rules and enforcement governing permitted file operations."
    ],
    [
      "Access control list",
      "List of subjects or groups and their permitted operations on an object."
    ],
    [
      "Permission bits",
      "Compact representation of allowed operations, such as UNIX owner/group/other r,w,x."
    ]
  ],
  "5-1": [
    [
      "File descriptor",
      "Process-local handle referring to open-file state."
    ],
    [
      "Open file description",
      "Kernel object holding status flags and current offset, potentially shared by descriptors."
    ],
    [
      "File offset",
      "Position of next sequential read or write in a seekable open file."
    ],
    [
      "EOF",
      "End of file; reading a regular file at or beyond its end typically returns zero bytes."
    ],
    [
      "unlink",
      "Remove a directory entry for a file, with data reclamation when references are exhausted."
    ],
    [
      "truncate",
      "Change file length, discarding or extending contents as appropriate."
    ],
    [
      "Memory-mapped file",
      "File whose contents are mapped into virtual memory for ordinary memory accesses."
    ],
    [
      "mmap",
      "Operation establishing a memory mapping."
    ],
    [
      "MAP_SHARED",
      "Mapping in which modifications can be shared and may update backing file."
    ],
    [
      "MAP_PRIVATE",
      "Mapping whose modifications are private through copy-on-write."
    ],
    [
      "msync",
      "Operation requesting synchronization of memory-mapped file data under specified semantics."
    ],
    [
      "Page cache",
      "RAM cache of file-backed pages used to reduce storage I/O."
    ],
    [
      "Durability",
      "Property that committed changes survive specified failures."
    ]
  ],
  "5-2": [
    [
      "Directory",
      "Mapping from names to file identifiers or metadata references."
    ],
    [
      "Root directory",
      "Top-level directory of a hierarchy."
    ],
    [
      "Absolute pathname",
      "Path interpreted starting at the root."
    ],
    [
      "Relative pathname",
      "Path interpreted relative to current or specified directory."
    ],
    [
      "Current working directory",
      "Directory used as the default base for relative paths."
    ],
    [
      "Single-level directory",
      "One namespace containing all files."
    ],
    [
      "Two-level directory",
      "Separate per-user or per-group namespaces below a common root."
    ],
    [
      "Tree directory",
      "Hierarchical structure with files and subdirectories."
    ],
    [
      "Acyclic graph directory",
      "Structure allowing shared objects but forbidding cycles."
    ],
    [
      "General graph directory",
      "Structure potentially allowing cycles, requiring traversal safeguards."
    ],
    [
      "Hard link",
      "Directory entry naming an existing file identifier/inode."
    ],
    [
      "Symbolic link",
      "Separate file-like object containing a target pathname."
    ],
    [
      "Mount point",
      "Directory or namespace location where another file system is attached."
    ],
    [
      "Directory entry",
      "Association of a name with a file identifier and possibly other metadata."
    ]
  ],
  "6-0": [
    [
      "File system",
      "On-storage and in-memory structures and rules organizing persistent files."
    ],
    [
      "Volume",
      "Logical storage region managed as a unit by a file system or related layer."
    ],
    [
      "Superblock",
      "Metadata describing file-system layout, configuration and state."
    ],
    [
      "FCB",
      "File control block holding file metadata and storage mapping."
    ],
    [
      "Data block",
      "Fixed-size storage allocation unit holding file contents in the given model."
    ],
    [
      "Logical block",
      "Block number relative to a file or logical address space."
    ],
    [
      "Physical block",
      "Block position in a device or physical storage model."
    ],
    [
      "Contiguous allocation",
      "Assign file data blocks as a consecutive run."
    ],
    [
      "Linked allocation",
      "Record each data block's successor to form a file chain."
    ],
    [
      "FAT",
      "File allocation table recording block/cluster chain links centrally."
    ],
    [
      "Indexed allocation",
      "Store block addresses in an index structure for each file."
    ],
    [
      "Extent",
      "Consecutive run of blocks described by start and length."
    ],
    [
      "Allocation strategy",
      "Policy for choosing available blocks or extents for files."
    ],
    [
      "Internal waste",
      "Unused bytes in already allocated storage units."
    ],
    [
      "External fragmentation",
      "Free storage split into runs that may not satisfy a large contiguous request."
    ]
  ],
  "6-1": [
    [
      "Inode",
      "UNIX metadata object recording file attributes and storage references, normally excluding filename."
    ],
    [
      "Inode number",
      "Identifier of an inode within a file system."
    ],
    [
      "Link count",
      "Number of hard directory references to a file under the file system's semantics."
    ],
    [
      "Direct pointer",
      "Reference directly to a data block."
    ],
    [
      "Single-indirect pointer",
      "Reference to a block containing data-block addresses."
    ],
    [
      "Double-indirect pointer",
      "Reference to a block of references to single-indirect blocks."
    ],
    [
      "Triple-indirect pointer",
      "Reference adding a third level of pointer-block traversal."
    ],
    [
      "Linear directory",
      "Directory searched by sequentially scanning entries."
    ],
    [
      "Hash directory",
      "Directory lookup structure using hash of a name."
    ],
    [
      "Tree-indexed directory",
      "Directory using an ordered tree-like index for name lookup."
    ],
    [
      "VFS",
      "Virtual file system: common abstraction dispatching operations to underlying file systems."
    ],
    [
      "Mount table",
      "In-memory record of attached file systems and their namespace locations."
    ]
  ],
  "6-2": [
    [
      "Free-space management",
      "Track and allocate unallocated blocks."
    ],
    [
      "Bitmap",
      "Bit array marking block allocation status."
    ],
    [
      "Free list",
      "Linked list or other chain of unallocated block references."
    ],
    [
      "Grouping",
      "Store multiple free-block addresses in a block, with continuation to further groups."
    ],
    [
      "Counting",
      "Record start and length of consecutive free runs."
    ],
    [
      "Block size",
      "Size of allocation or transfer unit under the stated storage model."
    ],
    [
      "Disk quota",
      "Limit on allocated storage or file/inode usage by a user, group or project."
    ],
    [
      "Soft quota",
      "Threshold temporarily exceedable during an allowed grace period."
    ],
    [
      "Hard quota",
      "Maximum enforced allocation threshold."
    ],
    [
      "Grace period",
      "Time during which temporary usage above a soft quota may be tolerated."
    ],
    [
      "Locality of allocation",
      "Place related data near one another where useful to reduce access costs."
    ]
  ],
  "7-0": [
    [
      "Memory allocation",
      "Assignment of memory regions to requests."
    ],
    [
      "Address binding",
      "Association of program addresses with memory locations at compile, load or execution time."
    ],
    [
      "Relocation",
      "Adjustment or translation of addresses so code/data can reside at different locations."
    ],
    [
      "Base register",
      "Holds starting physical address in a simple relocation scheme."
    ],
    [
      "Limit register",
      "Defines allowed offset range for a region in a simple protection scheme."
    ],
    [
      "Fixed partition",
      "Predetermined memory region used for process allocation."
    ],
    [
      "Dynamic partition",
      "Variable-sized memory region allocated according to a request."
    ],
    [
      "Hole",
      "Contiguous free region of memory."
    ],
    [
      "Internal fragmentation",
      "Unused space within an allocated region."
    ],
    [
      "External fragmentation",
      "Free space divided into noncontiguous holes."
    ],
    [
      "First fit",
      "Choose first sufficient free hole in search order."
    ],
    [
      "Best fit",
      "Choose smallest sufficient hole."
    ],
    [
      "Worst fit",
      "Choose largest available hole."
    ],
    [
      "Next fit",
      "Resume search from previous allocation/search position."
    ],
    [
      "Compaction",
      "Relocate allocated regions to combine separated free space."
    ],
    [
      "Coalescing",
      "Merge adjacent free holes without moving allocated regions."
    ]
  ],
  "7-1": [
    [
      "Logical address",
      "Address generated by a program or CPU in its logical address space."
    ],
    [
      "Physical address",
      "Address identifying actual physical memory location."
    ],
    [
      "Virtual address space",
      "Set of virtual addresses available to a process or execution context."
    ],
    [
      "Virtual memory",
      "Abstraction separating virtual address spaces from resident physical memory."
    ],
    [
      "MMU",
      "Memory management unit translating addresses and enforcing access permissions."
    ],
    [
      "Segmentation",
      "Divide address space into logical variable-size regions."
    ],
    [
      "Segment table",
      "Mapping from segment number to base, limit and associated flags."
    ],
    [
      "Segment offset",
      "Displacement within a segment."
    ],
    [
      "Paging",
      "Divide virtual address space into fixed-size pages and physical memory into equal-size frames."
    ],
    [
      "Page",
      "Fixed-size virtual memory unit."
    ],
    [
      "Frame",
      "Fixed-size physical memory unit capable of holding one page."
    ],
    [
      "Page number",
      "Index of a virtual page within an address space."
    ],
    [
      "Page offset",
      "Byte displacement within a page, unchanged by page translation."
    ],
    [
      "Swapping",
      "Move process memory or pages to backing storage and restore them when needed."
    ],
    [
      "Backing store",
      "Storage holding memory contents not currently resident in RAM."
    ],
    [
      "Paged segmentation",
      "Use paging for physical placement of logical segments."
    ]
  ],
  "7-2": [
    [
      "Page table",
      "Mapping between virtual pages and physical frames with status and protection flags."
    ],
    [
      "PTE",
      "Page-table entry storing translation and related metadata for a page."
    ],
    [
      "Present bit",
      "Indicates that a translation/page is resident under the architecture's semantics."
    ],
    [
      "Valid bit",
      "Indicates a usable mapping or valid entry; meaning depends on architecture."
    ],
    [
      "Reference bit",
      "Indicates recent access, useful for replacement decisions."
    ],
    [
      "Dirty bit",
      "Indicates modifications since a recoverable backing copy was established."
    ],
    [
      "Protection bits",
      "Specify permitted operations such as read, write and execute."
    ],
    [
      "Hierarchical page table",
      "Multi-level index structure that can avoid allocating tables for unused regions."
    ],
    [
      "Hashed page table",
      "Translation structure using a hash of virtual address information."
    ],
    [
      "Inverted page table",
      "Structure with roughly one entry per physical frame rather than each virtual page."
    ],
    [
      "TLB",
      "Translation lookaside buffer caching recent address translations."
    ],
    [
      "TLB hit",
      "Required translation found in the TLB."
    ],
    [
      "TLB miss",
      "Translation absent from TLB, requiring a walk or software refill."
    ],
    [
      "Page-table walk",
      "Traverse translation structures to resolve a mapping."
    ],
    [
      "ASID",
      "Address-space identifier tagging translations to distinguish different address spaces."
    ],
    [
      "Effective access time",
      "Expected access duration weighted by probabilities of relevant paths."
    ]
  ],
  "7-3": [
    [
      "Page replacement",
      "Select a resident page to evict when a frame is needed."
    ],
    [
      "Victim page",
      "Resident page chosen for eviction."
    ],
    [
      "Page hit",
      "Referenced page already resident in memory."
    ],
    [
      "Page fault",
      "Exception requiring OS handling of a memory access, often an absent page."
    ],
    [
      "FIFO replacement",
      "Evict the page loaded earliest among current resident pages."
    ],
    [
      "LRU",
      "Least recently used: evict page whose latest reference is oldest."
    ],
    [
      "Optimal replacement",
      "Evict page whose next reference is farthest in the future."
    ],
    [
      "Second chance",
      "FIFO-like method using a reference bit to give recently used pages another opportunity."
    ],
    [
      "Clock algorithm",
      "Circular scanning implementation of second-chance replacement."
    ],
    [
      "NRU",
      "Not recently used: select victim from classes based on reference and modified bits."
    ],
    [
      "LFU",
      "Least frequently used: prefer evicting page with low reference count."
    ],
    [
      "Aging replacement",
      "Approximate recency using periodically shifted reference-bit histories."
    ],
    [
      "Belady's anomaly",
      "For some policies such as FIFO, increasing frames can increase page faults."
    ],
    [
      "Stack algorithm",
      "Algorithm whose resident sets for smaller frame counts are subsets of larger ones under consistent tie rules."
    ],
    [
      "Local replacement",
      "Select victim from frames assigned to requesting process."
    ],
    [
      "Global replacement",
      "Allow victims from a wider pool of frames, potentially belonging to other processes."
    ]
  ],
  "7-4": [
    [
      "Exception vector",
      "Mapping from event number or cause to a handler address or dispatch mechanism."
    ],
    [
      "Demand paging",
      "Load a page into memory when it is referenced and found absent."
    ],
    [
      "Demand segmentation",
      "Load a logical segment on demand rather than requiring all segments resident."
    ],
    [
      "Page-fault handler",
      "Kernel routine servicing a fault or rejecting invalid access."
    ],
    [
      "Pure demand paging",
      "Conceptual policy in which pages are loaded only when first needed."
    ],
    [
      "Protection fault",
      "Exception caused by access not permitted by mapping permissions."
    ],
    [
      "Zero-fill-on-demand",
      "Initialize newly needed anonymous memory with zeros instead of reading a prior disk copy."
    ],
    [
      "Copy-on-write fault",
      "Write fault handled by making a private writable copy when mapping policy permits."
    ],
    [
      "Prepaging",
      "Load predicted future pages in advance, trading fewer possible faults for potential wasted I/O."
    ],
    [
      "Restartable instruction",
      "Instruction that can resume or retry after a recoverable fault."
    ]
  ],
  "7-5": [
    [
      "Locality of reference",
      "Tendency for accesses to cluster in time or address space."
    ],
    [
      "Temporal locality",
      "Recently accessed item likely to be accessed again soon."
    ],
    [
      "Spatial locality",
      "Items near a recently accessed address likely to be accessed soon."
    ],
    [
      "Working set",
      "Distinct pages referenced in a specified recent window."
    ],
    [
      "Working-set window",
      "Time or reference interval over which recent distinct pages are counted."
    ],
    [
      "Thrashing",
      "Excessive paging causing little useful execution because needed pages do not fit in available frames."
    ],
    [
      "Page-fault frequency",
      "Rate of page faults measured over a defined interval."
    ],
    [
      "Frame allocation",
      "Policy deciding how many or which frames each process receives."
    ],
    [
      "Degree of multiprogramming",
      "Number of processes admitted to active execution/memory under the model."
    ],
    [
      "Resident set",
      "Set of pages of a process currently in physical memory."
    ]
  ],
  "8-0": [
    [
      "Disk platter",
      "Rotating magnetic surface-bearing disk component."
    ],
    [
      "Track",
      "Circular recording path on a magnetic surface."
    ],
    [
      "Sector",
      "Subdivision of a track used to store a block of data plus associated format information."
    ],
    [
      "Cylinder",
      "Tracks at a common radial position across conventional disk surfaces."
    ],
    [
      "Read/write head",
      "Component reading or writing the recording surface."
    ],
    [
      "Disk arm",
      "Mechanism moving heads radially to requested tracks."
    ],
    [
      "LBA",
      "Logical block addressing using a linear sequence of device block numbers."
    ],
    [
      "Seek time",
      "Time to position head at target track."
    ],
    [
      "Rotational latency",
      "Time waiting for target sector to rotate under the head."
    ],
    [
      "Transfer time",
      "Time spent moving requested bytes at effective transfer rate."
    ],
    [
      "Disk access time",
      "Seek, rotation, transfer and relevant controller/queue overhead."
    ],
    [
      "RPM",
      "Revolutions per minute, measuring platter speed."
    ],
    [
      "Low-level formatting",
      "Create sector recording structures including data and error-control fields."
    ],
    [
      "Partitioning",
      "Divide a device address space into logical regions."
    ],
    [
      "High-level formatting",
      "Initialize file-system structures in a storage region."
    ],
    [
      "Buffering",
      "Temporarily hold data to handle differing producer/consumer speeds or sizes."
    ],
    [
      "Caching",
      "Retain data copies for faster repeated access."
    ],
    [
      "Spooling",
      "Queue work for a device or service that processes requests serially."
    ],
    [
      "SSD",
      "Solid-state drive storing data without a mechanical disk arm."
    ],
    [
      "Flash translation layer",
      "Controller mapping logical storage blocks to flash locations."
    ]
  ],
  "8-1": [
    [
      "Disk scheduling",
      "Choose service order of queued storage requests."
    ],
    [
      "Head movement",
      "Absolute distance between consecutive cylinder positions in arm-scheduling problems."
    ],
    [
      "FCFS disk scheduling",
      "Serve disk requests in arrival order."
    ],
    [
      "SSTF",
      "Shortest seek time first: choose request nearest current head position under the cylinder-distance approximation."
    ],
    [
      "SCAN",
      "Sweep toward a physical end, service requests on the way and reverse."
    ],
    [
      "C-SCAN",
      "Serve in one direction, wrap to opposite end and continue in same direction."
    ],
    [
      "LOOK",
      "Sweep only as far as the last pending request in a direction, then reverse."
    ],
    [
      "C-LOOK",
      "Serve in one direction and jump between extreme outstanding requests rather than physical ends."
    ],
    [
      "Service direction",
      "Initial increasing or decreasing cylinder direction used by sweep algorithms."
    ],
    [
      "Seek starvation",
      "Repeated selection of nearby requests indefinitely delays a distant request."
    ]
  ],
  "8-2": [
    [
      "Transient error",
      "Temporary failure potentially resolved by retry."
    ],
    [
      "Permanent error",
      "Persistent defect not corrected by ordinary retry."
    ],
    [
      "Bad sector",
      "Storage sector that cannot reliably store or return data."
    ],
    [
      "ECC",
      "Error-correcting code detecting and correcting certain classes of bit errors."
    ],
    [
      "Checksum",
      "Computed integrity value used to detect changes or corruption."
    ],
    [
      "Bad-block remapping",
      "Replace a defective physical block with a spare while maintaining logical addressing."
    ],
    [
      "Torn write",
      "Interrupted or partial write that leaves only part of intended update persistent."
    ],
    [
      "Silent corruption",
      "Incorrect stored or returned data not reported as an error by a lower layer."
    ],
    [
      "Stable storage",
      "Idealized abstraction preserving committed data despite specified failures."
    ],
    [
      "Redundancy",
      "Extra copies or parity allowing recovery from certain faults."
    ],
    [
      "RAID",
      "Redundant array of independent disks, combining devices for performance and/or fault tolerance depending on level."
    ],
    [
      "Journaling",
      "Record transactions or intended updates to enable consistent recovery after interruption."
    ],
    [
      "Write ordering",
      "Control persistence order of related writes to maintain recovery invariants."
    ],
    [
      "Flush",
      "Request that buffered writes reach the required persistence boundary under device semantics."
    ],
    [
      "Backup",
      "Independent recoverable copy of data, often retaining previous versions."
    ]
  ]
};
