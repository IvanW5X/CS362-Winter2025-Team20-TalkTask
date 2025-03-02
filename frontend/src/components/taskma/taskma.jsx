import { useState } from "react";
import { FaMicrophone } from "react-icons/fa";
import { CiCirclePlus } from "react-icons/ci";
import { FaCheck } from "react-icons/fa";
import { MdOutlineSort } from "react-icons/md";
import { MdOutlineIntegrationInstructions } from "react-icons/md";
import { IoStar } from "react-icons/io5";
import { AddPopUp } from "../addpopup/addpopup";
import { VoicePopUp } from "../voicepopup/voicepopup";
import { CommandsPopUp } from "../voicepopup/commandsPopUp.jsx";

import { useMutation, useQueryClient } from "react-query";
import axios from "axios";
import { VITE_BACKEND_URL } from "../../../utils/variables.js";

export const TasksManagement = () => {
  const [addMenuV, setAddMenuV] = useState(false);
  const [voiceMenuV, setVoiceMenuV] = useState(false);
  const [commandsMenuV, setCommandsMenuV] = useState(false);

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
    <div className="bg-[#cdcdcd] ml-[5%] rounded-[10px] h-[435px] min-w-[290px] w-[30%] shadow-[0_0px_20px_rgba(0,0,0,0.25)] font-semibold">
      {/* add menu */}
      {addMenuV && <AddPopUp onClose={() => setAddMenuV(false)} />}
      {voiceMenuV && <VoicePopUp onClose={() => setVoiceMenuV(false)} />}
      {commandsMenuV && <CommandsPopUp onClose={() => setCommandsMenuV(false)} />}
      

      {/* Title */}
      <div className="flex text-center m-5 text-[20px] bg-[#F4F3F2] px-5 py-3 rounded-2xl shadow-[0_0px_20px_rgba(0,0,0,0.25)]">
        <h2 className="w-full text-center">Task Managment</h2>
      </div>

      {/* actions */}
      <div className="flex flex-col mx-7 space-y-[29px] text-[16px] relative">
        {/* add task */}
        <div
          className={`flex mt-[0] cursor-pointer h-[40px] bg-[#F4F3F2] rounded-2xl justify-center items-center shadow-[0_0px_20px_rgba(0,0,0,0.25)]`}
          onClick={() => setAddMenuV(!addMenuV)}
        >
          Add Task
          <CiCirclePlus className="absolute right-3 text-[25px]" />
        </div>

        {/* clear completed tasks */}
        <div
          className={`flex cursor-pointer h-[40px] bg-[#F4F3F2] rounded-2xl justify-center items-center shadow-[0_0px_20px_rgba(0,0,0,0.25)]`}
          onClick={handleDeleteTasks}
        >
          Clear Completed Tasks
          <FaCheck className="absolute right-3 " />
        </div>

        {/* voice commands */}
        <div
          className={`flex cursor-pointer h-[40px] bg-[#F4F3F2] rounded-2xl justify-center items-center shadow-[0_0px_20px_rgba(0,0,0,0.25)]`}
          onClick={() => setCommandsMenuV(!commandsMenuV)}
        >
          Voice Commands
          <MdOutlineIntegrationInstructions className="absolute right-3" />
        </div>

        <div
          className={`flex cursor-pointer h-[40px] bg-[#F4F3F2] rounded-2xl justify-center items-center shadow-[0_0px_20px_rgba(0,0,0,0.25)]`}
        >
          Suggest a Task
          <IoStar className="absolute right-3" />
        </div>

        {/* mic button */}
        <div
          className={`flex cursor-pointer h-[40px] bg-[#37E03A] rounded-2xl justify-center items-center shadow-[0_0px_20px_rgba(0,0,0,0.25)]`}
          onClick={() => setVoiceMenuV(!voiceMenuV)}
        >
          <FaMicrophone className="text-[30px] text-[#F4F3F2]" />
        </div>
      </div>
    </div>
  );
};
