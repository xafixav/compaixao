import { DataTypes, Model } from 'sequelize';
import db from '.';

class Inventory extends Model {

	public id!: number;
  
	public type!: string;

	public gender!: string;

	public size!: number;

	public quantity!: number;

}

Inventory.init({
	id: {
		type: DataTypes.INTEGER,
		allowNull: false,
		unique: true,
		primaryKey: true,
		autoIncrement: true,
	},
	type: {
		type: DataTypes.STRING,
		allowNull: false,
		unique: false,
	},
	gender: {
		type: DataTypes.STRING,
		allowNull: false,
		unique: false,
	},
	size: {
		type: DataTypes.INTEGER,
		allowNull: false,
		unique: false,
	},
	quantity: {
		type: DataTypes.INTEGER,
		allowNull: false,
		unique: false,
	},
}, {
	// ... Outras configs
	underscored: false,
	sequelize: db,
	tableName: 'inventory',
	timestamps: true,
});

/**
  * `Workaround` para aplicar as associations em TS:
  * Associations 1:N devem ficar em uma das instâncias de modelo
  * */

// OtherModel.belongsTo(Example, { foreignKey: 'campoA', as: 'campoEstrangeiroA' });
// OtherModel.belongsTo(Example, { foreignKey: 'campoB', as: 'campoEstrangeiroB' });

// Example.hasMany(OtherModel, { foreignKey: 'campoC', as: 'campoEstrangeiroC' });
// Example.hasMany(OtherModel, { foreignKey: 'campoD', as: 'campoEstrangeiroD' });


export default Inventory;
