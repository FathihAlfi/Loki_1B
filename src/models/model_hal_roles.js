'use strict'
const { Sequelize, DataTypes, err } = require('sequelize');
const db = require('../config/database.js')

var model_has_roles = db.define('model_has_roles', {
    role_id : {
        type        : DataTypes.BIGINT,
        allownull   : false,
        primaryKey  : true
    },
    model_type : {
        type        : DataTypes.STRING,
        allownull   : false
    },
    model_id : {
        type        : DataTypes.BIGINT,
        allownull   : false
    }
},{
    freezeTableName : true,
    timestamps      : false
})

module.exports = model_has_roles