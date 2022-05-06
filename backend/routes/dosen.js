const express = require('express')
const server = express.Router()
const controllers = require('../controllers/index.js')

server.post('/tambahRPS', controllers.lecturers.tambahRPS)

module.exports = server