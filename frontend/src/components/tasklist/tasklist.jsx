/********************************************************************
 * File Name: tasks.jsx
 * Date: 1/26/2025
 * Description: JSX file for tasks UI component
 * Author(s): CS 362-Team 20
 ********************************************************************/

import React, { useEffect, useState } from "react";
import styles from "./tasklist.module.css";
import axios from "axios";


export const TaskList = () => {

  return (
    <>
      {/* task list section */}
      <div className="bg-[#E5E5E5] rounded-3xl absolute mt-[300px] ml-[250px] w-[950px] h-[500px]">
        {/* <div className={styles.tasksquare}>
          <div className={styles.tasklabel}>
            <h2>Tasks</h2>
          </div>
        </div> */}

        <div className="justify-between rounded-2xl text-[20px] font-[600] font-[Inter] bg-white m-5 py-2 pl-5">
          Tasks
          <div></div>
        </div>
        

      </div>
    </>
  );
};















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
