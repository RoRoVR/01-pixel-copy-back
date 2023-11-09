import db from "../db/connection";
import {DataTypes} from 'sequelize';


const PixelArt = db.define('PixelArt',{
    pixels: {
        type: DataTypes.STRING
    },
    score: {
        type: DataTypes.INTEGER
    }
});

export default PixelArt;