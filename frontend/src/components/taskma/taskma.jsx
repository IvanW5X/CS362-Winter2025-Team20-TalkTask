import { useState } from "react";
import { FaMicrophone } from "react-icons/fa";
import { CiCirclePlus } from "react-icons/ci";
import { FaCheck } from "react-icons/fa";
import { MdOutlineSort } from "react-icons/md";
import { MdOutlineIntegrationInstructions } from "react-icons/md";
import { IoStar } from "react-icons/io5";
import { AddPopUp } from "../addpopup/addpopup";

import { useMutation, useQueryClient } from "react-query";
import axios from "axios";
import { VITE_BACKEND_URL } from "../../../utils/variables.js";

export const TasksManagement = () => {
  const [addMenuV, setAddMenuV] = useState(false);

  const queryClient = useQueryClient();

  const deleteCompletedTasksMutation = useMutation(
    () => axios.delete(`${VITE_BACKEND_URL}/tasks/delete`),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("tasks");
      },
      onError: (error) => {
        console.error("Error deleting completed tasks:", error);
        alert("Failed to delete completed tasks.");
      },
    }
  );

  const handleDeleteTasks = () => {
    if (window.confirm("Are you sure you want to delete all completed tasks?")) {
      deleteCompletedTasksMutation.mutate();
    }
  };

  return (
    <div className="bg-[#cdcdcd] w-[350px] ml-[30px] rounded-[10px]">
      {/* add menu */}
      {addMenuV && <AddPopUp onClose={() => setAddMenuV(false)} />}

      {/* Title */}
      <div className="flex text-center m-5 text-[20px] font-semibold bg-white px-5 py-3 rounded-[10px]">
        <h2 className="w-full text-center">Task Managment</h2>
      </div>

      {/* actions */}
      <div className="flex flex-col mx-7 mb-5 space-y-12 text-[20px] font-medium relative ">
        {/* add task */}
        <div
          className={`flex mt-12 cursor-pointer h-[40px] bg-white rounded-2xl justify-center items-center shadow`}
          onClick={() => setAddMenuV(!addMenuV)}
        >
          Add Task
          <CiCirclePlus className="absolute right-3 text-[25px]" />
        </div>

        {/* clear completed tasks */}
        <div
          className={`flex cursor-pointer h-[40px] bg-white rounded-2xl justify-center items-center shadow`}
          onClick={handleDeleteTasks}
        >
          Clear Completed Tasks
          <FaCheck className="absolute right-3 " />
        </div>

        {/* voice commands */}
        <div
          className={`flex cursor-pointer h-[40px] bg-white rounded-2xl justify-center items-center shadow`}
        >
          Voice Commands
          <MdOutlineIntegrationInstructions className="absolute right-3" />
        </div>

        <div
          className={`flex cursor-pointer h-[40px] bg-white rounded-2xl justify-center items-center shadow`}
        >
          Suggest a Task
          <IoStar className="absolute right-3" />
        </div>

        {/* mic button */}
        <div
          className={`flex cursor-pointer h-[40px] bg-[#37E03A] rounded-2xl justify-center items-center shadow`}
        >
          <FaMicrophone className="text-[30px] text-white" />
        </div>
      </div>
    </div>
  );
};
