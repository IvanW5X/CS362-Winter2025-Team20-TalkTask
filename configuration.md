# Directions For Web Application

## Installing Packages and Initailizing Directories (Dev)

## Front-End

* To initialize the frontend directory, install the node_modules packages. You can do so by the following directions.
* cd frontend
* npm install
* Done, ensure that git marks node_modules as untracked

## Back-End

* To initialize the backend directory, install the node_modules packages. The package files have been configured to dependancies, so you can do so by following the directions.
* cd backend
* npm install
* Done, ensure that git marks node_modules as untrackde

## Running Web Application

## Front-End

* To run the frontend side of the web application, consider the following directions.

### Developer Instructions

* To run the frontend application in developer mode, run the following commands.
* cd frontend
* npm run dev
* o + enter to open website
* q + enter to stop running

### Deploying Instructions

* To deploy and convert the frontend application into HTML, CSS, and JavaScript, run the following commands.
* cd frontend
* npm run build
* Locate dist directory and ensure it exists
* npm run preview to ensure functionality is as desired
* Deploy the dist folder to a web server hosting application, we used Netlify, but any tool would suffice

## Back-End

* To run the backend side of the web application, consider the following directions.

### Developer Instructions

* To run the backend server in developer mode, run the following commands.
* cd backend
* npm run dev
* Console/Terminal should say that the server is listening on a port
* Ctrl + c to stop running server

### Deploying Instructions

* To deploy the backend server, find a backend web service hosting platform of your choice and follow the instructions the platform provides. We are using Render to do so, consider the following directions to deploy it
* Create a Render account and link the git repository to the project, selecting the provided free plan
* Select Node as the backend and set the root directory as ./backend
* Choose npm install for the build command
* Choose npm run start for the start command
* Render should now be building your backend project and will provide a link that the client side will need to make API calls
* Create and add to the .env file in Render, more details for which variables to add will be provided soon

## Additional Notes

* To store and hide your own API key and other sensitive information, consider the following directions.
* cd path/to/project/directory
* Add a .env file to the project root directory
* Add "AI_API_KEY=API_KEY" to the .env file and replace API_KEY with the actual API key
