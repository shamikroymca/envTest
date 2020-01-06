const Sequelize = require('sequelize');
const sequelize = require('../database/util');
const Product = sequelize.define('product',{
id: {
    type: Sequelize.INTEGER,
    primarykey: true,
    allowNull:false,
    autoIncrement : true
},
title: Sequelize.STRING,
price: {
    type: Sequelize.DOUBLE,
    allowNull:false

},
image: {
    type:Sequelize.STRING,
    allowNull:false
},
description : {
    type: Sequelize.STRING,
    allowNull:false
}

});
module.exports = Product;