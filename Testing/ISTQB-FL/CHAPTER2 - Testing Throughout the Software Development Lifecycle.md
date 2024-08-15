### SDLC Types
- sequential development models 
	- (e.g., waterfall model, V-model)
	- **testers** typically participate in requirement reviews, test analysis, and test design.
	- dynamic testing cannot be performed early in the SDLC.
- iterative development models (e.g., spiral model, prototyping)
	- implies that in each iteration both static and dynamic testing may be performed at all test levels
- incremental development models (e.g., Unified Process)
	- implies that in each iteration both static and dynamic testing may be performed at all test levels
- ### Make regression testing easier
	- by making  extensive test automation
### Software Development Lifecycle and Good Testing Practices
* every software development activity, there is a corresponding test activity
* Different test levels have specific and different test objectives,
* Test analysis and design for a given test level begins during the corresponding development phase of the SDLC (Early Testing)
* Testers are involved in reviewing work products as soon as drafts (Shift left approch)
### Testing as a Driver for Software Development
#### Test-Driven Development (TDD)
1. Tests are written 
2. code is written to satisfy the tests
3. code are refactored
#### Acceptance Test-Driven Development (ATDD)
- involves team members with different perspectives
- part of system design
- Tests are written before the part of the application is developed to satisfy the tests
- Stakeholders domain language.
#### Behavior-Driven Development (BDD)
- simple form of natural language (Given/When/Then format)
- easy to understand by stakeholders
- Test cases are then automatically translated into executable tests

### DevOps
#### Benefits 
- Fast feedback on the code quality
- CI promotes a shift-left approach in testing
- facilitate establishing stable test environments
- Increases the view on non-functional quality
- reduces the need for repetitive manual testing
- The risk in regression is minimized (Due to scale of automation)
#### Risks and challenges
- pipeline must be defined and established
- CI / CD tools must be introduced and maintained
- Test automation requires additional resources
### Shift Lift Approch
- might result in extra training, effort and/or costs earlier
- expected to save efforts and/or costs later in the process
- important that stakeholders are convinced and bought into this concept
### Retrospectives (Post project meetings)
- retrospectives depend on the particular SDLC model being followed
- the participants (not only testers, but also e.g., developers, architects, product owner, business analysts)
- results should be recorded and are normally part of the test completion report
- Retrospectives are critical
#### benefits 
* Increased test effectiveness / efficiency 
* Increased quality of testware
* Team bonding and learning
### Test Levels
- Component testing (also known as unit testing)
	- testing components in isolation.
	- normally performed by developers in their development environments
- Component integration testing (also known as unit integration testing
	- testing the interfaces and interactions between components
	- dependent on the integration strategy approaches like bottom-up, top-down or big-bang
- System testing
	- overall behavior and capabilities of an entire system or __product__
	- including functional testing of end-to-end tasks and the non-functional testing of quality characteristics.
	- **preferable** to test them on a complete system in a representative test environment
	- System testing may be performed by an independent test team
	- related to specifications for the system
- System integration testing
	- testing the interfaces of the system under test and other systems and external services
	- __System integration testing requires suitable test environments__
- Acceptance testing
	- focuses on validation
	- acceptance testing should be performed by the intended users
	- main forms of acceptance testing
		- user acceptance testing (UAT)
		- operational acceptance testing
		- contractual and regulatory acceptance testing
		- alpha testing
		- beta testing

### Test Types
- Functional testing
	- “what” the test object should do
	- Checking
		- functional completeness
		- functional correctness
		- functional appropriateness.
- Non-functional testing
	- how well the system behaves
	- Checking ( * ity)
		- Performance efficiency
		- Compatibility
		- Security
	- Many non-functional tests are derived from functional tests
	- late discovery of non-functional defects can pose a serious threat
	- Non-functional testing sometimes needs a very specific test environment
- Black Box
	- specification-based and derives tests from documentation
- White Box
	- structure-based and derives tests from the system's implementation or internal structure
### Confirmation Testing and Regression Testing
- Confirmation testing and/or regression testing for the test object are needed on all test levels
#### Confirmation Testing
* confirms that an original defect has been successfully fixed
* Fixed Depended on Risk by :
	1. executing all test cases that previously have failed.
	2. adding new tests to cover any changes that were needed to fix the defect
* Time or money is short when fixing defects, confirmation testing might be restricted to simply exercising the *steps that should reproduce the failure caused by the defect*
#### Regression testing
- confirms that no adverse consequences
- Regression testing may not be restricted to the test object itself but can also be related to the environment
- advisable first to perform an impact analysis (to determine scope of regression testing)
- number of regression test cases will increase with each iteration or release.
- regression testing is a strong candidate for automation


### Maintenance Testing
- Corrective and adaptive.
- planned releases/deployments
- unplanned releases/deployments (hot fixes)
- Impact analysis done before a change is made
- The triggers for maintenance
	- Modifications (Planned, release-based)
	- Upgrades or migrations (Moving from one platform to another)
	- Retirement
		- when an application reaches the end of its life
