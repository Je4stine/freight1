"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShipmentMap = void 0;
const sequelize_1 = require("sequelize");
class Trips extends sequelize_1.Model {
}
exports.default = Trips;
const ShipmentMap = (sequelize) => {
    Trips.init({
        id: {
            type: sequelize_1.DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        route: {
            type: sequelize_1.DataTypes.STRING(255),
            allowNull: true
        }
    }, {
        sequelize,
        tableName: 'trips',
        timestamps: false
    });
    Trips.sync();
};
exports.ShipmentMap = ShipmentMap;
