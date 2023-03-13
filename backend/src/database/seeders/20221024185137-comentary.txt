/* eslint-disable no-undef */
module.exports = {
	up: async (queryInterface) => {
		/**
     * Add seed commands here.
     *
     * Example:
     */
		await queryInterface.bulkInsert('comentary', [
			{
				assistedId: 1,
				comentary: 'Esta sem Tenis - Roupa de Frio',
				prayer: 'Pedir para melhorar a Saude',
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				assistedId: 2,
				comentary: 'Chinelo / Meia / Cueca',
				prayer: 'Pedir para melhorar a Saude',
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
		await queryInterface.bulkDelete('comentary', null, {});
	},
};