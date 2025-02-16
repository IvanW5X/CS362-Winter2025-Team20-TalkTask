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
  updateTaskStatus,
  deleteTask,
} from "../controller/taskController.js";

const router = express.Router();

// Setup routes
router.post("/", createTask);
router.get("/:userId", getTasksByUser);
router.patch("/:taskId", updateTaskStatus);
router.delete("/:taskId", deleteTask);

export default router;
