/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-undef */
'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up (queryInterface, Sequelize) {
		await queryInterface.createTable('assisted', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			assistedId: {
				type: Sequelize.INTEGER,
				allowNull: false,
				unique: false,
			},
			name: {
				type: Sequelize.STRING,
				allowNull: false,
				unique: false,
			},
			bornAge: {
				type: Sequelize.STRING,
				allowNull: false,
				unique: false,
			},
			bornCity: {
				type: Sequelize.STRING,
				allowNull: false,
				unique: false,
			},
			bornState: {
				type: Sequelize.STRING,
				allowNull: false,
				unique: false,
			},
			jobProfession: {
				type: Sequelize.STRING,
				allowNull: true,
				unique: false,
			},
			cpf: {
				type: Sequelize.STRING,
				allowNull: true,
				unique: false,
			},
			livingState: {
				type: Sequelize.STRING,
				allowNull: false,
				unique: false,
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
		});
	},

	async down (queryInterface, _Sequelize) {
		await queryInterface.dropTable('assisted');
	}
};
