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
// export const updateTaskStatus = async (taskId, status) => {
//   try {
//     return await Task.findByIdAndUpdate(taskId, { status }, { new: true });
//   } catch (error) {
//     logger.error(`updateTaskStatus - TaskID: ${taskId} - Error: ${error.message}`);
//     return null;
//   }
// };

export const updateTaskStatus = async (taskID, status) => {
  try {
    console.log(`Updating task ${taskID} to status: ${status}`);
    const updatedTask = await Task.findOneAndUpdate(
      { taskID: taskID },
      { status },
      { new: true }
    );
    if (!updatedTask) {
      console.error(`Task with ID ${taskID} not found`);
      return null;
    }
    console.log("Updated task:", updatedTask);
    return updatedTask;
  } catch (error) {
    console.error(`Error updating task status: ${error.message}`);
    throw error;
  }
};


//  DELETE a Task
// export const deleteTask = async (taskId) => {
//   try {
//     return await Task.findByIdAndDelete(taskId);
//   } catch (error) {
//     logger.error(`deleteTask - TaskID: ${taskId} - Error: ${error.message}`);
//     return null;
//   }
// };


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