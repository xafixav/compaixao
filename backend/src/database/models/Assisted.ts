import { DataTypes, Model } from 'sequelize';
import db from '.';

class Assisted extends Model {

  public id!: number;

  public assistedId!: number;
  
  public name!: string;

  public cpf!: string;

  public rg!: string;

  public livingState!: string;

  public description!: string;

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
  assistedId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: false,
  },
  cpf: {
    type: DataTypes.STRING,
    allowNull: true,
    unique: false,
  },
  rg: {
    type: DataTypes.STRING,
    allowNull: true,
    unique: false,
  },
  livingState: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: false,
  },
  description: {
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

export default Assisted;
