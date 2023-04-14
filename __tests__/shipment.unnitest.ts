import request from 'supertest';
import Server from '../Server';
import Shipment  from '../Models/shipments';


describe('CRUD', () => {
  let shipmentId: number;

  beforeAll(async () => {
    await Shipment.sync({ force: true });
  });

  test('Create an Shipment', async () => {
    const response = await request(Server)
      .post('/shipments')
      .send({
        sender: 'Test Sender',
        phone1: '123456789',
        phone2: '987654321',
        destination: 'Test Destination',
        value: 1000,
      });
    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('id');
    shipmentId = response.body.id;
  });

  test('Get all shipments', async () => {
    const response = await request(Server).get('/shipments');
    expect(response.status).toBe(200);
    expect(response.body).toHaveLength(1);
  });

  test('Get an shipment by id', async () => {
    const response = await request(Server).get(`/shipment/${shipmentId}`);
    expect(response.status).toBe(200);
    expect(response.body.id).toBe(shipmentId);
  });

  test('Update an shipment', async () => {
    const response = await request(Server)
      .put(`/shipmentId/${shipmentId}`)
      .send({
        sender: 'Test Sender',
        phone1: '123456789',
        phone2: '987654321',
        destination: 'Test Destination',
        value: 1000,
      });
    expect(response.status).toBe(200);
    expect(response.body.seniority).toBe(3);
  });

  test('Delete an shipment', async () => {
    const response = await request(Server).delete(`/shipment/${shipmentId}`);
    expect(response.status).toBe(204);
  });

  test('Get an shipment by id after deletion', async () => {
    const response = await request(Server).get(`/shipment/${shipmentId}`);
    expect(response.status).toBe(404);
  });
});