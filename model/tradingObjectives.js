const Sequelize = require('sequelize');
const sequelizeConfig = require('../config');


const objective = sequelizeConfig.define('objective', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
    },
    tradingObjective: {
        allowNull: false,
        type: Sequelize.STRING
    },
    results : {
        type: Sequelize.STRING,
        allowNull: false
    },
    summary: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    accountNumber: {
        type: Sequelize.STRING,
        allowNull: false
    },
},
    {
        tableName: 'objective',
        timestamps: false
    }
)


module.exports = objective;