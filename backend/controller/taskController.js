/********************************************************************
 * File Name: taskController.js
 * Date: 2/15/2025
 * Description: High level component for task management
 *              Handles HTTP logic and calls services
 * Author(s): CS 362-Team 20
 ********************************************************************/

import { Task } from "../db/models/taskModel.js";
import logger from "../utils/logger.js";

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

// Function to parse the transcript (optional, can be moved to backend)
export const parseCommand = (transcript) => {
  const addRegex = /add\s+(.+)\s/i;
  const removeRegex = /remove\s+(.+)\s/i;
  const markRegex = /mark\s+(.+)\s+as complete/i;

  if (addRegex.test(transcript)) {
    const task = transcript.match(addRegex)[1].trim();
    return { type: 'add', task };
  } else if (removeRegex.test(transcript)) {
    const task = transcript.match(removeRegex)[1].trim();
    return { type: 'remove', task };
  } else if (markRegex.test(transcript)) {
    const task = transcript.match(markRegex)[1].trim();
    return { type: 'mark', task };
  } else {
    console.warn('No command detected:', transcript);
    return null;
  }
};

export const handleCommand = async(req,res)=>{

};

// READ All Tasks (for a specific user)
export const getTasksByUser = async (req, res) => {
  const { userId } = req.params;
  try {
    const tasks = await Task.find({ userId });
    res.status(200).json(tasks);
  } catch (error) {
    logger.error(`getTasksByUser - UserID: ${userId} - Error: ${error.message}`);
    res.status(500).json({ error: error.message });
  }
};

// UPDATE Task
export const updateTask = async (req, res) => {
  const { taskID } = req.params;
  const { title, description, category, priority, status, dateStart, dateCompleted } = req.body;
  try {
    const updatedTask = await Task.findOneAndUpdate(
      { taskID: taskID },
      { title, description, category, priority, status, dateStart, dateCompleted },
      { new: true }
    );
    if (updatedTask) {
      res.status(200).json(updatedTask);
    } else {
      res.status(404).json({ message: "Task not found" });
    }
  } catch (error) {
    console.error("Error updating task:", error);
    res.status(500).json({ message: "Internal Server Error", error: error.message });
  }
};


// DELETE All Completed Tasks
export const deleteTask = async (req, res) => {
  try {
    const result = await Task.deleteMany({ status: "completed" });
    if (result.deletedCount > 0) {
      res.status(200).json({ message: `${result.deletedCount} completed tasks deleted` });
    } else {
      res.status(404).json({ message: "No completed tasks found" });
    }
  } catch (error) {
    console.error("Error deleting completed tasks:", error);
    res.status(500).json({ message: "Internal Server Error", error: error.message });
  }
};

export const testReadDB = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).send(tasks);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};
