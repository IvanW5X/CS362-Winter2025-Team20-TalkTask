/********************************************************************
 * File Name: sidebar.jsx
 * Date: 1/26/2025
 * Description: Sidebar on Main Page
 * Author(s): CS 362-Team 20
 ********************************************************************/

import React, { useState } from "react";
import { GoPlus } from "react-icons/go";

export const Sidebar = ({ menu_open }) => {

  const [tasks, setTasks] = useState(["School", "Work", "Chores"]); // test tasksGroups

  const addCategory = () => {
    const newTask = prompt("Enter a new task:"); // Allows the user to input text
    if (newTask) {
      setTasks([...tasks, newTask]); // Add new task grouping to the list
    }
  };



  return (
    <>
     <nav className={`z-[999] flex font-[Inter] flex-col bg-white h-[calc(100vh-95px)] w-[200px] shadow-xl 
                      ${menu_open ? "block" : "hidden"}`}>
        <ul className="">

          {/* Task title and + icon */}
          <li
            className={`flex cursor-pointer p-[10px] text-[14px] font-[700] 
                        items-center justify-between bg-[#E5E5E5]`
            }>
            Tasks
            <GoPlus className="cursor-pointer text-[25px] stroke-[.5]"
            onClick={addCategory}/>
          </li>
          

          {/* categories */}
          <ul className={``}>
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
