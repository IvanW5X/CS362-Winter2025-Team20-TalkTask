/********************************************************************
 * File Name: tasks.jsx
 * Date: 1/26/2025
 * Description: JSX file for tasks UI component
 * Author(s): CS 362-Team 20
 ********************************************************************/

import { FaUserCircle } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { getImageUrl } from "../../../utils/utils";

export const TopBar = ({ menu_open, set_menu_state }) => {
  return (
    <>
      <div className="w-full h-[95px] bg-[#37E03A] flex justify-between items-center select-none shrink-0">
        {/* 
          need to make responsive later. vw and vh is okay for now with desktop.
          need to us stuff like md: and sm: later
        */}
        <RxHamburgerMenu
          className="ml-[20px] text-[65px] cursor-pointer text-white "
          onClick={() => {
            set_menu_state(!menu_open);
          }}
        />
        <img
          className="w-[150px] -ml-[50%] "
          src={getImageUrl("TalkTaskLogo1.png")}
          alt="TalkTask Logo 1, with text"
        />

        {/* 
          add settings/profile settings?
          add clickable image?
          add customizable image?
        */}

        <FaUserCircle className="text-white text-[70px] mr-[20px] cursor-pointer " />
      </div>
    </>
  );
};
