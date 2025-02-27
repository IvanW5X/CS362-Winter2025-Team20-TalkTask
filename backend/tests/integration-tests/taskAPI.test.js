import mongoose from "mongoose";
import request from "supertest";
import { MongoMemoryServer } from "mongodb-memory-server";
import app from "../../server.js";
import { Task } from "../../db/models/taskModel.js";
import { User } from "../../db/models/userModel.js";

let mongoServer;
let taskId;
let userId;

describe("Task API - Integration Tests", () => {
  beforeAll(async () => {
    mongoServer = await MongoMemoryServer.create();
    await mongoose.connect(mongoServer.getUri(), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    // ✅ Use the correct route: `/users/create-user`
    const userResponse = await request(app).post("/users/create-user").send({
      CustomerID: Math.floor(Math.random() * 100000),
      email: `test${Date.now()}@email.com`,
      password: "SecurePass123!",
      Fname: "Test",
      Lname: "User",
    });

    if (userResponse.status !== 201) {
      throw new Error(`User creation failed: ${userResponse.statusText}`);
    }

    userId = userResponse.body.id;
  }, 30000);

  afterAll(async () => {
    await mongoose.connection.dropDatabase();
    await mongoose.connection.close();
    await mongoServer.stop();
  });

  test(
    "should create a new task via API",
    async () => {
      const res = await request(app).post("/tasks/create-task").send({
        taskID: Math.floor(Math.random() * 100000),
        title: "API Test Task",
        userId: userId,
        description: "Test API Task",
        status: "pending",
        priority: 2,
      });

      expect([200, 201]).toContain(res.status);
      expect(res.body).toHaveProperty("title", "API Test Task");
      taskId = res.body.id;
    },
    15000
  );

  test(
    "should retrieve the created task via API",
    async () => {
      await new Promise((resolve) => setTimeout(resolve, 500)); 

      const res = await request(app).get(`/tasks/user/${userId}`);

      expect([200, 201]).toContain(res.status);
      expect(Array.isArray(res.body)).toBe(true);
      expect(res.body.length).toBeGreaterThan(0);
      expect(res.body[0]).toHaveProperty("title", "API Test Task");
    },
    15000
  );

  test(
    "should update task status via API",
    async () => {
      const res = await request(app).patch(`/tasks/update-task/${taskId}`).send({
        status: "completed",
      });

      expect([200, 201]).toContain(res.status);
      expect(res.body).toHaveProperty("status", "completed");
    },
    15000
  );

  test(
    "should delete a task via API",
    async () => {
      const res = await request(app).delete(`/tasks/delete-task/${taskId}`);
      expect([200, 201]).toContain(res.status);

      const deletedTask = await Task.findById(taskId);
      expect(deletedTask).toBeNull();
    },
    15000
  );
});