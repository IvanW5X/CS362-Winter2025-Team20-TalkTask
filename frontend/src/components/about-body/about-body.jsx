/********************************************************************
 * File Name: about-body.jsx
 * Date: 2/26/2025
 * Description: About bocy content component for the about page
 * Author(s): CS 362-Team 20
 ********************************************************************/

import { FaCheckSquare } from "react-icons/fa";
import { getImageUrl } from "../../../utils/utils";
import { useAuth } from "../../../contexts/authContext";

export const AboutBody = () => {
  const { loginWithRedirect } = useAuth();

  return (
    <div className="flex flex-row ">
      {/* Logo */}
      <img
        className=" w-[30%] h-[30%] mt-[50px] ml-[5%] md:flex hidden"
        src={getImageUrl("TalkTaskLogo2.png")}
        alt="TalkTask logo 2, no text"
      />

      {/* Text Content*/}
      <div className="mt-[65px] mr-[5%] ml-[5%]">
        <p className="text-[18px] font-extrabold">
          TalkTask is the ultimate hands-free to-do list powered by speech
          recognition. Just say what you need to do, and TalkTask takes care of
          the rest—organizing, setting reminders, and keeping you on track
          without lifting a finger.
        </p>

        {/* List and buttons */}
        <div className="flex text-[18px] font-bold md:flex-row md:h-[300px] md:justify-between md:mt-[0px] flex-col h-[300px]">
          {/* Benifits list */}
          <ul className="flex flex-col md:justify-evenly md:h-auto h-[400px] justify-evenly">
            <li className="flex flex-row">
              <FaCheckSquare className="mr-[10px]" />
              <p>Hands-Free Convience</p>
            </li>
            <li className="flex flex-row">
              <FaCheckSquare className="mr-[10px]" />
              <p>Effortless Organization</p>
            </li>
            <li className="flex flex-row">
              <FaCheckSquare className="mr-[10px]" />
              <p>Supported on Various Devices</p>
            </li>
            <li className="flex flex-row">
              <FaCheckSquare className="mr-[10px]" />
              <p>Create an Account for FREE!</p>
            </li>
          </ul>

          {/* Buttons */}
          <div className="flex flex-col text-[28px] text-[#F4F3F2] md:justify-evenly md:ml-[40px] items-center mr-[0px] md:mr-[100px]">
            <button
              className="w-[161px] h-[47px] bg-[#37E03A] rounded-[10px] cursor-pointer border-[2px] border-black drop-shadow-black drop-shadow-lg md:mb-[0px] mb-[40px] hover:bg-green-600 hover:shadow-xl transition-colors duration-200"
              onClick={() => loginWithRedirect({ authorizationParams: {screen_hint: "signup"} })}
            >
              Sign Up
            </button>
            <button
              className="w-[125px] h-[47px] bg-[#37E03A] rounded-[10px] cursor-pointer border-[2px] border-black drop-shadow-lg hover:bg-green-600 hover:shadow-xl transition-colors duration-200"
              onClick={() => loginWithRedirect()}
            >
              Log In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
