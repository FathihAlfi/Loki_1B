const sequalize = require('sequelize')

const db = new sequalize('loki', 'root', '', {
    host    : "localhost",
    dialect : "mysql"
})

module.exports = db