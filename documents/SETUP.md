# Web Application Setup and Deployment

## Installing Packages and Initailizing Directories (Local/Dev)

* You WILL need to install [Node](https://nodejs.org/en/download) to run locally, specifically the `npm` command.
* For an automated installation of the npm packages required, run the `npmInstall.sh` script. Otherwise, follow the steps below.


### Front-End

* To initialize the frontend directory, install the node_modules packages. You can do so by the following directions.
* cd frontend
* npm install
* Done, ensure that git marks node_modules as untracked

### Back-End

* To initialize the backend directory, install the node_modules packages. The package files have been configured to dependencies, so you can do so by following the directions.
* cd backend
* npm install
* Done, ensure that git marks node_modules as untracked

### Required .env for local development

* You WILL need two .env files, one in each of the frontend and backend home directories.
* Frontend .env example:
  * VITE_BACKEND_URL="This can be any local host URL, we chose <http://localhost:51710>"
  * VITE_APP_AUTH0_DOMAIN="Auth0 domain obtained from Auth0"
  * VITE_APP_AUTH0_CLIENT_ID="Auth0 Client ID obtained from Auth0"
  * VITE_APP_AUTH0_AUDIENCE="Needs to match VITE_BACKEND_URL"
* Backend .env example:
  * AI_API_KEY="AI API key obtained from Google Gemini"
  * FRONTEND_URL="Needs to match VITE_BACKEND_URL"
  * VITE_BACKEND_URL="Needs to match VITE_BACKEND_URL"
  * SERVER_PORT="51710"
  * MONGO_URI="MongoDB URI used to connect to your MongoDB database"
  * VITE_APP_AUTH0_DOMAIN="Auth0 domain obtained from Auth0 that matches the frontend"
  * VITE_APP_AUTH0_CLIENT_ID="Auth0 Client ID obtained from Auth0 that matches frontend"
  * VITE_APP_AUTH0_AUDIENCE="Needs to match VITE_BACKEND_URL"

## Running Web Application

## Front-End

* To run the frontend side of the web application, consider the following directions.

### Local Development Instructions

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

### Local Development Instructions

* To run the backend server in developer mode, run the following commands.
* cd backend
* npm run dev
* Console/Terminal should say that the server is listening on a port
* Ctrl + c to stop running server

### Deploying Instructions

* We chose [Render](https://dashboard.render.com/login) for deployment which uses the GitHub repository directly. But any service would do as long as its able to connect and communicate with the frontend.

### Notes
* Refer to [our resources page](https://github.com/IvanW5X/CS362-Winter2025-Team20-TalkTask/edit/main/documents/team-resources.md) for all the tools, softwares, APIs, and packages used to build this web application.


