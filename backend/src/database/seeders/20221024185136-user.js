module.exports = {
  up: async (queryInterface) => {
    /**
     * Add seed commands here.
     *
     * Example:
     */
    await queryInterface.bulkInsert('users', [
      {
        userId: '01',
        name: 'Joao da silva',
        cpf: 12345678903,
        rg: null,
        moradia: 'Albergue', // secret_admin
        description: '',
      },
      {
        userId: '02',
        name: 'Kleber Camargo',
        cpf: null,
        rg: 12345678904,
        moradia: 'Rua', // secret_admin
        description: '',
      },
    ], {});
  },

  down: async (queryInterface) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     */
    await queryInterface.bulkDelete('users', null, {});
  },
};