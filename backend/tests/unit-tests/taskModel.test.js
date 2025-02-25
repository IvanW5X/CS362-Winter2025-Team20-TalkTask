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
    mongoServer = await MongoMemoryServer.create(); // Start an in-memory MongoDB
    const mongoUri = mongoServer.getUri();
    await mongoose.connect(mongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  });

  afterAll(async () => {
    await mongoose.connection.dropDatabase();
    await mongoose.connection.close();
    await mongoServer.stop();
  });

  it('should create a new task successfully', async () => {
    const task = new Task({
      taskID: 1,
      title: "test title",
      userId: new mongoose.Types.ObjectId(),
      description: 'Test task description',
      status: 'pending'
    });

    await task.save();

    const foundTask = await Task.findOne({ taskID: 1 });
    expect(foundTask).toBeDefined();
    expect(foundTask.status).toBe('pending');
  });

  it('should mark a task as complete', async () => {
    const task = new Task({
      taskID: 2,
      title: "test title 2",
      userId: new mongoose.Types.ObjectId(),
      description: 'Another test task',
      status: 'in-progress'
    });

    await task.save();
    
    task.status = 'completed';
    await task.save();

    const updatedTask = await Task.findById(task._id);
    expect(updatedTask.status).toBe('completed');
  });
});