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
				assistedNumber: 2,
				name: 'Kleber Camargo',
				bornAge: '14/03/1987',
				bornCity: 'Limeira',
				bornState: 'Sao Paulo',
				jobProfession: '',
				cpf: 13215818978,
				livingState: 'Rua',
				gender: 'Masculino',
				shoesNumber: 35,
				legsNumber: 35,
				shirtNumber: 35,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				assistedNumber: 4,
				name: 'Angela da Silva Junior',
				bornAge: '14/03/1987',
				bornCity: 'Campinas',
				bornState: 'Sao Paulo',
				jobProfession: '',
				cpf: 33215558978,
				livingState: 'Rua',
				gender: 'Feminino',
				shoesNumber: 35,
				legsNumber: 35,
				shirtNumber: 35,
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