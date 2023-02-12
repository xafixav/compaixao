import { DataTypes, Model } from 'sequelize';
import db from '.';

class RelationalInventory extends Model {

  public id!: number;
  
  public userId!: string;

  public inventoryId!: string;

}

RelationalInventory.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: true,
    primaryKey: true,
    autoIncrement: true,
  },
  userId: {
    type: DataTypes.NUMBER,
    allowNull: false,
    unique: false,
    references: {
      model: 'users',
      key: 'id'
    }
  },
  inventoryId: {
    type: DataTypes.NUMBER,
    allowNull: false,
    unique: false,
    references: {
      model: 'inventory',
      key: 'id'
    }
  },
}, {
  // ... Outras configs
  underscored: false,
  sequelize: db,
  tableName: 'relationalInventory',
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


export default RelationalInventory;
