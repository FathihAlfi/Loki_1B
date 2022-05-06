'use strict'
const { Sequelize, DataTypes, err } = require('sequelize');
const db = require('../config/database.js')

var user = db.define('users', {
    id : {
        type            : DataTypes.BIGINT,
        allowNull       : false,
        primaryKey      : true,
        autoIncrement   : true
    },
    name            : Sequelize.STRING,
    email           : Sequelize.STRING,
    password        : Sequelize.STRING,
    remember_token  : Sequelize.STRING,
    type            : Sequelize.ENUM('M', 'D', 'T'),
    // created_at :Sequelize.DATE,
    // updated_at : Sequelize.DATE
},{
    freezeTableName : true,
    timestamps      : false
})

// user.removeAttribute('updatedAt', 'createdAt')
module.exports = user