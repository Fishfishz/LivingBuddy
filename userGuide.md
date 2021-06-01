### A high-level description:
 - This web-application is built for university students who are also residents of one of the supported dorms by our app. Currently our web app is in the development phase so it does not support multiple dorms or universities. This Web-app basically provides students a platform to be updated about the events going on around campus and their dorm and also provides a convenient way to book the laundry machines and study rooms. 
 - The Web-app features a dashboard where all the events are posted and also a login page where students can sign up with their UW emails. In the future, We are working on a Chat and calendar feature for our app.  
### How to install the software:
 - There is no installation required to use our web-app as it is on the web. 
### How to run the software:
 - Just go to our URL link and users can start using the website.
### How to use the software:
 - On the welcome page, The website asks users to Sign up or sign in using a UW email account, after that the first page user sees is Dashboard where all the events that are posted by the RA are posted. The user can navigate to another page through the bar on the left side of the screen.
 - The user will see the calendar and chat options on the left bar which are currently under development.
### How to report a bug:
 - Please provide us with the following information
   - A screenshot of the behavior/error message if applicable
   - A qualitative description of the use case that failed, as well the unexpected behavior that occurred, so that the bug can be reproduced
### Known bugs
 - Resolved: 
   - The events being sent to the database has blank content regardless of the input. It turned out that we used the wrong variable name
   - The dashboard component re-renders too frequently. We resolved this by calling setEvents only if a change is made to the textboxes.
 - Unresolved:
   - The events can be added by non-RAs because the distinction is not made yet. We will have to implement this soon.
