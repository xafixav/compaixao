'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('inventory', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      type: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: false,
      },
      gender: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: false,
      },
      size: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: false,
      },
      quantity: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: false,
      },
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('inventory');
  }
};
