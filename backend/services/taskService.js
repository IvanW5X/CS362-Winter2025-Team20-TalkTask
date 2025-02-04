import { Task } from "../db/models/taskModel.js";

// 🟢 CREATE a Task
export const createTask = async (taskData) => {
    try {
        const newTask = new Task(taskData);
        await newTask.save();
        return newTask;
    } catch (error) {
        throw new Error("Error creating task: " + error.message);
    }
};

//  READ All Tasks (for a specific user)
export const getTasksByUser = async (userId) => {
    return await Task.find({ userId });
};

//  UPDATE Task Status
export const updateTaskStatus = async (taskId, status) => {
    return await Task.findByIdAndUpdate(taskId, { status }, { new: true });
};

//  DELETE a Task
export const deleteTask = async (taskId) => {
    return await Task.findByIdAndDelete(taskId);
};