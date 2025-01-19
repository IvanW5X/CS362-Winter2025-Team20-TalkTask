/********************************************************************
 * File Name: App.jsx
 * Date: 1/13/2025
 * Description: Front end file to display all components
 * Author(s): CS 362-Team 20
 ********************************************************************/

import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

const SERVER_PORT = 5001;

// Get data from server, add try/catch later with tasks data 
const fetchTest = async (setTestArray) => {
  const res = await axios.get(`http://localhost:${SERVER_PORT}/testing`);
  setTestArray(res.data.info);
};

function App() {
  const [testArray, setTestArray] = useState([]);

  // Update website if data changes
  useEffect(() => {
    fetchTest(setTestArray);
  }, [testArray]);

  return (
    <div>
      <h1>Hello TalkTask</h1>
      {testArray.map((data, key) => {   // Loop through testArray
        return (
          <div key={key}>
            <p>{data}</p>
            <br />
          </div>
        );
      })}
    </div>
  );
}

export default App;
