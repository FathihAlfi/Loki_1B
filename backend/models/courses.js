//mata kuliah
'use strict'
const { Sequelize, DataTypes, err } = require('sequelize');
const db = require('../config/database.js')
var courses = db.define('courses', {
    id : {
        type        : DataTypes.BIGINT,
        allowNull       : false,
        primaryKey      : true,
        autoIncrement   : true
    },
    curriculum_id :  {
        type        : DataTypes.BIGINT,
        allowNull   : false,
        primaryKey  : false
    },
    alias_name : {
        type        : DataTypes.TEXT,
        allowNull   : true
    },
    description : {
        type        : DataTypes.TEXT,
        allowNull   : true
    },
    code        : Sequelize.STRING,
    name        : Sequelize.TEXT,
    credit      : Sequelize.INTEGER,
    semester    : Sequelize.INTEGER,
    // created_at :Sequelize.DATE,
    // updated_at : Sequelize.DATE
},{
    freezeTableName : true,
    timestamps      : false
})

// user.removeAttribute('updatedAt', 'createdAt')
module.exports = courses