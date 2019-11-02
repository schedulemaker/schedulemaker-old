## Project Abstract
Creating schedules every semester is a stressful and time-consuming process, especially with the unintuitive way TU Portal displays class data. This application uses a public facing version of the Self-Service Banner class search function to obtain data on classes and present it in a more useful format. Users input their desired classes and the application will present a calendar-view of the different possible schedules with those classes. This goes a step further than tools such as Coursicle, which still force you to manually select classes and figure out which ones work together.

![schedulemaker](https://user-images.githubusercontent.com/36493057/65994158-afdcfe80-e460-11e9-9673-721ce5b85e96.png)
![schedulemaker-class](https://user-images.githubusercontent.com/36493057/65994160-afdcfe80-e460-11e9-9a8b-69f60add02c4.png)

This project already has some previous foundational code that can be viewed [here](https://github.com/paulhutchings/tu-schedule-maker). The existing code is written in JavaScript for NodeJS, but it does not have to stay that way.

## Project Relevance
This project is relevant to the goals of CIS 3296 as it incorporates many topics and concepts, including, but not limited to:
*	Testing (and Test-Driven Development) - since we are relying on outside actors, unit testing will play a big role in ensuring that the data the application receives is correct. It will also be necessary to test the schedule-generating algorithm to ensure that it does work as intended.
*	Database access - While optional, I believe that this project could benefit from integrating with a database, to hold the data in a more usable and easily accessible format to be used by the application.
*	UML - various types of UML diagrams can be created to illustrate and plan the architecture of the application before code is written, saving time and hassle.
*	Design patterns - There are several problems facing this application that may be solvable with existing design patterns.
*	Version control - I would like to see this project extend into the future beyond this class, which means adding new features, and maintenance. This requires keeping track of different version as new features and fixes are developed.
The project would be available for students to use once completed, and the principles learned in this class could be further applied to refine and improve the software by adding new features.

## Conceptual Design
There are several parts to this project. The core element that drives it is the algorithm that creates the schedules. There is a back end, which includes sending requests to the Temple server to keep the data up-to-date, parsing the HTML responses (the server won't return anything else, I've tried), and potentially putting the data into an intermediate database to have on-hand for the application. The front end would be one or more web pages to provide the application with a user interface to collect input and display the results.
I am able to work on any aspect of the project, though I feel I would be most equipped to implement the algorithm and parts of the back-end, as I do not have very much experience in front-end web design.

## Required Resources
- Group members 
   * Knowledge of front-end web design and databases/cloud services
- Hardware and software resources required:
  * Server/hosting (consider AWS/cloud)

## Insights, Feedback and Team Member Expections
x

### Alexa Delacenserie:
x

### Chris Bilger:
x

### Davis Samuel:
x

### Paul Hutchings:
x

### Paul Pesnell:
x

## Project Documentation Overview
Below is a list of the programming languages used in this project and a rough outline of where they are being used.
- AWS for hosting and backend
- Bootstrap (v4.3.1) for front-end UI
- Node.JS (v10.16.3): JavaScript framework as the backend and database for the web application
- Mocha (v6.2.2) for unit testing
## Development Environment Overview
x

## Vision Statement

For Temple University students who need assistance planning course schedules. ScheduleMaker is a minimal web application that displays multiple scheduling options based on course selections, unlike Temple's current registration system. Our product will produce all possible schedules based on the courses requested, removing the need for students to figure out all their schedule options manually.

## Feature List
x

## Personas (1 for each team member)
1. Patrick is a computer science student at Temple's main campus. He loves to find the most efficient use of his time and would like to customize his course schedule as much as possible. Patrick's criteria is the follow: no courses before 10 am, no courses after 5 pm, and if possible only having to be on campus 3 days per week.

2. Megan is a business major at Temple Japan. She is not very 'technologically' savvy and is vitising the Schedule Maker web application for the first time. She also did not plan this well so she only has 1 hour to find a schedule for herself before the deadline approaches. Megan likes very simple, minimal user-interfaces and shies away from any complex technology.

3. Amanda works at Buffalo Wild Wings on the weekends and her manager is persistent in her ability to keep her schedule as open as possible. Amanda lives on campus at Temple's main campus. She does not care how many days she has to work, as long as she is off campus by 4 PM everyday. This is a manditory requirement for her schedule.

4. Ryan is a Temple University senior and is commuting from Trenton, NJ. His commute time is about an hour so his main scheduling criteria relies on minimizing the amount of individual days that he has to spend commuting. Ryan would prefer to spend 3 longer days on Temple's main campus over 5 shorter days, because of the hour commute time each way. His only schedule conflict lies minimizing this criteria.

5. Sam is a 20 year old Temple University sophmore is interested in changing majors and wants to con firm that their new major requirements will fit into a schedule. She lives half way between Temple's main campus and Temple's Ambler campus. If possible, she would like to prioritize the Ambler campus, while still leaving open the option to go into the city for courses that aren't available at the Ambler campus.

## Updated Project Proposal
x
