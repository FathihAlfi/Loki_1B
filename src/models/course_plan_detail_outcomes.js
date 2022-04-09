'use strict'
const { Sequelize, DataTypes, err } = require('sequelize');
const db = require('../config/database.js')

var course_plan_detail_outcomes = db.define ('course_plan_detail_outcomes', {
    id : {
        type        : DataTypes.BIGINT,
        allownull   : false,
        primaryKey  : true
    },
    course_plan_detail_id : {
        type        : DataTypes.BIGINT,
        allownull   : false
    },
    course_lo_id : {
        type        : DataTypes.BIGINT,
        allownull   : false
    }
},{
    freezeTableName : true,
    timestamps      : false
})

module.exports = course_plan_detail_outcomes