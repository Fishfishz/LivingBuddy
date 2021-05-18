### How to obtain the source code:
 - ‘Git clone https://github.com/Fishfishz/LivingBuddy.git’
 
### The layout of the directory structure: 
 - Refer to the layout section in the README for the directory structure
 - Documentation: Fishfishz/LivingBuddy/README.md
 - Tests: Fishfishz/LivingBuddy/LivingBuddy/src/tests
 - Source files: Fishfishz/LivingBuddy/LivingBuddy/src
 - Data files(images etc): Fishfishz/LivingBuddy/LivingBuddy/src/assets
 
### How to build the software:
 - Step 1: to install all the dependencies - `yarn install`
 - Step 2: to build locally: `yarn build`
 - Step 3: to run locally: `npm start`

### How to test the software:
 - ‘Yarn test’
 
### How to add new tests:
 - Test files are named with postfix ”.test.js”
 - Test files name should have the same name as the components or views. For example, if you write a test for testing components “sign-in”, then the test file should be named “sign-in.test.js”
 - Test files should import the library “@testing-library/react”

### How to build a release of the software:
 - Building and Testing are automated in the Travis CI. Once a developer makes an update and pushes to the remote in many branches, it will trigger the Travis CI build system. The developer should wait for the build system to finish and check if the new commit has passed the build system for sanity checks. A developer should not update a version number prior to invoking the build system. A developer should only release the version that has passed the build system and code review.
