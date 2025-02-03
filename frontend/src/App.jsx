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
import { Navbar } from "./components/navbar/navbar";
import { Tasks } from "../../components/tasks/tasks";
import { About } from "../../pages/about/about";



// Implement funcitonality for displaying about page or user home page; based on if user logged in
  // Use local storage/cookies and Routes for this

function App() {
  return (
    <div className={styles.App}>
      <h1>TalkTask</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/navbar" element={<Navbar />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
