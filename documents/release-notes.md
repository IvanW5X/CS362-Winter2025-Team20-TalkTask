# TalkTask Release Notes

## v1.0 
03-11-2025

### Overview
This is the initial release of TalkTask—a web application for hands-free task management with integrated speech recognition and AI-based task suggestions. This release marks the baseline functionality including basic task CRUD operations, voice command integration, and responsive UI components.

### Assumptions
- Development is assumed to have been performed on Windows systems using IDEs such as Visual Studio Code.
- Required installations include Node.js (LTS version) and npm for dependency management.
- Required setup of a MongoDB database
- Require API keys acquired from Auth0 and Render.

### Source Code Repository & Change Logs
- The full source code is hosted on GitHub at: [https://github.com/IvanW5X/CS362-Winter2025-Team20-TalkTask](https://github.com/IvanW5X/CS362-Winter2025-Team20-TalkTask)
- Developers should refer to the Git commit history and the integrated file change logs (via `git log` or GitHub’s commit browser) to review why specific changes were made.

### Issue Tracking
- All project issues, bugs, and feature requests are tracked using GitHub Issues.
- New developers are encouraged to review the open and closed issues for context on design decisions and known bugs.

### Features
- Basic task operations have been implemented.
  - Add task
  - Edit task
  - Mark task as complete
  - Remove completed tasks
- Voice command integration enables hands-free task addition, deletion and marking task completion.
- Filtering and sorting the task list by priority.
- Integrated speech recognition converts user voice input into text.
- AI-based task suggestions offer personalized recommendations based on user behavior.
- Day-based viewing and management allowing users to view and manage tasks organized by day.
- Categorical based view that enables filtering and organizing tasks by category.

### Known Bugs
- **Voice Add Issue:** The "voice add" command is not adding tasks to the selected date. 
- **Grey Background Issue:** The grey background only extends to the length of the viewport.
- **Home Page Responsiveness:** The home page is unresponsive for smaller widths. 
- **Mobile View:** Currently the mobile view is unresponsive. 