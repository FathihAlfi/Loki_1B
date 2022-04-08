'use strict'
const { Sequelize, DataTypes, err } = require('sequelize');
const db = require('../config/database.js')

var password_resets = db.define('password_resets', {
    email :{
        type        : DataTypes.STRING,
        allownull   : false
    },
    token : Sequelize.STRING
},{
    freezeTableName : true,
    timestamps      : false
})

module.exports = password_resets