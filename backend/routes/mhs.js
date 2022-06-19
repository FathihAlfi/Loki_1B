const express = require('express')
const server = express.Router()
const controllers = require('../controllers/index.js')

server.get('/', controllers.mhs.home)
server.get('/detail/:id', controllers.mhs.detail)

module.exports = server