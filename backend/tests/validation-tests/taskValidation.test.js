import mongoose from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";
import { User } from "../../db/models/userModel.js";

describe('Task Validation - Unit Tests', () => {
    beforeAll(async () => {
      await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
    });
  
    afterAll(async () => {
      await mongoose.connection.close();
    });
  
    it('should reject task creation with missing required fields', async () => {
      try {
        const task = new Task({
          status: 'pending' // Missing `taskID`, `userId`, `description`
        });
        await task.save();
      } catch (error) {
        expect(error.errors.taskID).toBeDefined();
        expect(error.errors.userId).toBeDefined();
        expect(error.errors.description).toBeDefined();
      }
    });
  
    it('should reject invalid priority values', async () => {
      try {
        const task = new Task({
          taskID: 4,
          userId: new mongoose.Types.ObjectId(),
          description: 'Invalid priority',
          priority: 5 // Only 1-3 allowed
        });
        await task.save();
      } catch (error) {
        expect(error.errors.priority).toBeDefined();
      }
    });
  });