# Road Freight Transportation company System
## Introduction
This is a database management system that Tracks the number of freigths by a specific truck, its driver, the trips it takes and Shipments by the trucks.
## Entities in the database
The following are the tables included In the data base 
**Employees Table**
    - id: number;
    -  name: string;
    -  surname: string;
    -  seniority: string;
    -  category: string;
    -  specialization: string;
**Shipements**
    - id: number;
    - sender: string;
    - phone1: string;
    - phone2: string;
    - destination: string;
    - value: string;
**Trips**
    -id: number;
    - route: string;
**Trucks**
    - id: number;
    - brand: string;
    - load: string;
    - capacity: string;
    - year: number;
    - numberOfRepairs: number;
## Getting Started
1. Install node modules - use *npm install/yarn install* from your terminal
2. Install Sequelize CLI if not yet installed
3. Make sure Postges SQL is installed
4. Create a database in Postgre from the pgAdmin
5. Migrate the database using Sequelize with the command *sequelize db:migrate*
6. Start the server with command *npm start*

The server runs at port 8080 

## Testing the endpoints
You can use Postman to test the api endpoints 
e.g localhost:8080/api/employees to get all the employees
    