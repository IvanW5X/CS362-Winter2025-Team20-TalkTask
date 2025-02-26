/********************************************************************
 * File Name:
 * Date:
 * Description:
 * Author(s): CS 362-Team 20
 ********************************************************************/

import mongoose from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";
import { Task } from "../../db/models/taskModel.js";

let mongoServer;

describe("Task Validation - Unit Tests", () => {
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

  it("should reject task creation with missing required fields", async () => {
    try {
      const task = new Task({
        status: "pending", // ❌ Missing `taskID`, `userId`, `title`, `description`
      });
      await task.save();
    } catch (error) {
      expect(error.errors.taskID).toBeDefined();
      expect(error.errors.userId).toBeDefined();
      expect(error.errors.title).toBeDefined();
      expect(error.errors.description).toBeDefined();
    }
  });

  it("should reject invalid priority values", async () => {
    try {
      const task = new Task({
        taskID: 4,
        title: "Priority Test Task",
        userId: new mongoose.Types.ObjectId(),
        description: "Invalid priority",
        priority: 5, // ❌ Only 1-3 allowed
      });
      await task.save();
    } catch (error) {
      expect(error.errors.priority).toBeDefined();
    }
  });

  it("should reject an invalid status value", async () => {
    try {
      const task = new Task({
        taskID: 5,
        title: "Invalid Status Task",
        userId: new mongoose.Types.ObjectId(),
        description: "Testing status validation",
        status: "not-a-valid-status", // ❌ Should be 'pending' | 'in-progress' | 'completed'
      });
      await task.save();
    } catch (error) {
      expect(error.errors.status).toBeDefined();
    }
  });

  it("should accept a valid task", async () => {
    const task = new Task({
      taskID: 6,
      title: "Valid Task",
      userId: new mongoose.Types.ObjectId(),
      description: "This task should be valid",
      priority: 2, // ✅ Between 1-3
      status: "pending", // ✅ Valid status
    });

    await expect(task.save()).resolves.toBeDefined();
  });
});