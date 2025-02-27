import { useState } from "react";
import { FaMicrophone } from "react-icons/fa";
import { CiCirclePlus } from "react-icons/ci";
import { FaCheck } from "react-icons/fa";
import { MdOutlineSort } from "react-icons/md";
import { MdOutlineIntegrationInstructions } from "react-icons/md";
import { IoStar } from "react-icons/io5";
import { AddPopUp } from "../addpopup/addpopup";

export const TasksManagement = () =>{

  const[addMenuV, setAddMenuV] = useState(false);

    return(
     <div className="bg-[#E5E5E5] w-[350px] ml-[30px] rounded-[10px]">
        {/* add menu */}
        {addMenuV && <AddPopUp onClose={() => setAddMenuV(false)} />}

          {/* Title */}
          <div className="flex text-center m-5 text-[20px] font-semibold bg-white px-5 py-3 rounded-[10px]">
            <h2 className="w-full text-center">Task Managment</h2>
          </div>


          {/* actions */}
          <div className="mx-7 mb-5 space-y-12 text-[20px] font-medium relative ">

            {/* add task */}
            <div className={`flex mt-12 cursor-pointer h-[40px] bg-white rounded-2xl justify-center items-center shadow`}
                  onClick={()=>setAddMenuV(!addMenuV)}>
              Add Task 
              <CiCirclePlus className="absolute right-3 text-[25px]"/>
            </div>

            {/* clear completed tasks */}
            <div className={`flex cursor-pointer h-[40px] bg-white rounded-2xl justify-center items-center shadow`}>
              Clear Completed Tasks
              <FaCheck className="absolute right-3 "/>
            </div>

            {/* voice commands */}
            <div className={`flex cursor-pointer h-[40px] bg-white rounded-2xl justify-center items-center shadow`}>
            Voice Commands
              <MdOutlineIntegrationInstructions className="absolute right-3"/>
            </div>

            <div className={`flex cursor-pointer h-[40px] bg-white rounded-2xl justify-center items-center shadow`}>
              Suggest a Task
              <IoStar className="absolute right-3"/>
            </div>

            {/* mic button */}
            <div className={`flex cursor-pointer h-[40px] bg-[#37E03A] rounded-2xl justify-center items-center shadow`}>
              <FaMicrophone className="text-[30px] text-white" />
            </div>

          </div>
      </div>
    )
};