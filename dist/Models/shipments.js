"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize_2 = require("../sequelize");
class Shipments extends sequelize_1.Model {
}
exports.default = Shipments;
Shipments.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    sender: {
        type: sequelize_1.DataTypes.STRING(255),
        allowNull: true
    },
    surname: {
        type: sequelize_1.DataTypes.STRING(255),
        allowNull: true
    },
    phone1: {
        type: sequelize_1.DataTypes.STRING(255),
        allowNull: true
    },
    phone2: {
        type: sequelize_1.DataTypes.STRING(255),
        allowNull: true
    },
    destination: {
        type: sequelize_1.DataTypes.STRING(255),
        allowNull: true
    },
    value: {
        type: sequelize_1.DataTypes.STRING(255),
        allowNull: true
    }
}, {
    sequelize: sequelize_2.sequelize,
    tableName: 'shipments',
});
