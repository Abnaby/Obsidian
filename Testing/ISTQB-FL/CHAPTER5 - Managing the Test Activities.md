### Test Planning
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