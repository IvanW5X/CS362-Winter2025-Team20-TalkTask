/********************************************************************
 * File Name: addpopup.jsx
 * Date: 2/26/2025
 * Description: React file for adding task
 * Author(s): CS 362-Team 20
 ********************************************************************/

//icons
import { IoClose } from "react-icons/io5";

//backend
import React, { useState, useEffect } from "react";
import { useQueryClient, useMutation } from "react-query";
import axios from "axios";
import { VITE_BACKEND_URL } from "../../../../utils/variables.js";
import { useAuth } from "../../../../contexts/authContext.jsx";

export const AddPopUp = ({ onClose, selectedCategory }) => {
  const { user, isAuthenticated, accessToken } = useAuth();
  const queryClient = useQueryClient();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [timeStart, setTimeStart] = useState("");
  const [timeEnd, setTimeEnd] = useState("");
  const [priority, setPriority] = useState(3);
  const [status, setStatus] = useState(false);

  //stop scrolling when pop up
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

  const createTaskMutation = useMutation(
    async (newTask) => {
      if (!isAuthenticated) {
        console.error("User not authenticated, action denied");
        return;
      }
      const response = await axios.post(
        `${VITE_BACKEND_URL}/tasks/create-task`,
        newTask,
        { headers: { Authorization: `Bearer ${accessToken}` } }
      );
      return response.data;
    },
    {
      onSuccess: () => {
        console.log("Task created successfully");
        queryClient.invalidateQueries("tasks");
        setTitle("");
        setDescription("");
        setTimeStart("");
        setTimeEnd("");
        setPriority("");
        setStatus(false);
        onClose();
      },
      onError: (error) => {
        console.error(
          "An error occurred while creating the task:",
          error.response?.data || error.message
        );
      },
    }
  );
  const handleSubmit = (t) => {
    t.preventDefault();

    const today = new Date().toISOString().split("T")[0];

    // Ensure timeStart is in the correct format (HH:MM)
    const formattedTimeStart = timeStart
      ? timeStart
      : new Date().toTimeString().slice(0, 5);
    const formattedTimeEnd = timeEnd ? timeEnd : null;

    // Remove the 'Z' to treat the time as local time
    const dateStart = new Date(`${today}T${formattedTimeStart}:00`);
    const dateCompleted = formattedTimeEnd
      ? new Date(`${today}T${formattedTimeEnd}:00`)
      : null;

    const newTask = {
      taskID: Date.now(),
      title,
      description,
      category: selectedCategory,
      priority,
      status,
      dateStart,
      dateCompleted,
      userID: user.sub, // Use Auth0 user ID
    };
    console.log("Creating task:", newTask.title);
    createTaskMutation.mutate(newTask);
  };
  return (
    <>
      <div className="z-[10001] fixed top-0 left-0 w-full h-full bg-black/40 flex items-center justify-center ">
        <form
          className="relative border-3 flex flex-col w-[650px] h-[620px] bg-gray-200 rounded-3xl items-center overflow-x-auto"
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

          {/* label */}
          <div className="bg-[#F4F3F2] mt-4 p-4 w-[400px] text-[40px] font-bold text-center rounded-2xl">
            Add Task
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
                required
                maxLength="100"
                id="description"
                onChange={(t) => setDescription(t.target.value)}
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
                required
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
                onChange={(t) => {
                  setPriority(Number(t.target.value));
                }}
              >
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
              </select>
            </p>

            {/* Add Task Button */}
            <p className="flex -mt-1 w-full text-[#F4F3F2] justify-center">
              <button
                className="font-bold bg-[#37E03A] cursor-pointer m-3 p-2 rounded-2xl text-center w-[150px]"
                type="submit"
                id="submit"
              >
                Add Task
              </button>
            </p>
          </div>
        </form>
      </div>
    </>
  );
};
