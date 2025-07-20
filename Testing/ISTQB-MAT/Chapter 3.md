## Common Test Types applicable for Mobile Applications
### Installability Testing
- #### Installation Approaches

| Type               | Common Notes                                                                                                                                                |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Application Stores | **Normal Users** -- Official Stores (Google/Apple)<br>**Enterprise Apps** - Installation via link or distribution services such as HockeyApp or App Center. |
| Sideloading        | Copy and Installing Apps                                                                                                                                    |
| Desktop Apps       | Like iTunes Could Install Apps on iPhone (مش فاهمها استني لما النت يرجع)                                                                                    |
- #### Installing Methods 
	- Over The Air (OTA) via Wi-Fi or Cellular Data
	- Data Cables
- #### Some Testing Condition 
	- Installing, De-Installing and upgrade on internal or external if supported and no data los after upgrade
	- App Reinstalling --> when the “retain app data” option was chosen/not chosen during the previous deinstallation.
	- Canceling/Interruption of App installation (Shutting down mobile/Turn off Data)
	- Resuming After Canceling/Interruption 
	- Permission Testing --> Verify App Behavior if the user denied permission. 
	- Testing for Rotted devices and Jailbroken devices
### Stress Testing
- Stress testing is focused on determining the performance efficiency of the application when subjected to conditions beyond normal load.
هنا الفوكس علي السترس علي الموبايل نفسو mobile target مش بنفوكس علي ال not backend or APIs
- Examples 
	- High CPU Usage, Out of mem, low disk space, poor bandwidth, etc ...
- Some of these stressful conditions can be created using tools such as Monkey. This is a command line tool that runs over the ADB shell command line.
### Performance Test
- Time and resource consumption aspects are important success factors for an app and performance testing is carried out to measure these aspects. --> app should be fast enough 
- Performance efficiency needs to be ==tested on the device itself==
- Performance testing of the whole system should be performed ==as defined in the test strategy and is not mobile specific==
- The performance test of the app itself should contain chronometry for the most important workflows
	- online-banking app are: “Login”, “Change address” or “Bank transfer with PIN and TAN”. The tester should then compare this chronometry with similar apps
	- اللي هو انت فين مقارنه بباقي الابلكيشنز
- Besides chronometric measures it is important to consider the perceived performance by the user
### Security Testing
#### Principal security issues for mobile apps 
- Access o sensitive data on the device. 
- Unencrypted information Transfer. 
- Unsafe Data Storage.
#### Some Testing Condition
- Injection and Overflows
- Encryption of Locally Stored or Transferred Data
- Deletion of temp data or after abnormal end.
- Clearing Password Input Field.
- Find out OWASP Mobile Top 10
### Usability Testing 
- Tester should be aware of the look and feel on the platform used.
- Usability tests can be conducted by a tester using various available heuristics and test tours.
- ==Called Findings Not A Bugs==
- To achieve satisfactory usability, an app should:
	- be self-explanatory and intuitive. سهل التعلم 
	- allow user mistakes.عادي اليوزر يغلط 
	- be consistent in wording and behavior. كل البيدجات نفس الديزاين
	- abide by the design guidelines of the platforms.
	- make needed information visible and reachable in each screen size and type
### Database Testing

| Type                      | Nots                                                                |
| ------------------------- | ------------------------------------------------------------------- |
| Validation of data issues | Sync<br>Upload Conflicts <br>Security<br>CRUD Operations <br>Search |
| Data Integration          | Integration with mobile apps or third parties                       |
| Performance               | Soring Data on Database                                             |
### Globalization and Localization 
- **Internationalization (I18N) /Globalization** testing of the application includes testing an app for different locations, formats for dates, numbers and currency, and replacing actual strings with pseudo-strings.
- **Localization (L10N)** testing includes the testing of an app with localized strings, images and workflows for a particular region.
	- Russian and German words could be much longer than those in other languages.
- A very important aspect to be checked is the date format used, such as YEAR – MONTH – DAY or DAY – MONTH – YEAR
### Accessibility Testing 
- Accessibility testing is performed to determine the ease by which users with disabilities can use a component or system.
- Accessibility guidelines are available from platform vendors and these should be used (e.g. Google and Apple)
	- Taking feedback from people who require accessibility is also helpful.
- ==For mobile web an accessibility guide has been published by the W3C, which should be considered==

## Additional Mobile Application Test Levels 
### Field Testing 
- This could include testing on various networks and on different types of communication technologies such as Wi-Fi or cellular data
- Tests should be performed with varying download speeds and signal strengths, and include the handling of blind spots.
- ==Field testing requires careful planning and the identification of all items required to perform the tests==
- ==Usability of an app== is another important aspect that needs to be covered while conducting field testing.
### Testing For Application Store Approval and Post Release Testing
- Before an app is sent for publishing some checklist/based tests must be passed to assure the approval of the application stores.
- The approval process may take some time after submission
	- If any issues are found during the approval process, a new version may need to be submitted
	- This situation requires careful consideration during project planning and testing.
- A further level of testing is “post-release” testing. Testing at this level includes downloading and installing the application from application stores.

## Experience Based Mobile Testing Techniques
## Mobile Test Process