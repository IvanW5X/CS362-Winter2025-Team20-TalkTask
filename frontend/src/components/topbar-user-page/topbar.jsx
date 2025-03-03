/********************************************************************
 * File Name: tasks.jsx
 * Date: 1/26/2025
 * Description: JSX file for tasks UI component
 * Author(s): CS 362-Team 20
 ********************************************************************/

import { FaUserCircle } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { getImageUrl } from "../../../utils/utils";
import { useAuth0 } from "@auth0/auth0-react";

export const TopBar = ({ menu_open, set_menu_state }) => {
  const { logout, user, isAuthenticated } = useAuth0();

  return (
    <div className="w-full h-[80px] bg-[#37E03A] flex justify-between items-center select-none shrink-0">
      <RxHamburgerMenu
        className="ml-[20px] text-[50px] cursor-pointer text-[#F4F3F2]"
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
        className="bg-[#F4F3F2] p-2 cursor-pointer text-[18px] border-[1px] rounded-full shadow-black shadow-sm"
        onClick={() => {
          if (isAuthenticated)
            logout({ logoutParams: { returnTo: window.location.origin } });
        }}
      >
        Logout
      </button>

      <FaUserCircle className="text-[#F4F3F2] text-[50px] mr-[20px] cursor-pointer" />
    </div>
  );
};
