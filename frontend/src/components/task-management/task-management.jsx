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
import { useAuth } from "../../../contexts/authContext.jsx";
import { startListening, stopListening } from "../../services/webSpeech.js";

import { useDeleteCompletedTasks, useSuggestTask } from "../../hooks/taskHooks.js";
import { sendTranscript } from "../../services/taskServices.js";

//popups
import { AddPopUp } from "./addpopup/addpopup.jsx";
import { FilterSort } from "./filter-sort/filter-sort.jsx";
import { CommandsPopUp } from "./voice-commands/commandsPopUp.jsx";


export const TasksManagement = ({ setFilters, filters }) => {
  const [addMenuV, setAddMenuV] = useState(false);
  const [filterMenu, setFilterMenu] = useState(false);
  const [commandsMenuV, setCommandsMenuV] = useState(false);
  const { user, isAuthenticated, accessToken } = useAuth();
  const [isListening, setIsListening] = useState(false);
  const deleteCompletedTasksMutation = useDeleteCompletedTasks(user, isAuthenticated, accessToken);
  const { refetch: suggestTaskRefetch } = useSuggestTask(user, isAuthenticated, accessToken);
  
  // Function to handle applying filters and sorting
  const handleApplyFilters = (newFilters) => {
    setFilters(newFilters);
    setFilterMenu(false);
  };
  const handleDeleteTasks = () => {
    if (
      window.confirm("Are you sure you want to delete all completed tasks?")
    ) {
      deleteCompletedTasksMutation.mutate("tasks");
    }
  };
  const handleMicClick = () => {
    if (isListening) {
      stopListening();
      setIsListening(false);
    } else {
      startListening(
        (transcript) => {
          sendTranscript(user, isAuthenticated, accessToken, transcript);
          console.log(transcript);
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
  const handleSuggestTask  = async () => {
    const { data: suggestedTask} = await suggestTaskRefetch();
    
    // Do something with this
    console.log(suggestedTask);
  };
  return (
    <div className="bg-[#cdcdcd] ml-[3%] rounded-[10px] h-[495px] min-w-[290px] w-[27%] font-semibold">
      
      {/* add menu */}
      {addMenuV && <AddPopUp onClose={() => setAddMenuV(false)} />}
      
      {/* filter popup */}
      {filterMenu && (
        <FilterSort
          onClose={() => setFilterMenu(false)}
          onApply={handleApplyFilters}
          initialSelectedPriorities={filters.selectedPriorities} 
          initialSortOrder={filters.sortOrder}
        />
      )}    
      
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
          className={`flex mt-[0] cursor-pointer h-[40px] bg-[#F4F3F2] rounded-2xl justify-center items-center shadow-[0_0px_20px_rgba(0,0,0,0.25)] hover:bg-gray-300 hover:shadow-xl transition-colors duration-200`}
          onClick={() => setAddMenuV(!addMenuV)}
        >
          Add Task
          <IoMdAddCircleOutline className="absolute right-3 text-[25px]" />
        </button>

        {/* filter/sort*/}
        <button
          className={`flex cursor-pointer h-[40px] bg-[#F4F3F2] rounded-2xl justify-center items-center shadow-[0_0px_20px_rgba(0,0,0,0.25)] hover:bg-gray-300 hover:shadow-xl transition-colors duration-200`}
          onClick={() => setFilterMenu(!filterMenu)}
        >
          Filter/Sort
          <IoList className="absolute right-3 text-[25px]" />
        </button>

        {/* clear completed tasks */}
        <button
          className={`flex cursor-pointer h-[40px] bg-[#F4F3F2] rounded-2xl justify-center items-center shadow-[0_0px_20px_rgba(0,0,0,0.25)] hover:bg-gray-300 hover:shadow-xl transition-colors duration-200`}
          onClick={handleDeleteTasks}
        >
          Clear Checked Tasks
          <FaCheck className="absolute right-3 text-[20px]" />
        </button>

        {/* voice commands */}
        <button
          className={`flex cursor-pointer h-[40px] bg-[#F4F3F2] rounded-2xl justify-center items-center shadow-[0_0px_20px_rgba(0,0,0,0.25)] hover:bg-gray-300 hover:shadow-xl transition-colors duration-200`}
          onClick={() => setCommandsMenuV(!commandsMenuV)}
        >
          Voice Commands
          <IoList className="absolute right-3 text-[25px]" />
        </button>

        {/* Suggest task */}
        <button
          className={`flex cursor-pointer h-[40px] bg-[#F4F3F2] rounded-2xl justify-center items-center shadow-[0_0px_20px_rgba(0,0,0,0.25)] hover:bg-gray-300 hover:shadow-xl transition-colors duration-200`}
          onClick={handleSuggestTask}
        >
          Suggest a Task
          <IoStar className="absolute right-3 text-[20px]" />
        </button>

        {/* mic button */}
        <button
          className={`flex cursor-pointer h-[40px] ${
            isListening ? "bg-red-500" : "bg-[#37E03A]"
          } rounded-2xl justify-center items-center shadow-[0_0px_20px_rgba(0,0,0,0.25)] hover:bg-green-500 hover:shadow-xl transition-colors duration-200`}
          onClick={handleMicClick}
        >
          <FaMicrophone className="text-[30px] text-[#F4F3F2]" />
        </button>
      </div>
    </div>
  );
};
