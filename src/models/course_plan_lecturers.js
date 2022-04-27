//dosen pengampu
'use strict'
const { Sequelize, DataTypes, err } = require('sequelize');
const db = require('../config/database.js')

var course_plan_lecturers = db.define('course_plan_lecturers', {
        id : {
          type : DataTypes.BIGINT,
          allownull : false,
          primaryKey : true,
          autoIncrement : true
        },

        course_plan_id : {
            type : DataTypes.BIGINT,
            allownull : false

        },

        lecturer_id : {
            type : DataTypes.BIGINT,
            allownull : false,

        },

        creator : {
            type : DataTypes.INTEGER,
            allownull : false
        },
    // created_at :Sequelize.DATE,
    // updated_at : Sequelize.DATE
},{
    freezeTableName : true,
    timestamps      : false
})

// user.removeAttribute('updatedAt', 'createdAt')
module.exports = course_plan_lecturers



