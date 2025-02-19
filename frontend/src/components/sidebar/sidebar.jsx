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
    <nav className={styles.sidebar}>
      <div className={styles.sidebarBlock}>
        <div></div>
        <div></div>
        <div></div>
      </div>

      <ul className={styles.sidebarList}>
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
  );
};
