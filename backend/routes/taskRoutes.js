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

import fs from "fs";
import path from "path";

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



//delete later, only for .json
const mockDataPath = path.resolve("./tests/mock-data/mockTasks.json");
let mockTaskss = JSON.parse(fs.readFileSync(mockDataPath, "utf-8"));

//add test route
router.post("/testadd", (req, res) => {
  try {
    const { taskID, title, description, status, userId, category, timeStart, timeEnd, priority } = req.body;

    //validate required fields, change later 
    if (!taskID || !title || !description || !status || !userId || !category || !timeStart || !timeEnd || !priority) {
      return res.status(400).json({ message: "All fields are required" });
    }

    //delete later
    const newTask = {
      taskID, // Ensure this matches the structure of mockData.json
      title,
      description,
      dateCreated: new Date().toISOString(), // Add current timestamp
      dateCompleted: timeEnd, // Use timeEnd as the completion date
      recurringDate: null, // Default to null
      priority: parseInt(priority), // Ensure priority is a number
      status,
      category,
      userId: parseInt(userId), // Ensure userId is a number
    };

    mockTaskss.push(newTask); //delete later
    // mockTasks.push(newTask);

    fs.writeFileSync(mockDataPath, JSON.stringify(mockTaskss, null, 2), "utf-8");//delete later

    res.status(201).json({ message: "Task added successfully", task: newTask });
  } catch (error) {
    console.error("Error adding mock task:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});


export default router;
