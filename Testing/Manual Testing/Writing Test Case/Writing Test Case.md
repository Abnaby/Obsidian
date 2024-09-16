## Test Case format 

![[Untitled.png]]
### Test Case ID
- Must be Unique 
- Try to use naming convention like
	- ==TC_ProjectName_FunctionName_TestCaseNumber==
		- TC_ADAS_AutoParking_001
	- or use any defined naming convention
### Test Case Tittle / Description 
- What I'm going to test in simple way (use صيغه الامر)
- Be in point
- Don't Include any test steps 
- Example
	- Open website xyz.com
	- Check login with valid credentials 
	- Check password has max length 22
### Test Case Pre-condition \ Assumptions 
- Any user data dependency 
- Test Environment Dependencies e.g. Linux, WSL, etc..
- Dependencies on any other test cases
### Test Data
- Prepare test data saving a lot of time.
- May be merged with Test steps (e.g. Login with email xtz@gmail.com and passwd abv123)
- Example 
	- For Valid Login 
		- Must have valid username 
		- Must have valid password 
	- For Data Range 
		- Prepare EP, or specific value if mentioned in SRS
### Test Steps 
* Steps to execute the test case and for test data will be found in **Test Data** Section
* For Each Verification point it will be verified with expected result (it is type of schools)
### Test Expected Result 
- may be text or attachments 
