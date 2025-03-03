/********************************************************************
 * File Name: tasks.jsx
 * Date: 1/26/2025
 * Description: JSX file for tasks UI component
 * Author(s): CS 362-Team 20
 ********************************************************************/

import { useQuery, useMutation, useQueryClient } from "react-query";
import axios from "axios";
import { VITE_BACKEND_URL } from "../../../utils/variables.js";
import { TaskCard } from "./task-card.jsx";
import { useAuth } from "../../../contexts/authContext.jsx";

export const TaskList = ({ selectedCategory }) => {
  const { user, isAuthenticated, accessToken } = useAuth();

  if (!user) {
    console.log("User not found, action denied")
    return;
  }
  // Function to fetch tasks from the backend
  const getTasks = async () => {
    if (!isAuthenticated) {
      console.log("User not authenticated, action denied");
      return;
    }
    const res = await axios.get(
      `${VITE_BACKEND_URL}/tasks/read-task/${user.sub}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    return res.data;
  };
  const queryClient = useQueryClient();
  const { data: tasks, isLoading, error } = useQuery("tasks", getTasks);

  const updateStatusMutation = useMutation(
    async ({ taskID, newStatus }) => {
      if (!isAuthenticated) {
        console.error("User not authenticated, action denied");
        return;
      }
      const response = await axios.patch(
        `${VITE_BACKEND_URL}/tasks/update-task/${taskID}`,
        {
          status: newStatus,
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      return response.data;
    },
    {
      onSuccess: (_, { taskID, newStatus }) => {
        // Optimistically update the local state
        queryClient.setQueryData("tasks", (oldTasks) =>
          oldTasks.map((task) =>
            task.taskID === taskID ? { ...task, status: newStatus } : task
          )
        );
      },
      onError: (error) => {
        console.error("Error updating task status:", error);
        alert("Failed to update task status.");
      },
    }
  );

  const toggleTaskStatus = (taskID) => {
    const task = tasks.find((t) => t.taskID === taskID);
    const newStatus = task.status === "completed" ? "pending" : "completed";
    console.log(`Toggling task ${taskID} from ${task.status} to ${newStatus}`);
    updateStatusMutation.mutate({ taskID, newStatus });
  };

  // Filter tasks based on selected category
  const filteredTasks = selectedCategory
    ? tasks.filter((task) => task.category === selectedCategory)
    : tasks;

  if (isLoading) {
    return <div className="ml-[5%]">Loading tasks...</div>;
  }
  if (error) {
    return (
      <div className="ml-[5%]">
        An error occurred while fetching tasks. {error.message}
      </div>
    );
  }

  const sortedTasks = [...filteredTasks].sort(
    (a, b) => a.priority - b.priority
  );

  return (
    <div className="bg-[#cdcdcd] w-[70%] rounded-[10px] h-min min-w-[400px]">
      {/* Task Header */}
      <div className="flex items-center justify-between m-5 text-[20px] font-semibold bg-[#F4F3F2] px-[15px] py-[10px] rounded-[10px] shadow-[0_0px_20px_rgba(0,0,0,0.25)]">
        <h2>{selectedCategory || "All Tasks"}</h2>
        <span className="text-[22px]">{filteredTasks?.length}</span>
      </div>

      {/* Task List */}
      <div className="mx-5 mb-5 space-y-[10px]">
        {filteredTasks?.length === 0 ? (
          <div className="flex flex-col items-center">
            <p>No tasks found in this category.</p>
          </div>
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
