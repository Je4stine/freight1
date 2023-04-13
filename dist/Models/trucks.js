"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize_2 = require("../sequelize");
class Trucks extends sequelize_1.Model {
}
exports.default = Trucks;
Trucks.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    brand: {
        type: sequelize_1.DataTypes.STRING(255),
        allowNull: true
    },
    load: {
        type: sequelize_1.DataTypes.STRING(255),
        allowNull: true
    },
    capacity: {
        type: sequelize_1.DataTypes.STRING(255),
        allowNull: true
    },
    year: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true
    },
    numberOfRepairs: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true
    }
}, {
    sequelize: sequelize_2.sequelize,
    tableName: 'trucks',
    timestamps: false
});
