module.exports = {
  up: async (queryInterface) => {
    /**
     * Add seed commands here.
     *
     * Example:
     */
    await queryInterface.bulkInsert('inventory', [
      {
        tipo: 'tenis',
        genero: 'masculino',
        tamanho: 35,
        quantidade: 50,
      },
      {
        tipo: 'tenis',
        genero: 'feminino',
        tamanho: 35,
        quantidade: 50,
      },
      {
        tipo: 'camisa',
        genero: 'feminino',
        tamanho: 35,
        quantidade: 50,
      },
      {
        tipo: 'calça',
        genero: 'feminino',
        tamanho: 35,
        quantidade: 50,
      },
    ], {});
  },

  down: async (queryInterface) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     */
    await queryInterface.bulkDelete('inventory', null, {});
  },
};