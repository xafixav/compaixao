/* eslint-disable no-undef */
module.exports = {
	up: async (queryInterface) => {
		/**
     * Add seed commands here.
     *
     * Example:
     */
		await queryInterface.bulkInsert('inventory', [
			{
				type: 'tenis',
				gender: 'masculino',
				size: 35,
				quantity: 50,
			},
			{
				type: 'tenis',
				gender: 'feminino',
				size: 35,
				quantity: 50,
			},
			{
				type: 'camisa',
				gender: 'feminino',
				size: 35,
				quantity: 50,
			},
			{
				type: 'calça',
				gender: 'feminino',
				size: 35,
				quantity: 50,
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