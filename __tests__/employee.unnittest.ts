import request from 'supertest';
import Server from '../Server';
import Employee  from '../Models/employees';

describe('CRUD', () => {
  let employeeId: number;

  beforeAll(async () => {
    await Employee.sync({ force: true });
  });

  test('Create an employee', async () => {
    const response = await request(Server)
      .post('/employees')
      .send({
        name: 'John',
        surname: 'Doe',
        seniority: 2,
        category: 'Driver',
        specialization: 'Big trucks',
      });
    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('id');
    employeeId = response.body.id;
  });

  test('Get all employees', async () => {
    const response = await request(Server).get('/employees');
    expect(response.status).toBe(200);
    expect(response.body).toHaveLength(1);
  });

  test('Get an employee by id', async () => {
    const response = await request(Server).get(`/employees/${employeeId}`);
    expect(response.status).toBe(200);
    expect(response.body.id).toBe(employeeId);
  });

  test('Update an employee', async () => {
    const response = await request(Server)
      .put(`/employees/${employeeId}`)
      .send({
        name: 'John',
        surname: 'Doe',
        seniority: 3,
        category: 'Driver',
        specialization: 'Big trucks',
      });
    expect(response.status).toBe(200);
    expect(response.body.seniority).toBe(3);
  });

  test('Delete an employee', async () => {
    const response = await request(Server).delete(`/employees/${employeeId}`);
    expect(response.status).toBe(204);
  });

  test('Get an employee by id after deletion', async () => {
    const response = await request(Server).get(`/employees/${employeeId}`);
    expect(response.status).toBe(404);
  });
});