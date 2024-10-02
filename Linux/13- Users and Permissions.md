### Type of access system 
- Simultaneously
	- Using multiple physical terminals 
	- Using multiple virtual terminals (at least 2 user my user and root user)
	- Via network connection 
	- A mix of them 
### Users and Groups 
- Each user has 
	- username 
	- user-id (UID)
	- primary group (Group-name = user-name) created auto when create user 
- Each Group has
	- group-name
	- Groupe-id (GID)
- Users can join different groups and can 
### Resources 
- Any resource represented as a file 
- User who create that resource he will be the owner 
- Owner --> user UID
- Owner Group --> User primary group GID
- So each resource know 
	- UID
	- GID 
	- Permissions (للعالم الخارجي) 
### Permissions 
- Permissions are **assassinated with resource not a user**
- Type of permission 
	- Read (r)         (For Files you can see in `ls`)
	- Write (w) --> change, move , and delete  (For Files you can remove, rename)
	- Execute (x) --> any runnable (For `cd`)
- Access Levels 
	- User (u) 
	- Group (g)
	- World, Others (o)
- Permissions format 
![[Pasted image 20240924173434.png]]
- Representation 
	- rwx  = (111)b = 7
	- rw-  = (110)b = 6
	- r-x   = (101)b = 5
	- r--   = (001)b = 4
- Command 
```bash
# Show Perm 
ls -l 
# copy with perm 
cp -p 
```
![[Pasted image 20240903184026.png]]
- Default Permissions 
	- Determined by user mask(umask)
	- by default it 777
	- `umask` could change defaults 
```bash
umask     # show current mask 
umask 000 # Default mask 000 --> Don't mask anything rwx=111 (777 for all)
umask 022 # 111 101 101 --> (111) --> 0 , (101) --> 2
```
- Change file permissions
```bash 
chmod <permission> <file or dir>
```
	- Relative
		- + add
		- - remove 
```bash 
chmod +x file1 # Make it excutable for user group others 
chmod u+w file1 # Make it writable for user only 
chmod u-w file1
chmod go+r file1 # for group and other make it wriable 
```
	- Absolute (using =)
```bash
chmod a=x file1 # file1 is executable for all (r+w is turned of )
chmod 777 file1 # rwx for all 
chmod -R 777 dir1 # for all dir1 and sub dirs/files 
```
### Super-user (root)
- can override all permissions restriction for all system resources 
- In most Distros you can log as root user 
- For Ubuntu 
	- you can't log for root user but u can use `sudo` keyword
	- Not every user has the right of `sudo` usage 
		- need to edit file `etc/sudoers` to add user who can use it 
		- `etc/sudoers` owned by root
### Special Permissions 
#### Permission s/g
- Used for any executable/Binaries file 
- Scenario 
	- make script that log in file that owned by the root/any user 
		- Can run script with `sudo`
- The  executable/Binaries file takes the permission of the user 
- By adding `s` permission --> it will inherit the permission of the root 
- cmd
```bash
chmod u+s file1 # use user permission
chmod g+s file1 # use group permission
```
#### Permission sticky bit (t)
- Used in shared directories 
- Only fileOwner can rename/delete of its content (write permission (w) wih only add)
- Others can have write access without rename or delete 
```bash
chmod +t dir1 
```
### Change ownership 
```bash
sudo chown <user>:<group> <file> # file1 will be owned by <user> and <group>
```
### Users 
- Add user
```bash
sudo useradd tom # will create home dir manualy 
sudo useradd -m tom # create user home automatically 
sudo useradd -D # list all users 
```
- Switching users 
```bash 
su <UserName>    # switch to UserName and keep my env
su - <UserName>  # switch to UserName and use its env
su               # login as root
```
- setting passwd 
```bash 
passwd         # change my password
sudo passwd tom # change tom passowrd
```
Identifying users 
```bash 
id     # Display UID and GID 
who    # List of loggedin users 
whoami # Display current username 
info   # info about all users who logged in
```
- Deleting users 
```bash 
sudo userdel userName
```
- Groups
```bash 
sudo groupadd groupName   # Cread group 
sudo groupdel groupName   # Delete group 

sudo useradd -G <groupName> <userName> # add user to group 
```
### Configuration files 

| File Dir      | Description    | Format                                                            |
| ------------- | -------------- | ----------------------------------------------------------------- |
| `/etc/passwd` | List of users  | username:password:uid:gid:name:homeDir:login-shell                |
| `/etc/group`  | List of groups | groupName:password:gid:userlist                                   |
| `/etc/shadow` | Passwords      | loginID:EncryptedPasswd:LastChangeData:MinPasswdAge:MaxAge:etc... |

