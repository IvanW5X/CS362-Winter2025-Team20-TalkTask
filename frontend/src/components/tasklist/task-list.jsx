/********************************************************************
 * File Name: tasks.jsx
 * Date: 1/26/2025
 * Description: JSX file for tasks UI component
 * Author(s): CS 362-Team 20
 ********************************************************************/

import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { VITE_BACKEND_URL } from "../../../utils/variables.js";
import { TaskCard } from "./task-card.jsx";
import { useQuery, useMutation, useQueryClient } from "react-query";

// Function to fetch tasks from the backend
const getTasks = async () => {
  const res = await axios.get(`${VITE_BACKEND_URL}/tasks/read-tasks`);
  return res.data;
};

export const TaskList = ({ selectedCategory }) => {
  
  // Fetch tasks using react-query
  const queryClient = useQueryClient();
  const { data: tasks, isLoading, error } = useQuery("tasks", getTasks);

  const updateStatusMutation = useMutation(
    (taskID) => {
      const task = tasks.find((t) => t.taskID === taskID);
      const newStatus = task.status === "completed" ? "pending" : "completed";
      return axios.patch(`${VITE_BACKEND_URL}/tasks/update-task/${taskID}`, {status: newStatus});
    },
    {
      onSuccess: (_, taskID) => {
        queryClient.setQueryData("tasks", (oldTasks) => 
          oldTasks.map((task) => 
            task.taskID === taskID
              ? { ...task, status: task.status === "completed" ? "in-progress" : "completed" }
              : task
          )
        )
      }
    }
  )

  const toggleTaskStatus = (taskID) => {
    updateStatusMutation.mutate(taskID);
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

  return (
    <div className="bg-[#E5E5E5] mt-[40px] w-[474px] rounded-[10px]">
      {/* Task Header */}
      <div className="flex items-center justify-between m-5 text-[20px] font-semibold bg-white px-5 py-3 rounded-[10px] shadow">
        <h2>{selectedCategory || "All Tasks"}</h2>
        <span className="text-[22px]">{filteredTasks?.length}</span>
      </div>

      {/* Task List */}
      <div className="mx-5 mb-5 space-y-4">
        {filteredTasks?.length === 0 ? (
          <div className="flex flex-col items-center">
            <p>No tasks found in this category.</p>
            <Link
              to="/create-task"
              className="mt-4 bg-blue-500 text-white font-semibold py-2 px-4 rounded cursor-pointer"
              >
                Add Task
            </Link>
          </div>
        ) : (
          filteredTasks.map((task) => (
            <TaskCard
              key={task.taskID}
              task={task}
              toggleTaskStatus={toggleTaskStatus}
            />
          )),
        <div className="mt-4">
          <Link
            to="/create-task"
            className="bg-blue-500 text-white font-semibold py-2 px-4 rounded cursor-pointer"
          >
            Create New Task
          </Link>
        </div>
        )}
      </div>
    </div>
  );
};
