/********************************************************************
 * File Name: tasks.jsx
 * Date: 1/26/2025
 * Description: JSX file for tasks UI component
 * Author(s): CS 362-Team 20
 ********************************************************************/

import { TaskCard } from "./task-card.jsx";
import { useAuth } from "../../../contexts/authContext.jsx";
import { useGetTasks, useUpdateTaskStatus } from "../../hooks/taskHooks.js";

export const TaskList = ({ selectedCategory }) => {
  const { user, isAuthenticated, accessToken } = useAuth();
  const {
    data: tasks = [],
    isLoading,
    error,
  } = useGetTasks(user, isAuthenticated, accessToken);
  const updateTaskStatusMutation = useUpdateTaskStatus(
    user,
    isAuthenticated,
    accessToken
  );

  const toggleTaskStatus = (taskID) => {
    const task = tasks.find((t) => t.taskID === taskID);
    const newStatus = !task.status;
    console.log(
      `Toggling task ${task.title} from ${task.status} to ${newStatus}`
    );
    updateTaskStatusMutation.mutate({ taskID, newStatus });
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
        <h2>{selectedCategory}</h2>
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
              toggleTaskStatus={() => {
                toggleTaskStatus(task.taskID);
              }}
            />
          ))
        )}
      </div>
    </div>
  );
};
