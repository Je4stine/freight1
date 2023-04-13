import { Model, Sequelize, DataTypes } from 'sequelize';


export default class Shipments extends Model {
  public id?: number;
  public sender?: string;
  public phone1?: string;
  public phone2?: string;
  public destination?: string;
  public value?: string;
}

export const ShipmentMap = (sequelize: Sequelize) => {
  Shipments.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    sender: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    surname: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    phone1: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    phone2: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    destination: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    value: {
      type: DataTypes.STRING(255),
      allowNull: true
  }
  }, {
    sequelize,
    tableName: 'shipments',
    timestamps: false
  });
  Shipments.sync();
}