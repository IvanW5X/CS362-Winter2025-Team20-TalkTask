import mongoose from 'mongoose';
import request from 'supertest';
import app from '../../server.js';
import { Task } from '../../db/models/taskModel.js';

describe('Task API - Integration Tests', () => {
  beforeAll(async () => {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });

  let taskId;

  it('should create a new task via API', async () => {
    const res = await request(app).post('/api/tasks').send({
      taskID: 5,
      userId: new mongoose.Types.ObjectId(),
      description: 'Test API Task',
      status: 'pending'
    });

    expect(res.status).toBe(201);
    expect(res.body.description).toBe('Test API Task');
    taskId = res.body._id;
  });

  it('should delete a task via API', async () => {
    const res = await request(app).delete(`/api/tasks/${taskId}`);
    expect(res.status).toBe(200);

    const deletedTask = await Task.findById(taskId);
    expect(deletedTask).toBeNull();
  });
});