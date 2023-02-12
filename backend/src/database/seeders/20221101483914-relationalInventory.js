'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('relationalInventory', [
      {
        userId: 1,
        inventoryId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 1,
        inventoryId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 1,
        inventoryId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        companyId: 1,
        saleId: 1,
        orderId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        companyId: 1,
        saleId: 2,
        orderId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        companyId: 1,
        saleId: 2,
        orderId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('relationalInventory', null, {});
  }
};
