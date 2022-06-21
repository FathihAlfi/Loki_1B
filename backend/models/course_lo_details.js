'use strict'
const { Sequelize, DataTypes, err } = require('sequelize');
const db = require('../config/database.js')

var course_lo_details = db.define ('course_lo_details', {
    id : {
        type        : DataTypes.BIGINT,
        allownull   : false,
        primaryKey  : true
    },
    curriculum_lo_id : {
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

module.exports = course_lo_details