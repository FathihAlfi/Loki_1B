'use strict'
const { Sequelize, DataTypes, err } = require('sequelize');
const db = require('../config/database.js')

var course_plan_detail_refs = db.define ('course_plan_detail_refs', {
    id : {
        type        : DataTypes.BIGINT,
        allownull   : false,
        primaryKey  : true
    },
    course_plan_detail_id : {
        type        : DataTypes.BIGINT,
        allownull   : false
    },
    course_reference_id : {
        type        : DataTypes.BIGINT,
        allownull   : false
    },
    category : {
        type        : DataTypes.INTEGER,
        allownull   : false
    }
},{
    freezeTableName : true,
    timestamps      : false
})

module.exports = course_plan_detail_refs