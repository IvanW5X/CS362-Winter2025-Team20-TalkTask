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
    mongoServer = await MongoMemoryServer.create();
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
      title: 'Test Task',  // ✅ Added required title
      description: 'Unit test task',
      status: false,
      userID: '12345abc', // ✅ Simulating user ID
    });

    await task.save();

    const foundTask = await Task.findOne({ taskID: 1 });
    expect(foundTask).toBeDefined();
    expect(foundTask.title).toBe('Test Task'); // ✅ Ensuring title exists
    expect(foundTask.status).toBe(false);
  });

  it('should update task status', async () => {
    const task = new Task({
      taskID: 2,
      title: 'Update Test Task',  // ✅ Added required title
      description: 'Test task for update',
      status: false,
      userID: '12345abc',
    });

    await task.save();

    task.status = true;
    await task.save();

    const updatedTask = await Task.findById(task._id);
    expect(updatedTask.status).toBe('completed');
  });
});
