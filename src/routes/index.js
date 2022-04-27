const user = require('./user.js')
const migrationstest = require('./migrationstest.js')
const auth = require('./auth.js')
const logout = require('./logout.js')
const RPS = require('./RPS.js')
const dosen = require('./dosen.js')

const server = {}

server.user = user
server.migrationstest = migrationstest
server.auth = auth
server.logout = logout
server.RPS = RPS
server.dosen = dosen

module.exports = server