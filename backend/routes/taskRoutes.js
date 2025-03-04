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
  handleCommand,
} from "../controller/taskController.js";

const router = express.Router();

// Setup routes
router.post("/create-task", createTask); // Create a new task
router.post("/voice-command/:userId", handleCommand);

router.get("/read-task/:userId", getTasksByUser); // Get tasks for a specific user
router.patch("/update-task/:taskID", updateTask); // Update a task
router.delete("/delete", deleteAllTask); // Delete all completed tasks

export default router;
