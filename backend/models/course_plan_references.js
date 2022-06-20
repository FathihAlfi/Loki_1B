//daftar referensi dalam RPS
'use strict'
const { Sequelize, DataTypes, err } = require('sequelize');
const db = require('../config/database.js')
var course_plan_references = db.define('course_plan_references', {
    id : {
        type            : DataTypes.BIGINT,
        allowNull       : false,
        primaryKey      : true,
        autoIncrement   : true
    },
    course_plan_id :  {
        type        : DataTypes.BIGINT,
        allowNull   : false,
        primaryKey  : false
    },
    title       : Sequelize.STRING,
    author      : Sequelize.STRING,
    publisher   : Sequelize.STRING,
    year        : Sequelize.INTEGER,
    description : Sequelize.TEXT,
    // created_at :Sequelize.DATE,
    // updated_at : Sequelize.DATE
},{
    freezeTableName : true,
    timestamps      : false
})

// user.removeAttribute('updatedAt', 'createdAt')
module.exports = course_plan_references