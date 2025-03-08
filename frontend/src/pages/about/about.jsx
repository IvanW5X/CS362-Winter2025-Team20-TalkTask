/********************************************************************
 * File Name: about.jsx
 * Date: 1/26/2025
 * Description: JSX file for about component
 * Author(s): CS 362-Team 20
 ********************************************************************/

import { TopBar } from "../../components/topbar-about-page/topbar";
import { AboutBody } from "../../components/about-body/about-body";

export const About = () => {
  return (
    <div className="bg-[#dedede] min-h-screen h-[200%]">
      <TopBar />
      <AboutBody />
    </div>
  );
};
