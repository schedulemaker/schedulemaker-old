# ScheduleMaker Proposal

## Project Abstract
Creating schedules every semester is a stressful and time-consuming process, especially with the unintuitive way TU Portal displays class data. This application uses a public facing version of the Self-Service Banner class search function to obtain data on classes and present it in a more useful format. Users input their desired classes and the application will present a calendar-view of the different possible schedules with those classes. This goes a step further than tools such as Coursicle, which still force you to manually select classes and figure out which ones work together. 

In addition, there are other options regarding days of the week, times, and professors that allow students to narrow down the results to find a schedule that best suits their needs.

![schedulemaker](https://user-images.githubusercontent.com/36493057/65994158-afdcfe80-e460-11e9-9673-721ce5b85e96.png)
![schedulemaker-class](https://user-images.githubusercontent.com/36493057/65994160-afdcfe80-e460-11e9-9a8b-69f60add02c4.png)

This project will build upon the already-existing code from the repository [here](https://github.com/paulhutchings/tu-schedule-maker). Basic functionality will be implemented first, with more complicated options for end-users added as they become stable.

## Project Relevance
This project is relevant to the goals of CIS 3296 as it incorporates many topics and concepts, including, but not limited to:
*	Testing (and Test-Driven Development) - since we are relying on outside actors (such as the Temple servers), unit testing will play a big role at every step to ensure that the flow of data is correct. It will also be necessary to test the schedule-generating algorithm to ensure that it does work as intended.
*	Database access - The project will utilize a database to store to class information in a more usable format from which our front-end can query easily for fast, succinct results.
*	UML - various types of UML diagrams can be created to illustrate and plan the architecture of the application before code is written, saving time and hassle.
*	Design patterns - There are several problems facing this application that may be solvable with existing design patterns.
*	Version control - This project has the potential to expand to more universities outisde of just Temple. In order to manage this, we will need to keep track of different versions, branches, and modules that may or may not be specific to certain universities.

## Conceptual Design
There are several components to this project:
* The algorithm that creates the schedules 
* The back end, which performs the following functions:
   * Send periodic requests to the Temple server to keep the data up-to-date
   * Parse the HTML response form the server
   * Interact with the database
   * Respond to requests from the front-end
* The front-end, which provides an intuitive UI for students to input classes, customize available options, and display results in an easy-to understand format

## Required Resources
* AWS services:
   * DynamoDB for database
   * Lambda for back-end code
   * S3 for front-end hosting
   * API Gateway to create and API for the front-end to use to access the back-end
* Knowledge
   * AWS
   * Front-end web development
   * Javascript
   * Database systems/schemas
