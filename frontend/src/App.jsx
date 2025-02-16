/********************************************************************
 * File Name: App.jsx
 * Date: 1/13/2025
 * Description: Front end file to display all components
 * Author(s): CS 362-Team 20
 ********************************************************************/

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styles from "./App.module.css";
import { Home } from "./pages/home/home";
import logo from "../assets/TalkTaskLogo1.png";

//test
import { TestSpeech } from "./pages/WebSpeechTest/testspeech";

console.log(logo);

// Implement funcitonality for displaying about page or user home page; based on if user logged in
  // Use local storage/cookies and Routes for this

function App() {
  return (
    <div className={styles.App}>
      <div className={styles.curvedsquare}>
        <img src={logo} alt="TalkTask Logo" />
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />

          {/* test */}
          <Route path="/testspeech" element={<TestSpeech />} /> 

        </Routes>
      </BrowserRouter>
      <h1>Hello TalkTask</h1>
      <Home />
    </div>
  );
}

export default App;
