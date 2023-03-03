const Sequelize = require("sequelize");
require('dotenv').config();



const sequelize = new Sequelize(process.env.DB_NAME, process.env.USER_NAME, process.env.PASSWORD, {
    host: process.env.HOST,
    dialect: process.env.DIALECT,
    logging: console.log,
    pool: {
        max: 5,
        min: 0,
        idle: 10000,
    }
});



module.exports = sequelize;