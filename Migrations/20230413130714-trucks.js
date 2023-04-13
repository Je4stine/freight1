'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('trucks', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      brand: {
        type: Sequelize.STRING(255),
        allowNull: true
      },
      load: {
        type: Sequelize.STRING(255),
        allowNull: true
      },
      capacity: {
        type: Sequelize.STRING(255),
        allowNull: true
      },
      year: {
          type: Sequelize.INTEGER,
          allowNull: true
      },
        numberOfRepairs: {
          type: Sequelize.INTEGER,
          allowNull: true
        }
    })
   
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('trucks');
  }
};
