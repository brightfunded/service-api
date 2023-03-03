const Sequelize = require('sequelize');
const sequelizeConfig = require('../config');


const user = sequelizeConfig.define('user', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
    },
    userName: {
        allowNull: false,
        type: Sequelize.STRING
    },
    userEmail: {
        type: Sequelize.STRING,
        allowNull: false
    },
    userPassword: {
        type: Sequelize.STRING,
        allowNull: false
    },
    firstName: {
        type: Sequelize.STRING,
        allowNull: true
    },
    lastName: {
        type: Sequelize.STRING,
        allowNull: true
    },
    title: {
        type: Sequelize.STRING,
        allowNull: true
    },
    street: {
        type: Sequelize.STRING,
        allowNull: true
    },
    city: {
        type: Sequelize.STRING,
        allowNull: true
    },
    state: {
        type: Sequelize.STRING,
        allowNull: true
    },
    postalCode: {
        type: Sequelize.STRING,
        allowNull: true
    },
    phoneNumber: {
        type: Sequelize.STRING,
        allowNull: true
    },
    countryCode: {
        type: Sequelize.STRING,
        allowNull: true
    },
    timeZoneCode: {
        type: Sequelize.STRING,
        allowNull: true
    },
    languageCode: {
        type: Sequelize.STRING,
        allowNull: true
    },
    newsRecap: {
        type: Sequelize.STRING,
        allowNull: true
    },
    token: {
        type: Sequelize.STRING,
        allowNull: true
    },
},
    {
        tableName: 'user',
        timestamps: false
    }
)


module.exports = user;