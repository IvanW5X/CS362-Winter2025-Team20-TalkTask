/********************************************************************
 * File Name: server.js
 * Date: 1/13/2025
 * Description: Loads routes and server setup
 * Author(s): CS 362-Team 20
 ********************************************************************/

import express from "express";
import cors from "cors";
import taskRoutes from "./routes/taskRoutes.js";
import categoryRoutes from "./routes/catagoryRoutes.js";
import { FRONTEND_URL } from "./utils/variables.js";
import checkJwt from "./middleware/auth-middleware.js";
import helmet from "helmet";

const app = express();

const corsOptions = {
  origin: FRONTEND_URL,
};

// Security measures
app.use(helmet());

// Parse incoming req into json formats
app.use(express.json());

// Enable cross origin resource sharing
app.use(cors(corsOptions));

// Protected routes
app.use("/tasks", checkJwt, taskRoutes);
app.use("/categories", checkJwt, categoryRoutes);

export default app;
