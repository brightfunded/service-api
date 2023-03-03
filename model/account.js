const Sequelize = require('sequelize');
const sequelizeConfig = require('../config');


const account = sequelizeConfig.define('account', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
    },
    userId: {
        allowNull: false,
        type: Sequelize.STRING
    },
    accountNumber: {
        allowNull: false,
        type: Sequelize.STRING
    },
    subscriptionType: {
        type: Sequelize.STRING,
        allowNull: false
    },
    startDate: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    endDate: {
        type: Sequelize.STRING,
        allowNull: false
    },
    accountSize: {
        type: Sequelize.STRING,
        allowNull: false
    },
    accountType: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    platform: {
        type: Sequelize.STRING,
        allowNull: false
    },
    accountStatus: {
        type: Sequelize.STRING,
        allowNull: false
    },
},
    {
        tableName: 'account',
        timestamps: false
    }
)


module.exports = account;