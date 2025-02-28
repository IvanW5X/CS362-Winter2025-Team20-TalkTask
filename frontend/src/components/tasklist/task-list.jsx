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

// Function to fetch tasks from the backend
const getTasks = async () => {
  const res = await axios.get(`${VITE_BACKEND_URL}/tasks/testing`);
  return res.data;
};

export const TaskList = ({ selectedCategory }) => {
  const [tasks, setTasks] = useState([]);
  
  // Fetch tasks using react-query
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

  // Filter tasks based on selected category
  const filteredTasks = selectedCategory
    ? tasks.filter((task) => task.category === selectedCategory)
    : tasks;

  if (isLoading) {
    return <div className="ml-[5%]">Loading tasks...</div>;
  }
  if (error) {
    return <div className="ml-[5%]">An error occurred while fetching tasks.</div>;
  }


  const sortedTasks = [...filteredTasks].sort((a, b) => a.priority - b.priority);

  return (
    <div className="bg-[#E5E5E5] w-[474px] rounded-[10px]">
      {/* Task Header */}
      <div className="flex items-center justify-between m-5 text-[20px] font-semibold bg-white px-5 py-3 rounded-[10px] shadow">
        <h2>{selectedCategory || "All Tasks"}</h2>
        <span className="text-[22px]">{filteredTasks.length}</span>
      </div>

      {/* Task List */}
      <div className="mx-5 mb-5 space-y-4">
        {filteredTasks.length === 0 ? (
          <div>No tasks found in this category.</div>
        ) : (
          sortedTasks.map((task) => (
            <TaskCard
              key={task.taskID}
              task={task}
              toggleTaskStatus={toggleTaskStatus}
            />
          ))
        )}
      </div>
    </div>
  );
};
