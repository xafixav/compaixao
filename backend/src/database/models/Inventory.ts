import { DataTypes, Model } from 'sequelize';
import db from '.';

class Inventory extends Model {

  public id!: number;
  
  public tipo!: string;

  public genero!: string;

  public tamanho!: number;

  public quantidade!: string;

}

Inventory.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: true,
    primaryKey: true,
    autoIncrement: true,
  },
  tipo: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: false,
  },
  tamanho: {
    type: DataTypes.NUMBER,
    allowNull: true,
    unique: false,
  },
  quantidade: {
    type: DataTypes.NUMBER,
    allowNull: true,
    unique: false,
  },
}, {
  // ... Outras configs
  underscored: false,
  sequelize: db,
  tableName: 'inventory',
  timestamps: false,
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
