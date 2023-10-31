// config .js 

const {Sequelize} = require("sequelize");

const sequelize = new Sequelize('csis_228_db', 'root', 'root', {host: 'localhost', dialect: 'mysql', port: '3306'});

module.exports = sequelize;

