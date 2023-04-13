import { Model, Sequelize, DataTypes } from 'sequelize';


export default class Trips extends Model {
  public id?: number;
  public route?: string;
}

export const ShipmentMap = (sequelize: Sequelize) => {
  Trips.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    route: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'trips',
    timestamps: false
  });
  Trips.sync();
}