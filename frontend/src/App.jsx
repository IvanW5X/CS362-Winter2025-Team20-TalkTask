/********************************************************************
 * File Name: App.jsx
 * Date: 1/13/2025
 * Description: Front end file to display all components
 * Author(s): CS 362-Team 20
 ********************************************************************/

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styles from "./App.module.css";
import { Home } from "./components/home/home";

function App() {
  return (
    <div className={styles.App}>
      <h1>Hello TalkTask</h1>
      <Home />
    </div>
  );
}

export default App;
