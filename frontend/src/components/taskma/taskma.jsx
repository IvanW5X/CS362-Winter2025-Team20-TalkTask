import { useState } from "react";
import { FaMicrophone } from "react-icons/fa";
import { CiCirclePlus } from "react-icons/ci";
import { FaCheck } from "react-icons/fa";
import { MdOutlineSort } from "react-icons/md";
import { MdOutlineIntegrationInstructions } from "react-icons/md";
import { IoStar } from "react-icons/io5";
import { AddPopUp } from "../addpopup/addpopup";

export const TasksManagement = () =>{
    return(
     <div className="bg-red-500 w-[600px] ml-[30px] rounded-[10px]">
          {/* Title */}
          <div className="flex text-center m-5 text-[20px] font-semibold bg-white px-5 py-3 rounded-[10px] shadow">
            <h2 className="w-full text-center">Task Managment</h2>
          </div>
          {/* actions */}
          <div className="mx-5 mb-5 space-y-4">
            
          </div>
        </div>
    )
};