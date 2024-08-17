### Test Techniques Overview
* test analysis (what to test) and in test design (how to test)
* Test techniques help to develop a relatively small, but sufficient, set of test cases in a __systematic way__.
#### General Info
- Black-box test techniques
	- specification-based techniques
	- test cases are independent of how the software is implemented.
	- if the implementation changes, but the required behavior stays the same
- White-box test techniques
	- structure-based techniques
	- test cases are dependent on how the software is designed
	- can only be created after the design or implementation of the test object
- Experience-based test techniques
	- The effectiveness of these techniques depends heavily on the tester’s skills.
	- experience-based test techniques are complementary to the black-box and white-box test techniques
- Collaboration-based Test Approaches
	- Objective 
		- collaboration and communication, not found defects

### Black-box Test Techniques
#### Equivalence Partitioning
* No overlap or empty sets
* The partitions may be continuous or discrete, ordered or unordered, finite or infinite.
* definitions of valid and invalid values may vary among teams
* __Each Choice Coverage__: does not take into account combinations of partitions
* __Coverage__ is measured as the number of partitions exercised by at least one test case, divided by the total number of identified partitions,
#### Boundary Value Analysis
* Must be ordered
* Typical defects found by BVA are located where implemented boundaries
* two versions of the BVA:
	* 2-value 
		* boundary value and its closest neighbor belonging to the adjacent partition.
		* __Coverage__ is measured as the number of boundary values that were exercised, divided by the total number of identified boundary values,
	* 3-value BVA
		* this boundary value and both its neighbors
		* __Coverage__ is measured as the number of boundary values and their neighbors exercised, divided by the total number of identified boundary values and their neighbors.
#### Decision Table Testing
* Test All Condition valid & invalid. With Systematic Approach
* effective way of recording complex logic, such as ==business rules==
* Rows: Condition
	* “T” (true) means that the condition is satisfied
	* “F” (false) means that the condition is not satisfied
	* “–” means that the value of the condition is irrelevant
	* “N/A” means that the condition is infeasible for a given rule
* column corresponds to a decision rule
* Actions Notions:
	* “X” means that the action should occur.
	* Blank means that the action should not occur.
* full decision table has enough columns to cover every combination of conditions.
	1. table can be simplified by deleting columns containing infeasible combinations of conditions
	2. minimized by merging columns, in which some conditions do not affect the outcome
* __Coverage__ is measured as the number of exercised columns, divided by the total number of feasible columns, and is expressed as a percentage
#### State Transition Testing
* represented as a sequence of events
* A state table is a model equivalent to a state transition diagram
* State transition Valid only, But  State Table valid and invalid
	* state table explicitly shows invalid transitions (represented by empty cells.)
	* rows represent states
	* columns represent events
	* Table entries (cells) represent transitions,
* A __transition__ is initiated by an event, which may be additionally qualified by a guard condition.
	* “event [guard condition] / action”
* Types of coverage criteria for state transition testing:
	* all states coverage
		* all the states are visited
		* __Coverage__ is measured as the number of visited states divided by the total number of states,
* محتاج كام تيست كيس عشان اعدي علي كل ال states بجيب ال min test cases
	* valid transitions coverage
		* test cases must exercise all the valid transitions
		* 0-switch coverage ( بشوف ال dead state داخل عليهم كام سهم واجمعهم)
		* N-Switch Coverage
		* __Coverage__ is measured as the number of exercised valid transitions divided by the total number of valid transitions,
	* all transitions coverage
		* all the transitions shown in a state table
		* test cases must exercise all the valid transitions and attempt to execute invalid transitions.
		* Testing only one invalid transition in a single test case helps to avoid fault masking
* ال fault masking اللي هو ممكن يكون في ايروور في ال sign in page بس مش هعرف اكشتفو عشان في ايرور في ال signup page  
		* __Coverage__ is measured as the number of valid and invalid transitions exercised or attempted to be covered by executed test cases, divided by the total number of valid and invalid transitions.
	* All states coverage is weaker than valid transitions coverage:
		* because it can typically be achieved without exercising all the transitions.
		* Achieving full all transitions coverage guarantees both full all states coverage and full valid transitions coverage and should be a minimum requirement for mission and safety-critical software.
### White-box Test Techniques
#### Notes
- White-box techniques can be used in static testing
- as well as pseudocode and other high level or top-down logic which can be modeled with a control flow graph
- Performing only black-box testing does not provide a measure of actual code coverage
- . White-box coverage measures provide an ==objective measurement== of coverage and provide the necessary information to allow additional tests to be generated to increase this coverage.
#### Statement testing
- the coverage items are executable statements.
- all executable statements in the code have been exercised at least once
- exercising a statement with a test case will not detect defects in all cases
- __Coverage__ is measured as the number of statements exercised by the test cases divided by the total number of executable statements in the code
#### Branch testing
* Each transfer of control can be either unconditional (i.e., straight-line code) or conditional (i.e., a decision outcome).
* exercising a branch with a test case will not detect defects in all cases
* This means that any set of test cases achieving 100% branch coverage also achieves 100% statement coverage (but not vice versa).
* __Coverage__ is measured as the number of branches exercised by the test cases divided by the total number of branches
### Experience-based Test Techniques
#### Notes
- In general, errors, defects and failures may be related to
	- Inputs 
		- correct input not accepted
		- parameters wrong or missing
	- Output
		- wrong format
		- wrong result
	- Logic
		- missing cases
		- wrong operators
	- Computational
		- Incorrect operand
		- wrong computation
	- interfaces
		- Parameter mismatch
		- incompatible types
	- Data
		- incorrect initialization
		- wrong type
#### Error Guessing
- anticipate the occurrence of errors, defects, and failures, based on the tester’s knowledge
- Include:
	- application has ==worked in the past==
	- types of errors the developers tend to make and the types of defects
	- types of failures that have occurred in other, similar applications
- Fault attacks
	- ==methodical approach== to the implementation of ==error guessing==
- testers:
	- create or acquire a __list of possible errors__, defects and failures
		- These lists can be built based on experience
	- design tests that will identify defects associated with the errors, expose the defects, or cause the failures
#### Exploratory Testing
- بتعلم ال ابلكيشن من خلال التيستنج 
- Session based, with defined time box.
- this approach test objectives may be treated as high-level test conditions.
- Used when inadequate specs, lose of time.
- Testers use 
	- test charter containing test objectives to guide the testing
	-  may use test session sheets to document the steps followed and the discoveries made.
- as Experience-based Test Techniques it complementary 
* The test session 
	* is usually followed by a debriefing
	* discussion between the tester and stakeholders
* more effective 
	* if the tester is experienced
	* has domain knowledge 
	* has a high degree of essential skills
* __Coverage__ items are identified and exercised during the test session.
#### Checklist-Based Testing
- important for the user, for functional and non-functional 
- become less effective with time 
	- the developers will learn to avoid making the same errors
- tester 
	- designs, implements, and executes tests to cover test conditions from a checklist.
- Checklists ==should not contain items ==that can be
	- checked automatically
	- Items better suited as entry/exit criteria
	- items that are too general
- New entries may also need to be added to reflect newly found high severity defects.
- checklists should be regularly updated based on defect analysis.
	- care should be taken to avoid letting the checklist become too long
### Collaboration-based Test Approaches
- Objective 
	- collaboration and communication, not found defects
#### User Story
- 3 C's
	- Card
		- the medium describing a user story
		- may be represented in Index Card, Electronic board
	- Conversation
		- Explain software used
		- Documented or Verbal
		- __Acceptance criteria__ are usually a result of the conversation
	- Confirmation
		- The acceptance criteria
- The most common format for a user story is “As a [role], I want [goal to be accomplished], so that I can [resulting business value for the role]” Followed by the acceptance criteria.
#### Acceptance Criteria
- conditions that an implementation of the user story must meet to be ==accepted by stakeholders==.
- Acceptance criteria are usually a result of the Conversation
- Acceptance criteria are used to:
	- Scope of user story
	- consensus among the stakeholders
	- ==Positive/Negative Scenario==
	- Allow accurate planning and estimation
	- ==Scenario-oriented (Given/When/Then format used in BDD)==
	- Rule-oriented