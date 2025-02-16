/********************************************************************
 * File Name: reminderModel.js
 * Date: 2/15/2025
 * Description: File for reminder schema
 * Author(s): CS 362-Team 20
 ********************************************************************/

import mongoose from 'mongoose';

const reminderSchema = new mongoose.Schema({
    reminderID: { type: Number, unique: true, required: true },
    taskID: { type: mongoose.Schema.Types.ObjectId, ref: 'Task', required: true },
    reminderDate: { type: Date, required: true },
});

export const Reminder = mongoose.model('Reminder', reminderSchema);