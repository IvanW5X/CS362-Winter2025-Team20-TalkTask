/********************************************************************
 * File Name: App.jsx
 * Date: 1/13/2025
 * Description: Front end file to display all components
 * Author(s): CS 362-Team 20
 ********************************************************************/

import React from "react";
import styles from "./App.module.css";
import { Home } from "./pages/home/home";
import logo from "../assets/TalkTaskLogo1.png";

//test, delete later
import { TestSpeech } from "./pages/WebSpeechTest/testspeech";
import profilePicture from "../assets/GenericAvatar.png";

// Implement funcitonality for displaying about page or user home page; based on if user logged in
  // Use local storage/cookies and Routes for this

function App() {
  return (
    <div className={styles.App}>
      <div className={styles.curvedsquare}>
        <img className={styles.logo} src={logo} alt="TalkTask Logo" />
        <img className={styles.profilePicture} src={profilePicture} alt="Profile Picture" />
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />

          {/* test speech, delete later http://localhost:5173/testspeech*/}
          <Route path="/testspeech" element={<TestSpeech />} /> 

        </Routes>
      </BrowserRouter>
      <h1>Hello TalkTask</h1>
      <main>
        <Home />
      </main>
    </div>
  );
}

export default App;
