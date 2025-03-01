import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { useQueryClient, useMutation } from "react-query";
import axios from "axios";
import { VITE_BACKEND_URL } from "../../../utils/variables.js";


export const AddPopUp = ({ onClose }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [timeStart, setTimeStart] = useState("");
  const [timeEnd, setTimeEnd] = useState("");
  const [priority, setPriority] = useState("");
  const [status, setStatus] = useState("pending");


  const createTaskMutation = useMutation(
    (newTask) => axios.post(`${VITE_BACKEND_URL}/tasks/create-task`, newTask),
    {
        onSuccess: () => {
            console.log('Task created successfully');
            queryClient.invalidateQueries('tasks');
            setTitle("");
            setDescription("");
            setCategory("");
            setTimeStart("");
            setTimeEnd("");
            setPriority("");
            setStatus("pending");
            window.location.href = "/";
        },
        onError: (error) => {
            console.error('An error occurred while creating the task:', error.response?.data || error.message);
        },
    }
  );
  const handleSubmit = (t) => { 
    t.preventDefault();
    const newTask = {
        taskID: Date.now(),
        title,
        description,
        category,
        priority,
        status,
        userId: '64c0f3abf8d12c0004c4a1f2',
    };
    console.log('Creating task:', newTask);
    createTaskMutation.mutate(newTask);
  };


  return (
    <>
      <div className="z-[10001] absolute top-0 left-0 w-full h-full bg-black/40 flex items-center justify-center ">
        <form
          className="relative border-3 flex flex-col w-[900px] h-[700px] bg-gray-200 rounded-3xl items-center overflow-x-auto"
          onSubmit={handleSubmit}
        >
          {/* Close Button */}
          <button
            className="absolute top-4 right-10 text-gray-600 hover:text-gray-800 text-3xl"
            onClick={onClose}
            type="button"
          >
            <IoClose className="fixed cursor-pointer" />
          </button>

          {/* label */}
          <div className="bg-white mt-4 p-4 w-[400px] text-[40px] font-bold text-center rounded-2xl">
            Add Task
          </div>

          {/* Input Container */}
          <div className="flex flex-col mt-4 w-[90%] max-w-[800px] mx-auto">
            {/* Input Title */}
            <p className="flex my-2">
              <label
                htmlFor="title"
                className="bg-white m-3 p-2 rounded-2xl text-center w-[150px]"
              >
                Title
              </label>
              <input
                className="border-[2px] bg-white w-[600px] min-w-[200px] m-2 p-2"
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
                className="flex items-center justify-center bg-white m-3 p-2 rounded-2xl w-[150px]"
              >
                Description
              </label>
              <textarea
                className="border-[2px] bg-white w-[600px] min-w-[200px] m-2 p-2 resize-none"
                placeholder="Description of the task"
                maxLength="100"
                id="description"
                onChange={(t) => setDescription(t.target.value)}
              />
            </p>

            {/* Category */}
            <p className="flex my-2">
              <label
                htmlFor="category"
                className="bg-white m-3 p-2 rounded-2xl text-center w-[150px]"
              >
                Category
              </label>
              <input
                className="border-[2px] bg-white w-[600px] min-w-[200px] m-2 p-2"
                type="text"
                placeholder="Name of a existing or new category"
                maxLength="100"
                id="category"
                required
                onChange={(t) => setCategory(t.target.value)}
              />
            </p>

            {/* Time Start */}
            <p className="flex my-2">
              <label
                htmlFor="timeStart"
                className="flex items-center justify-center  bg-white m-3 p-2 rounded-2xl text-center w-[150px]"
              >
                Time Start
              </label>
              <input
                className="border-[2px] bg-white w-[130px] m-2 p-2"
                type="time"
                id="timeStart"
                onChange={(t) => setTimeStart(t.target.value)}
              />
            </p>

            {/* Completed By */}
            <p className="flex my-2">
              <label
                htmlFor="timeEnd"
                className="bg-white m-3 p-2 rounded-2xl text-center w-[150px]"
              >
                Completed By
              </label>
              <input
                className="border-[2px] bg-white w-[130px] m-2 p-2"
                type="time"
                id="timeEnd"
                onChange={(t) => setTimeEnd(t.target.value)}
              />
            </p>

            {/* Priority */}
            <p className="flex mt-2">
              <label
                htmlFor="priority"
                className="bg-white m-3 p-2 rounded-2xl text-center w-[150px]"
              >
                Priority
              </label>
              <select
                id="priority"
                className="border-[2px] bg-white w-[50px] m-2 p-2"
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
            <p className="flex -mt-1 w-full text-white justify-center">
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
