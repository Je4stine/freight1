"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize_2 = require("../sequelize");
class Trips extends sequelize_1.Model {
}
exports.default = Trips;
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
    sequelize: sequelize_2.sequelize,
    tableName: 'trips',
    timestamps: false
});
