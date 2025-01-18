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

function App() {
  const [testArray, setTestArray] = useState([]);

  // Get data from server
  const fetchTest = async () => {
    const res = await axios.get(`http://localhost:${SERVER_PORT}/testing`);
    setTestArray(res.data.info);
  };

  // Update website if data changes
  useEffect(() => {
    fetchTest();
  },[testArray]);

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
