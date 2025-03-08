/********************************************************************
 * File Name: tasksma.jsx
 * Date: 3/1/2025
 * Description: JSX file for tasks management component
 * Author(s): CS 362-Team 20
 ********************************************************************/

//icons
import { FaMicrophone } from "react-icons/fa";
import { IoMdAddCircleOutline } from "react-icons/io";
import { FaCheck } from "react-icons/fa";
import { IoStar } from "react-icons/io5";
import { IoList } from "react-icons/io5";

//react and backend
import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import axios from "axios";
import { VITE_BACKEND_URL } from "../../../utils/variables.js";
import { useAuth } from "../../../contexts/authContext.jsx";
import { startListening, stopListening } from "../../services/webSpeech.js";

//popups
import { AddPopUp } from "./addpopup/addpopup.jsx";
import { FilterSort } from "./filter-sort/filter-sort.jsx";
import { CommandsPopUp } from "./voice-commands/commandsPopUp.jsx";


export const TasksManagement = () => {
  const [addMenuV, setAddMenuV] = useState(false);
  const [filterMenu, setFilterMenu] = useState(false);
  const [commandsMenuV, setCommandsMenuV] = useState(false);
  const queryClient = useQueryClient();
  const { user, isAuthenticated, accessToken } = useAuth();
  const [isListening, setIsListening] = useState(false);

  const deleteCompletedTasksMutation = useMutation(
    async () => {
      if (!isAuthenticated) {
        console.error("User not authenticated, action denied");
        return;
      }
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
      if (!isAuthenticated) {
        console.error("User not authenticated, action denied");
        return;
      }
      const response = await axios.post(
        `${VITE_BACKEND_URL}/tasks/voice-command/${user.sub}`,
        {
          transcript,
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      console.log("Backend response:", response.data);
    } catch (error) {
      console.error("Error sending transcript to backend:", error);
    }
  };

  const suggestTaskQuery = async () => {
    if (!isAuthenticated) {
      console.error("User not authenticated, action denied");
      return;
    }
    const response = await axios.get(
      `${VITE_BACKEND_URL}/tasks/generate-task/${user.sub}`,
      {
        headers: { Authorization: `Bearer ${accessToken}` },
      }
    );
    return response.data;
  };
  const { data: suggestedTask, refetch: suggestTaskRefetch } = useQuery(
    "suggestedTask",
    suggestTaskQuery,
    { enabled: false }
  );
  const handleSuggestTask = async () => {
    await suggestTaskRefetch();
    console.log(suggestedTask);
  };

  return (
    <div className="bg-[#cdcdcd] ml-[5%] rounded-[10px] h-[495px] min-w-[290px] w-[30%] font-semibold">
      {/* add menu */}
      {addMenuV && <AddPopUp onClose={() => setAddMenuV(false)} />}
      {/* filter popup */}
      {filterMenu && <FilterSort onClose={() => setFilterMenu(false)} />}
      {/* commands pop up */}
      {commandsMenuV && (
        <CommandsPopUp onClose={() => setCommandsMenuV(false)} />
      )}

      {/* Title */}
      <div className="flex text-center m-5 text-[20px] bg-[#F4F3F2] px-5 py-3 rounded-2xl shadow-[0_0px_20px_rgba(0,0,0,0.25)]">
        <h2 className="w-full text-center">Task Managment</h2>
      </div>

      {/* actions */}
      <div className="flex flex-col mx-7 space-y-[29px] text-[16px] relative">
        
        <button
          className={`flex mt-[0] cursor-pointer h-[40px] bg-[#F4F3F2] rounded-2xl justify-center items-center shadow-[0_0px_20px_rgba(0,0,0,0.25)]`}
          onClick={() => setAddMenuV(!addMenuV)}
        >
          Add Task
          <IoMdAddCircleOutline className="absolute right-3 text-[25px]" />
        </button>

        {/* filter/sort*/}
        <button
          className={`flex cursor-pointer h-[40px] bg-[#F4F3F2] rounded-2xl justify-center items-center shadow-[0_0px_20px_rgba(0,0,0,0.25)]`}
            onClick={() => setFilterMenu(!filterMenu)}
        >
          Filter/Sort
          
          <IoList className="absolute right-3 text-[25px]" />
        </button>

        {/* clear completed tasks */}
        <button
          className={`flex cursor-pointer h-[40px] bg-[#F4F3F2] rounded-2xl justify-center items-center shadow-[0_0px_20px_rgba(0,0,0,0.25)]`}
          onClick={handleDeleteTasks}
        >
          Clear Checked Tasks
          <FaCheck className="absolute right-3 text-[20px]" />
        </button>

        {/* voice commands */}
        <button
          className={`flex cursor-pointer h-[40px] bg-[#F4F3F2] rounded-2xl justify-center items-center shadow-[0_0px_20px_rgba(0,0,0,0.25)]`}
          onClick={() => setCommandsMenuV(!commandsMenuV)}
        >
          Voice Commands
          <IoList className="absolute right-3 text-[25px]" />
        </button>

        <button
          className={`flex cursor-pointer h-[40px] bg-[#F4F3F2] rounded-2xl justify-center items-center shadow-[0_0px_20px_rgba(0,0,0,0.25)]`}
          onClick={handleSuggestTask}
        >
          Suggest a Task
          <IoStar className="absolute right-3 text-[20px]" />
        </button>

        {/* mic button */}
        <button
          className={`flex cursor-pointer h-[40px] ${
            isListening ? "bg-red-500" : "bg-[#37E03A]"
          } rounded-2xl justify-center items-center shadow-[0_0px_20px_rgba(0,0,0,0.25)]`}
          onClick={handleMicClick}
        >
          <FaMicrophone className="text-[30px] text-[#F4F3F2]" />
        </button>
      </div>
    </div>
  );
};
