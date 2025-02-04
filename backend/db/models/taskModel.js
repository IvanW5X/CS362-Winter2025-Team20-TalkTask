import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema({
    taskID: { type: Number, unique: true, required: true },
    description: { type: String, required: true },
    dateCreated: { type: Date, default: Date.now },
    dateCompleted: { type: Date },
    recurringDate: { type: Date },
    priority: { type: Number, min: 1, max: 5, default: 3 }, // Priority scale 1-5
    status: { type: String, enum: ['pending', 'in-progress', 'completed'], default: 'pending' },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
});

export const Task = mongoose.model('Task', taskSchema);