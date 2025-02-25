/********************************************************************
 * File Name: tasks.jsx
 * Date: 1/26/2025
 * Description: JSX file for tasks UI component
 * Author(s): CS 362-Team 20
 ********************************************************************/

import React, { useEffect, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";




export const TopBar = ({menu_open, set_menu_state}) => {

  return (
    <>
      <div className="w-full h-[95px] bg-[#37E03A] flex justify-between items-center select-none shrink-0">

        {/* 
          need to make responsive later. vw and vh is okay for now with desktop.
          need to us stuff like md: and sm: later
        */}
        <RxHamburgerMenu className="ml-[20px] text-[65px] cursor-pointer text-white "
                          onClick={() => {
                            set_menu_state(!menu_open);
                          }}
        />

        <img className="w-[150px] -ml-[50%] " 
              src="../assets/TalkTaskLogo1.png" 
              alt="TalkTask Logo"
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
}















/*
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

// Get data from server, add try/catch later with tasks data
const fetchTest = async (setTestArray) => {
  try {
    const res = await axios.get(`${BACKEND_URL}/testing`);
    setTestArray(res.data.info);
    console.log("Frontend recieved test data response!")
  } catch (error) {
    console.log("Error getting data");
  }
};

export const Tasks = () => {
  const [testArray, setTestArray] = useState([]);

  // Update website on mount
  useEffect(() => {
    fetchTest(setTestArray);
  }, []);

  return (
    <section className={styles.container}>
      <h2>Tasks</h2>
      {testArray.map((data, key) => {
        // Loop through testArray
        return (
          <div key={key}>
            <p>{data}</p>
          </div>
        );
      })}
    </section>
  );
};
*/
