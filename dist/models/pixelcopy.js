"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = __importDefault(require("../db/connection"));
const sequelize_1 = require("sequelize");
const PixelArt = connection_1.default.define('PixelArt', {
    pixels: {
        type: sequelize_1.DataTypes.STRING
    },
    score: {
        type: sequelize_1.DataTypes.INTEGER
    }
});
exports.default = PixelArt;
//# sourceMappingURL=pixelcopy.js.map