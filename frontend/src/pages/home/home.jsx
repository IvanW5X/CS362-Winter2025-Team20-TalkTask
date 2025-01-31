/********************************************************************
 * File Name: home.jsx
 * Date: 1/26/2025
 * Description: JSX file for user home component
 * Author(s): CS 362-Team 20
 ********************************************************************/

import React, { useState } from "react";
import styles from "./home.module.css";
import { Navbar } from "../../components/navbar/navbar";
import { Sidebar } from "../../components/sidebar/sidebar";
import { Tasks } from "../../components/tasks/tasks";


//testing button
import { recognition } from "../../services/webSpeech";


export const Home = () => {
    const [isListening, setIsListening] = useState(false);
  
    const toggleMic = () => {
      if (isListening) {
        recognition.stop();
        console.log("Microphone stopped");
      } else {
        recognition.start();
        console.log("Microphone started");
      }
      setIsListening(!isListening);
    };
  
    return (
      <div className={styles.container}>
        <h1>Home Page</h1>
        <button type="button" onClick={toggleMic}>
          {isListening ? "Stop Voice Input" : "Start Voice Input"}
        </button>
      </div>
    );
  };