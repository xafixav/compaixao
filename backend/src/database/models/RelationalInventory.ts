import { DataTypes, Model } from 'sequelize';
import db from '.';
import Assisted from './Assisted';
import Inventory from './Inventory';

class RelationalInventory extends Model {

	public id!: number;
  
	public assistedId!: string;

	public inventoryId!: string;

	public quantity!: number;

	public createdAt!: number;

	public updatedAt!: number;
  
}

RelationalInventory.init({
	id: {
		type: DataTypes.INTEGER,
		allowNull: false,
		unique: true,
		primaryKey: true,
		autoIncrement: true,
	},
	assistedId: {
		type: DataTypes.INTEGER,
		allowNull: false,
		unique: false,
		references: {
			model: 'assisted',
			key: 'id'
		}
	},
	inventoryId: {
		type: DataTypes.INTEGER,
		allowNull: false,
		unique: false,
		references: {
			model: 'inventory',
			key: 'id'
		}
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
	tableName: 'relationalInventory',
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

RelationalInventory.hasMany(Inventory, { foreignKey: 'id', as: 'product', onDelete: 'CASCADE' });
RelationalInventory.hasMany(Assisted, { foreignKey: 'id', as: 'product', onDelete: 'CASCADE' });


export default RelationalInventory;
