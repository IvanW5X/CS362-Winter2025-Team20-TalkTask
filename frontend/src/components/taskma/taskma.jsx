/********************************************************************
 * File Name: tasks.jsx
 * Date: 1/26/2025
 * Description: JSX file for tasks UI component
 * Author(s): CS 362-Team 20
 ********************************************************************/

import React, { useEffect, useState } from "react";


export const TasksManagement = ({menu_open}) => {

  return (
    <>
      <div className={`bg-[#E5E5E5] rounded-3xl w-[30%] h-[600px] ml-[calc(15%+40vw+80px)] mt-[40px]
                      ${menu_open ? "translate-x-0" : "-translate-x-[200px]"}`}>
          

          {/* title */}
          <div className={``}>
            Task Management
          </div>

          {/* add task */}
          <div className={``}>

          </div>

          {/* clear completed task */}
          <div className={``}>

          </div>

          {/* filter/sort */}
          <div className={``}>

          </div>

          {/* voice commands */}
          <div className={``}>

          </div>

          {/* suggest a task */}
          <div className={``}>

          </div>

          {/* mic button */}
          <div className={``}>

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
