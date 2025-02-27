/********************************************************************
 * File Name: tasks.jsx
 * Date: 1/26/2025
 * Description: JSX file for tasks UI component
 * Author(s): CS 362-Team 20
 ********************************************************************/

import { useState } from "react";
import { useQuery } from "react-query";
import axios from "axios";
import { VITE_BACKEND_URL } from "../../../utils/variables.js";
import { TaskCard } from "./task-card.jsx";

// Get example tasks from backend
const getTasks = async () => {
  const res = await axios.get(`${VITE_BACKEND_URL}/tasks/testing`);
  return res.data;
};

export const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  // Get tasks using react query
  const { isLoading, error } = useQuery("tasks", getTasks, {
    onSuccess: (data) => setTasks(data),
  });

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
  if (isLoading) {
    return <div className="ml-[5%]">Getting tasks...</div>;
  }
  if (error) {
    return <div className="ml-[5%]">An error occurred fecthing tasks.</div>;
  }
  return (
    // Task list component
    <div className="bg-[#E5E5E5] mt-[40px] w-[474px] rounded-[10px]">
      {/* Title and count*/}
      <div className="flex items-center justify-between m-5 text-[20px] font-semibold bg-white px-5 py-3 rounded-[10px] shadow">
        <h2>Tasks</h2>
        <span className="text-[22px]">{tasks.length}</span>
      </div>
      {/* Tasks */}
      <div className="mx-5 mb-5 space-y-4">
        {tasks.map((task, taskID) => {
          return (
            <TaskCard
              key={taskID}
              task={task}
              toggleTaskStatus={toggleTaskStatus}
            />
          );
        })}
      </div>
    </div>
  );
};
