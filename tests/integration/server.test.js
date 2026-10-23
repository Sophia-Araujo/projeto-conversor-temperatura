const request = require('supertest');
const app = require('../../src/server');

test('GET /celsius-para-fahrenheit retorna o resultado correto', async () => {
  const res = await request(app).get('/celsius-para-fahrenheit?valor=0');
  expect(res.status).toBe(200);
  expect(res.body.resultado).toBe(32);
});

test('GET /fahrenheit-para-celsius retorna o resultado correto', async () => {
  const res = await request(app).get('/fahrenheit-para-celsius?valor=212');
  expect(res.status).toBe(200);
  expect(res.body.resultado).toBe(100);
});
