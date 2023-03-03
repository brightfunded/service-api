const Sequelize = require('sequelize');
const sequelizeConfig = require('../config');


const forex = sequelizeConfig.define('forex', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
    },
    description: {
        allowNull: false,
        type: Sequelize.STRING
    },
    dates: {
        type: Sequelize.STRING,
        allowNull: false
    },
    forecast: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    previous: {
        type: Sequelize.STRING,
        allowNull: false
    },
    currency: {
        type: Sequelize.STRING,
        allowNull: false
    },
    logoURL: {
        type: Sequelize.STRING,
        allowNull: false
    },
},
    {
        tableName: 'forex',
        timestamps: false
    }
)


module.exports = forex;