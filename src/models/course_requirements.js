//mata kuliah prasyarat
const { Sequelize, DataTypes, err } = require('sequelize');
const db = require('../config/database.js')

var course_requirements = db.define('course_requirements', {
    id : {
        type : DataTypes.BIGINT,
        allownull : false,
        primaryKey : true,
        autoIncrement : true
    },

    course_id : {
        type : DataTypes.BIGINT,
        allownull : false
    },

    required_course_id : {
        type : DataTypes.BIGINT,
        allownull : false
    },

    required_level : {
        type : DataTypes.INTEGER,
        allownull : false
    },
    // created_at :Sequelize.DAT    E,
    // updated_at : Sequelize.DATE
},{
    freezeTableName : true,
    timestamps      : false
})

// user.removeAttribute('updatedAt', 'createdAt')
module.exports = course_requirements

