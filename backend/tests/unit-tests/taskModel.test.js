/********************************************************************
 * File Name:
 * Date:
 * Description:
 * Author(s): CS 362-Team 20
 ********************************************************************/

import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';
import { Task } from '../../db/models/taskModel.js';

let mongoServer;
describe('Task Model - Unit Tests', () => {
  beforeAll(async () => {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });

  it('should create a new task successfully', async () => {
    const task = new Task({
      taskID: 1,
      userId: new mongoose.Types.ObjectId(),
      description: 'Unit test task',
      status: 'pending'
    });

    await task.save();

    const foundTask = await Task.findOne({ taskID: 1 });
    expect(foundTask).toBeDefined();
    expect(foundTask.status).toBe('pending');
  });

  it('should update task status', async () => {
    const task = new Task({
      taskID: 2,
      userId: new mongoose.Types.ObjectId(),
      description: 'Test task for update',
      status: 'in-progress'
    });

    await task.save();

    task.status = 'completed';
    await task.save();

    const updatedTask = await Task.findById(task._id);
    expect(updatedTask.status).toBe('completed');
  });
});