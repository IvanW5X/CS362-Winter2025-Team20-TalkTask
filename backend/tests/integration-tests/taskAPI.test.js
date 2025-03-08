/********************************************************************
 * File Name:
 * Date:
 * Description:
 * Author(s): CS 362-Team 20
 ********************************************************************/

import mongoose from 'mongoose';
import request from 'supertest';
import { MongoMemoryServer } from 'mongodb-memory-server';
import app from '../../server.js';
import { Task } from '../../db/models/taskModel.js';

let mongoServer;
let taskId;
let userID;

describe('Task API - Integration Tests', () => {
  beforeAll(async () => {
    mongoServer = await MongoMemoryServer.create();
    const mongoUri = mongoServer.getUri();
    await mongoose.connect(mongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    // Create a user ID for testing
    userID = new mongoose.Types.ObjectId();
  });

  afterAll(async () => {
    await mongoose.connection.dropDatabase();
    await mongoose.connection.close();
    await mongoServer.stop();
  });

  test('should create a new task via API', async () => {
    const res = await request(app).post('/tasks/create-task').send({
      taskID: 5,
      title: 'API Test Task',
      userID: userID, //  Use generated userID
      description: 'Test API Task',
      status: 'pending',
      priority: 2,
    });

    expect(res.status).toBe(201);
    expect(res.body.description).toBe('Test API Task');
    expect(res.body.title).toBe('API Test Task');
    taskId = res.body._id;
  }, 20000); // Set timeout for this test

  test('should retrieve the created task via API', async () => {
    await new Promise(resolve => setTimeout(resolve, 500)); //  Allow DB update delay

    const res = await request(app).get(`/tasks/get-task/${userID}`); //  Adjusted route
    
    expect(res.status).toBe(200);
    expect(res.body).toBeInstanceOf(Array);
    expect(res.body.length).toBeGreaterThan(0);
    expect(res.body[0]).toHaveProperty('title', 'API Test Task');
  }, 20000); //  Set timeout for this test

  test('should update task status via API', async () => {
    const res = await request(app).patch(`/tasks/update-task/${taskId}`).send({ //  Adjusted route
      status: 'completed'
    });

    expect(res.status).toBe(200);
    expect(res.body.status).toBe('completed');
  }, 20000); //  Set timeout for this test

  test('should delete a task via API', async () => {
    const res = await request(app).delete(`tasks/delete-task/${taskId}`); //  Adjusted route
    expect(res.status).toBe(200);

    const deletedTask = await Task.findById(taskId);
    expect(deletedTask).toBeNull();
  }, 20000); //  Set timeout for this test
});
