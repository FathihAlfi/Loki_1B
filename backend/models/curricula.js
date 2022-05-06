//nama kurikulum
const { Sequelize, DataTypes, err } = require('sequelize');
const db = require('../config/database.js')

var curricula = db.define('curricula', {
    id : {
        type : DataTypes.BIGINT,
        allownull : false,
        primaryKey : true,
        autoIncrement : true
    },

    name : {
        type : DataTypes.STRING,
        allownull : false
    },

    active : {
        type : DataTypes.STRING,
        allownull : false
    },

    year_start : {
        type : DataTypes.INTEGER,
        allownull : false
    },

    year_end : {
        type : DataTypes.INTEGER,
        allownull : false
    },

    description : {
        type : DataTypes.TEXT,
        allownull : true
    },
    // created_at :Sequelize.DAT    E,
    // updated_at : Sequelize.DATE
},{
    freezeTableName : true,
    timestamps      : false
})

// user.removeAttribute('updatedAt', 'createdAt')
module.exports = curricula

