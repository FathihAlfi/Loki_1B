//profile lulusan
const { Sequelize, DataTypes, err } = require('sequelize');
const db = require('../config/database.js')

var curriculum_profiles = db.define('curriculum_profiles', {
    id : {
        type : DataTypes.BIGINT,
        allownull : false,
        primaryKey : true,
        autoIncrement : true
    },

    curriculum_id : {
        type : DataTypes.BIGINT,
        allownull : false
    },

    code : {
        type : DataTypes.STRING,
        allownull : false
    },

    profile : {
        type : DataTypes.TEXT,
        allownull : false
    },

    description : {
        type : DataTypes.TEXT,
        allownull : true
    },
     // created_at :Sequelize.DATE,
    // updated_at : Sequelize.DATE
},{
    freezeTableName : true,
    timestamps      : false
})

// user.removeAttribute('updatedAt', 'createdAt')
module.exports = curriculum_profiles

