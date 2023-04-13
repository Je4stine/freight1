'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('shipments', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      sender: {
        type: Sequelize.STRING(255),
        allowNull: true
      },
      surname: {
        type: Sequelize.STRING(255),
        allowNull: true
      },
      phone1: {
        type: Sequelize.STRING(255),
        allowNull: true
      },
      phone2: {
          type: Sequelize.STRING(255),
          allowNull: true
      },
      destination: {
          type: Sequelize.STRING(255),
          allowNull: true
      },
      value: {
        type: Sequelize.STRING(255),
        allowNull: true
    }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('shipments');
  }
};
