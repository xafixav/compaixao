/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-undef */
'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up (queryInterface, Sequelize) {
		await queryInterface.createTable('comentary', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			assistedId: {
				type: Sequelize.STRING,
				allowNull: false,
				unique: false,
				onDelete: 'CASCADE',
				references: {
					model: 'assisted',
					key: 'id'
				}
			},
			comentary: {
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
		await queryInterface.dropTable('comentary');
	}
};
