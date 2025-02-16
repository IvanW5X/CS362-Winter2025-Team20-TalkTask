/********************************************************************
 * File Name: tasks.jsx
 * Date: 1/26/2025
 * Description: JSX file for tasks UI component
 * Author(s): CS 362-Team 20
 ********************************************************************/

import React, { useEffect, useState } from "react";
import styles from "./tasks.module.css";
import axios from "axios";

export const Tasks = ({ userId }) => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/tasks/${userId}`);
        setTasks(response.data);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };

    if (userId) fetchTasks();
  }, [userId]);

  const handleAddTask = async () => {
    if (!newTask.trim()) return;

    try {
      const response = await axios.post("http://localhost:5000/tasks", {
        description: newTask,
        userId,
      });

      setTasks((prevTasks) => [...prevTasks, response.data]); // Append new task to state
      setNewTask(""); // Clear input
    } catch (error) {
      console.error("Error adding task:", error);
    }
  };

  return (
    <div className={styles.tasksquare}>
      <div className={styles.tasklabel}>
        <h2>Tasks</h2>
      </div>

      <input
        type="text"
        placeholder="New Task"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button onClick={handleAddTask}>Add Task</button>
      
      <div>
        {tasks.length > 0 ?(
          tasks.map((task) => (
            <div key={tasks.taskID}>
              <p>{tasks.description}</p>
              <button>Complete</button>
              <button>Delete</button>
            </div>
          ))
        ) : (
          <p>No tasks</p>
        )}
      </div>
    </div>
  );
};















/*
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

// Get data from server, add try/catch later with tasks data
const fetchTest = async (setTestArray) => {
  try {
    const res = await axios.get(`${BACKEND_URL}/testing`);
    setTestArray(res.data.info);
  } catch (error) {
    console.log("Error getting data");
  }
};

export const Tasks = () => {
  const [testArray, setTestArray] = useState([]);

  // Update website on mount
  useEffect(() => {
    fetchTest(setTestArray);
  }, []);

  return (
    <section className={styles.container}>
      <h2>Tasks</h2>
      {testArray.map((data, key) => {
        // Loop through testArray
        return (
          <div key={key}>
            <p>{data}</p>
            <br />
          </div>
        );
      })}
    </section>
  );
};
*/
