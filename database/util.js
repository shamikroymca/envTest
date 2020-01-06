const Sequelize = require('sequelize');
const sequelize = new Sequelize({database:'express_sequelize',username:'dbadmin',password:'matrix',dialect:'mysql',host:'localhost'});

module.exports = sequelize;