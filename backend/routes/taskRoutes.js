import express from "express";
import { createTask, getTasksByUser, updateTaskStatus, deleteTask } from "../services/taskService.js";

const router = express.Router();

//  Create a New Task (POST)
router.post("/", async (req, res) => {
    try {
        const task = await createTask(req.body);
        res.status(201).json(task);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

//  Get All Tasks for a User (GET)
router.get("/:userId", async (req, res) => {
    try {
        const tasks = await getTasksByUser(req.params.userId);
        res.json(tasks);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

//  Update Task Status (PATCH)
router.patch("/:taskId", async (req, res) => {
    try {
        const updatedTask = await updateTaskStatus(req.params.taskId, req.body.status);
        res.json(updatedTask);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

//  Delete a Task (DELETE)
router.delete("/:taskId", async (req, res) => {
    try {
        await deleteTask(req.params.taskId);
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

export default router;