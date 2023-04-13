"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrackMap = void 0;
const sequelize_1 = require("sequelize");
class Tracks extends sequelize_1.Model {
}
exports.default = Tracks;
const TrackMap = (sequelize) => {
    Tracks.init({
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
        tableName: 'tracks',
        timestamps: false
    });
    Tracks.sync();
};
exports.TrackMap = TrackMap;
