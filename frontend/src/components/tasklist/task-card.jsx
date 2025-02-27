/********************************************************************
 * File Name: task-card.jsx
 * Date: 2/26/2025
 * Description: React file for displaying task information
 * Author(s): CS 362-Team 20
 ********************************************************************/

import { MdOutlineModeEditOutline } from "react-icons/md";

const getPriority = (priority) => {
  switch (priority) {
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
  task: { title, priority, dateCreated, dateCompleted, status },
  toggleTaskStatus,
}) => {
  return (
    <div className="bg-white p-4 rounded-[10px] flex items-center shadow">
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

      {/* Pencil icon (you could replace with an actual icon component) */}
      <MdOutlineModeEditOutline
        className={`text-[25px] cursor-pointer flex text-right`}
      />
      {/* Times */}
      <div className="text-[12px] font-semibold ml-[10px] flex-col items-start">
        <div className="flex flex-row">
          <p className="mr-1">Start:</p>
          {`${new Date(dateCreated)
            .getUTCHours()
            .toString()
            .padStart(2, "0")}:${new Date(dateCreated)
            .getUTCMinutes()
            .toString()
            .padStart(2, "0")}`}
        </div>
        <div className="flex flex-row">
          <p className="mr-2">End: </p>
          {`${new Date(dateCompleted)
            .getUTCHours()
            .toString()
            .padStart(2, "0")}:${new Date(dateCompleted)
            .getUTCMinutes()
            .toString()
            .padStart(2, "0")}`}
        </div>
      </div>
      <div className="text-sm mr-3"></div>

      {/* Checkbox */}
      <input
        type="checkbox"
        className="form-checkbox h-5 w-5 cursor-pointer"
        checked={status === "completed"}
        onChange={() => toggleTaskStatus(id)}
      />
    </div>
  );
};
