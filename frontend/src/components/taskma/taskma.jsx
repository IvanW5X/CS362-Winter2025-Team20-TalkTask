import { useState } from "react";
import { FaMicrophone } from "react-icons/fa";
import { CiCirclePlus } from "react-icons/ci";
import { FaCheck } from "react-icons/fa";
import { MdOutlineSort } from "react-icons/md";
import { MdOutlineIntegrationInstructions } from "react-icons/md";
import { IoStar } from "react-icons/io5";
import { AddPopUp } from "../addpopup/addpopup";

export const TasksManagement = () => {
  const [addMenuV, setAddMenuV] = useState(false);

  return (
    <div className="bg-[#cdcdcd] ml-[15px] rounded-[10px] min-h-[435px] min-w-[350px] shadow-[0_0px_20px_rgba(0,0,0,0.25)]">
      {/* add menu */}
      {addMenuV && <AddPopUp onClose={() => setAddMenuV(false)} />}

      {/* Title */}
      <div className="flex text-center m-5 text-[20px] font-semibold bg-white px-5 py-3 rounded-[10px] shadow-[0_0px_20px_rgba(0,0,0,0.25)]">
        <h2 className="w-full text-center">Task Managment</h2>
      </div>

      {/* actions */}
      <div className="flex flex-col mx-7 space-y-[29px] text-[20px] font-medium relative">
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
