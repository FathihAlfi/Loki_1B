const user = require('./user.js')
const dosen = require('./dosen.js')
const admin = require('./admin.js')
const mhs = require('./mhs.js')

const server = {}

server.user = user
server.dosen = dosen
server.admin = admin
server.mhs = mhs

module.exports = server