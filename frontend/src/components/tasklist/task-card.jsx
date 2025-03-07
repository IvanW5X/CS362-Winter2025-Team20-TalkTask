/********************************************************************
 * File Name: task-card.jsx
 * Date: 2/26/2025
 * Description: React file for displaying task information
 * Author(s): CS 362-Team 20
 ********************************************************************/

import { MdOutlineModeEditOutline } from "react-icons/md";
import { EditPopUp } from "../editpopup/editpopup";
import { useState } from "react";

const formatTime = (date) => {
  
  // Check if the date is valid
  if (!date || !(date instanceof Date) || isNaN(date.getTime())) {
    return 'N/A'; // Handle invalid or missing dates
  }
  // Use getHours() and getMinutes() for local time
  let hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  const strTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')} ${ampm}`;
  return strTime;
};

const getPriority = (priority) => {
  switch (Number(priority)) {
    case 1:
      return "bg-red-500";
    case 2:
      return "bg-yellow-500";
    case 3:
      return "bg-green-500";
    default:
      return "bg-gray-500";
  }
};

export const TaskCard = ({
  task: { taskID, title, description, priority, dateStart, dateCompleted, status, category },
  toggleTaskStatus,
}) => {
  const [editMenu, setEditMenu] = useState(false);

  return (
    
    <div className="bg-[#F4F3F2] p-4 rounded-[10px] flex items-center shadow-[0_0px_20px_rgba(0,0,0,0.25)]">
      {editMenu && (
        <EditPopUp
          onClose={() => setEditMenu(false)}
          task={{ taskID, title, priority, description, dateStart, dateCompleted, status, category }}
        />
      )}

      {/* Priority */}
      <div
        className={`w-5 h-5 rounded-full mr-3 border-1 border-black ${getPriority(
          priority
        )}`}
      ></div>

      {/* Task text */}
      <div className="w-[35px] flex-1 text-[16px] font-semibold break-words mr-[10px]">
        {title}
      </div>

      {/* Pencil icon */}
      <div className="bg-[#cdcdcd] w-9 h-9 rounded-full shadow-black shadow-sm flex items-center justify-center">
        <MdOutlineModeEditOutline
          className="text-[25px] cursor-pointer flex text-right"
          onClick={() => setEditMenu(!editMenu)}
        />
      </div>
      
      {/* Times */}
      <div className="text-[12px] font-semibold ml-[10px] flex-col items-start">
        <div className="flex flex-row">
          <p className="mr-1">Start:</p>
          
          {formatTime(new Date(dateStart))}
        </div>
        <div className="flex flex-row">
          <p className="mr-2">End: </p>
          {formatTime(new Date(dateCompleted))}

        </div>
      </div>
      <div className="text-sm mr-3"></div>

      {/* Checkbox */}
      <input
        type="checkbox"
        className="form-checkbox color-[#F4F3F2] w-5 h-5 cursor-pointer accent-black"
        checked={status}
        onChange={() => {toggleTaskStatus(taskID)}}
        
      />
    </div>
  );
};
