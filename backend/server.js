/********************************************************************
 * File Name: server.js
 * Date: 1/13/2025
 * Description: Loads routes and server setup
 * Author(s): CS 362-Team 20
 ********************************************************************/

import express from "express";
import dotenv from "dotenv";
import path from "path";
import cors from "cors";
import userRoutes from "./routes/userRoutes.js";
import taskRoutes from "./routes/taskRoutes.js";

// Add .env path
const envFilePath = path.resolve("../", "./.env");
dotenv.config({ path: envFilePath });

const app = express();

const FRONTEND_URL = process.env.FRONTEND_URL;
const corsOptions = {
  origin: FRONTEND_URL,
};

// Enable cross origin resource sharing
app.use(cors(corsOptions));

// Use routes
app.use("/users", userRoutes);
app.use("/tasks", taskRoutes);

export default app;
