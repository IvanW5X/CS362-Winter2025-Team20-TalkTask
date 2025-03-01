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
export const createTask = async (request, reponse) => {
  try {
    const newTask = new Task(request.body);
    await newTask.save();
    reponse.status(201).json(newTask);
  } catch (error) {
    logger.error(`createTask - UserID: ${request.body.userId} - Error: ${error.message}`);
    reponse.status(500).json({ error: error.message });
  }
};

//  READ All Tasks (for a specific user)
export const getTasksByUser = async (userId) => {
  try {
    return await Task.find({ userId });
  } catch (error) {
    logger.error(`getTasksByUser - UserID: ${userId} - Error: ${error.message}`);
    return [];
  }
};

//  UPDATE Task Status
export const updateTaskStatus = async (req, res) => {
  const taskID = Number(req.params.taskId);
  const { status } = req.body;
  try {
    const updatedTask = await Task.findOneAndUpdate({ taskID: taskID }, { status }, { new: true });
    if (!updatedTask) {
      return res.status(404).json("Task not found");
    }
    res.status(200).send(updatedTask);
  } catch (error) {
    logger.error(`updateTaskStatus - TaskID: ${taskID} - Error: ${error.message}`);
    res.status(500).json({ error: error.message });
  }
};

//  DELETE a Task
export const deleteTask = async (taskId) => {
  try {
    return await Task.findByIdAndDelete(taskId);
  } catch (error) {
    logger.error(`deleteTask - TaskID: ${taskId} - Error: ${error.message}`);
    return null;
  }
};
