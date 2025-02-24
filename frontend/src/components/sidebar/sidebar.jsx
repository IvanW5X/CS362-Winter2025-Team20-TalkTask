/********************************************************************
 * File Name: sidebar.jsx
 * Date: 1/26/2025
 * Description: Sidebar on Main Page
 * Author(s): CS 362-Team 20
 ********************************************************************/

import React, { useState, useEffect } from "react";
import styles from "./sidebar.module.css";

export const Sidebar = () => {
  const [showTasks, setShowTasks] = useState(true);
  const [tasks, setTasks] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [taskGroups, setTaskGroups] = useState(["All"]); // Store user-created groups
  const [selectedGroup, setSelectedGroup] = useState("All");
  const [taskGroupMap, setTaskGroupMap] = useState({}); // Maps tasks to groups

  // Fetch tasks from MongoDB
  useEffect(() => {
    fetch("http://localhost:51710/api/tasks")
      .then((response) => response.json())
      .then((data) => {
        setTasks(data);
        setFilteredTasks(data);
      })
      .catch((error) => console.error("Error fetching tasks:", error));
  }, []);

  // Filter tasks
  useEffect(() => {
    if (selectedGroup === "All") {
      setFilteredTasks(tasks);
    } else {
      setFilteredTasks(tasks.filter((task) => taskGroupMap[task.taskID] === selectedGroup));
    }
  }, [selectedGroup, tasks, taskGroupMap]);

  // Create a new task group
  const addTaskGroup = () => {
    const newGroup = prompt("Enter a new task group:");
    if (newGroup && !taskGroups.includes(newGroup)) {
      setTaskGroups([...taskGroups, newGroup]);
    }
  };

  // Assign a task to a group
  const assignTaskToGroup = (taskID) => {
    const group = prompt("Assign to which group?");
    if (group && taskGroups.includes(group)) {
      setTaskGroupMap({ ...taskGroupMap, [taskID]: group });
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
        <li className={styles.sidebarItem} onClick={() => setShowTasks(!showTasks)}>
          Tasks <span className={styles.plusIcon} onClick={addTaskGroup}>+</span>
        </li>

        {/* Display Task Groups */}
        <ul className={`${styles.subMenu} ${showTasks ? styles.show : ""}`}>
          {taskGroups.map((group, index) => (
            <li
              key={index}
              className={`${styles.sidebarItem} ${selectedGroup === group ? styles.active : ""}`}
              onClick={() => setSelectedGroup(group)}
            >
              {group}
            </li>
          ))}
        </ul>

        {/* Display Filtered Tasks */}
        <ul>
          {filteredTasks.map((task) => (
            <li key={task.taskID} className={styles.sidebarItem}>
            <div>{task.description} - <em>{task.status}</em></div>
            <button className={styles.assignButton} onClick={() => assignTaskToGroup(task.taskID)}>
              Assign Group
            </button>
          </li>
          
          ))}
        </ul>

        <li className={styles.sidebarItem}>About</li>
      </ul>
    </nav>
  );
};
