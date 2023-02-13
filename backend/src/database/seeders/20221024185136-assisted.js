module.exports = {
  up: async (queryInterface) => {
    /**
     * Add seed commands here.
     *
     * Example:
     */
    await queryInterface.bulkInsert('assisted', [
      {
        assistedId: 1,
        name: 'Joao da silva',
        cpf: 12345678903,
        rg: null,
        livingState: 'Albergue',
        description: '',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        assistedId: 2,
        name: 'Kleber Camargo',
        cpf: null,
        rg: 12345678904,
        livingState: 'Rua',
        description: '',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  down: async (queryInterface) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     */
    await queryInterface.bulkDelete('assisted', null, {});
  },
};