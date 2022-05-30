'use strict'
const { Sequelize, DataTypes, err } = require('sequelize');
const db = require('../config/database.js')

var course_los = db.define ('course_los', {
    id : {
        type        : DataTypes.BIGINT,
        allownull   : false,
        primaryKey  : true
    },
    course_plan_id : {
        type        : DataTypes.BIGINT,
        allownull   : false
    },
    type : {
        type        : DataTypes.INTEGER,
        allownull   : false  
    },
    code : {
        type        : DataTypes.STRING,
        allownull   : false
    },
    name : {
        type        : DataTypes.STRING,
        allownull   : false
    },
    parent_id  : Sequelize.TEXT
},{
    freezeTableName : true,
    timestamps      : false
})

module.exports = course_los