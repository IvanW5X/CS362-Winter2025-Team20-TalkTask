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
import { FRONTEND_URL } from "./utils/variables.js";
import checkJwt from "./middleware/auth-middleware.js";
import helmet from "helmet";

const app = express();

const corsOptions = {
  origin: FRONTEND_URL,
};


// Automatic security measures
app.use(helmet());

// Parse incoming req into json formats
app.use(express.json());

// Enable cross origin resource sharing
app.use(cors(corsOptions));

app.use("*", (next) => {
  console.log("Request recieved at: ", new Date());
  next();
});

// Use routes
app.use("/users", userRoutes);
app.use("/tasks", taskRoutes);
app.use("api/external", checkJwt, (req, res) => {
  res.send({ message: "Token validated" });
});

export default app;
