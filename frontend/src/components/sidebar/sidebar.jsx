/********************************************************************
 * File Name: sidebar.jsx
 * Date: 1/26/2025
 * Description: Sidebar on Main Page
 * Author(s): CS 362-Team 20
 ********************************************************************/

import React, { useState } from "react";
import styles from "./sidebar.module.css";

export const Sidebar = () => {
  const [showTasks, setShowTasks] = useState(true); // shows all taskGroups
  const [tasks, setTasks] = useState(["School", "Work", "Chores"]); // test tasksGroups

  const addTask = () => {
    const newTask = prompt("Enter a new task:"); // Allows the user to input text
    if (newTask) {
      setTasks([...tasks, newTask]); // Add new task grouping to the list
    }
  };

  return (
    <>
      <nav className="absolute bg-white h-screen w-[200px]">
        
        <ul className="mt-[95px]">
          <li
            className={styles.sidebarItem}
            onClick={() => setShowTasks(!showTasks)}
          >
            Tasks <span className={styles.plusIcon} onClick={addTask}>+</span>
          </li>
  
          <ul className={`${styles.subMenu} ${showTasks ? styles.show : ""}`}>
            {tasks.map((task, index) => (
              <li key={index} className={styles.sidebarItem}>
                {task}
              </li>
            ))}
          </ul>
  
          <li className={styles.sidebarItem}>About</li>
        </ul>
      </nav>
    </>
  );
};
