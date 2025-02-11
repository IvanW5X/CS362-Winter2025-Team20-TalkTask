import mongoose from 'mongoose';

const reminderSchema = new mongoose.Schema({
    reminderID: { type: Number, unique: true, required: true },
    taskID: { type: mongoose.Schema.Types.ObjectId, ref: 'Task', required: true },
    reminderDate: { type: Date, required: true },
});

export const Reminder = mongoose.model('Reminder', reminderSchema);