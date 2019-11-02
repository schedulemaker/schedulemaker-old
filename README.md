# ScheduleMaker ReadME
[Click here for the Updated Project Proposal](https://github.com/3296f19temple/schedulemaker/blob/readme/Proposal.md)

## Project Documentation Overview
Below is a list of the programming languages used in this project and a rough outline of where they are being used.
- AWS for hosting and backend
- Bootstrap (v4.3.1) for front-end UI
- Node.JS (v10.16.3): JavaScript framework as the backend and database for the web application
- Mocha (v6.2.2) for unit testing
- AWSCLI (v1.16.272) for interacting with the AWS cloud services through Python (2/3)

## Development Environment Overview
Apart from the required programming language versions and the above versions, we will be using Local Stack version 0.10.3. I specific IDE is not requried for this project because all of the work done will be done through Local Stack for AWS testing and through cliet-code scripting languages (HTML, CSS, JS, Python).

## Vision Statement
For Temple University students who need assistance planning course schedules. ScheduleMaker is a minimal web application that displays multiple scheduling options based on course selections, unlike Temple's current registration system. Our product will produce all possible schedules based on the courses requested, removing the need for students to figure out all their schedule options manually.

## Feature List
Scheduling by the following criteria:
- Which preferred days of the week (MTWRF) you would like your courses to be on
- Which campus or campuses you should search for courses on
- Start and ending times for courses
- Professor preference
- Course prioritization (IE If you have the option for two different courses and only need to take one)
- Import course-list
- Export a list of CRN's to copy and paste into the Temple University registration web interface
- Mobile UI layout vs. Desktop UI layout (mobile-friendly approach to UI)

## Personas (1 for each team member)
1. Patrick is a computer science student at Temple's main campus. He loves to find the most efficient use of his time and would like to customize his course schedule as much as possible. Patrick's criteria is the follow: no courses before 10 am, no courses after 5 pm, and if possible only having to be on campus 3 days per week.

2. Megan is a business major at Temple Japan. She is not very 'technologically' savvy and is vitising the Schedule Maker web application for the first time. She also did not plan this well so she only has 1 hour to find a schedule for herself before the deadline approaches. Megan likes simple user-interfaces and shies away from any complex technology.

3. Amanda works at Buffalo Wild Wings on the weekends and her manager is persistent in her ability to keep her schedule as open as possible. Amanda lives on campus at Temple's main campus. She does not care how many days she has to work, as long as she is off campus by 4 PM everyday. This is a mandatory requirement for her schedule.

4. Ryan is a Temple University senior and is commuting from Trenton, NJ. His commute time is about an hour so his main scheduling criteria relies on minimizing the amount of individual days that he has to spend commuting. Ryan would prefer to spend 3 longer days on Temple's main campus over 5 shorter days, because of the hour commute time each way. His only schedule conflict lies minimizing this criteria.

5. Sam is a 20 year old Temple University sophmore is interested in changing majors and wants to confirm that their new major requirements will fit into a schedule. They live halfway between Temple's main campus and Temple's Ambler campus. If possible, they would like to prioritize the Ambler campus, while still leaving open the option to go into the city for courses that aren't available at the Ambler campus.
