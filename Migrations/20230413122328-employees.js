'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize){
    await queryInterface.createTable('employees', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: Sequelize.STRING(50),
      allowNull: false,
    },
    surname: {
      type: Sequelize.STRING(50),
      allowNull: false,
    },
    seniority: {
      type: Sequelize.STRING(50),
      allowNull: false,
    },
    category: {
      type: Sequelize.STRING(50),
      allowNull: false,
    },
    specialization: {
      type: Sequelize.STRING(50),
      allowNull: false,
    },
    createdAt: {
      type: Sequelize.STRING(50),
      allowNull: false,
    },
    updatedAt: {
      type: Sequelize.STRING(50),
      allowNull: false,
    },
  });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('employees');
  }
};
