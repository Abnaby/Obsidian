## Automatic (Batch) Processes 
### Notes 
- Not Started by the user, but scheduled by the user for later start 
- It isn't start inside terminal (No controlling terminal)
	- لو قفلت كل الترمينال عادي هتشتغل او لو عملت لوج اوت 
- It is queued in **spooler** area, to executed in **FIFO** MANNER 
### Scheduled in one of the following 
- run at certain date and time (using ==at== command)
	```bash
	$ at [Options] <time> < <ScriptFile> # redirect the ScriptFile to at process
	$ at -f<ScriptFile> <time>           # pass ScriptFile as param
	$ at -l (or atq)                     # list all scheduled process
	$ at -r3 (or atrm 3)                 # remove scheduled process num 3 
	############# EXAMPLE ###################
	$ at 01:53 < job-to-run               # 1:35 A.M
	$ at 9am February 2 < job-to-run      # Next 02/02 @ 9 a.m
	$ at tuesday +2 hours < job-to-run    # +2 بعد ساعتين من دلوقتي
	$ at -f job-to-run noon 
	
	```
- run when the system load is low (using ==batch== command)
	- Suitable for administrative tasks (no need to show the output)
	```bash
	$ batch < <file containing Jobs> 
	############# EXAMPLE ###################
	$ batch < jobRun
	```
- run periodically with certain periodicity/Interval 

#### Periodically Schedule "Crontab"
- Suitable for refreshing something 
- Each day remove old log files and so on. 
- Notes 
	- It called ==**Cron**== Jobs (Greek word)
	- They are scheduled by the user at 
		- Fixed time
		- Fixed Intervals 
		- Intervals 
	- Used Often to automate repeated tasks (Manitance/Admenstation tasks)
	- Cron are organized in set of configuration files and these files called ==**crontab**== files
	- Types of cron tabs 
		- User **crontab** files (per user)
		- System **crontab** files (per root user)
		- Other special files 
* crontab file format 
	* Line per scheduled job 
	* Each Line has 3 Sections
		* Time Schedule section (When job be executed)
		* User Section (Optional)
			* Only applicable for some **crontab** files
		* Job Description Section
	* Format

		![[Pasted image 20240929132509.png]]
	* Examples 
	* ![[Pasted image 20240929135725.png]]![[Pasted image 20240929135754.png]]
* File Path 
```bash 
/var/spool/cron/crontabs
```
* crontab command 
```bash
$ crontab -e # to edit user specification crontab 
$ crontab -l # display crontab content 
$ crontab -r # romve your crontab file 
# note : for sudo it will change cronetab sys wide 
```
#### special files of "Crontab"
==**etc\/crontab\/**==
- This is used by the system 
- Not Recommended to edi, since sysstem update will overwrite it 
- it calls scripts inside the directories 
	- /etc/cron.monthly
	- /etc/cron.weekly
	- /etc/cron.daily
==**etc\/cron.d\/**==
- contain crontab files installed by different pkgs 
- Each pkg have its own crontab file for periodic tasks required for the application 
#### Crontab Jobs Output
- Progress and Error msgs for execution of cron jobs are sent to ==/var/log/syslog==
- By default, the output of the command go to user email using command ==email== (assume user email has been setup in the system)
- U can redirect output to specific file sing ">"
- If u want to mute redirect it to /dev/null 
## Daemon Processes 
- Daemon may called service 
- Process run ==continuously== in the background to perform a task, or waiting a services to be requested 
- It doesn't attached to any terminal (Keep running in background)
- Most of service of Linux are daemon processes like (ssh ,ftp, ..)
- Respond to hardware activity 
- Traditionally, daemon services named ends with ==*d*== like (syslogd, ftpd, xintetd)
- ==**atd**== itself is a daemon process run job in specific time or date 
- ==**crond**== handle cron jobs 
- A daemon process *often* needs to have it's parent as the init process ==**PPID = 1**==
	- Daemon started by the system startup scripts launched by (init)
	- Create daemon process then kill its parent (it will be reparented to init process)
- Creation of Daemon (Demonize a process)
	- Kill parent of daemon (to make sure its parent is init)
	- Daemon is detached from his controlling terminal 
	- Daemon becomes a session leader (SID = PID)
	- Daemon becomes a process group leader (PGID = PID)
	- Sets its current directory to be a root dir (/) to allow other any file to unmount
	- Close any relationship that inherited from its parent 
	- Set **stdin, stdout, stderr** either to log file or mute it be redirected it to "/dev/null"
- Managing Daemon 
	- Since Daemons detached to their controlling terminal we can't mange it from there 
	- Instead, there are scripts called **init scripts** to 
		- Check Daemon status 
		- Start/Stop Daemon 
		- Restart Daemon 
	- Scripts are located @ ==**/etc/init.d**== 
	- For Example  "Bluetooth"
	```bash
	sudo /etc/init.d/bluetooth stop # must be root user (Daemon owned by the root)
	sudo /etc/init.d/bluetooth start
	sudo /etc/init.d/bluetooth restart
	sudo /etc/init.d/bluetooth status
	############ in other systems #############
	sudo restart bluetooth 
	```
	- Example of different logs 
		![[Pasted image 20240929144103.png]]
	