/********************************************************************
 * File Name: server.js
 * Date: 1/13/2025
 * Description: Entry point for server side of development
 * Author(s): CS 362-Team 20
 ********************************************************************/

import express from "express";
import dotenv from "dotenv";
import path from "path";
import cors from "cors";


// Load environment variables to process.env
dotenv.config();

// Add .env path
const envFilePath = path.resolve("../", "./.env");
dotenv.config({ path: envFilePath });



export const connectServers = () => {
  const FRONTEND_URL = process.env.FRONTEND_URL;
  const corsOptions = {
    origin: FRONTEND_URL,
  };
  // Enable cross origin resource sharing
  app.use(cors(corsOptions));

  // TESTING PURPOSES, INFO TO BE DISPLAYED FOR FRONTEND
  app.get("/testing", (req, res) => {
    res.json({ info: ["data_1", "data_2", "data_3", "data_4"] });
  });
};

// Listening function
export const startServer = () => {
  const SERVER_PORT = process.env.SERVER_PORT;

  app.listen(SERVER_PORT, () => {
    console.log(`Server is listening on port ${SERVER_PORT}`);
  });
};
