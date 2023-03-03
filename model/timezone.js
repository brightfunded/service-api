const Sequelize = require('sequelize');
const sequelizeConfig = require('../config');


const timeZone = sequelizeConfig.define('timeZone', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
    },
    timeZone: {
        allowNull: false,
        type: Sequelize.STRING
    },
    timeZoneCode: {
        type: Sequelize.STRING,
        allowNull: false
    },
},
{
    tableName: 'timeZone',
    timestamps: false
}
)


module.exports = timeZone;