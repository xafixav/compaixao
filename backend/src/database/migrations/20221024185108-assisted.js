'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('assisted', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      assistedId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: false,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: false,
      },
      rg: {
        type: Sequelize.STRING,
        allowNull: true,
        unique: false,
      },
      cpf: {
        type: Sequelize.STRING,
        allowNull: true,
        unique: false,
      },
      livingState: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: false,
      },
      description: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('assisted');
  }
};
