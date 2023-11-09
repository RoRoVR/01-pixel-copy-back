import {Sequelize} from 'sequelize';

const db = new Sequelize('pruebas', 'root', 'password', {
    host: 'localhost',
    dialect: 'mysql',
    //logging: false
} );

export default db;