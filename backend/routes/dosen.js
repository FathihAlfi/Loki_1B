const express = require('express')
const server = express.Router()
const controllers = require('../controllers/index.js')

server.post('/tambahDosen', controllers.lecturers.tambahDosen)

module.exports = server