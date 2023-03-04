import { DataTypes, Model } from 'sequelize';
import db from '.';
import Comentary from './Comentary';

class Assisted extends Model {

	public id!: number;
  
	public assistedNumber!: number;
  
	public name!: string;

	public bornAge!: string;

	public bornCity!: string;

	public bornState!: string;

	public jobProfession!: string;

	public cpf!: string;

	public livingState!: string;
	
	public gender!: string;

	public shoesNumber!: number;

	public legsNumber!: number;

	public shirtNumber!: number;

	public createdAt!: number;

	public updatedAt!: number;

}

Assisted.init({
	id: {
		type: DataTypes.INTEGER,
		allowNull: false,
		unique: true,
		primaryKey: true,
		autoIncrement: true,
	},
	name: {
		type: DataTypes.STRING,
		allowNull: false,
		unique: false,
	},
	assistedNumber: {
		type: DataTypes.INTEGER,
		allowNull: false,
		unique: false,
	},
	bornAge: {
		type: DataTypes.STRING,
		allowNull: false,
		unique: false,
	},
	bornCity: {
		type: DataTypes.STRING,
		allowNull: false,
		unique: false,
	},
	bornState: {
		type: DataTypes.STRING,
		allowNull: false,
		unique: false,
	},
	jobProfession: {
		type: DataTypes.STRING,
		allowNull: true,
		unique: false,
	},
	gender: {
		type: DataTypes.STRING,
		allowNull: true,
		unique: false,
	},
	shoesSize: {
		type: DataTypes.NUMBER,
		allowNull: true,
		unique: false,
	},
	legsNumber: {
		type: DataTypes.NUMBER,
		allowNull: true,
		unique: false,
	},
	shirtNumber: {
		type: DataTypes.NUMBER,
		allowNull: true,
		unique: false,
	},
	cpf: {
		type: DataTypes.STRING,
		allowNull: true,
		unique: false,
	},
	livingState: {
		type: DataTypes.STRING,
		allowNull: false,
		unique: false,
	},
}, {
	// ... Outras configs
	underscored: false,
	sequelize: db,
	tableName: 'assisted',
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

Assisted.hasMany(Comentary, {foreignKey: 'id', as: 'comentaries'});

export default Assisted;
