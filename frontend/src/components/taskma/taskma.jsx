/********************************************************************
 * File Name: tasksma.jsx
 * Date: 3/1/2025
 * Description: JSX file for tasks management component
 * Author(s): CS 362-Team 20
 ********************************************************************/

import { useState } from "react";
import { FaMicrophone } from "react-icons/fa";
import { CiCirclePlus } from "react-icons/ci";
import { FaCheck } from "react-icons/fa";
import { MdOutlineIntegrationInstructions } from "react-icons/md";
import { IoStar } from "react-icons/io5";
import { AddPopUp } from "../addpopup/addpopup";
import { useMutation, useQueryClient } from "react-query";
import axios from "axios";
import { VITE_BACKEND_URL, AUTH0_AUDIENCE } from "../../../utils/variables.js";
import { useAuth0 } from "@auth0/auth0-react";

export const TasksManagement = () => {
  const [addMenuV, setAddMenuV] = useState(false);
  const queryClient = useQueryClient();
  const { getAccessTokenSilently, isAuthenticated } = useAuth0();

  const deleteCompletedTasksMutation = useMutation(
    async () => {
      if (!isAuthenticated) {
        console.error("User not authenticated, action denied");
        return;
      }
      const accessToken = await getAccessTokenSilently({
        audience: AUTH0_AUDIENCE,
      });
      const response = await axios.delete(`${VITE_BACKEND_URL}/tasks/delete`, {
        headers: { Authorization: `Bearer ${accessToken}` },
      });
      return response.data;
    },
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
    if (
      window.confirm("Are you sure you want to delete all completed tasks?")
    ) {
      deleteCompletedTasksMutation.mutate();
    }
  };

  return (
    <div className="bg-[#cdcdcd] ml-[5%] rounded-[10px] h-[435px] min-w-[290px] w-[30%] font-semibold">
      {/* add menu */}
      {addMenuV && <AddPopUp onClose={() => setAddMenuV(false)} />}

      {/* Title */}
      <div className="flex text-center m-5 text-[20px] bg-white px-5 py-3 rounded-[10px] shadow-[0_0px_20px_rgba(0,0,0,0.25)]">
        <h2 className="w-full text-center">Task Managment</h2>
      </div>

      {/* actions */}
      <div className="flex flex-col mx-7 space-y-[29px] text-[16px] relative">
        {/* add task */}
        <div
          className={`flex mt-[0] cursor-pointer h-[40px] bg-white rounded-2xl justify-center items-center shadow-[0_0px_20px_rgba(0,0,0,0.25)]`}
          onClick={() => setAddMenuV(!addMenuV)}
        >
          Add Task
          <CiCirclePlus className="absolute right-3 text-[25px]" />
        </div>

        {/* clear completed tasks */}
        <div
          className={`flex cursor-pointer h-[40px] bg-white rounded-2xl justify-center items-center shadow-[0_0px_20px_rgba(0,0,0,0.25)]`}
          onClick={handleDeleteTasks}
        >
          Clear Completed Tasks
          <FaCheck className="absolute right-3 " />
        </div>

        {/* voice commands */}
        <div
          className={`flex cursor-pointer h-[40px] bg-white rounded-2xl justify-center items-center shadow-[0_0px_20px_rgba(0,0,0,0.25)]`}
        >
          Voice Commands
          <MdOutlineIntegrationInstructions className="absolute right-3" />
        </div>

        <div
          className={`flex cursor-pointer h-[40px] bg-white rounded-2xl justify-center items-center shadow-[0_0px_20px_rgba(0,0,0,0.25)]`}
        >
          Suggest a Task
          <IoStar className="absolute right-3" />
        </div>

        {/* mic button */}
        <div
          className={`flex cursor-pointer h-[40px] bg-[#37E03A] rounded-2xl justify-center items-center shadow-[0_0px_20px_rgba(0,0,0,0.25)]`}
        >
          <FaMicrophone className="text-[30px] text-white" />
        </div>
      </div>
    </div>
  );
};
