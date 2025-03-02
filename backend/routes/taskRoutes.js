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
import { Task } from "../db/models/taskModel.js";



import fs from "fs";
import path from "path";

const router = express.Router();

// Setup routes
router.post("/create-task", createTask);
router.get("/read-task/:userId", getTasksByUser);

//update status so far, edit for edit task
router.patch("/update-task/:taskID", async (req, res) => {
  const { taskID } = req.params;
  const { status } = req.body;
  console.log(`Received request to update task ${taskID} with status: ${status}`);
  try {
    const updatedTask = await updateTaskStatus(taskID, status);
    if (updatedTask) {
      res.status(200).json(updatedTask);
    } else {
      res.status(404).json({ message: "Task not found" });
    }
  } catch (error) {
    console.error("Error in PATCH /update-task:", error);
    res.status(500).json({ message: "Internal Server Error", error: error.message });
  }
});



//delete all completed tasks
router.delete("/delete", async (req, res) => {
  try {
    const result = await Task.deleteMany({ status: "completed" }); //delete task marked compelted
    if (result.deletedCount > 0) {
      res.status(200).json({ message: `${result.deletedCount} completed tasks deleted` });
    } else {
      res.status(404).json({ message: "No completed tasks found" });
    }
  } catch (error) {
    console.error("Error deleting completed tasks:", error);
    res.status(500).json({ message: "Internal Server Error", error: error.message });
  }
});




// router.delete("/delete-task/:taskID", deleteTask);


router.get("/test-read-db", async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).send(tasks);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});




// test route
router.get("/testing", (req, res) => {
  if (!mockTasks)
    res.status(500).send({message: "Couldn't send mock tasks"});
  else
    res.status(200).send(mockTasks);
});


// //delete later, only for .json
// const mockDataPath = path.resolve("./tests/mock-data/mockTasks.json");
// let mockTaskss = JSON.parse(fs.readFileSync(mockDataPath, "utf-8"));

// //add test route
// router.post("/testadd", (req, res) => {
//   try {
//     const { taskID, title, description, status, userId, category, timeStart, timeEnd, priority } = req.body;

//     //validate required fields, change later 
//     if (!taskID || !title || !description || !status || !userId || !category || !timeStart || !timeEnd || !priority) {
//       return res.status(400).json({ message: "All fields are required" });
//     }

//     //delete later
//     const newTask = {
//       taskID, // Ensure this matches the structure of mockData.json
//       title,
//       description,
//       dateCreated: new Date().toISOString(), // Add current timestamp
//       dateCompleted: timeEnd, // Use timeEnd as the completion date
//       recurringDate: null, // Default to null
//       priority: parseInt(priority), // Ensure priority is a number
//       status,
//       category,
//       userId: parseInt(userId), // Ensure userId is a number
//     };

//     mockTaskss.push(newTask); //delete later
//     // mockTasks.push(newTask);

//     fs.writeFileSync(mockDataPath, JSON.stringify(mockTaskss, null, 2), "utf-8");//delete later

//     res.status(201).json({ message: "Task added successfully", task: newTask });
//   } catch (error) {
//     console.error("Error adding mock task:", error);
//     res.status(500).json({ message: "Internal Server Error" });
//   }
// });


export default router;
