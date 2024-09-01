## Test Planning
- Describes the objectives, resources and processes for a test project
- Contains
	- schedule
	- achieving test objectives
	- ensure that the performed test activities will meet the established criteria
	- Serves as a means of communication
	- Demonstrates that __testing will adhere to the existing test policy and test strategy__

#### Purpose and Content of a Test Plan
- Content of a test plan:
	- Context of testing
		- Scope
		- Objective
		- Constraints
		- Test Basis
	- Assumptions and constraints of the test project
	- Stakeholder
		- Roles
		- Responsibility
		- relevance to testing
		- hiring and training needs
	- Communication
		- forms and frequency of communication
		- documentation templates
	- Risk register
		- Product Risk
		- Project Risk
	- Test approach
		- Test Level, Types, techniques
		- entry criteria and exit criteria
		- independence of testing
		- test data requirements, test environment requirements
		- deviations from the organizational test policy and test strategy
	- Budget and schedule
#### Release planning vs Iteration planning


| **Planning Type**  | Focus                                             | Backlog                                    | Tester's Contribution                                                                                                                                                                                                                                                                                                      |
| ------------------ | ------------------------------------------------- | ------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Release Planning   | Looks ahead to the ==release of the product==     | defines and re-defines the product backlog | - Participate in ==writing testable user stories and acceptance criteria== (بيكتب)<br>- Participate in project and quality risk analyses<br>- Estimate test effort for user stories<br>- Determine the test approach<br>- Plan the testing for the release                                                                 |
| Iteration Planning | Focuses on a ==single iteration== and its backlog | concerned with the iteration backlog       | - Participate in detailed risk analysis of user stories<br>- Determine the ==testability of user stories== (بيقرر)<br>- ==Break down user stories== into tasks, especially testing tasks<br>- Estimate test effort for all testing tasks<br>- Identify and refine functional and non-functional aspects of the test object |
#### Entry vs Exit Criteria 
| **Criteria Type**     | **Definition**                                                                                                                                            | **Examples**                                                                                                                                                                                                                                                                                                                                       |
| --------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Entry Criteria**    | Preconditions that must be met before starting an activity                                                                                                | - Availability of resources ( people, tools, environments, test data, budget, time)  <br>- Availability of testware (test basis, testable requirements, user stories, test cases)  <br>- Initial quality level of a test object (==all smoke tests have passed==)                                                                                  |
| **Exit Criteria**     | Conditions that must be fulfilled to consider an activity completed                                                                                       | - Measures of thoroughness (e.g., achieved level of coverage, number of unresolved defects, defect density, number of failed test cases)  <br>- Completion criteria (e.g., planned tests executed, static testing performed, all defects reported, all regression tests automated)  <br>- Running out of time or budget (accepted by stakeholders) |
| **Agile Terminology** | **Definition of Ready**: Entry criteria for starting development/testing of a user story  <br>**Definition of Done**: Exit criteria for a releasable item |                                                                                                                                                                                                                                                                                                                                                    |
### Estimation Techniques
#### Estimation based on ratios
- metrics-based technique
- collected from __previous projects__
- possible to derive “standard” ratios for similar projects
- These standard ratios can then be used to estimate the test effort for the new project
- Example
	- previous project the development-to-test effort ratio was 3:2, and in the current project the development effort is expected to be 600 person-days, the test effort can be estimated to be 400 person-days.
#### Extrapolation
- metrics-based technique
- This method is very ==suitable in iterative SDLCs==
- measurements are made as early as possible in the current project to gather the data
- effort required for the remaining work can be approximated by extrapolating this data (usually by applying a mathematical model).
- Example
	- the team may extrapolate the test effort in the forthcoming iteration as the averaged effort from the last three iterations.
#### Wideband Delphi
- ==Iterative mdoel==
- expert-based technique
- make experience-based estimations
- Steps 
	1. Each expert, in isolation, estimates the effort
	2. experts discuss their current estimates
	3. asked to make a new estimation based on that feedback, again in isolation.
	4. This process is repeated until a consensus is reached.
- Planning Poker is a variant of Wideband Delph (Commonly used in agile)
#### Three-point estimation
- expert-based technique
- Steps
	- Set most optimistic estimation (a)
	- Set most likely estimation (m)
	- Set most pessimistic estimation (b)
	-  estimate is calculated as 
$$
	E = (a + 4*m + b) / 6
$$
	-  measurement error:
$$
	SD = (b – a) / 6
$$

### Test Case Prioritization
- test cases and test procedures are specified and assembled into test suites.
- test suites can be arranged in a test execution schedule.

| **Prioritization Method**                                                          | **Description**                                                                                                                                            | **Execution Order**                                                                                                                                                                 |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Risk-based Prioritization**                                                      | Test execution order is based on the results of risk analysis.                                                                                             | Test cases covering the most important risks are executed first.                                                                                                                    |
| **Coverage-based Prioritization**<br>===<br>**additional coverage prioritization** | Test execution order is based on coverage (e.g., statement coverage).                                                                                      | - Test cases achieving the highest coverage are executed first.  <br>- **Additional Coverage**: Each subsequent test case is the one that achieves the highest additional coverage. |
| **Requirements-based Prioritization**                                              | Test execution order is based on the priorities of requirements traced back to the corresponding test cases. Requirements are prioritized by stakeholders. | Test cases related to the most important requirements are executed first.                                                                                                           |
- this practice may not work if the test cases or the features being tested have dependencies. If a test case with a higher priority is dependent on a test case with a lower priority, the lower priority test case must be executed first.
### Test Pyramid
- model showing that different tests may have different granularity.
- supports the team in test automation
- The top layer represents complex, high-level, end-to-end tests
	- These high-level tests are generally slower than the tests from the lower layers.
- Original Pyramids 
	- “unit tests”, “service tests” and “UI tests”
	- unit (component) tests, integration (component integration) tests, and end-to-end tests.
### Testing Quadrants
![[Pasted image 20240817152338.png]]
## Risk Management
### Notes
* internal and external factors
* Risk management allows the organizations to 
	* increase the likelihood of achieving objectives
	* improve the quality of their products 
	* increase the stakeholders’ confidence and trust.
* main risk management activities
	* Risk analysis
		* risk identification + risk assessment;
	* Risk control
		* risk mitigation + risk monitoring
* Risk
	* characterized by two factors (which is a measure for the risk):
		* Risk Likelihood
			* the probability of the risk occurrence
			* 0 <= RL <= 1
		* Risk Impact
			* the consequences of this occurrence
	### Project Risks and Product Risks

| **Risk Type**     | **Description**                                        | **Examples**                                                                                                                                                                                                                                                                                                                                                                          | **Impact**                                                                                                                                                                                                                                      |
| ----------------- | ------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Project Risks** | Related to the management and control of the project.  | - Organizational issues (e.g., delays in work product deliveries, inaccurate estimates, cost-cutting)  <br>- People issues (e.g., insufficient skills, conflicts, communication problems, shortage of staff)  <br>- ==Technical issues (e.g., scope creep, poor tool support)==  <br>- Supplier issues (e.g., ==third-party== delivery failure, bankruptcy of the supporting company) | - Impact on project schedule, budget, or scope  <br>- Affects project's ability to achieve its objectives                                                                                                                                       |
| **Product Risks** | Related to the quality characteristics of the product. | - Missing or wrong functionality  <br>- Incorrect calculations  <br>- Runtime errors<br>- ==Poor architecture== <br>- Inefficient algorithms  <br>- Inadequate response time  <br>- Poor user experience  <br>- Security vulnerabilities                                                                                                                                              | - User dissatisfaction  <br>- Loss of revenue, trust, reputation  <br>- Damage to third parties  <br>- High maintenance costs, overload of the helpdesk  <br>- Criminal penalties  <br>- Physical damage, injuries, or death (in extreme cases) |
### 1. Product Risk Analysis
* goal of product risk analysis is to provide an awareness of product risk
* product risk analysis begins early in the SDLC
* Result
	* Determine Scope 
	* levels and propose test types to be performed
	* test techniques to be employed and the coverage to be achieved
	* test effort required for each task
	* Prioritize testing.
	* any activities in addition to testing could be employed to reduce risk
* Consist of 
####   1.1. Risk identification
* Generating a comprehensive list of risks
* Stakeholders can identify risks by using various techniques and tools, 
	* brainstorming
	* workshops
	* interviews
	* cause-effect diagrams
####   1.2. Risk assessment
* Steps 
	1. categorization of identified risk
	2. determining their risk likelihood, risk impact and level
	3. prioritizing, and proposing ways to handle them
* Risk assessment can
	* Quantitative approach
		* the risk level is calculated as the multiplication of risk likelihood and risk impact
	* Qualitative approach 
		* the risk level can be determined using a risk matrix.
	* mix of them.
### 2. Product Risk Control
- Happens once a risk has been analyzed.
- Consist of 
####   1.1. Risk mitigation
* implementing the actions proposed in risk assessment to reduce the risk level
* By:
	* testing
	* risk acceptance
	* risk transfer
	* contingency plan
* Actions that can be taken to mitigate the product risks by testing are as follows:
	* Select the testers with the right level of experience
	* Apply an appropriate __level of independence of testing__
	* Conduct reviews and perform static analysis
	* apply appropriate test techniques and coverage levels
	* Perform dynamic testing, ==including regression testing==
####   1.2. Risk assessment
* ensure that the mitigation actions are effective, to obtain further information to improve risk assessment, and to identify emerging risks.
## Test Monitoring, Test Control and Test Completion
- **Test Monitoring**: 
	- Involves gathering information about testing __to__ assess progress and determine if test exit criteria or related tasks are satisfied, such as meeting coverage targets for risks, requirements, or acceptance criteria.
- **Test Control**: 
	- Utilizes information from test monitoring to provide guidance and corrective actions for more effective testing. 
	- Examples include:
	    - Reprioritizing tests if a risk becomes an issue
	    - Re-evaluating whether a test item meets entry/exit criteria after rework
	    - Adjusting the test schedule for delays in test environment delivery
    - Adding new resources when necessary
- **Test Completion**: 
	- Involves collecting data from completed test activities to consolidate experience and testware. 
	- This occurs at milestones such as the ==completion of a test level, an Agile iteration, a test project, or a software release==.
#### Metrics used in Testing
* Test metrics are gathered to show progress against the planned schedule and budged
* Common test metrics
	* Project progress metrics (اي حاجه خاصه بالبروجكت بروجريس)
		* task completion
		* resource usage
		* test effort
	* Test progress metrics (اي حاجه خاصه بالتيست بروجريس)
		* test case implementation ==progress==
		* test environment preparation ==progress==
		* number of test cases run/not run, passed/failed
		* test execution time
	* Product quality metrics (اي حاجه خاصه بالمنتج النهائي)
		* availability
		* response time
		* ==mean time to failure==
	* Defect metrics 
		* number and priorities of ==defects== found/fixed
		* ==defect== density
		* ==defect== detection percentage
	* Risk metrics 
		* residual risk level
	* Coverage metrics
		* requirements coverage
		* code coverage
	* Cost metrics
		* cost of testing
		* organizational cost of quality
#### Purpose, Content and Audience for Test Reports
- **Purpose**:
    - __Test reporting__ communicates test information during and after testing.
    - __Test progress__ reports aid ongoing test control, providing data to adjust the test schedule, resources, or plan as needed.
    - __Test completion__ reports summarize a specific stage of testing and provide information for future testing.
- **Content**:
    - **Test Progress Reports** (Regular Basis: daily, weekly, etc.):
        - Test period
        - Test progress (e.g., schedule adherence, deviations)
        - Testing impediments and workarounds
        - Test metrics
        - New/changed risks
        - Planned testing for the next period
    - **Test Completion Reports** (Prepared during test completion):
        - Test summary
        - Evaluation of testing and __product quality__ based on the original test plan
        - __Deviations__ from the test plan
        - Testing impediments and workarounds
        - __Test metrics based on test progress reports__
        - Unmitigated risks and unresolved defects
        - Lessons learned relevant to testing
- **Audience**:
    - Different audiences require tailored information.
    - Frequent and informal reports are suitable for team members.
    - Formal reports with a set template are used for completed projects, often following standards like ISO/IEC/IEEE 29119-3.
    - options
	    - Verbal communication
	    - Dashboards (e.g., CI/CD dashboards, task boards, and burn-down charts)
	    - Electronic communication channels (e.g., email, chat)
	    - Online documentation
	    - Formal test reports
	- More formal communication may be more appropriate for distributed teams where direct face-to-face communication is not always possible due to geographical distance or time differences.
	- different stakeholders are interested in different types of information.
	- ==Communication should be tailored accordingly==
## Configuration Management
- **Purpose of Configuration Management (CM) in Testing:**
    - Identify, control, and track work products 
	    -  test plans, strategies, conditions
	    -  test cases, scripts, results, logs, reports.
- **Handling Complex Configuration Items:**
    - Record components, relationships, and versions.
    - Approved items become baselines, with changes controlled through formal processes.
- **Change Tracking:**
    - If the configuration item is approved for testing, ==it becomes a baseline==.
    - Ability to revert to previous baselines to reproduce past test results.
- **Support for Testing:**
    - ==Unique identification== and version control for all configuration items.
    - Track changes and maintain traceability throughout the test process.
    - ==Unambiguous== referencing of documentation and software items in test documentation.
- **Integration with DevOps:**
    - Automated CM is part of DevOps pipelines for continuous integration, delivery, and deployment.
## Defect Management
- Major test objectives is to find defects
- reported anomalies may turn out to be real defects or something else (e.g., false positive, change request)
- Anomalies may be reported during any phase of the SDLC
- Defect management process includes 
	- a workflow for handling individual anomalies
		- To log the reported anomalies.
		- Analyze and classify them.
- It is advisable to handle defects from static testing
- The process must be followed by all involved stakeholders
### *Objectives of Defect Reports*:
1. Provide sufficient information to resolve reported defects.
2. Track the quality of the work product.
3. Offer ideas for improving the development and testing process.
### *Content of a Typical Defect Report*:

- **Unique Identifier**: A specific number or code for tracking.
- **Title**: A short summary of the anomaly.
- **Date and Author Information**: When the anomaly was observed, the issuing organization, and the author’s role.
- **Test Object and Environment Identification**: Details about the environment and object being tested.
- **Context of the Defect**: Information on the test case, activity, SDLC phase, and other relevant data.
- **Failure Description**: Steps to reproduce the issue, including logs, screenshots, and recordings.
- **Expected vs. Actual Results**: A comparison of what was expected versus what occurred.
- **Severity and Priority**: Impact on stakeholders and urgency to fix.
- **Status**: Current state of the defect (e.g., open, closed, awaiting confirmation).
- **References**: Links to related test cases.
![[Pasted image 20240818145247.png]]
Severity vs priority
مثلا عدد مستخدمين ال ipad في مصر لا يتعدو ال 10% فبالتالي هما بالنسبه لل android users همل low priority فمثلا لو في مشكله في ال sign up 
android --> high priority, high severity
ipad --> low priority, high severity 