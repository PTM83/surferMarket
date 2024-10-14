const request = require('supertest');
const app = require('./app'); // Importa tu aplicación de Express

describe('Pruebas de la API REST', () => {
  it('GET / debería devolver código 200', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
    expect(res.text).toContain('Servidor funcionando con CORS habilitado');
  });

  it('POST /api/auth/register debería devolver código 201', async () => {
    const res = await request(app).post('/api/auth/register').send({
      username: 'usuario1',
      password: '123456'
    });
    expect(res.statusCode).toEqual(201);
    expect(res.body.message).toBe('Usuario registrado correctamente');
  });

  it('POST /api/auth/login debería devolver un token', async () => {
    const res = await request(app).post('/api/auth/login').send({
      username: 'usuario1',
      password: '123456'
    });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('token');
  });

  it('GET /api/products debería devolver código 403 si no hay token', async () => {
    const res = await request(app).get('/api/products');
    expect(res.statusCode).toEqual(403);
    expect(res.body.message).toBe('Token requerido');
  });
});