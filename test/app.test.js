const request = require('supertest');
const app = require('../app');

describe('GET /', () => {
  it('should return Hello, World!', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
    expect(res.text).toBe('Hello, World!');
  });
});

describe('GET /metrics', () => {
  it('should return metrics', async () => {
    const res = await request(app).get('/metrics');
    expect(res.statusCode).toEqual(200);
    expect(res.text).toContain('http_requests_total');
  });
});
