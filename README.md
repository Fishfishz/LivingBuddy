# LivingBuddy

### Project Idea:
For those living on campus… have you ever went all the way done to the first floor for exercising but found out that all the equipment is in use？Have you ever had a burning question for your RA but did not know how to reach them? Have you ever had an exam in the morning but cannot fall asleep because upstairs was drumming? The living buddy is here for you! It’s an app to tell you the status of the utility equipment/rooms in your dorm, to get you up to date with everything you need to know about your dorm, and to get you connected with RAs and fellow students.

### Project Goals:
LivingBuddy will have the following functionalities:

- Dashboard - designed to announce upcoming student events, alerts, monthly newsletter, and policies. 
- Chat Thread - designed for students to communicate and help to form the living community. The idea comes from slack. 
- Discuss Board - designed for students to post anecdotes, concerns or whatever they want, for example like, I found the light in the garbage room is out of work, or the building is way too cold.
- Calendar Schedule - Indicating whether the public service (washing machine, piano room, game area, etc.) is in use. Students who are using any service need to register the status for it on the website. 

### Layout of the repository:
- reports - This folder contains the weekly reports that are due 22:00 every Wednesday.
- LivingBuddy - This folder contains the code for Living Buddy Web App
### How to build and test the system:
```
cd LivingBuddy
yarn install
yarn build
yarn test
```
### How to run the system:
```
npm start
```
## Available Scripts

In the project directory, you can run:

### `npm install`

Installs any packages and dependencies.

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

