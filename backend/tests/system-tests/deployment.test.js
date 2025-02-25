import request from 'supertest';
import app from '../../server.js';

describe('System Test - API Deployment', () => {
  beforeAll(() => {
    process.env.NODE_ENV = 'production'; // Simulate production environment
  });

  it('should return correct response headers in production mode', async () => {
    const res = await request(app).get('/api/tasks/USER_ID'); // ✅ Adjusted to match API route

    expect(res.status).toBe(200);
    expect(res.headers['content-type']).toContain('application/json');
    expect(res.headers['cache-control']).toBeDefined();
  });

  it('should check if the server is running and responding', async () => {
    const res = await request(app).get('/api/health'); // ✅ Ensure a health-check route exists
    expect(res.status).toBe(200);
    expect(res.text).toContain('API is running'); // ✅ Adjust based on actual API response
  });

  it('should test response time is under 1 second', async () => {
    const start = Date.now();
    await request(app).get('/api/tasks/USER_ID'); // ✅ Adjusted route
    const duration = Date.now() - start;

    expect(duration).toBeLessThan(1000); // ✅ Ensures response time < 1s
  });

  it('should return a 404 for an unknown route', async () => {
    const res = await request(app).get('/non-existent-route');
    expect(res.status).toBe(404);
  });
});