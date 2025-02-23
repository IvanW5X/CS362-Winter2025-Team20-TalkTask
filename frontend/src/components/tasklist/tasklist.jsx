/********************************************************************
 * File Name: tasks.jsx
 * Date: 1/26/2025
 * Description: JSX file for tasks UI component
 * Author(s): CS 362-Team 20
 ********************************************************************/

import React, { useEffect, useState } from "react";

/**
 * Utility function to convert a color name to a Tailwind class.
 * This avoids issues with dynamic class strings in Tailwind.
 */
const getPriority = (priority) => {
  switch (priority) {
    case 1:
      return "bg-red-500";
    case 2:
      return "bg-yellow-500";
    case 3:
      return "bg-green-500";
    // Add more colors as needed
    default:
      return "bg-gray-500";
  }
};

export const TaskList = () => {
  // Example tasks array
  const tasks = [
    {
      taskID: 1,
      title: "Work",
      description: "do stuff",
      dateCreated: "2015-03-25T12:00:00Z",
      dateCompleted: "2015-03-25T12:50:00Z",
      recurringDate: null,
      priority: 1, // Priority scale 1-3
      status: "in-progress",
      userId: 9,
    },
    // Add more tasks here as needed
  ];

  return (
    <div className="bg-[#E5E5E5] rounded-3xl absolute mt-[300px] ml-[300px] w-auto">
      {/* title */}
      <div className="flex items-center justify-between rounded-2xl text-[20px] font-semibold bg-white m-5 px-5 py-3">
        Tasks
        {/* number of tasks */}
        <span className="text-[25px] font-normal">{tasks.length}</span>
      </div>

      {/* Task items container */}
      <div className="mx-5 mb-5 space-y-4">
        {tasks.map((task) => (
          <div key={task.taskID} className="bg-white p-4 rounded-2xl flex items-center shadow">

            {/* Colored circle */}
            <div className={`w-5 h-5 rounded-full ${getPriority(task.priority)} mr-3`}/>

            {/* Task text */}
            <div className="flex-1 text-base font-medium">{task.title}</div>


            {/* Times */}
            <div className="text-sm mr-4 hidden md:block">
              Start:{`${new Date(task.dateCreated).getUTCHours().toString().padStart(2, '0')}:${new Date(task.dateCreated).getUTCMinutes().toString().padStart(2, '0')}`}</div>
            <div className="text-sm mr-4 hidden md:block">
              End: {`${new Date(task.dateCompleted).getUTCHours().toString().padStart(2, '0')}:${new Date(task.dateCompleted).getUTCMinutes().toString().padStart(2, '0')}`}</div>
            
            {/* Pencil icon (you could replace with an actual icon component) */}
            <button className="mr-4 hidden md:block">✏️</button>

            {/* Checkbox */}
            <input
              type="checkbox"
              className="form-checkbox h-5 w-5 hidden md:block"
              checked={task.status}
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
