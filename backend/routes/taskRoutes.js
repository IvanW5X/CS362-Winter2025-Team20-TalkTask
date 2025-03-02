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
  deleteTask,
  testReadDB,
  handleCommand
} from "../controller/taskController.js";

const router = express.Router();

// Setup routes
router.post("/create-task", createTask); // Create a new task
router.post("/voice-command", handleCommand);

router.get("/read-task/:userId", getTasksByUser); // Get tasks for a specific user
router.patch("/update-task/:taskID", updateTask); // Update a task
router.delete("/delete", deleteTask); // Delete all completed tasks

router.delete("/delete-task/:taskID", deleteTask); // Delete a specific task
router.get("/test-read-db", testReadDB); // Test route to fetch all tasks

export default router;
