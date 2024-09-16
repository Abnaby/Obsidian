### Static Testing Basics
- software under test does not need to be executed
- Static testing can be applied for both verification and validation.
- Testers, business representatives and developers work together in static analysis.
	- it is recommended to involve a wide variety of stakeholders in static testing
- identify problems prior to dynamic testing
- no test cases are required, and __tools are typically used__
- any work product can be examined using static testing (Including source code itself)
	- Code defects can be detected using static analysis more efficiently than in dynamic testing,
- static analysis, work products need a structure against which they can be checked using CI
- WP not appropriate for static testing include those that are difficult to interpret by human beings
- Static testing can detect defects in the earliest phases of the SDLC
- also identify defects which cannot be detected by dynamic testing 
	- unreachable code
	- design patterns not implemented as desired
	- defects in non-executable work products
- Static testing provides the ability to ==evaluate the quality==
- reviews can be costly to implement, the overall project costs are usually much lower than when no reviews are performed
(ال  reviews غاليه بسسس لو في reviews هتكون ال cost اقل في اكتشاف ال bugs عن ان يكون ال reviews متاخره او مش موجوده ).
- Early test design takes more effort. (==FALSE==)
	- Static testing may more easily detect defects
- Static testing finds defects directly, while dynamic testing causes failures
- measure quality characteristics that are not dependent on executing code (e.g., maintainability),
### Feedback and Review Process
#### Benefits of early testing 
* A failure to deliver what the stakeholder wants can result in costly rework, missed deadlines, blame games, and might even lead to complete project failure.
* Frequent stakeholder feedback throughout the SDLC can prevent misunderstandings.
* allows developers to focus on those features that deliver the most value to the stakeholders and that have the most positive impact on identified risks.
#### Review Process Activities
- Planning 
	- Define scope of the review
	- quality characteristics to be evaluated
	- exit criteria
	- effort and the timeframes for the review
- Review Initiation
	- make sure that everyone and everything involved is prepared to start the review
	- every participant has access to the work product under review
- Individual review 
	- . Every reviewer performs an individual review to assess the quality
	- identify anomalies, recommendations, and questions by applying one or more review techniques
		- checklist-based reviewing
		- scenario-based reviewing
	- The reviewers log all their identified anomalies, recommendations, and questions.
- Communication and analysis.
	- all these anomalies need to be analyzed and discussed
	- every anomaly must have 
		- the decision should be made on its status
		- ownership 
		- required actions.
	-  the participants also decide what the quality level and what follow-up actions are required.
	- A follow-up review may be required to complete actions.
- Fixing Report
	- Once the exit criteria are reached, the work product can be accepted.
	- The review results are reported
#### Roles and Responsibilities in Reviews
- __Manger__
	- decides what is to be reviewed
	- Provide Resources (Staff + Time)
	- المانجر مثلا بيقول هنعمل review ل واحد اتنين تلاته خلال شهر وبس خلاص وهو اللي بيحدد طبعا ال work product 
- __Author__
	- creates and fixes the work
	- ال author دا صاحب ال work product يعني لو كان كود ف هو ال developer لو كان user story فدا ال PO ولو كان test cases فهو بتاع ال Testers وهكذا
- __Moderator ( Facilitator)__
	- ensures the effective running of review meetings including
		- mediation
		- time management,
		- safe review environment
	- دايما بيكون شخص friendly عشان هو اللي بيدير العركه ساعت ال meeting وبيعمل Organize خلال الميتنج بس
- __Scribe (Recorder)__
	- collates anomalies from reviewers
	- records review information
	- الباشكاتب 
- __Reviewer__
	- performs reviews.
	- expert or any other stakeholder
	- دا اللي بيعمل review علي ال author 
- __Review leader__
	- takes overall responsibility such as
		- who will be involved
		- organizing when and where the review will take place
	- دا اللي بياخد كلام ال مانجر وينفذو يعني مثلا بيقرر مين هيكون involved في review بيعمل organize لكلام المانجر في العموم 
#### Review types

|                       | __Informal review__                   | - __Walkthrough__                                                                                      | __Technical Review__                                            | Inspection                                                       |
| --------------------- | ------------------------------------- | ------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------- | ---------------------------------------------------------------- |
| Led by                | No specific leader                    | ==led by== the author                                                                                  | ==led by== a moderator                                          | Moderator (not the author)                                       |
| objectives            | main objective is detecting anomalies | serve many objectives<br>- evaluating quality<br>- educating reviewers<br>- Generate new ideas         | gain consensus and make decisions regarding a technical problem | The main objective is to find the maximum number of anomalies    |
| author act as scribe. | Yes                                   | Yes                                                                                                    | Yes                                                             | No                                                               |
| Notes                 |                                       | Reviewers might perform an ==individual review== before the walkthrough, but this is ==not required==. | 1. performed by technically qualified reviewer<br>              | 1. most formal type of review<br>2. complete generic process<br> |
| Formal Documentation  | Not require                           | Not require                                                                                            | Not require                                                     | Required                                                         |
| In Arabic             | بالحب                                 | بالحب بس ممكن قبل ما نتجمع كل واحد يعمل individual review                                              | برا عن ال stakeholders                                          | زي ما يقول الكتاب                                                |
#### Success Factors for Reviews
* Define Clear Objective, Entry, and Exit Criteria
* ==Evaluation of participants== should never be Objective
* Conducting reviews on small chunks ----> Conducting reviews on small chunks
* Providing feedback from reviews to stakeholders and authors so they can improve the product
* Providing adequate time to participants to prepare for the review (اللي هو مش يلا ميتنج دلوقتشيييي)
* Providing adequate training for all participant
* Facilitating meetings