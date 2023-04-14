import request from 'supertest';
import Server from '../Server';
import Trips from '../Models/trips';


describe('CRUD', () => {
  let tripId: number;

  beforeAll(async () => {
    await Trips.sync({ force: true });
  });

  test('Create an Trips', async () => {
    const response = await request(Server)
      .post('/trips')
      .send({
        route: 'Test route',
      });
    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('id');
    tripId = response.body.id;
  });

  test('Get all Trips', async () => {
    const response = await request(Server).get('/trips');
    expect(response.status).toBe(200);
    expect(response.body).toHaveLength(1);
  });

  test('Get an trips by id', async () => {
    const response = await request(Server).get(`/shipment/${tripId}`);
    expect(response.status).toBe(200);
    expect(response.body.id).toBe(tripId);
  });

  test('Update an trip', async () => {
    const response = await request(Server)
      .put(`/tripId/${tripId}`)
      .send({
        route: 'Test route'
      });
    expect(response.status).toBe(200);
    expect(response.body.seniority).toBe(3);
  });

  test('Delete a trip', async () => {
    const response = await request(Server).delete(`/trip/${tripId}`);
    expect(response.status).toBe(204);
  });

  test('Get a trip by id after deletion', async () => {
    const response = await request(Server).get(`/trip/${tripId}`);
    expect(response.status).toBe(404);
  });
});