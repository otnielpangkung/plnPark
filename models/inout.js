'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class InOut extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
		}
	}
	InOut.init(
		{
			type: DataTypes.STRING,
			milik: DataTypes.STRING,
			plat: DataTypes.STRING,
			timeIn: DataTypes.DATE,
			timeOut: DataTypes.DATE,
		},
		{
			sequelize,
			modelName: 'InOut',
		}
	);
	return InOut;
};
