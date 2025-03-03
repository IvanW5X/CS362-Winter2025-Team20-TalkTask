/********************************************************************
 * File Name: execute.js
 * Date: 2/28/2025
 * Description: Executes the command of the parsed transcript
 * Author(s): CS 362-Team 20
 ********************************************************************/
import { Task } from "../db/models/taskModel.js";


export const execCommand = async (command) => {
    if (!command) {
      throw new Error("No command provided.");
    }
  
    try {
      switch (command.type) {
        //add task
        case "add":
        
        break;
        
        //remove task
        case "removeAll":
        const result = await Task.deleteMany({ status: "completed" });
        if (result.deletedCount > 0) {
          return { success: true, message: `${result.deletedCount} completed tasks has been cleared.` };
        } else {
          return { success: true, message: "No completed tasks found." };
        }
  
        
        //remove task
        case "mark":
          const markedTask = await Task.findOneAndUpdate(
            { title: command.task },
            { status: "completed" },
            { new: true }
          );
          if (!markedTask) {
            throw new Error("Task not found.");
          }
          return { success: true, message: "execute.js marked function", task: markedTask };
          break;
        default:
          throw new Error("Unknown command type.");
      }
    } catch (error) {
      console.error("Error executing command:", error);
      throw error;
    }
  };