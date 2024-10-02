- Linux is multi-tasking OS
- Every a single application, may have multiple threads for doing multiple actions in parallel
### Process 
#### Notes 
* Organized on parent-child relationships 
* Each processes start another it becomes there parent and new process becomes child 
* First Process run is **init** process so it is a grand parent of all processes 
#### Process Owner 
- Each User starting a process **becomes its owner**
- The process owner doesn't have to be same owner of the binary file 
- Each Process have a owner, processes started by the system it is owned by `root`
- Process owner can 
	- Kill
	- Pause 
	- resume 
- the `root` have a super power on all process
- The process inherit its privilege from file owner not process owner 
#### Process ID
- Each Process has a unique ID it called ==PID==
- Each Process has a parent id it called =="PPID"==
- PID and PPID help to build process tree hierarchy 
```bash
pstree          # show tree starting from init process 
pstree -p       # show PIDs of all process
pstree 1000     # show tree starting from PID = 1000
```
#### Process Group 
- When process is created it becomes a member of process group 
- Some processes started in a **new group** and will detach from its parent group, and become a **group leader**
- All descendants will follow the new group 
- Each process maintain the ID of its process group ==PGID==
	- For normal process, **PGID** of the parent is same ad **PGID** of process 
	- For Process group leader, its **PGID** is same as **PID**
	- Example Breakdown
		- Process A (PID 100) is the parent.
			- PGID of Process A: 100 (since it is the leader).
		- Process B (PID 101) is created by Process A.
			- PGID of Process B: 100 (inherits PGID from Parent, Process A).
		- Process C (PID 102) is also created by Process A.
			- PGID of Process C: 100 (inherits PGID from Parent, Process A).
	- Visualization
		- ![[Pasted image 20240926171432.png]]
#### Process Types 
* Interactive Process 
* Automatic Process (Batch Process)
* Daemon Processes 
### Interactive Processes 
- Process started by *user* within *terminal*
- It is controlled via **terminal**
- This process will be **killed** if the attached terminal is closed 
- Called interactive: cause it communicates with the user through terminal.
- Example 
```bash
# in virtual terminal 
ls            # One process 
cat *log | grep "error"   # Two Processes 
```
### Job Concept
- When a command is issued. the execution of this command called **Job**
#### Job Could be a 
- Single process 
	- gedit
- Multiple connect processes 
	- ls | sort 
- a script that runs multiple processes (any script runs within sub-shell)
	- ./my-script 
#### Jobs can run at 
- Foreground (fg)
	- All IP/OP of terminal is exclusively for this job
	- User can't user terminal during this job 
	- Only on job in foreground 
	- Start Job in foreground 
```bash 
	gedit  # Start Job 
	ctrl+z # Stop the Job (Not kill)
	fg     # resume it in foreground 
	ctrl+c # Interrupt (Kill) foreground job
```
- Background (bg)
	- Job IP/OP doesn't utilize to the terminal 
	- However, it is still attached to the terminal 
	- It useful when, 
		- Graphic User interface 
		- Process take a long time 
		- User need to lunch another job in same terminal 
	- Start Job in background 
```bash 
	gedit & 
```
- Switch Between foreground and background
```bash 
gedit 
ctrl+z
bg # Continue in background 
```
- #### Commands 
```bash 
jobs    # List all jobs In Bg and which one in fg 
fg %n   # send job n to fg 
kill %n # terminate the process n 
```
### Shell Session 
- Each shell has its own session 
- All processes/Jobs running inside this session, will share same SID (Session ID) 
- PID == SID when the the owner of the session is running process 
- Shell may be the session leader 
### Jobs and Process groups 
- For each new Job, a new process Group is created for process inside this job 
```bash 
ls | sort # 2 processs in same group 
```
- each job has its own process group 
- For scripts process group leader is the sub-shell 
### Example 
![[Pasted image 20240926181017.png]]
- We have 2 session 
- Session 100 Leader is XTerm (SID = PID)
- For Session 101 
	- Session Leader is Bash (SID == PID)
	- For Job 103
		- Group Leader is ls (PID = JOB ID)
	- All Processes share same Session ID (SID)
	- Process 103 and 104 share same PGID