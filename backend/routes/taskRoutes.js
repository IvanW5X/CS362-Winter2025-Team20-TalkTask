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


router.post("/test-add-task", (req, res) => {
  try {
    const { id, title, description, status, userId } = req.body;

    if (!id || !title || !description || !status || !userId) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newTask = { id, title, description, status, userId };
    mockTasks.push(newTask);

    res.status(201).json({ message: "Task added successfully", task: newTask });
  } catch (error) {
    console.error("Error adding mock task:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

export default router;
