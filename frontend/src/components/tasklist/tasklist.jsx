/********************************************************************
 * File Name: tasks.jsx
 * Date: 1/26/2025
 * Description: JSX file for tasks UI component
 * Author(s): CS 362-Team 20
 ********************************************************************/

import React, { useEffect, useState } from "react";
import styles from "./tasklist.module.css";
import axios from "axios";

/**
 * Utility function to convert a color name to a Tailwind class.
 * This avoids issues with dynamic class strings in Tailwind.
 */
const getColorClass = (color) => {
  switch (color) {
    case "School":
      return "bg-red-500";
    case "Work":
      return "bg-yellow-500";
    case "Chores":
      return "bg-green-500";
    case "Exercise":
      return "bg-blue-500";
    // Add more colors as needed
    default:
      return "bg-gray-500";
  }
};



export const TaskList = () => {

  // Example tasks array
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Do Homework for an hour",
      startTime: "6:00 PM",
      endTime: "7:00 PM",
      color: "School",
      completed: false,
    },
    {
      id: 2,
      title: "Work For 6 hours",
      startTime: "10:00 AM",
      endTime: "4:00 PM",
      color: "Work",
      completed: false,
    },
    {
      id: 3,
      title: "Do the Dishes",
      startTime: "4:30 PM",
      endTime: "5:00 PM",
      color: "Chores",
      completed: false,
    },
    {
      id: 4,
      title: "Go to the Gym",
      startTime: "7:30 AM",
      endTime: "9:00 AM",
      color: "Exercise",
      completed: false,
    },
    // Add more tasks here as needed
  ]);

  const toggleCompleted = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  return (
    <div className="bg-[#E5E5E5] rounded-3xl absolute mt-[300px] ml-[250px] w-auto">
      {/* Header */}
      <div className="flex items-center justify-between rounded-2xl text-[20px] font-semibold bg-white m-5 px-5 py-3">
        <span>Tasks</span>
        <span className="text-sm font-normal">{tasks.length}</span>
      </div>

      {/* Task items container */}
      <div className="mx-5 mb-5 space-y-4">
        {tasks.map((task) => (
          <div key={task.id} className="bg-white p-4 rounded-2xl flex items-center shadow">
            {/* Colored circle */}
            <div className={`w-5 h-5 rounded-full ${getColorClass(task.color)} mr-3`}/>
            {/* Task text */}
            <div className="flex-1 text-base font-medium">{task.title}</div>
            {/* Times */}
            <div className="text-sm mr-4 hidden md:block">
              <p></p>
            </div>

            <div className="text-sm mr-4 hidden md:block">
              Start: {task.startTime}
            </div>
            <div className="text-sm mr-4 hidden md:block">
              End: {task.endTime}
            </div>            
            {/* Checkbox */}
            <input
              type="checkbox"
              className="form-checkbox h-5 w-5 hidden md:block"
              checked={task.completed}
              onChange={() => toggleCompleted(task.id)}
              readOnly
            />
          </div>
        ))}
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
    console.log("Frontend recieved test data response!")
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
          </div>
        );
      })}
    </section>
  );
};
*/
