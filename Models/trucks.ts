import { Model, Sequelize, DataTypes } from 'sequelize';


export default class Trucks extends Model {
  public id?: number;
  public brand?: string;
  public load?: string;
  public capacity?: string;
  public year?: number;
  public numberOfRepairs?: number;
}


export const TrackMap = (sequelize: Sequelize) => {
  Trucks.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    brand: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    load: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    capacity: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    year: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
      numberOfRepairs: {
        type: DataTypes.INTEGER,
        allowNull: true
      }
  }, {
    sequelize,
    tableName: 'trucks',
    timestamps: false
  });
  Trucks.sync();
}