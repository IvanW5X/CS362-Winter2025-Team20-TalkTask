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
* **Actors:**
* **Triggers:**
* **Preconditions:**
* **Postconditions:**
* **List of steps:**
* **Extensions/variations of the success scenario**
* **Exceptions: failure conditions and scenarios**

### Non-functional Requirements:
* When code is deployed for users to access, it should be kept and maintained with security in mind.  Bad-faith actors shouldn't have easy access to any holes.
* 
* 

### External Requirements:
* **How we’ll host the application for users to access:**
* **How we’ll handle errors, invalid user inputs, etc:**  
* **How we’ll allow others to setup their own instance of our application:**

### Technical Approach:
Our web application will be implemented using many frameworks and APIs, such as the React framework for frontend development, the Vite build tool for efficient builds and improved performance, JavaScript for backend/business logic, and (hopefully) Netlify to publish our website onto the internet. The main component of the project will be based on the WebSpeech API, which will be used to get input from the user, so that our program will be able to parse it and handle the commands given. We will split up the user interface into components for a modular design, so that with each sprint, we are able to integrate changes and features seamlessly and effectively. Additionally, we will use tools like MongoDB to implement a database and user accounts to store tasks onto the cloud, so that users will be able to exit and return to the application with their previous session data saved on other devices. Another feature we plan to implement will include the use of an open source AI model to recommend tasks based on user's previous task history, to a provide more personalized product for our users. Collaboration and communication will be done via Git, MS Teams, Zoom, text messages, and in-person meetings to increase productivity and push changes into the codebase. Other tools, such as Figma are will be used for a reference as to how our web UI will be designed, so that there’s no room for ambiguity for how the UI shall be implemented. Further research will be conducted by our software configuration coordinator (Ivan) to provide tools that will make our lives as developers easier.

### Risk:
There are a few risks facing our group as we attempt to design, create and implement this application. We have worked together as a group before, so we are aware of the fact that we are prone to procrastination and underestimating the work required to complete certain tasks. To avoid this problem, we plan on setting checkpoints for what we expect to have completed each week. Additionally, each checkpoint will have small tasks associated with it. Each group member will be responsible for completing their small tasks. At each stand-up meeting, the status of each small task will be checked in to see if help is needed, changes need to be made, or if our stretch goals can be attempted because we are ahead of schedule. Our second challenge is implementing a user database so that separate users can use the application, along with state being preserved between uses and devices. To minimize the risk of difficulty of this task, we will ensure that team members with skills in database managment or have previously taken a database course at OSU will be responsible for leading the database development side of things. The third risk we will come across is implementing the main features with the WebSpeechAPI and the open source AI model. These will impose risks because our program must be able to handle all to-do list functionality through speech, so being able to parse and process voice commands will be a challenge. Adding AI features will also include another layer of complexity because our program must be able to handle the AI processing data and producing tangible results that we as developers, must be able to verify with unique test cases. Our plan to simplify these last two processes is by utilitizing internet sources, documentation, and implementing these features incrementally, so that we can push a MVP earlier and break down full functionality into smaller, more manageable tasks. We plan on designing our features, so that they will rely on dependencies and by keeping a modular design, we are able to develop features in parallel, increasing productivity and speeding up the SDLC for a MVP and/or a finalized product.

### Team-Info:
- Ivan Wong (Software Configuration Management Coordinator)
    - Responsible for researching frameworks, APIs, configuring Git repo for easier development, and keeping files modular and organized.
- Tristan Vosburg (Back-End Developer)
- Nicholas Woodley (Front-End Developer)
- Kai Lindskog-Coffin (Database Developer)
- Raymond Cen (Back-End Developer)
- Bailey Bundlong (UI/UX Designer)
- Jordan L Cowan (Front-End Developer)

### Timeline:
| Group | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 |
| ------ |------|------|------|------|------|------|------|------|
| Front End |||||||||
| Back End |||||||||
| UI/UX |||||||||
| Database  ||||||||||