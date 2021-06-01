Team Report: 
- Goals from last week:
  - We would like to complete a prototype for dashboard and calendar schedule
  - We will prepare the presentation for the beta release
- What we have done:
  - We have completed a prototype for dashboard, calendar schedule, as well as the sign in screen and the campus map. We had some difficulties trying to merge these features together, but we have resolved it through meetings and active communication on Slack.
  - We have delivered the presentation for the beta release, where we communicated our reflection on the project’s current progress as well as our plans for the coming weeks.
- Goals:
  - Write the user documentation.
  - Start implementing the remaining features such as the chat thread and the discussion board.


Individual Report:

Frank
- Goals from a week ago: 
  - Finish the basic html and components design and implementation for the calendar scheduler with Andy
  - Add a test suite along with the implementation.
- what you did, what worked, what you learned, where you had trouble, and where you are stuck:
  - I have implemented the table view of the CalendarScheduler and added some fake data for the beta release. I also used the Google Map API from Google Cloud platform to implement the Map page which would show the University of Washington area. I was having trouble implementing the sign-in and sign-out function, specifically adding the Google firebase library into our project. I was able to figure out by resetting the react version in the dependencies. 
- Goals for the following week: 
  - Finish the implementation of CalendarScheduler with Andy
  - Add more tests for CalendarScheduler
  - Add more documentation for users and developers

Yazan
- Goals from a week ago:
  - I will be working with Chris to finalize the dashboard UI and start the coding part for it.
  - I will also be working on our next assignment.
- what you did, what worked, what you learned, where you had trouble, and where you are stuck:
  - I worked on the implementation of the Dashboard feature of our web-app alongside Chris. I integrated our firebase Realtime database with it so that everytime a user inputs the event information, it is stored in the firebase db and then fetched right away so that it can be displayed as a card on the dashboard.
- Goals for the following week: 
  - I will start working on the chat feature of our webapp
  - Keep the living document updated

Andy
- Goals from last week: 
  - Basic html design for Calendar Schedule with Frank
  - Meet during weekend
  - Next week: create the landing page for Calendar Schedule.
- What I have done:
  - Worked on the reflection slides for the presentation for beta release. Summarized our original plans and changes to the plans for process/timeline, architecture/design, and testing/tooling.
  - Contributed to the presentation on the login feature, the calendar schedule feature, and the overall reflection. 
- Goals:
  - Continue implementing Calendar Schedule
  - Create landing page for Calendar Schedule

Chris
 - Goals from last week:
   - Implement the prototype for the dashboard
   - Prepare for the beta release presentation 
 - What I have done:
   - I have collaborated with Yazan to successfully implement the prototype for the dashboard. While it could potentially have more features, we focused on the single use case, which was for the RA to be able to post events. We have worked on this through pair programming, where we verbally gave each other ideas of how to write the code to communicate with the database, as well as rendering the events that were stored in the database. When we faced issues such as compilation errors, we looked for relevant articles according to the error message until the webapp successfully compiled.
   - I have contributed to the presentation by talking about the features of the dashboard we have implemented, and what our(me and Yazan) goal is for the upcoming weeks, which is to implement the chat thread.
 - Goals:
   - Start working on implementing the chat thread, whose prototype we plan to complete by 5/25.
   - Contribute to the documentation
