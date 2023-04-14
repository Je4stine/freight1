import { Model, DataTypes, Sequelize } from 'sequelize';
import { sequelize } from '../sequelize';

class Employee extends Model {
  public id!: number;
  public name!: string;
  public surname!: string;
  public seniority!: string;
  public category!: string;
  public specialization!: string;
}

Employee.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    surname: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    seniority: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    category: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    specialization: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
  },
  {
    tableName: 'employees',
    sequelize,
  },
);

export default Employee ;