/********************************************************************
 * File Name: taskRoutes.js
 * Date: 2/15/2025
 * Description: Defines API endpoints for task controller
 * Author(s): CS 362-Team 20
 ********************************************************************/

import express from "express";
import {
  createTask,
  getTasksByUser,
  updateTask,
  deleteAllTask,
  deleteTask,
  testReadDB,
} from "../controller/taskController.js";
import mockTasks from "../tests/mock-data/mockTasks.json" with { type: "json" };
import { Task } from "../db/models/taskModel.js";



import fs from "fs";
import path from "path";

const router = express.Router();

// Setup routes
router.post("/create-task", createTask); // Create a new task
// router.get("/read-task/:userId", getTasksByUser); // Get tasks for a specific user
router.patch("/update-task/:taskID", updateTask); // Update a task
router.delete("/delete", deleteAllTask); // Delete all completed tasks


router.delete("/delete-task/:taskID", deleteTask); // Delete a specific task
router.get("/test-read-db", testReadDB); // Test route to fetch all tasks




export default router;
