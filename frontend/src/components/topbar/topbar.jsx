/********************************************************************
 * File Name: tasks.jsx
 * Date: 1/26/2025
 * Description: JSX file for tasks UI component
 * Author(s): CS 362-Team 20
 ********************************************************************/

import React, { useEffect, useState } from "react";
import axios from "axios";



export const TopBar = () => {


  
  return (
    <>
      <div className="w-screen h-[95px] bg-[#37E03A] flex items-center">
       
        <img className="w-[150px] ml-[230px]" 
              src="../assets/TalkTaskLogo1.png" alt="TalkTask Logo"
        />

        <img className="ml-[1650px] w-[70px]" 
              src="../assets/GenericAvatar.png" alt="Profile Picture" 
        />

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
