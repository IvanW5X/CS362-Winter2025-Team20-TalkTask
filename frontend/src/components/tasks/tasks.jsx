/********************************************************************
 * File Name: task.jsx
 * Date: 1/26/2025
 * Description: JSX file for tasks UI component
 * Author(s): CS 362-Team 20
 ********************************************************************/

import React, { useEffect, useState } from "react";
import styles from "./tasks.module.css";
import axios from "axios";





export const Tasks = ({userId}) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get("http://localhost:5000/tasks");
        setTasks(response.data);
      } catch (error) {
        console.log("Error getting data", error);
      }
    };

    fetchTasks();
  }, [userId]);


    return (
      <div className={styles.tasksquare}>
          <div className={styles.tasklabel}>
              <h2>Tasks</h2>
          </div>
          <div className={styles.tasklist}>
            {tasks.length > 0 ? (
              tasks.map(task => ( 
                <div key={task.taskID}>
                  <p>{task.description} ({task.status})</p>
                  <button onClick={() => handleStatusUpdate(task.taskID, 'completed')}>Complete</button>
                  <button onClick={() => handleDelete(task.taskID)}>Delete</button>
                </div>
              ))
        ) : (
          <p>No tasks found</p>
        )}
          </div>
      </div>
    );
}














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
