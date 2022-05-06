//dosen pengampu
'use strict'
const { Sequelize, DataTypes, err } = require('sequelize');
const db = require('../config/database.js')
var lecturers = db.define('lecturers', {
    id : {
        type        : DataTypes.BIGINT,
        allowNull   : false,
        primaryKey  : true
    },
    name    : Sequelize.STRING,
    reg_id  : Sequelize.STRING,
    phone   : Sequelize.STRING,
    status  : Sequelize.INTEGER,
    // created_at :Sequelize.DATE,
    // updated_at : Sequelize.DATE
},{
    freezeTableName : true,
    timestamps      : false
})

// user.removeAttribute('updatedAt', 'createdAt')
module.exports = lecturers