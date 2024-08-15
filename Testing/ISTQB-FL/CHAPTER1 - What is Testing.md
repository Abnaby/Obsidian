### 1.1.What is Testing Notes 
- Software testing assesses software quality and helps reducing the risk of software failure in operation
- Verification vs Validation

| Verification                                             | Validation                                                                                            |
| -------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| checking whether the system meets specified requirements | checking whether the system meets users’ and other stakeholders’ needs in its operational environment |
| building the product right (Requirements)                | building the right product  (Meet user/stackhoolders needs/Opertional Environment)                    |
* Static Vs Dynamic Testing 

|                        | Static testing                 | Dynamic Testing                                              |
| ---------------------- | ------------------------------ | ------------------------------------------------------------ |
| Defects in SW          | ----                           | (true)                                                       |
| Defects in test object | (true)                         | (true)                                                       |
| Includes               | *Reviews*<br>*Static analysis* | *different types of <br>test techniques and test approaches* |

#### Testing 
- is not only a technical activity. It also needs to be properly planned, managed, estimated, monitored and controlled
* Objectives of testing can vary, depending upon the context,
* Testing is not performed in isolation.
* final goal is to help fulfill the stakeholders’ business needs
#### Testing and Debugging
* Testing can trigger failures that are caused by defects
* debugging is concerned with finding causes of this failure (defects), analyzing these causes, and eliminating them.
* typical debugging process in this case involves:
	* Reproduce 
	* Diagnostics (Finding RCA)
	* Fixing The cause 
* Dynamic test
	* Tester find bugs --> Developer start debugging process --> Tester make Confirmation test --> then run regression test
* Preferably, confirmation testing is done by the same person who performed the initial test.
### 1.2 Why is Testing Necessary?
- Testing provides a cost-effective means of detecting defects
- testing indirectly contributes to higher quality test objects.
- Testing provides a means of directly evaluating the quality of a test object at various stages in the SDLC.
- Testing provides users with indirect representation on the development project.
- Testers ensure that their understanding of users’ needs
- involved as representative set of users
- QA vs QC

|             | Quality Control                                                                      | Quality Assurance                                         |
| ----------- | ------------------------------------------------------------------------------------ | --------------------------------------------------------- |
|             | Product Oriented                                                                     | Process Oriented                                          |
| Approach    | Corrective Approach                                                                  | Preventive approach                                       |
| Major forms | Testing is a major form of quality control                                           | QA applies to both the development and testing processes, |
| Notes       | formal methods (model checking and proof of correctness), simulation and prototyping | the responsibility of everyone on a project               |
| Test Result | QC they are used to fix defects                                                      | QA they provide feedback                                  |
* If a defect in code is executed, the system may fail to do what it should do, or do something it shouldn’t, causing a failure. )
(ببساطه لو عندك ديفيكت في الكود فممكن تعملي فيلير او لا حتي لو في ديفيكت)
* Failures can also be caused by environmental conditions
* Root cause Analysis 
	* ==Fundamental reason== for the occurrence of a problem
	* performed when a failure occurs or a defect is identified
### 1.3 Testing Principles
1. Testing shows the presence, not the absence of defects
	- Testing reduces the probability of defects remaining undiscovered in the test object
	- testing ==cannot prove test object correctness==
2. Exhaustive testing is impossible
	- ==Testing everything is not feasible== except in trivial cases
	- Rather than attempting to test exhaustively, test technique, test case prioritization , and risk-based testing, should be used to focus test efforts.
3. Early testing saves time and money
	- Defects that are removed early in the process will not cause subsequent defects in derived work products.
	-  cost of quality will be reduced since fewer failures will occur later in the SDLC
	-  static testing and dynamic testing should be started as early as possible.
4. Defects cluster together
	- A small number of system components usually contain most of the defects
	- This phenomenon is an Pareto principle.
	- Predicted defect clusters, and actual defect clusters observed during testing or in operation
	- ==important input for risk-based testing==
		![[Pasted image 20240815124634.png]]
5. Tests wear out
	- tests are repeated many times, they become increasingly ineffective in detecting new defects
	- overcome this effect, existing tests and test data may need to be modified.
	- repeating the same tests can have a ==beneficial outcome, e.g., in automated regression testing==
6.  Testing is context dependent
	- no single universally applicable approach to testing
	- Testing is done differently in different contexts
7. Absence-of-defects fallacy
	1. it is a fallacy (i.e., a misconception) to expect that software verification will ensure the success of a system. (verification+validation)
### 1.4 Test Activities, Testware and Test Roles
#### Test Activities and Tasks
1. Test Planning (Chapter 5)
	- Define test objects --> select approach 
2. Test monitoring and control
	1. Test monitoring : comparison of actual progress against the plan
	2. Test control: taking the actions necessary to meet the objectives of testing
	3. __Generated Reports__: Test progress report
3. Test analysis (prioritize test conditions)
	- analyzing the test basis to identify ==testable features==.
	- define and prioritize associated test conditions
	- Test analysis is often supported by the use of test techniques.
	- Test analysis answers the question “what to test?”
	- ![[Pasted image 20240815130523.png]]
4. Test design
	- elaborating the test conditions into test cases and other testware
	- This activity often involves the ==identification of coverage items==
	- Test analysis is often supported by the use of test techniques.
	- includes defining the test data requirements, designing the test environment and identifying any other required infrastructure and tools.
	- Test design answers the question “how to test?”
5. Test Implementation (procedures are prioritized)
	* creating or acquiring the testware necessary for test execution.
	* Test cases can be organized into test procedures and are ==often== assembled into test suites.![[Pasted image 20240815130914.png]]
	* .Test procedures are prioritized and arranged within a test execution schedule
	* The test environment is built and verified to be set up correctly.
6. Test execution
	- Test execution may be manual or automated.
	- Test execution can take many forms, including continuous testing or pair testing sessions.
	- Actual test results are compared with the expected results
	- test results are logged. 
	- Anomalies are analyzed to identify their likely causes
	- analysis allows us to report the anomalies based on the failures observed
7. Test completion
	- at project milestones -release, end of iteration, test level completion-
	- backlog items created for unresolved defects
	- results archived
	- test environment is shut down to an agreed state
	-  __Generated Reports__: Test Completion report for stakeholders 
####  Test Activities Work products
1. Test Planning WP
	- test plan
	- test schedule
	- risk register (==list of risks== together with risk likelihood)
	- entry and exit criteria
2. Test monitoring and control WP
	- test progress reports
	- ==documentation of control directives== and ==risk information==
3. Test analysis WP
	- (prioritized) test conditions (acceptance criteria)
	- defect reports regarding defects in the ==test basis== (if not fixed directly).
4. Test design WP
	- (prioritized) 
		- test cases
		- test charters
		- coverage items
	- test data requirements
	- test environment requirements.
5. Test Implementation WP
	* test procedures
	* automated test scripts
	* test suites
	* test data,
	* test execution schedule
	* test environment elements.
6. Test execution WP
	- test logs
	- defect reports
7. Test completion
	- test completion report WP (Include retrospective meting result)
	- actions 
	- change requests (e.g., as product backlog items).
####  Traceability between the Test Basis and Testware
* Test case: Traceability of test cases to requirements.
- Test Object: Traceability of test results to risks can be used to evaluate the level of residual risk
- example of how traceability supports testing: 
	- Performing the impact analysis of a change will help selecting the right test cases for regression testing
####  Test Roles
* testing role takes overall responsibility for the engineering (technical) aspect of testing
* test management role: 
	* mainly focused on the activities of test planning, test monitoring and control and test completion
* Testing role: 
	* focused on the activities of test analysis, test design, test implementation and test execution.
### Whole Team Approach
* coming from Extreme Programming
* any team member with the necessary knowledge and skills can perform any task
* everyone is responsible for quality
* team members share the same workspace (physical or virtual)
* improves 
	* team dynamics
	* enhances communication 
	* collaboration within the team
* creates synergy by
	* allowing the various skill sets within the team to be leveraged for the benefit of the project.
### Independence of Testing
* Independent testers are likely to recognize different kinds of failures and defects compared to developers
* Independent testers may be isolated from the development team (Communication Problems)
**Levels** 
- no independence: 
	- Work products can be tested by their author
- some independence
	- by the author's peers from the same team
- high independence
	- by testers from outside the author's team but within the organization
- very high independence
	- testers from outside the organization
### Tasks belong MAINLY to a testing role
- Configure test environments
- Report on achieved coverage