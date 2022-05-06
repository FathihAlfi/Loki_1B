const express = require('express')
const server = express.Router()
const controllers = require('../controllers/index.js')

server.post('/rps', controllers.RPS.tambahDosen)

module.exports = server