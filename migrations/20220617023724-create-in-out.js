'use strict';
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('InOuts', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			type: {
				type: Sequelize.STRING,
			},
			milik: {
				type: Sequelize.STRING,
			},
			plat: {
				type: Sequelize.STRING,
			},
			timeIn: {
				type: Sequelize.DATE,
			},
			timeOut: {
				type: Sequelize.DATE,
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
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable('InOuts');
	},
};
