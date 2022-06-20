const user = require('./user.js')
const auth = require('./auth.js')
const dosen = require('./dosen.js')
const admin = require('./admin.js')
const mhs = require('./mhs.js')

const server = {}

server.user = user
server.auth = auth
server.dosen = dosen
server.admin = admin
server.mhs = mhs

module.exports = server