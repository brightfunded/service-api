const Sequelize = require('sequelize');
const sequelizeConfig = require('../config');


const statistics = sequelizeConfig.define('statistics', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
    },
    equity: {
        allowNull: false,
        type: Sequelize.STRING
    },
    balance : {
        type: Sequelize.STRING,
        allowNull: false
    },
    noOfTrades: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    lots: {
        type: Sequelize.STRING,
        allowNull: false
    },
    winRate: {
        type: Sequelize.STRING,
        allowNull: false
    },
    averageLoss: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    averageProfit: {
        type: Sequelize.STRING,
        allowNull: false
    },
    averageRRR: {
        type: Sequelize.STRING,
        allowNull: false
    },
    expectancy: {
        type: Sequelize.STRING,
        allowNull: false
    },
    profitFactor: {
        type: Sequelize.STRING,
        allowNull: false
    },
    accountNumber: {
        type: Sequelize.STRING,
        allowNull: false
    },
},
    {
        tableName: 'statistics',
        timestamps: false
    }
)


module.exports = statistics;