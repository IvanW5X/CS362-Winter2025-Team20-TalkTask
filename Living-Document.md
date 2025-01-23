# Project: TalkTask  
## Your Personal To-Do List Tracker

### Abstract:
TalkTask is a web application that utilizes speech recognition to streamline to-do list management. Using speech recognition, we are able to allow users to add, remove, prioritize, and even schedule daily tasks with simple voice commands for multiple languages including, but not limited to English, Spanish, French, and more. Designed with accessibility and flexibility in mind, TalkTask provides a hands-free and user-friendly experience across various devices such as desktops and mobile devices. The platform prioritizes ease-of-access for all users and user privacy, ensuring secure handling of voice input. Stretch goals or future iterations aim to implement a database to allow users to save and store their tasks after going offline, and set reminders for upcoming tasks if given a time requirement.

### Overall Goal:
The goal of our application is to improve accessibility to users while allowing users to maintain an optimal lifestyle where they can efficiently plan their day. Our application addresses the issue of accessibility in current to-do list applications. Users today are required to interact with a mouse, keyboard, touchscreen or something similar in order to use such an application. But with our application, by using voice input and voice commands, our application aims to help users perform the essential features of a to-do list application through manual hands-on input and voice input.

### Major Goals:
1. Utilize speech recognition to allow for ease-of-access for to-do list management.
2. Implement a database to store past list items and provide external storage for user tasks.
3. Use an AI model to recommend tasks based on previous tasks.
4. Implement a simple, but clean UI, so users can uitilize the full capabilities of TalkTask easily.

### Stretch Goals:
1. Implement reminders for timely tasks to increase the success rate of tasks being completed.  
2. Extend AI API functionality to process natural language and allow users to communicate naturally to our speech recognition system and convert their commands into a dedicated function for the to-do list management system.
3. Gamify the web application to keep current users engaged and promote continuation of using the app into continuing using our app for productivity. 

### Current Practice:
The current practice of today is that users can add and delete tasks, set start or due dates, provide descriptions for the tasks and mark them as completed or incomplete. Tasks can also be categorized into different groups for it to be more easily visualized. Organization of the tasks can depend on due date, priority or status. While these are useful, there are many limits to this current practice. Most of the modern-day to-do list applications require manual input. Requiring users to interact with a mouse, keyboard, touchscreen or something similar. These types of interactions can be inaccessible to many people, especially to those with physical disability in their hands. For example, typing tasks and marking/clicking tasks. It also requires the user to focus on the screen to see what they are doing. Which can be an inconvenience when a hands-free option may be preferred.  

### Novelty:
The to-do list is a powerful tool that can be used to help organize, categorize, and optimize a given time period. In our current day, there are many different versions of the to-do list on the market today; including some made by major corporations like Microsoft and Apple. Our team is aiming to create a to-do list that can be tailored to a user-specific time period. We aim to create a UI that is accessible to all users, while putting a unique touch. We plan to implement a database that can be utilized in creating user task suggestions, aiding in user productivity and usability. We plan to implement a speech recognition API that allows users to speak their goals into the page, as well as navigate through menus and actions with their voice.

Our to-do list will be different in the way that it will draw from many common day practices of the present to better aid the person in their own daily lives. The to-do list can be utilized beyond a simple stack of deliverables, and we feel that it can be used to help organize much more than one’s day. Using modern day technology, we are able to create a product that seperates us from other competitors by using speech recognition, AI models, and a database to give users access to a personal to-do list that works on various devices, free of charge.

### Effects: 
As with other to-do list applications, ours will help users plan their time efficiently. However, TalkTask also has greater accessibility for users, due to the speech recognition. People with disabilities will find it easier to use compared to traditional lists, and not all applications have this accessibility option. Non-native speakers will also have their experience improved, as there are multiple language options. Our application focuses on accessibility first, as that is very important for software that a lot of different people might use. Because of this focus on efficiency and accessibility, multitaskers will also enjoy using the software. They can use voice recognition to quickly create and edit lists, compared to the more traditional, slower applications. We want to create an application that is simple to use but that also accompanies different types of users. If successful, our application will be easier to use than previous to-do lists and address previous accessibility concerns.

### Use Cases:
* **Case Designer:** Ivan Wong
* **Actors:**
    * User interacting with the website.
* **Triggers:**
    * The user wants to access a specific feature of section within the web application without unecessary steps or confusion.
* **Preconditions:**
    * User's device is connected to the internet or has internet access.
    * User has launched TalkTask web page.
    * The navigation system is operational
    * The web page is responsive to user input.
* **Postconditions:**
    * The user is directed to the intended section or feature they requested.
    * The navigation system remains operational after navigating to their desired section or feature.
* **List of steps:**
    1. The user opens the TalkTask web page.
    2. The user interacts with the navigation system, such as clicking a button or using speech recognition to access sections or features.
    3. The system processes the input correctly and provides feedback, expected section, or expected feature for the user.
    4. The user is able to access the desired content or functionality with minimal effort.
* **Extensions/variations of the success scenario:**
    * The user uses buttons to navigate through specific sections or features within the system.
    * The user uses the keyboard and shortcuts to navigate through the web page and sections with ease.
    * The user uses speech recognition to let the web page process voice commands into navigation to specific sections or features within the system.
* **Exceptions (failure conditions and scenarios):**
    * Broken links or buttons that lead to 404 error page; displays a message to refresh page or try again later.
    * Slow loading, so navigation is delayed due to poor internet connection; system displays a loading spinner or error message.
    * Unresponsive navigation system, where the web page does navigate to section as intended; prompted to refresh page.
    * Unclear navigation system, where buttons or labels are confusing; an additional tooltips pop-up or page is provided to help guide users through webpage.
<br>

* **Case Designer:** Tristan Vosburg
* **Actors:**   
   * All users
* **Triggers:**   
   * When a user access the application for a second time
* **Preconditions:**  
   * The user has their schedule saved on a server and it can be accessed as needed.
* **Postconditions:**  
   * If a user accesses the file on their account for the second time, all the info they wrote on the last use is still present.
* **List of steps:** 
   * Log in to the application for the first time.  
   * Input an event
   * Save
   * Log Out
   * Log In at a later time
* **Extensions/variations of the success scenario**
   *  User inputs should continue to be tracked and saved through any number of logins.
* **Exceptions: failure conditions and scenarios**
   * If the user doesn't save, their inputs won't be saved.
<br>

* **Case Designer:** Nicholas Woodley
  * As a user, I want to remove tasks using voice commands so that I can update my to-do list hands-free when my tasks are completed.
* **Actors:**
  * All users
* **Triggers:**
  * The user activates the voice command to remove a task
* **Preconditions:**
  * The user has an internet connection
  * User is logged in
  * The task to be removed exists
* **Postconditions:**
  * The specific task is removed from the to-do list
  * The updated list is displayed without the removed task
* **List of steps:**
  1. User activates voice command on application
  2. User speaks the command
  3. TalkTask processes the command and identifies which task is supposed to be removed
  4. TalkTask checks if the task exists
  5. If the task exists, then it is removed
  6. The application displays the updated to-do list
* **Extensions/variations of the success scenario**
  * User gets confirmation to remove before the task is deleted
  * User can specify multiple tasks to be deleted
* **Exceptions: failure conditions and scenarios**
  * Task not found: if no task is found, then the system will notify the user that the selected task does not exist
  * Multiple tasks with similar name: If multiple tasks exists with similar names, the system will ask the user to clarify which task to remove
  * No tasks exist: the system will notify the user that no tasks exist
  * Speech error: the system will ask the user to repeat their command

<br>

* **Case Designer:** Kai Lindskog-Coffin
* As a college student who is actively trying to budget and save money, I want to be able to track recurring payments and subscriptions on TalkTask.
* Actors: College student who needs to cut down on costs/ be more conscious of their spending.
* Triggers: The user needs to monitor their spending, as well as when and where their money is leaving their account.
* Preconditions: 
  1. User has access to TalkTask. 
  2. Application is connected to the internet.
  3. The user has created an account.
* Postconditions: 
  1. A task for the recurring payment or subscription is created.
  2. Task is stored in database.
* List of steps:
  1. User opens TalkTask.
  2. User logs into TalkTask
  3. User can either speak or manually enter their recurring payment/subscription as a task.
  4. User can specify when this bill is due (e.g. monthly, weekly, yearly, etc.)
  5. System creates the task.
  6. Task is stored in the database and registered to the user.
  7. TalkTask will remind them to pay it next month.
* Extensions/variations of the success scenario:
    Users can add multiple recurring payments at once, each being registered as separate bills.
* Exceptions:
  1. Recurring payment was canceled and not updated in TalkTask.
  2. User does not enter a recurring date of payment.
<br>

* **Case Designer:** Raymond Cen
* **Actors:** Student
* **Triggers:** The student has many assignments due this week.
* **Preconditions:**
    * The student is already enrolled in classes with assignments to complete.
* **Postconditions:**
    * The student can mark tasks as complete or update them.
* **List of steps:**
  1. The student logs into the system using valid credentials.
  2. The student creates a new task.
  3. The application adds the task.
  4. The student can create, edit, delete, mark them as complete and rearrange the order of tasks by due date or priority.
* **Extensions/variations of the success scenario**
  * Student can set special reminder notifications such as weekly quizzes.
* **Exceptions: failure conditions and scenarios**
  * The student leaves in the middle of the creating a task.
  * The student does not meet the deadline of the assignment.
<br>

* **Case Designer:** Bailey Bundlong
* **Actors:** The user who is a student
* **Triggers:** They have been given a homework assignment
* **Preconditions:** They have access to TalkTask
* **Postconditions:** An entry in TalkTask has been made for their homework assignment
* **List of steps:**
  1. User opens the TalkTask application
  2. User logs into Talktalk
  3. From the home screen, user clicks on create new task button
  4. User fills in data fields in task creation window
  5. User clicks out of the task creation window
  6. Task is created and saved
* **Extensions/variations of the success scenario** User duplicates or edits existing task to track new task.
* **Exceptions: failure conditions and scenarios**
  User enters invalid data into task creation fields, and is presented an error.
  User decides that Talktask is able to sufficiently track their task, and leaves.
<br>

* **Case Designer:** Jordan L Cowan
* **Actors:** Users want to add a task hands-free.
* **Triggers:** The user prefers to use speech-to-text.
* **Preconditions:** The user has pressed the button to enable speech-to-text.
* **Postconditions:** The user can speak and it will be transferred to text and create a task for the user.
* **List of steps:**
  1. The user presses the speech-to-text button 
  2. The user says their tasks
  3. The system recognizes the speech and converts it to text
  4.The system parses the text input to identify the parameters (the task, due date, type)
  5. The task is created using the parameters.
* **Extensions/variations of the success scenario**
   * The user pauses mid-sentence and the system prompts for clarification
   * The user keeps talking and doesn’t realize the speech-to-text is still running any excess text is filtered
* **Exceptions: failure conditions and scenarios**
   * If the voice input isn’t recognized then provide a prompt for retrying or manual input if it can’t.
   * Background noise interference then prompt the user to try again in a quieter environment.


### Non-functional Requirements:
* When code is deployed for users to access, it should be kept and maintained with security in mind. Users will not be able to access the database and data will not be shared with any third-parties. Bad-faith actors shouldn't have easy access to any holes.
* The application should work across all devices ranging from desktop to mobile phone. All features including the voice input and UI should seamlessly work across all platforms.
* The application should be able to handle a large influx of users. There should be minimal peformance issues and the application should stay functional and responsive if lots of users are using it.

### External Requirements:
* **How we’ll host the application for users to access:**
    * TalkTask will be divided into two servers to seperate concerns for modular, and scalable software. Deployment tools will include Netlify for the frontend server and backend deployment tools are still being researched to find open source tools that are free to use and fit our use cases.
* **How we’ll handle errors, invalid user inputs, etc:**  
    * For WebSpeechAPI, when the user uses the voice input feature it will check if the command given matches any of the current commands. If not it will reprompt the user, asking the user to say the command again. But if it does match a functionality, it will prompt a confirmation screen while keep the voice input on. That way the user can confirm the action by saying "yes" or "no".
    * For the database, if the connection with the database fails a notification will popup to alert the user that their data cold not be retrieved. We'll ask the user to refresh the page and if the issue presists, we'll ask the user to contact the database develoepr or backend developer to resolve the issue.
    * For adding a task, without using the WebSpeechAPI and manually typing into it, if the user exits out the add task menu without saving the task, it will prompt the user with a confirmation notification only if they have filled in a field. If the user exits out the webpage when adding a task then the task will not be added. If the user accidentally hits the "remove task" button, a confirmation notification will pop up, so they don't immediately remove a task. If they are editting a task, just like adding a task, a confirmation will pop up if they try to exit out only if something has been changed from the original task.
* **How we’ll allow others to setup their own instance of our application:**
  * Refer to configuration.md in our git repository.
* **How we'll take external feedback:**
  * We will have a section/page that is dedicated for feedback. It will contain two fields, an email and textbox. The user will have to enter a valid email address and a message that they want to send to the developer.

### Technical Approach:
Our web application will be implemented using many frameworks and APIs, such as the React framework for frontend development, the Vite build tool for efficient builds and improved performance, JavaScript for backend/business logic, and (hopefully) Netlify to publish our website onto the internet. The main component of the project will be based on the WebSpeech API, which will be used to get input from the user, so that our program will be able to parse it and handle the commands given. We will split up the user interface into components for a modular design, so that with each sprint, we are able to integrate changes and features seamlessly and effectively. Additionally, we will use tools like MongoDB to implement a database and user accounts to store tasks onto the cloud, so that users will be able to exit and return to the application with their previous session data saved on other devices. Another feature we plan to implement will include the use of an open source AI model to recommend tasks based on user's previous task history, to a provide more personalized product for our users. Collaboration and communication will be done via Git, MS Teams, Zoom, text messages, and in-person meetings to increase productivity and push changes into the codebase. Other tools, such as Figma are will be used for a reference as to how our web UI will be designed, so that there’s no room for ambiguity for how the UI shall be implemented. Further research will be conducted by our software configuration coordinator (Ivan) to provide tools that will make our lives as developers easier.

### Risk:
There are a few risks facing our group as we attempt to design, create and implement this application. We have worked together as a group before, so underestimating the work required to complete certain tasks could impose deadline risks. To avoid this problem, we plan on setting checkpoints for what we expect to have completed each week. Additionally, each checkpoint will have small tasks associated with it. Each group member will be responsible for completing their small tasks. At each stand-up meeting, the status of each small task will be checked in to see if help is needed, changes need to be made, or if our stretch goals can be attempted because we are ahead of schedule. Our second challenge is implementing a user database so that separate users can use the application, along with state being preserved between uses and devices. To minimize the risk of difficulty of this task, we will ensure that team members with skills in database managment or have previously taken a database course at OSU will be responsible for leading the database development side of things. The third risk we will come across is implementing the main features with the WebSpeechAPI and the open source AI model. These will impose risks because our program must be able to handle all to-do list functionality through speech, so being able to parse and process voice commands will be a challenge. Adding AI features will also include another layer of complexity because our program must be able to handle the AI processing data and producing tangible results that we as developers, must be able to verify with unique test cases. Our plan to simplify these last two processes is by utilitizing internet sources, documentation, and implementing these features incrementally, so that we can push a MVP earlier and break down full functionality into smaller, more manageable tasks. We plan on designing our features, so that they will rely on dependencies and by keeping a modular design, we are able to develop features in parallel, increasing productivity and speeding up the SDLC for a MVP and/or a finalized product.

### Team-Info:
- Ivan Wong (Software Configuration Management Coordinator)
    - Responsible for researching frameworks, APIs, configuring Git repo for easier development, and keeping files modular and organized. This role is needed because with many APIs frameworks being used, their needs to be a dedicated person to research which tools would help speed up production and keep everything orgranized for scalability and future feature implementations. I am best suited for this role because I have experience in configuring build environments for GUI applications and have devloped & deployed my own frontend portfolio website using similar tools.
- Tristan Vosburg (Back-End Developer)
  - TalkTask will need a way to communicate between the front-end and the database.  Without this, the website wouldn't be able to store information between log-ins.  Building this bridge will be a large part of what will allow TalkTask to work.
- Nicholas Woodley (Front-End Developer)
- Kai Lindskog-Coffin (Database Developer)
    - TalkTask will need to log user information, including login information, and previous tasks. I really enjoyed CS 340: Introduction to Databases, and I feel that I can create a database that can manage user data in a secure and efficient manner.
- Raymond Cen (Back-End Developer)
    - Responsible for the use of the WebSpeechAPI and the communcation between frontend and backend.This role is needed because the use of voice input using WebSpeechAPI is a main component of this project. As well as communication between the frontend and backend. I am best suited for this because I have experience in working with APIs in a web project and designing a communucation pipeline between a frontend file and backend file.
- Bailey Bundlong (UI/UX Designer)
- Jordan L Cowan (Front-End Developer)
    - It will be very important for the website to look good, work great, and have easy use not only for everyday users but also for those who need proper accessibility in their apps. I am very particular with most styling placing me as a good fit for this section and for creating the accessibility I have grown up having to help with accessibility for family members helping me know the importance of having great accessibility within apps.

### Software Toolset:
Because many APIs will be used for the developing TalkTask, I will only go over the essentials and define how these tools will be used, as well as why they are being used. More tools will be researched and added to the list as we get closer to the final product, as to not get overwhelmed in the beginning.
* React Framework:
    * React will be used to design the frontend side of things. Not only will this introduce us the React framework which is widely used in web development industry, but it offers component based architecture and allows for easier scalability and modularized practices, allowing for easier readability and development.
* Node.js:
    * Node will be used to not only install dependencies in our build environment, but also run JavaScript in server-side logic to allow high performance, real-time data updates, interacting with the database, and consistency across developers using the same language.
* Express API:
    * The Express API will be used to run our backend server and simplify our server setup source code. It will also provide middlware support which makes it easier to extend functionality of to-do lists management functionality and powerful routing functionality.
* Vite Build Tool:
    * Vite is a blazing fast frontend building tool that utilizes modern JavaScript functionality and is optimized to obtain faster and more high performance websites compared to the widely used Webpack build tool.
* WebSpeech API
    * The WebSpeech API is a JavaScript interface that allows users to incorporate speech recognition as data for our web application. This will be one the main APIs for our program, so that we can integrate voice commands from the user into to-do list funcitonality, to provide a hands-free experience and more accesibility features.
* Hugging Face:
    * Hugging Face will provide us a wide selection of open source AI models that allow us to produce suggested tasks for users based on their previous ones. This tool will primarily be used for recommending tasks and one of our stretch goals is to use this API to process natural language into to-do list functionality, so that our web application is even easier to use. Further research is being conducted as to which AI model will be used to best fit our use cases.
* MongoDB:
    * MongoDB is going to be used to grant us access to a database. Team members in our group have free access to the database throufh previous or current OSU courses, so MongoDB was chosen to store user tasks in a JSON like format. A data base allows users to access tasks across multiple devices and allow our AI model to pull tasks from the database to produce suggestions.

### Team Member Schedule:

#### Kai Lindskog (Database Developer)
**Week 3: Database Design:**
- Deliverables: 
    * Design the database schema for tasks, users, and AI training data.
    * Identify necessary fields for each collection (e.g., tasks, users, settings).
    * Create an Entity-Relationship Diagram (ERD) for visualizing relationships between collections.
- Milestones:
    * Submit the database schema for team approval.
    * Upload ERD to the Git repository.
<br>

**Week 4: Database Setup:**
- Deliverables:
    * Set up a MongoDB cluster.
    * Implement the connection between the application and the database using Node.js (via Mongoose).
    * Test the connection with simple read/write operations.
- Milestones:
    * Successfully connect the application to MongoDB.
    * Verify data can be stored and retrieved.
<br>

**Week 5: Basic Task Management:**
- Deliverables:
    * Implement CRUD (Create, Read, Update, Delete) operations for the tasks collection.
    * Create endpoints for:
    * Adding a task
    * Editing a task
    * Deleting a task
    * Fetching all tasks for a specific user
    * Ensure endpoints follow RESTful principles.
- Milestones:
    * Test and demonstrate CRUD functionality using Postman or similar tools.
<br>

**Week 6: User Management:**
- Deliverables:
    * Design and implement a users collection with authentication details (e.g., email, hashed password).
    * Create endpoints for user registration, login, and logout.
    * Ensure secure storage of user credentials (e.g., using bcrypt for hashing passwords).
- Milestones:
    * Test user registration and login processes with database integration.
<br>

**Week 7: Task Prioritization and Recurrence:**
- Deliverables:
    * Add support for recurring tasks (e.g., daily, weekly, monthly) in the tasks schema.
    * Include fields for priority and recurrence intervals.
    * Update task-related endpoints to handle recurring tasks.
- Milestones:
    * Validate recurring task functionality through testing with mock data.
<br>

**Week 8: Integration with AI module:**
- Deliverables:
    * Design the ai_training collection to store data for AI training (e.g., task patterns, user preferences).
    * Implement methods to feed task-related data into the AI module.
    * Collaborate with back-end developers to integrate AI-generated task suggestions.
- Milestones:
    * Demonstrate the AI module fetching data from the database for training and providing suggestions.
<br>

**Week 9: Testing and Optimization:**
- Deliverables:
    * Perform database optimization to improve query performance (e.g., indexing, query restructuring).
    * Conduct load testing to ensure database scalability for multiple users.
    * Identify and resolve potential bottlenecks or security vulnerabilities.
- Milestones:
    * Submit a report on optimization results and changes implemented.
<br>

**Week 10: Final Integration and Documentation:**
- Deliverables:
    * Finalize database integration with all application modules.
    * Document the database schema, endpoints, and instructions for deployment in the Git repository.
    * Create a troubleshooting guide for common database issues.
- Milestones:
    * Present a fully functional database integrated into the application.
    * Share documentation with the team.

#### Ivan Wong (Software Configuration Management Coordinator)
**Week 3: Software Research**
- Deliverables:
  * Find and create and AI API key from Hugging Face to select an AI model that best fits our use cases.
  * Find a free backend server deployment tool powerful enough to host our backend logic.
- Milestones:
  * All team members have access to the AI API key and shall ensure that it works.
  * Deploy backend web server for client-server communication over the internet.
<br>

**Week 4: Modular File Organization**
- Deliverables:
  * Create directories and files based on modularization practices for essential front and backend components.
  * Import necessary APIs and tools for each source code file.
- Milestones:
  * Organized Git repository for an MVP.
<br>

**Week 5: Configure Database w/ To-Do List Functionality**
- Deliverables:
  * Managing a task through to-do list updates database.
  * Ensure database data is formatted correctly.
- Milestones:
  * Link database with to-do list functionality.
  * Data in database is parsed correctly and ready for future implementations.
<br>

**Week 6: Configuring AI and Speech Recognition APIs**
- Deliverables:
  * Add and configure AI and WebSpeech APIs for developers to use with current to-do list functionality.
  * Ensure APIs work as intended for implementation of speech recognition and recommended tasks.
- Milestones:
  * AI and Speech recognition features are ready to be implemented.
<br>

**Week 7: Assist Developers**
- Deliverables:
  * Aid in development of more complex features, such as AI recommended tasks and processing speech inputs.
  * Aid in development of UI and frontend features to ensure user-friendly experiences and accurate information being displayed.
- Milestones:
  * Complex features, such as AI recommendations and speech recognition implemented and ready to be debugged.
  * UI design is fully implemented and needs finishing touches for a clean UI.
<br>

**Week 8: Implementing Stretch Goals**
- Deliverables:
  * Add additional AI feature to process natural language into to-do list functionality.
  * Add email notifications for users that choose to select remind me option for timely tasks.
- Milestones:
  * Additional stretch goals, such as reminders and natural language processing implemented and working as intended.
<br>

**Week 9: Finishing Touches**
- Deliverables:
  * Create detailed test cases to catch underlying bugs not caught by previous tests.
  * Update and add finalizing documentation.
- Milestones:
  * TalkTask is ready to be deployed.
  * Documentation is up-to-date and being reviewed.
<br>

**Week 10: Deployment of TalkTask**
- Deliverables:
  * TalkTask web page is deployed onto the internet using Netlify and another tool for hosting backend servers.
  * Documentation is fully completed and published to the Git repository.
- Milestones:
  * TalkTask web page complete and deployed.
  * TalkTask documentation complete and revised.
<br>

#### Tristan Vosburg (Back-End Developer)
**Week 3: GOAL**
- Deliverables:
- Milestones:
<br>

**Week 4: GOAL**
- Deliverables:
- Milestones:
<br>

**Week 5: GOAL**
- Deliverables:
- Milestones:
<br>

**Week 6: GOAL**
- Deliverables:
- Milestones:
<br>

**Week 7: GOAL**
- Deliverables:
- Milestones:
<br>

**Week 8: GOAL**
- Deliverables:
- Milestones:
<br>

**Week 9: GOAL**
- Deliverables:
- Milestones:
<br>

**Week 10: GOAL**
- Deliverables:
- Milestones:
<br>

#### Nicholas Woodley (Front-End Developer)
**Week 3: GOAL**
- Deliverables:
- Milestones:
<br>

**Week 4: GOAL**
- Deliverables:
- Milestones:
<br>

**Week 5: GOAL**
- Deliverables:
- Milestones:
<br>

**Week 6: GOAL**
- Deliverables:
- Milestones:
<br>

**Week 7: GOAL**
- Deliverables:
- Milestones:
<br>

**Week 8: GOAL**
- Deliverables:
- Milestones:
<br>

**Week 9: GOAL**
- Deliverables:
- Milestones:
<br>

**Week 10: GOAL**
- Deliverables:
- Milestones:
<br>

#### Raymond Cen (Back-End Developer)
**Week 3: Backend Communication**
- Deliverables:
  * Design a way to communciate with Web Speech API using JavaScript.
  * Find Web Speech API implementation methods and how to communicate with frontend.
- Milestones:
  * Web Speech API communication method with backend is shared with other backend developer.
<br>

**Week 4: WebSpeechAPI Commands**
- Deliverables:
  * Determine certain phrases and words that the application will use.
  * Determine which phrases will correlate with which function of the application.
- Milestones:
  * List of phrases and words that the correlate with functions created.
<br>

**Week 5: Simple WebSpeechAPI Implementation**
- Deliverables:
  * Implement WebSpeechAPI into backend.
  * Test voice input and ensure the WebSpeechAPI voice input is working properly.
- Milestones:
  * WebSpeechAPI implemented for voice input into backend.
<br>


**Week 6: Application Implementation of WebSpeechAPI**
- Deliverables:
  * Begin the full implementation of WebSpeechAPI with application, with simple functionalties such as add and remove.
- Milestones:
  * WebSpeechAPI add and remove functionality is implemented.
<br>

**Week 7: Full Implementation of WebSpeechAPI**
- Deliverables:
  * Add other functionalities of application that use WebSpeechAPI such as edit, sort, and view.
  * Aid in development of UI and frontend features to ensure user-friendly experiences and accurate information being displayed.
- Milestones:
  * WebSpeechAPI is implemented fully into the backend with the rest of the features.
<br>

**Week 8: Testing Backend Implementation of WebSpeechAPI**
- Deliverables:
  * Rigourous testing of the WebSpeechAPI application using voice commands.
  * Ensure WebSpeechAPI and backend functionalities work properly in sync with one another.
- Milestones:
  * WebSpeechAPI works properly with voice commands and error handles within the backend.
<br>

**Week 9: Assist Communication with Frontend.**
- Deliverables:
  * Assist frontend and backend developers with communication with backend.
  * Assist in seamless communcation with the WebSpeechAPI and frontend.
- Milestones:
  * Communication between frontend and backend is fully established and ready to be deployed.
<br>

**Week 10: Maintenance of WebSpeechAPI and backend**
- Deliverables:
  * TalkTask is deployed and being maintained ensuring communication between frontend and backend is seamless and working
- Milestones:
  * TalkTask web page completed, deployed and being maintained.
<br>

#### Bailey Bundlong (UI/UX Designer)
**Week 3: GOAL**
- Deliverables:
- Milestones:
<br>

**Week 4: GOAL**
- Deliverables:
- Milestones:
<br>

**Week 5: GOAL**
- Deliverables:
- Milestones:
<br>

**Week 6: GOAL**
- Deliverables:
- Milestones:
<br>

**Week 7: GOAL**
- Deliverables:
- Milestones:
<br>

**Week 8: GOAL**
- Deliverables:
- Milestones:
<br>

**Week 9: GOAL**
- Deliverables:
- Milestones:
<br>

**Week 10: GOAL**
- Deliverables:
- Milestones:
<br>

#### Jordan L Cowan (Front-End Developer)
**Week 3: GOAL**
- Deliverables:
- Milestones:
<br>

**Week 4: GOAL**
- Deliverables:
- Milestones:
<br>

**Week 5: GOAL**
- Deliverables:
- Milestones:
<br>

**Week 6: GOAL**
- Deliverables:
- Milestones:
<br>

**Week 7: GOAL**
- Deliverables:
- Milestones:
<br>

**Week 8: GOAL**
- Deliverables:
- Milestones:
<br>

**Week 9: GOAL**
- Deliverables:
- Milestones:
<br>

**Week 10: GOAL**
- Deliverables:
- Milestones:
<br>

### Timeline:
| Group               | Wk 3 | Wk 4 | Wk 5 | Wk 6 | Wk 7 | Wk 8 | Wk 9 | Wk 10 |
| --------------------|------|------|------|------|------|------|------|------ |
| Front End           |      |      |      |      |      |      |      |       |
| Back End            | Design for communication with WebSpeechAPI completed|List of commands and functions determined|WebSpeechAPI coded into backend|Save Button Works / WebSpeechAPI implemented for add and remove functionality |WebSpeechAPI fully implemented with full functionality into backend|Testing and ensuring proper function of WebSpeechAPI|Communication between frontend and backend is fully established and ready.|TalkTask web page completed, deployed and being maintained.|
| UI/UX               |      |      |      |      |      |      |      |       |
| Database            |      |      |      |      |      |      |      |      ||
| Software Management |Essential tools needed for basic web server configuration and to-do lists management added to dependencies.|Files organized in a modularized manner to allow for easier implementation and OO practices.|Database implementation inputs correctly formatted data.|AI and WebSpeech APIs configured and ready for developers.|To-do list functionality completely finished and implemented, so that integrating AI and speech recognition features are done seamlessly.|Continue developing complex features, such as AI and speech recognition implementations.|Implement stretch goal features, such as reminders for timely tasks and processing natural language using WebSpeech API and AI API model.|Run and test finalized product for any underlying bugs or errors.|TalkTask deployed and plan for maintenence stage begins.|
