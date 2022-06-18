//RPS
'use strict'
const { Sequelize, DataTypes, err } = require('sequelize');
const db = require('../config/database.js')
var course_plans = db.define('course_plans', {
    id : {
        type            : DataTypes.BIGINT,
        allowNull       : false,
        primaryKey      : true,
        autoIncrement   : true
    },
    course_id :  {
        type        : DataTypes.BIGINT,
        allowNull   : false,
    },
    rev : {
        type        : DataTypes.INTEGER,
        allowNull   : false
    },
    code : {
        type        : DataTypes.INTEGER,
        allowNull   : false
    },
    name : {
        type    : DataTypes.TEXT,
        allowNull   : false
    },
    alias_name : {
        type        : DataTypes.TEXT,
        allowNull   : true
    },
    credit : {
        type        : DataTypes.INTEGER,
        allowNull   : false
    },
    semester : {
        type        : DataTypes.INTEGER,
        allowNull   : false
    },
    description : {
        type        : DataTypes.TEXT,
        allowNull   : true
    },
    material : {
        type        : DataTypes.TEXT,
        allowNull   : true
    },
    created_by      : Sequelize.BIGINT,
    validated_by    : Sequelize.BIGINT
    
    // created_at :Sequelize.DATE,
    // updated_at : Sequelize.DATE
},{
    freezeTableName : true,
    timestamps      : false
})

// user.removeAttribute('updatedAt', 'createdAt')
module.exports = course_plans