/********************************************************************
 * File Name: App.jsx
 * Date: 1/13/2025
 * Description: Front end file to display all components
 * Author(s): CS 362-Team 20
 ********************************************************************/

import React from "react";
import { Home } from "./pages/home/home";

// Implement funcitonality for displaying about page or user home page; based on if user logged in
  // Use local storage/cookies and Routes for this

function App() {
  return (
    <>
      <div className="bg-[#cdcdcd] h-screen w-screen">
          <Home />
      </div>
    </>
  );
}

export default App;
