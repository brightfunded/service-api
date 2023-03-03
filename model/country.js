const Sequelize = require('sequelize');
const sequelizeConfig = require('../config');


const country = sequelizeConfig.define('country', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
    },
    countryName: {
        allowNull: false,
        type: Sequelize.STRING
    },
    countryCode: {
        type: Sequelize.STRING,
        allowNull: false
    },
},
{
    tableName: 'country',
    timestamps: false
}
)


module.exports = country;