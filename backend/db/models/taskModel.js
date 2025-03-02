/********************************************************************
 * File Name: taskModel.js
 * Date: 2/15/2025
 * Description: File for task schema
 * Author(s): CS 362-Team 20
 ********************************************************************/

import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema({
    taskID: { type: Number, unique: true, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    dateStart: { type: Date, default: Date.now },
    dateCompleted: { type: Date},
    recurringDate: { type: Date },
    priority: { type: Number, min: 1, max: 3, default: 1 }, // Priority scale 1-3
    status: { type: String, enum: ["pending", "completed"], default: "pending" },
    category: { type: String, required: true, default: 'none' },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
});

export const Task = mongoose.model('Task', taskSchema);
