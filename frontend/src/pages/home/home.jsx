/********************************************************************
 * File Name: home.jsx
 * Date: 1/26/2025
 * Description: JSX file for user home component
 * Author(s): CS 362-Team 20
 ********************************************************************/

import React, { useState } from "react";
import styles from "./home.module.css";
import { Tasks } from "../../components/tasks/tasks";
import { Sidebar } from "../../components/sidebar/sidebar";
import { Calendar } from "../../components/calendar/calendar";
import { Navbar } from "../../components/navbar/navbar";
//import { Link } from "react-router-dom";


/* add <Sidebar /> curved squares class to see the sidebar */
/* Make sure to add in this order for proper spacing:
<Navbar />
<Sidebar />
*/
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
        <div className={styles.curvedsquares}>
            <Calendar />
            <Tasks />
        </div>
    );
  };