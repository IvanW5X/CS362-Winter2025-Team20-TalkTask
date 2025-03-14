/********************************************************************
 * File Name: tasks.jsx
 * Date: 1/26/2025
 * Description: JSX file for tasks UI component
 * Author(s): CS 362-Team 20
 ********************************************************************/

import { FaUserCircle } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { getImageUrl } from "../../../utils/utils";
import { useAuth } from "../../../contexts/authContext";
export const TopBar = ({ menu_open, set_menu_state }) => {
  const { logout, isAuthenticated } = useAuth();

  return (
    <div className="w-full h-[80px] bg-[#37E03A] flex justify-between items-center select-none shrink-0">
      <RxHamburgerMenu
        className="ml-[20px] text-[50px] cursor-pointer text-[#F4F3F2] min-w-[30px]"
        onClick={() => {
          set_menu_state(!menu_open);
        }}
      />
      <img
        className="w-[125px] mr-[50%]"
        src={getImageUrl("TalkTaskLogo1.png")}
        alt="TalkTask Logo 1, with text"
      />
      {/* Logout button */}
      <button 
        className="bg-[#F4F3F2] p-2 cursor-pointer text-[18px] border-[1px] rounded-full shadow-[0_0px_20px_rgba(0,0,0,0.25)] hover:bg-gray-400 hover:shadow-xl transition-colors duration-200"
        onClick={() => {
          if (isAuthenticated)
            logout();
        }}>
        Logout
      </button>
      
      <FaUserCircle className="text-[#F4F3F2] text-[50px] mr-[20px] cursor-pointer min-w-[30px]"/>
    </div>
  );
};
