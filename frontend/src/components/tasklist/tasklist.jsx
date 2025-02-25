/********************************************************************
 * File Name: tasks.jsx
 * Date: 1/26/2025
 * Description: JSX file for tasks UI component
 * Author(s): CS 362-Team 20
 ********************************************************************/

import React, { useState } from "react";
import { MdOutlineModeEditOutline } from "react-icons/md";

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
    default:
      return "bg-gray-500";
  }
};

export const TaskList = ({ menu_open }) => {
  // Example tasks array
  const [tasks, setTasks] = useState([
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
    {
      taskID: 3,
      title: "type shi",
      description: "do stuff",
      dateCreated: "2015-03-25T11:00:00Z",
      dateCompleted: "2015-03-25T12:20:00Z",
      recurringDate: null,
      priority: 3, // Priority scale 1-3
      status: "in-progress",
      userId: 9,
    },

    // Add more tasks here as needed
  ]);

  //task labeled "completed" or "in-progress"
  const toggleTaskStatus = (taskID) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.taskID === taskID
          ? {
              ...task,
              status: task.status === "completed" ? "in-progress" : "completed",
            }
          : task
      )
    );
  };

  // set minimum left and right margin for mobile later

  return (
    <div
      className={`bg-[#E5E5E5] mt-[40px] absolute rounded-3xl h-auto ml-[calc(15%-40px)] w-[45vw]
                      ${menu_open ? "translate-x-0" : "-translate-x-[200px]"}`}
    >
      {/* title container */}
      <div className="flex items-center justify-between rounded-2xl text-[20px] font-semibold bg-white m-5 px-5 py-3">
        Tasks
        {/* number of tasks */}
        <span className="text-[25px] font-normal">{tasks.length}</span>
      </div>

      {/* Task items container */}
      <div className="mx-5 mb-5 space-y-4">
        {tasks.map((task) => (
          <div
            key={task.taskID}
            className="bg-white p-4 rounded-2xl flex items-center shadow"
          >
            {/* Colored circle */}
            <div
              className={`w-5 h-5 rounded-full ${getPriority(
                task.priority
              )} mr-3`}
            />

            {/* Task text */}
            <div className="flex-1 break-words font-medium">{task.title}</div>

            {/* Times */}
            <div className="text-sm ml-[50px] mr-5 hidden md:block">
              Start:
              {`${new Date(task.dateCreated)
                .getUTCHours()
                .toString()
                .padStart(2, "0")}:${new Date(task.dateCreated)
                .getUTCMinutes()
                .toString()
                .padStart(2, "0")}`}
            </div>
            <div className="text-sm mr-4 hidden md:block">
              End:
              {`${new Date(task.dateCompleted)
                .getUTCHours()
                .toString()
                .padStart(2, "0")}:${new Date(task.dateCompleted)
                .getUTCMinutes()
                .toString()
                .padStart(2, "0")}`}
            </div>

            {/* Pencil icon (you could replace with an actual icon component) */}
            <MdOutlineModeEditOutline
              className={`mr-4 text-[25px] cursor-pointer hidden md:block`}
            />

            {/* Checkbox */}
            <input
              type="checkbox"
              className="form-checkbox h-5 w-5 cursor-pointer"
              checked={task.status === "completed"}
              onChange={() => toggleTaskStatus(task.taskID)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
