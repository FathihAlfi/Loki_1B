//pertemuan minggunan RPS
'use strict'
const { Sequelize, DataTypes, err } = require('sequelize');
const db = require('../config/database.js')

var course_plan_details = db.define ('course_plan_details', {
    id : {
        type        : DataTypes.BIGINT,
        allownull   : false,
        primaryKey  : true
    },
    course_plan_id : {
        type        : DataTypes.BIGINT,
        allownull   : false
    },
    week : {
        type        : DataTypes.INTEGER,
        allownull   : false
    },
    material : {
        type        : DataTypes.TEXT,
        allownull   : false
    },
    method : {
        type        : DataTypes.TEXT,
        allownull   : false
    },
    student_experience : {
        type        : DataTypes.TEXT,
        allownull   : false
    }
},{
    freezeTableName : true,
    timestamps      : false
})

module.exports = course_plan_details