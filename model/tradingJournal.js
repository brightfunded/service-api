const Sequelize = require('sequelize');
const sequelizeConfig = require('../config');


const journals = sequelizeConfig.define('journals', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
    },
    ticket: {
        allowNull: false,
        type: Sequelize.STRING
    },
    open : {
        type: Sequelize.STRING,
        allowNull: false
    },
    type: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    volume: {
        type: Sequelize.STRING,
        allowNull: false
    },
    price: {
        type: Sequelize.STRING,
        allowNull: false
    },
    sl: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    tp: {
        type: Sequelize.STRING,
        allowNull: false
    },
    close: {
        type: Sequelize.STRING,
        allowNull: false
    },
    swap: {
        type: Sequelize.STRING,
        allowNull: false
    },
    profits: {
        type: Sequelize.STRING,
        allowNull: false
    },
    pips: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    duration: {
        type: Sequelize.STRING,
        allowNull: false
    },
    log: {
        type: Sequelize.STRING,
        allowNull: false
    },
    accountNumber: {
        type: Sequelize.STRING,
        allowNull: false
    },
},
    {
        tableName: 'journals',
        timestamps: false
    }
)


module.exports = journals;