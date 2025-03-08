/********************************************************************
 * File Name: editpopup.jsx
 * Date: 2/26/2025
 * Description: React file for editting task
 * Author(s): CS 362-Team 20
 ********************************************************************/

import { useState, useEffect } from "react";
import { IoClose } from "react-icons/io5";
import { useQueryClient, useMutation } from "react-query";
import axios from "axios";
import { VITE_BACKEND_URL } from "../../../../utils/variables.js";
import { useAuth } from "../../../../contexts/authContext.jsx";

export const EditPopUp = ({ onClose, task }) => {
  const queryClient = useQueryClient();
  const { isAuthenticated, accessToken } = useAuth();

  const [title, setTitle] = useState(task?.title || "");
  const [description, setDescription] = useState(task?.description || "");
  const [category, setCategory] = useState(task?.category || "");
  const [timeStart, setTimeStart] = useState(
    task?.dateStart ? new Date(task.dateStart).toTimeString().slice(0, 5) : ""
  );
  const [timeEnd, setTimeEnd] = useState(
    task?.dateCompleted
      ? new Date(task.dateCompleted).toTimeString().slice(0, 5)
      : ""
  );
  const [priority, setPriority] = useState(task?.priority || 1);
  const [status, setStatus] = useState(task?.status || false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    document.body.style.position = "fixed";
    document.body.style.width = "100%";

    return () => {
      document.body.style.overflow = "auto";
      document.body.style.position = "";
      document.body.style.width = "";
    };
  }, []);

  const updateTaskMutation = useMutation(
    (updatedTask) => {
      if (!isAuthenticated) {
        console.error("User is not authenticated, action denied");
        return;
      }
      const response = axios.patch(
        `${VITE_BACKEND_URL}/tasks/update-task/${task.taskID}`,
        updatedTask,
        { headers: { Authorization: `Bearer ${accessToken}` } }
      );
      return response.data;
    },
    {
      onSuccess: () => {
        console.log("Task updated successfully");
        queryClient.invalidateQueries("tasks");
        setTitle("");
        setDescription("");
        setCategory("");
        setTimeStart("");
        setTimeEnd("");
        setPriority("");
        setStatus(false);
        onClose();
      },
      onError: (error) => {
        console.error(
          "An error occurred while updating the task:",
          error.response?.data || error.message
        );
      },
    }
  );

  const handleSubmit = (t) => {
    t.preventDefault();

    const today = new Date().toISOString().split("T")[0];

    // Format timeStart and timeEnd
    const formattedTimeStart = timeStart
      ? timeStart
      : new Date().toTimeString().slice(0, 5);
    const formattedTimeEnd = timeEnd ? timeEnd : null;

    // Create date objects for start and end times
    const dateStart = new Date(`${today}T${formattedTimeStart}:00`);
    const dateCompleted = formattedTimeEnd
      ? new Date(`${today}T${formattedTimeEnd}:00`)
      : null;

    // Prepare the updated task object
    const updatedTask = {
      title,
      description,
      category,
      priority,
      status,
      dateStart,
      dateCompleted,
    };

    console.log("Updating task:", updatedTask);
    updateTaskMutation.mutate(updatedTask);
  };

  return (
    <>
      <div className="z-[10001] fixed top-0 left-0 w-full h-full bg-black/40 flex items-center justify-center ">
        <form
          className="relative border-3 flex flex-col w-[900px] h-[700px] bg-gray-200 rounded-3xl items-center overflow-x-auto"
          onSubmit={handleSubmit}
        >
          {/* Close Button */}
          <button
            className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 text-3xl"
            onClick={onClose}
            type="button"
          >
            <IoClose className="cursor-pointer" />
          </button>

          {/* Label */}
          <div className="bg-[#F4F3F2] mt-4 p-4 w-[400px] text-[40px] font-bold text-center rounded-2xl">
            Edit Task
          </div>

          {/* Input Container */}
          <div className="flex flex-col mt-4 w-[90%] max-w-[800px] mx-auto">
            {/* Input Title */}
            <p className="flex my-2">
              <label
                htmlFor="title"
                className="bg-[#F4F3F2] m-3 p-2 rounded-2xl text-center w-[150px]"
              >
                Title
              </label>
              <input
                className="border-[2px] bg-[#F4F3F2] w-[600px] min-w-[200px] m-2 p-2"
                type="text"
                placeholder="Name of the task"
                maxLength="100"
                id="title"
                required
                value={title}
                onChange={(t) => setTitle(t.target.value)}
              />
            </p>

            {/* Input Description */}
            <p className="flex my-2">
              <label
                htmlFor="description"
                className="flex items-center justify-center bg-[#F4F3F2] m-3 p-2 rounded-2xl w-[150px]"
              >
                Description
              </label>
              <textarea
                className="border-[2px] bg-[#F4F3F2] w-[600px] min-w-[200px] m-2 p-2 resize-none"
                placeholder="Description of the task"
                maxLength="100"
                id="description"
                value={description}
                onChange={(t) => setDescription(t.target.value)}
              />
            </p>

            {/* Category */}
            <p className="flex my-2">
              <label
                htmlFor="category"
                className="bg-[#F4F3F2] m-3 p-2 rounded-2xl text-center w-[150px]"
              >
                Category
              </label>
              <input
                className="border-[2px] bg-[#F4F3F2] w-[600px] min-w-[200px] m-2 p-2"
                type="text"
                placeholder="Name of a existing or new category"
                maxLength="100"
                id="category"
                required
                value={category}
                onChange={(t) => setCategory(t.target.value)}
              />
            </p>

            {/* Time Start */}
            <p className="flex my-2">
              <label
                htmlFor="timeStart"
                className="flex items-center justify-center bg-[#F4F3F2] m-3 p-2 rounded-2xl text-center w-[150px]"
              >
                Time Start
              </label>
              <input
                className="border-[2px] bg-[#F4F3F2] w-[130px] m-2 p-2"
                type="time"
                id="timeStart"
                value={timeStart}
                onChange={(t) => setTimeStart(t.target.value)}
              />
            </p>

            {/* Completed By */}
            <p className="flex my-2">
              <label
                htmlFor="timeEnd"
                className="flex items-center justify-center bg-[#F4F3F2] m-3 p-2 rounded-2xl text-center w-[150px]"
              >
                Time End
              </label>
              <input
                className="border-[2px] bg-[#F4F3F2] w-[130px] m-2 p-2"
                type="time"
                id="timeEnd"
                value={timeEnd}
                onChange={(t) => setTimeEnd(t.target.value)}
              />
            </p>

            {/* Priority */}
            <p className="flex mt-2">
              <label
                htmlFor="priority"
                className="bg-[#F4F3F2] m-3 p-2 rounded-2xl text-center w-[150px]"
              >
                Priority
              </label>
              <select
                id="priority"
                className="border-[2px] bg-[#F4F3F2] w-[50px] m-2 p-2"
                value={priority}
                onChange={(t) => setPriority(Number(t.target.value))}
              >
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
              </select>
            </p>

            {/* Edit Task Button */}
            <p className="flex -mt-1 w-full text-[#F4F3F2] justify-center">
              <button
                className="font-bold bg-[#37E03A] cursor-pointer m-3 p-2 rounded-2xl text-center w-[150px]"
                type="submit"
                id="submit"
              >
                Edit Task
              </button>
            </p>
          </div>
        </form>
      </div>
    </>
  );
};
