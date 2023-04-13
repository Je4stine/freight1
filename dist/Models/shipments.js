"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShipmentMap = void 0;
const sequelize_1 = require("sequelize");
class Shipments extends sequelize_1.Model {
}
exports.default = Shipments;
const ShipmentMap = (sequelize) => {
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
        sequelize,
        tableName: 'shipments',
        timestamps: false
    });
    Shipments.sync();
};
exports.ShipmentMap = ShipmentMap;
