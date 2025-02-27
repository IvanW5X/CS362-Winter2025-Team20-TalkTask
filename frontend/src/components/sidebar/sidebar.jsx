/********************************************************************
 * File Name: sidebar.jsx
 * Date: 1/26/2025
 * Description: Sidebar on Main Page
 * Author(s): CS 362-Team 20
 ********************************************************************/

import { useState } from "react";
import { GoPlus } from "react-icons/go";

export const Sidebar = ({ menu_open }) => {
  // Example task groups
  const [tasks, setTasks] = useState(["School", "Work", "Chores"]);

  const addCategory = () => {
    const newTask = prompt("Enter a new category:");
    if (newTask) setTasks([...tasks, newTask]);
  };

  return (
    <aside
      className={`z-[999] flex flex-col bg-white shadow-xl w-[200px] 
                  h-[calc(100vh-95px)] transition-transform duration-200
                  ${menu_open ? "translate-x-0" : "-translate-x-full"}`}
    >
      {/* Header Section */}
      <div className="flex items-center justify-between p-3 bg-gray-300 font-bold text-[18px]">
        Tasks
        <GoPlus className="cursor-pointer text-[24px] stroke-[.5]" onClick={addCategory} />
      </div>

      {/* Categories List */}
      <ul className="flex-1 bg-gray-200">
        {tasks.map((task, index) => (
          <li
            key={index}
            className="p-3 pl-5 cursor-pointer bg-gray-100 hover:bg-black/20 odd:bg-white text-[16px]"
          >
            {task}
          </li>
        ))}
      </ul>
    </aside>
  );
};
