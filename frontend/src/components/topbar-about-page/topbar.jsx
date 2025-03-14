/********************************************************************
 * File Name: topbar.jsx
 * Date: 2/26/2025
 * Description: Topbar component for the about page
 * Author(s): CS 362-Team 20
 ********************************************************************/

import { getImageUrl } from "../../../utils/utils";

export const TopBar = () => {
  return (
    <div className="w-full md:h-[117px] h-[151px] bg-[#37E03A]">
      <img
        className="max-w-[233px] md:w-[174px] justify-self-center pt-[10px]"
        src={getImageUrl("TalkTaskLogo1.png")}
        alt="TalkTask Logo 1, with text"
      />
    </div>
  );
};
