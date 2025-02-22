/********************************************************************
 * File Name: sidebar.jsx
 * Date: 1/26/2025
 * Description: Sidebar on Main Page
 * Author(s): CS 362-Team 20
 ********************************************************************/

import React, { useState } from "react";
import styles from "./sidebar.module.css";
import { GoPlus } from "react-icons/go";


export const Sidebar = () => {
  const [showTasks, setShowTasks] = useState(true); // shows all taskGroups
  const [tasks, setTasks] = useState(["School", "Work", "Chores"]); // test tasksGroups

  const addCategory = () => {
    const newTask = prompt("Enter a new task:"); // Allows the user to input text
    if (newTask) {
      setTasks([...tasks, newTask]); // Add new task grouping to the list
    }
  };

  return (
    <>
      <nav className="absolute flex font-[Inter] flex-col bg-white h-screen w-[200px] shadow-xl">
        <ul className="mt-[95px]">

          {/* Task title and + icon */}
          <li
            className="flex cursor-pointer p-[10px] text-[14px] font-[700] 
                        items-center justify-between bg-[#E5E5E5]"
            onClick={() => setShowTasks(!showTasks)}
          >
            Tasks
            <GoPlus className="cursor-pointer text-[25px] stroke-[.5]"
            onClick={addCategory}/>
          </li>
          

          {/* categories */}
          <ul className={`${showTasks ? "block" : "hidden"}
          `}>
            {tasks.map((task, index) => (
              <li key={index} 
                  className="flex cursor-pointer p-[10px] text-[14px] pl-[20px]
                            items-center bg-[#E5E5E5] hover:bg-black/20 odd:bg-white">
                {task}
              </li>
            ))}
          </ul>
  
        </ul>
      </nav>
    </>
  );
};
