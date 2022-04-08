const user = require('./user.js')
const migrationstest = require('./migrationstest.js')

const server = {}

server.user = user
server.migrationstest = migrationstest

module.exports = server