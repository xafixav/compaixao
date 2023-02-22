import { DataTypes, Model } from 'sequelize';
import db from '.';

class Comentary extends Model {

	public id!: number;
  
	public assistedId!: string;

	public comentary!: string;

	public createdAt!: number;

	public updatedAt!: number;

}

Comentary.init({
	id: {
		type: DataTypes.INTEGER,
		allowNull: false,
		unique: true,
		primaryKey: true,
		autoIncrement: true,
	},
	assistedId: {
		type: DataTypes.STRING,
		allowNull: false,
		unique: false,
		references: {
			model: 'assisted',
			key: 'id'
		}
	},
	comentary: {
		type: DataTypes.STRING,
		allowNull: false,
		unique: false,
	},
}, {
	// ... Outras configs
	underscored: false,
	sequelize: db,
	tableName: 'comentary',
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


export default Comentary;
