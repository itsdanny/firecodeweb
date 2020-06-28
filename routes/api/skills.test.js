/* eslint-disable linebreak-style */
const request = require('supertest');
// TOP LEVEL OF THIS TEST SUITE
describe('The skill API', () => {
    // SPECIFIC TEST
  it('Returns all skills', async () => {
    const res = await request('http://localhost:3000')
        .get('/api/skills/list')
        .expect(200)
        .expect('Content-Type', 'application/json; charset=utf-8');

        // first result that is an array
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body.length).toBeGreaterThan(0);
    expect(res.body[0].title).toBe('c#');
  });
});
