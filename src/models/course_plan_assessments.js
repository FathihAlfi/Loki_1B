//komponen penilaian RPS
'use strict'
const { Sequelize, DataTypes, err } = require('sequelize');
const db = require('../config/database.js')

var course_plan_assessments = db.define ('course_plan_assessments', {
    id : {
        type        : DataTypes.BIGINT,
        allownull   : false,
        primaryKey  : true
    },
    course_plan_id : {
        type        : DataTypes.BIGINT,
        allownull   : false
    },
    name : {
        type        : DataTypes.STRING,
        allownull   : false
    },
    percentage : {
        type        : DataTypes.DOUBLE,
        allownull   : false
    },
    flag : {
        type        : DataTypes.INTEGER,
        allownull   : false
    }
},{
    freezeTableName : true,
    timestamps      : false
})

module.exports = course_plan_assessments