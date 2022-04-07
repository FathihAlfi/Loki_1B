'use strict'
const { Sequelize, DataTypes, err } = require('sequelize');
const db = require('../config/database.js')

var migrations = db.define ('migrations', {
    id : {
        type            : DataTypes.INTEGER,
        allownull       : false,
        autoIncrement   : true,
        primaryKey      : true
    },
    migration : {
        type        : DataTypes.STRING,
        allownull   : false,
    },
    batch : {
        type        : DataTypes.INTEGER,
        allownull   : true
    }
},{
    freezeTableName : true,
    timestamps      : false
})

module.exports = migrations