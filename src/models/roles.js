'use strict'
const { Sequelize, DataTypes, err } = require('sequelize');
const db = require('../config/database.js')
var roles = db.define('roles', {
    id : {
        type        : DataTypes.BIGINT,
        allowNull   : false,
        primaryKey  : true
    },
    name        : Sequelize.STRING,
    guard_name  : Sequelize.STRING,
    // created_at :Sequelize.DATE,
    // updated_at : Sequelize.DATE
},{
    freezeTableName : true,
    timestamps      : false
})

// user.removeAttribute('updatedAt', 'createdAt')
module.exports = roles