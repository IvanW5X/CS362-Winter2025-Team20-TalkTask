/********************************************************************
 * File Name: tasks.jsx
 * Date: 1/26/2025
 * Description: JSX file for tasks UI component
 * Author(s): CS 362-Team 20
 ********************************************************************/
import { useState } from "react";
import { FaMicrophone } from "react-icons/fa";
import { CiCirclePlus } from "react-icons/ci";
import { FaCheck } from "react-icons/fa";
import { MdOutlineSort } from "react-icons/md";
import { MdOutlineIntegrationInstructions } from "react-icons/md";
import { IoStar } from "react-icons/io5";
import { AddPopUp } from "../addpopup/addpopup";

export const TasksManagement = ({menu_open}) => {

  const[addMenuV, setAddMenuV] = useState(false);


  return (
    <>

      {addMenuV && <AddPopUp />}
      <div className={`flex flex-col bg-[#E5E5E5] rounded-3xl w-[30%] h-[600px] ml-[calc(15%+40vw+80px)] mt-[40px]
                      ${menu_open ? "block" : "hidden"}`}>
          
          {/* title */}
          <button className={`flex m-5 h-fit bg-white rounded-2xl text-[30px] font-semibold justify-center`}>
            Task Management
          </button>
      
      
          {/* add task */}
          <div className={`flex cursor-pointer mx-5 my-5 h-fit bg-white rounded-2xl text-[30px] font-medium justify-center items-center relative cursor-pointer`}
                onClick={()=>setAddMenuV(!addMenuV)}>
            Add Task 
            <CiCirclePlus className="absolute right-3 "/>
          </div>

          {/* clear completed task */}
          <div className={`flex mx-5 my-5 h-fit bg-white rounded-2xl text-[30px] font-medium justify-center items-center relative cursor-pointer`}>
            Clear Completed Tasks
            <FaCheck className="absolute right-3 "/>

          </div>

          {/* filter/sort */}
          <div className={`flex mx-5 my-5 h-fit bg-white rounded-2xl text-[30px] font-medium justify-center items-center relative cursor-pointer`}>
              Sort By
              <MdOutlineSort className="absolute right-3 "/>
          </div>

          {/* voice commands */}
          <div className={`flex mx-5 my-5 h-fit bg-white rounded-2xl text-[30px] font-medium justify-center items-center relative cursor-pointer`}>
            Voice Commands
            <MdOutlineIntegrationInstructions className="absolute right-3"/>
          </div>

          {/* suggest a task */}
          <div className={`flex mx-5 my-5 h-fit bg-white rounded-2xl text-[30px] font-medium justify-center items-center relative cursor-pointer`}>
            Suggest a Task
            <IoStar className="absolute right-3"/>
          </div>

          {/* mic button */}
          <div className="flex mx-5 my-5 py-3 bg-[#37E03A] rounded-2xl text-[30px] font-medium justify-center">
            <FaMicrophone className="text-[30px] text-white" />
          </div>
        </div>
    </>
  );
};
