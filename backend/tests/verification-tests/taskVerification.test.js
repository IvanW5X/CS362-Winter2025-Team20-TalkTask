import mongoose from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";
import { User } from "../../db/models/userModel.js";

describe('Task Verification Tests', () => {
    let taskId;

    beforeAll(async () => {
        // Create a task to verify
        const response = await request(app)
            .post('/tasks')
            .send({
                title: 'Test Task',
                description: 'This is a test task',
                dueDate: '2025-12-31'
            });
        taskId = response.body.id;
    });

    afterAll(async () => {
        // Clean up the created task
        await request(app)
            .delete(`/tasks/${taskId}`);
    });

    test('should verify the created task', async () => {
        const response = await request(app)
            .get(`/tasks/${taskId}`)
            .expect(200);

        expect(response.body).toHaveProperty('id', taskId);
        expect(response.body).toHaveProperty('title', 'Test Task');
        expect(response.body).toHaveProperty('description', 'This is a test task');
        expect(response.body).toHaveProperty('dueDate', '2025-12-31');
    });

    test('should return 404 for non-existing task', async () => {
        await request(app)
            .get('/tasks/nonExistingId')
            .expect(404);
    });
});