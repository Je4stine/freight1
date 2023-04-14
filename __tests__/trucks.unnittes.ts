import request from 'supertest';
import Server from '../Server';
import Trucks  from '../Models/trucks';

describe('CRUD', () => {
  let trucksId: number;

  beforeAll(async () => {
    await Trucks.sync({ force: true });
  });

  test('Create a truck', async () => {
    const response = await request(Server)
      .post('/truck')
      .send({
        brand: 'Volvo',
        load: 'Heavy',
        capacity: '100 tons',
        year: 2020,
        numberOfRepairs: 0,
      });
    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('id');
    trucksId = response.body.id;
  });

  test('Get all trucks', async () => {
    const response = await request(Server).get('/truck');
    expect(response.status).toBe(200);
    expect(response.body).toHaveLength(1);
  });

  test('Get a trucks by id', async () => {
    const response = await request(Server).get(`/truck/${trucksId}`);
    expect(response.status).toBe(200);
    expect(response.body.id).toBe(trucksId);
  });

  test('Update a trucks', async () => {
    const response = await request(Server)
      .put(`/employees/${trucksId}`)
      .send({
        brand: 'Volvo',
        load: 'Heavy',
        capacity: '100 tons',
        year: 2020,
        numberOfRepairs: 0,
      });
    expect(response.status).toBe(200);
    expect(response.body.seniority).toBe(3);
  });

  test('Delete a truck', async () => {
    const response = await request(Server).delete(`/truck/${trucksId}`);
    expect(response.status).toBe(204);
  });

  test('Get a truck by id after deletion', async () => {
    const response = await request(Server).get(`/truck/${trucksId}`);
    expect(response.status).toBe(404);
  });
});