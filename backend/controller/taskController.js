/********************************************************************
 * File Name: taskController.js
 * Date: 2/15/2025
 * Description: High level component for task management
 *              Handles HTTP logic and calls services
 * Author(s): CS 362-Team 20
 ********************************************************************/

import { Task } from "../db/models/taskModel.js";
import logger from "../utils/logger.js";
import { parseCommand } from "../services/parseTranscripts.js";
import { execCommand } from "../services/execute.js";
import { suggestTask } from "../services/suggestTask.js";

// CREATE a Task
export const createTask = async (req, res) => {
  try {
    const newTask = new Task(req.body);
    await newTask.save();
    res.status(201).json(newTask);
  } catch (error) {
    logger.error(`createTask - Error: ${error.message}`);
    res.status(500).json({ error: error.message });
  }
};

//speech input
export const handleCommand = async (req, res) => {
  const { userID } = req.params;
  const { transcript, selectedCategory } = req.body;
  console.log("Transcript received:", transcript);
  // console.log("Selected category:", selectedCategory);

  if (!transcript) {
    console.error("Transcript is missing in the request body");
    return res.status(400).json({ error: "Transcript is required" });
  }

  const command = parseCommand(transcript, userID);

  if (!command) {
    return res.status(400).json({ error: "Invalid command" });
  }

  // Pass selectedCategory to execCommand if needed
  const result = await execCommand(command, userID, selectedCategory);

  if (result === null) {
    console.log("TETSAJDHG");
    return res.status(500).json({ message: "Could not execute command" });
  }

  return res.status(200).json(result);
};
// READ All Tasks (for a specific user)
export const getTasksByUser = async (req, res) => {
  const { userID } = req.params;

  try {
    const tasks = await Task.find({ userID });
    res.status(200).json(tasks);
  } catch (error) {
    logger.error(`getTasksByUser - Error: ${error.message}`);
    res.status(500).json({ error: error.message });
  }
};

// UPDATE Task
export const updateTask = async (req, res) => {
  const { taskID } = req.params;
  const {
    title,
    description,
    category,
    priority,
    status,
    dateStart,
    dateCompleted,
  } = req.body;
  try {
    const updatedTask = await Task.findOneAndUpdate(
      { taskID: taskID },
      {
        title,
        description,
        category,
        priority,
        status,
        dateStart,
        dateCompleted,
      },
      { new: true }
    );
    if (updatedTask) {
      res.status(200).json(updatedTask);
    } else {
      res.status(404).json({ message: "Task not found" });
    }
  } catch (error) {
    console.error("Error updating task:", error);
    res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
};

// DELETE All Completed Tasks
export const deleteAllTask = async (req, res) => {
  try {
    const result = await Task.deleteMany({ status: true });
    if (result.deletedCount > 0) {
      res
        .status(200)
        .json({ message: `${result.deletedCount} completed tasks deleted` });
    } else {
      res.status(404).json({ message: "No completed tasks found" });
    }
  } catch (error) {
    console.error("Error deleting completed tasks:", error);
    res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
};

export const generateTask = async (req, res) => {
  try {
    const { userID } = req.params;
    const tasks = await Task.find({ userID });

    // Get tasks titles from user
    const taskTitles = tasks.map((task) => task.title);
    const generatedTask = await suggestTask(taskTitles);
    console.log(generatedTask);

    // Suggested task service failed
    if (generatedTask === null) {
      res.status(500).json({ message: "Error with Gemini API" });
    }
    res.status(200).json(generatedTask);
  } catch (error) {
    logger.error(`generateTask - Error: ${error.message}`);
    res.status(500).json({ message: "Could not generate task" });
  }
};
