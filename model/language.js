const Sequelize = require('sequelize');
const sequelizeConfig = require('../config');


const language = sequelizeConfig.define('language', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
    },
    language: {
        allowNull: false,
        type: Sequelize.STRING
    },
    languageCode: {
        type: Sequelize.STRING,
        allowNull: false
    },
    languageFlag: {
        type: Sequelize.STRING,
        allowNull: true
    },
},
{
    tableName: 'language',
    timestamps: false
}
)


module.exports = language;