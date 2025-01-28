/********************************************************************
 * File Name: task.jsx
 * Date: 1/26/2025
 * Description: JSX file for tasks UI component
 * Author(s): CS 362-Team 20
 ********************************************************************/

import React, { useEffect, useState } from "react";
import styles from "./tasks.module.css";
import axios from "axios";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

// Get data from server, add try/catch later with tasks data
const fetchTest = async (setTestArray) => {
  const res = await axios.get(`${BACKEND_URL}/testing`);
  setTestArray(res.data.info);
};

export const Tasks = () => {
  const [testArray, setTestArray] = useState([]);

  // Update website if data changes
  useEffect(() => {
    fetchTest(setTestArray);
  }, [testArray]);

  return (
    <section className={styles.container}>
      <h2>Tasks</h2>
      {testArray.map((data, key) => {
        // Loop through testArray
        return (
          <div key={key}>
            <p>{data}</p>
            <br />
          </div>
        );
      })}
    </section>
  );
};
