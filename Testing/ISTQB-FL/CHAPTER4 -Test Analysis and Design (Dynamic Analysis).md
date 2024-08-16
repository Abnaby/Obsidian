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
### Experience-based Test Techniques
### Collaboration-based Test Approaches
