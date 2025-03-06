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
  generateTask
} from "../controller/taskController.js";

const router = express.Router();

// Setup routes
router.post("/create-task", createTask);
router.post("/voice-command/:userId", handleCommand);
router.get("/generate-task/:userId", generateTask);
router.get("/read-task/:userId", getTasksByUser);
router.patch("/update-task/:taskID", updateTask);
router.delete("/delete", deleteAllTask);

export default router;
