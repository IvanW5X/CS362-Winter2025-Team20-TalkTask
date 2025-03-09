/********************************************************************
 * File Name: execute.js
 * Date: 2/28/2025
 * Description: Executes the command of the parsed transcript
 * Author(s): CS 362-Team 20
 ********************************************************************/
import { Task } from "../db/models/taskModel.js";

export const execCommand = async (command, userID, selectedCategory) => {
  if (!command) {
    console.error("No command provided.");
    return null;
  }
  try {
    switch (command.type) {
      //add task
      case "add":
        const newTask = new Task({
          taskID: Date.now(), // Generate a unique taskID
          title: command.task,
          description: command.description || "placeholder",
          category: selectedCategory,
          dateStarted: Date.now(),
          dateCompleted:  Date.now(), 
          priority: command.priority || 3,
          status: false, // Default status
          userID: userID, // Add the userID from the authenticated user
        });
        await newTask.save();
        return {
          success: true,
          message: "Task added successfully",
          task: newTask,
        };

      //remove task
      case "removeAll":
        const result = await Task.deleteMany({ status: "completed" });
        if (result.deletedCount > 0) {
          return {
            success: true,
            message: `${result.deletedCount} completed tasks has been cleared.`,
          };
        } else {
          return { success: true, message: "No completed tasks found." };
        }

      //remove task
      case "mark":
        const markedTask = await Task.findOneAndUpdate(
          { title: command.task },
          { status: true },
          { new: true }
        );
        if (!markedTask) {
          console.error("Task not found");
          return null;
        }
        return {
          success: true,
          message: "execute.js marked function",
          task: markedTask,
        };

      default:
        console.error("Unknown command tyor:", error);
        return null;
    }
  } catch (error) {
    console.error("Error executing command:", error);
  }
};
