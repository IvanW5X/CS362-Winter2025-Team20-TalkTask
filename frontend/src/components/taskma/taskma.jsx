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

import { startListening, stopListening} from "../../services/webSpeech.js";


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


  const [isListening, setIsListening] = useState(false);

  const handleMicClick = () => {
    if (isListening) {
      stopListening();
      setIsListening(false);
    } else {
      startListening(
        (transcript) => {
          sendBackend(transcript);
        },
        (error) => {
          console.error("Error:", error);
          setIsListening(false);
        },
        () => {
          setIsListening(false);
        }
      );  
      setIsListening(true);
    }
  };

  const sendBackend = async (transcript) => {
    try {
      const response = await axios.post(`${VITE_BACKEND_URL}/voice-command`, {
        transcript,
      });
      console.log("Backend response:", response.data);
    } catch (error) {
      console.error("Error sending transcript to backend:", error);
    }
  };


  return (
    <div className="bg-[#cdcdcd] ml-[5%] rounded-[10px] h-[435px] min-w-[290px] w-[30%] shadow-[0_0px_20px_rgba(0,0,0,0.25)] font-semibold">
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
          className={`flex cursor-pointer h-[40px] ${
            isListening ? "bg-red-500" : "bg-[#37E03A]"
          } rounded-2xl justify-center items-center shadow-[0_0px_20px_rgba(0,0,0,0.25)]`}
          onClick={handleMicClick}
        >
          <FaMicrophone className="text-[30px] text-white" />
        </div>
      </div>
    </div>
  );
};
