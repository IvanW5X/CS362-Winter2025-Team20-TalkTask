/********************************************************************
 * File Name: server.js
 * Date: 1/13/2025
 * Description: Loads routes and server setup
 * Author(s): CS 362-Team 20
 ********************************************************************/

import express from "express";
import cors from "cors";
import userRoutes from "./routes/userRoutes.js";
import taskRoutes from "./routes/taskRoutes.js";
import { FRONTEND_URL } from "./variables.js";

const app = express();
const corsOptions = {
  origin: FRONTEND_URL,
};

// Enable cross origin resource sharing
app.use(cors(corsOptions));

// Use routes
app.use("/users", userRoutes);
app.use("/tasks", taskRoutes);

export default app;
