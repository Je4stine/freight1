import { Sequelize } from 'sequelize';

// create a new instance of the Sequelize class
const sequelize = new Sequelize({
    dialect: 'postgres', 
    host: 'localhost', 
    port: 5432, 
    username: 'postgres', 
    password: 'admin1234', 
    database: 'freight',
});

// test the connection to the database
try {
  sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

export { sequelize };