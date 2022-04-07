'use strict'
const { Sequelize, DataTypes, err } = require('sequelize');
const db = require('../config/database.js')
var courses = db.define('courses', {
    id : {type : DataTypes.BIGINT,
                allowNull : false,
                primaryKey : true},
    curriculum_id :  {type : DataTypes.BIGINT,
                            allowNull : false,
                            primaryKey : false},
    code : Sequelize.STRING,
    name : Sequelize.TEXT,
    alias_name : {type : DataTypes.TEXT,
                        allowNull : true},
    credit : Sequelize.INTEGER,
    semester : Sequelize.INTEGER,
    description : {type : DataTypes.TEXT,
                        allowNull : true},
    // created_at :Sequelize.DATE,
    // updated_at : Sequelize.DATE
},{
    freezeTableName:true,
    timestamps : false
})

// user.removeAttribute('updatedAt', 'createdAt')
module.exports= courses