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

import {
  useDeleteCompletedTasks,
  useSuggestTask,
} from "../../hooks/taskHooks.js";
import { sendTranscript } from "../../services/taskServices.js";
import { createSuggestTask } from "../../services/create-ai-task.js";

//popups
import { AddPopUp } from "./addpopup/addpopup.jsx";
import { FilterSort } from "./filter-sort/filter-sort.jsx";
import { CommandsPopUp } from "./voice-commands/commandsPopUp.jsx";
import { SuggestedTask } from "./suggestpopup/suggestpopup.jsx";

export const TasksManagement = ({ setFilters, filters, selectedCategory }) => {
  //popup consts
  const [addMenuV, setAddMenuV] = useState(false);
  const [filterMenu, setFilterMenu] = useState(false);
  const [commandsMenuV, setCommandsMenuV] = useState(false);
  const [suggestedTaskMenuV, setSuggestedTaskMenuV] = useState(false);

  //services and backend
  const { user, isAuthenticated, accessToken } = useAuth();
  const [isListening, setIsListening] = useState(false);
  const deleteCompletedTasksMutation = useDeleteCompletedTasks(
    user,
    isAuthenticated,
    accessToken
  );

  //seuggest task refetch
  const { suggestedTask, refetch: suggestTaskRefetch } = useSuggestTask(
    user,
    isAuthenticated,
    accessToken
  );

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

  //mic button handler
  const handleMicClick = () => {
    if (isListening) {
      stopListening();
      setIsListening(false);
    } else {
      startListening(
        (transcript) => {
          sendTranscript(user, isAuthenticated, accessToken, transcript, selectedCategory);
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

  //sugest task handler
  const handleSuggestTask = async () => {
    await suggestTaskRefetch(); // Fetch the suggested task
    setSuggestedTaskMenuV(true); // Open the suggested task popup
  };


  if (selectedCategory === null || selectedCategory === undefined) {
    return (
      <div></div>
    );
  }

  return (
    <div className="bg-[#cdcdcd] ml-[3%] rounded-[10px] h-[495px] min-w-[290px] w-[27%] font-semibold">
      
      {/* add menu */}
      {addMenuV && (
        <AddPopUp
          onClose={() => setAddMenuV(false)}
          selectedCategory={selectedCategory}
        />
      )}

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

      {/* suggested task popup */}
      {suggestedTaskMenuV && suggestedTask && (
        <SuggestedTask
          onClose={() => setSuggestedTaskMenuV(false)}
          suggestedTask={createSuggestTask(suggestedTask)}
          selectedCategory={selectedCategory}
        />
      )}

      {/* Title */}
      <div className="flex text-center m-5 text-[20px] bg-[#F4F3F2] px-5 py-3 rounded-2xl shadow-[0_0px_20px_rgba(0,0,0,0.25)]">
        <h2 className="w-full text-center">Task Management</h2>
      </div>

      {/* actions */}
      <div className="flex flex-col mx-7 space-y-[29px] text-[16px] relative">
        <button
          className={`flex mt-[0] cursor-pointer h-[40px] bg-[#F4F3F2] rounded-2xl justify-center items-center shadow-[0_0px_20px_rgba(0,0,0,0.25)] hover:bg-gray-400 hover:shadow-xl transition-colors duration-200`}
          onClick={() => setAddMenuV(!addMenuV)}
        >
          Add Task
          <IoMdAddCircleOutline className="absolute right-3 text-[25px]" />
        </button>

        {/* filter/sort*/}
        <button
          className={`flex cursor-pointer h-[40px] bg-[#F4F3F2] rounded-2xl justify-center items-center shadow-[0_0px_20px_rgba(0,0,0,0.25)] hover:bg-gray-400 hover:shadow-xl transition-colors duration-200`}
          onClick={() => setFilterMenu(!filterMenu)}
        >
          Filter/Sort
          <IoList className="absolute right-3 text-[25px]" />
        </button>

        {/* clear completed tasks */}
        <button
          className={`flex cursor-pointer h-[40px] bg-[#F4F3F2] rounded-2xl justify-center items-center shadow-[0_0px_20px_rgba(0,0,0,0.25)] hover:bg-gray-400 hover:shadow-xl transition-colors duration-200`}
          onClick={handleDeleteTasks}
        >
          Clear Checked Tasks
          <FaCheck className="absolute right-3 text-[20px]" />
        </button>

        {/* voice commands */}
        <button
          className={`flex cursor-pointer h-[40px] bg-[#F4F3F2] rounded-2xl justify-center items-center shadow-[0_0px_20px_rgba(0,0,0,0.25)] hover:bg-gray-400 hover:shadow-xl transition-colors duration-200`}
          onClick={() => setCommandsMenuV(!commandsMenuV)}
        >
          Voice Commands
          <IoList className="absolute right-3 text-[25px]" />
        </button>

        {/* Suggest task */}
        <button
          className={`flex cursor-pointer h-[40px] bg-[#F4F3F2] rounded-2xl justify-center items-center shadow-[0_0px_20px_rgba(0,0,0,0.25)] hover:bg-gray-400 hover:shadow-xl transition-colors duration-200`}
          onClick={handleSuggestTask}
        >
          Suggest a Task
          <IoStar className="absolute right-3 text-[20px]" />
        </button>

        {/* mic button */}
        <button
          className={`flex cursor-pointer h-[40px] ${
            isListening ? "bg-red-500" : "bg-[#37E03A]"
          } rounded-2xl justify-center items-center shadow-[0_0px_20px_rgba(0,0,0,0.25)] hover:bg-green-600 hover:shadow-xl transition-colors duration-200`}
          onClick={handleMicClick}
        >
          <FaMicrophone className="text-[30px] text-[#F4F3F2]" />
        </button>
      </div>
    </div>
  );
};
