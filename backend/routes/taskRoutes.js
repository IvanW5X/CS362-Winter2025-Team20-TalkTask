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
import mockTasks from "../tests/mock-data/mockTasks.json" with { type: "json" };

const router = express.Router();

// Setup routes
router.post("/create-task", createTask);
router.get("/read-task/:userId", getTasksByUser);
router.patch("/update-task/:taskId", updateTaskStatus);
router.delete("/delete-task/:taskId", deleteTask);

// test route
router.get("/testing", (req, res) => {
  if (!mockTasks)
    res.status(500).send({message: "Couldn't send mock tasks"});
  else
    res.status(200).send(mockTasks);
});

export default router;
