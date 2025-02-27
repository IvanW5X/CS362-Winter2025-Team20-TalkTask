/********************************************************************
 * File Name: taskVerification.test.js
 * Date: 2/26/2025
 * Description: Tests for verifying task creation and retrieval based on DB schema
 * Author(s): CS 362-Team 20
 ********************************************************************/

import request from "supertest";
import mongoose from "mongoose";
import app from "../../server.js";
import { Task } from "../../backend/db/models/taskModel.js";
import { User } from "../../backend/db/models/userModel.js";

describe("Task Verification Tests", () => {
  let taskId;
  let userId;

  beforeAll(async () => {
    jest.setTimeout(20000); // Increase timeout for DB operations

    try {
      // Create a user first, since `Task` requires `userId`
      const userResponse = await request(app).post("/users/create").send({
        CustomerID: Math.floor(Math.random() * 100000), // Unique ID
        email: `test${Date.now()}@email.com`,
        password: "SecurePass123!", // In production, password should be hashed
        Fname: "Test",
        Lname: "User",
      });

      if (userResponse.status !== 201) {
        throw new Error(`User creation failed: ${userResponse.statusText}`);
      }

      userId = userResponse.body.id;

      // Create a task linked to this user
      const taskResponse = await request(app).post("/tasks/create-task").send({
        taskID: Math.floor(Math.random() * 100000), // Unique task ID
        title: "Test Task",
        description: "This is a test task",
        priority: 2, // Within valid range (1-3)
        status: "pending", // Should match enum values
        userId: userId,
      });

      if (taskResponse.status !== 201) {
        throw new Error(`Task creation failed: ${taskResponse.statusText}`);
      }

      taskId = taskResponse.body.id;
    } catch (error) {
      console.error("Setup Error:", error);
    }
  });

  afterAll(async () => {
    if (taskId) await request(app).delete(`/tasks/${taskId}`).timeout(10000);
    if (userId) await request(app).delete(`/users/${userId}`).timeout(10000);
    await mongoose.connection.close();
  });

  test(
    "should verify the created task",
    async () => {
      const response = await request(app).get(`/tasks/get-task/${taskId}`).expect(200);

      expect(response.body).toHaveProperty("id", taskId);
      expect(response.body).toHaveProperty("title", "Test Task");
      expect(response.body).toHaveProperty("description", "This is a test task");
      expect(response.body).toHaveProperty("status", "pending"); // Ensuring enum matches
      expect(response.body).toHaveProperty("priority", 2);
      expect(response.body).toHaveProperty("userId", userId);
    },
    10000
  );

  test(
    "should return 404 for non-existing task",
    async () => {
      await request(app).get("/tasks/nonExistingId").expect(404);
    },
    5000
  );
});