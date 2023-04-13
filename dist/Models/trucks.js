"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrackMap = void 0;
const sequelize_1 = require("sequelize");
class Trucks extends sequelize_1.Model {
}
exports.default = Trucks;
const TrackMap = (sequelize) => {
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
        sequelize,
        tableName: 'trucks',
        timestamps: false
    });
    Trucks.sync();
};
exports.TrackMap = TrackMap;
