/* eslint-disable no-undef */
module.exports = {
	up: async (queryInterface) => {
		/**
     * Add seed commands here.
     *
     * Example:
     */
		await queryInterface.bulkInsert('assisted', [
			{
				assistedId: 2,
				name: 'Kleber Camargo',
				bornAge: '14/03/1987',
				bornCity: 'Limeira',
				bornState: 'Sao Paulo',
				jobProfession: '',
				cpf: 13215818978,
				livingState: 'Rua',
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				assistedId: 4,
				name: 'Angela da Silva Junior',
				bornAge: '14/03/1987',
				bornCity: 'Campinas',
				bornState: 'Sao Paulo',
				jobProfession: '',
				cpf: 33215558978,
				livingState: 'Rua',
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