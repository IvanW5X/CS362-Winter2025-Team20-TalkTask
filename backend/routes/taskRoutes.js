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
  getCategories
} from "../controller/taskController.js";

const router = express.Router();

// Setup routes
router.post("/create-task", createTask);                  // Create a new task
router.get("/read-task/:userId", getTasksByUser);         // Get tasks for a specific user
router.patch("/update-task/:taskID", updateTask);         // Update a task
router.delete("/delete", deleteAllTask);                     // Delete all completed tasks
router.get("/read-categories/:userId", getCategories);    // Get categories from user tasks

export default router;
