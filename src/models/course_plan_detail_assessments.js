
'use strict'
const { Sequelize, DataTypes, err } = require('sequelize');
const db = require('../config/database.js')

var course_plan_detail_assessments=db.define('course_plan_detail_assessments', {
    id : {
        type : DataTypes.BIGINT,
        allownull : false,
        prymaryKey : true,
        autoIncrement : true
      },

    course_plan_detail_id : {
        type : DataTypes.BIGINT,
        allownull : false,
      },

    course_plan_assessment_id : {
        type : DataTypes.BIGINT,
        allownull : false,
      },

    percentage : {
        type : DataTypes.DOUBLE,
        allownull : false,
      },

      // created_at :Sequelize.DATE,
    // updated_at : Sequelize.DATE
},{
    freezeTableName : true,
    timestamps      : false
})
// user.removeAttribute('updatedAt', 'createdAt')
module.exports = course_plan_detail_assessments