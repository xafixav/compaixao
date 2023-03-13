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
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				type: 'tenis',
				gender: 'feminino',
				size: 35,
				quantity: 50,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				type: 'camisa',
				gender: 'feminino',
				size: 35,
				quantity: 50,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				type: 'calça',
				gender: 'feminino',
				size: 35,
				quantity: 50,
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
		await queryInterface.bulkDelete('inventory', null, {});
	},
};