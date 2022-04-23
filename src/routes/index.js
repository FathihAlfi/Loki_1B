const user = require('./user.js')
const migrationstest = require('./migrationstest.js')
const auth = require('./auth.js')
const logout = require('./logout.js')

const server = {}

server.user = user
server.migrationstest = migrationstest
server.auth = auth
server.logout = logout

module.exports = server