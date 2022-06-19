const express = require('express')
const server = express.Router()
const controllers = require('../controllers/index.js')
const verifyToken = require('../middleware/cekLogin')

server.get('/user', verifyToken, controllers.user.getAllUser)
// server.get('/', controllers.user.hello)
server.post('/signup', controllers.user.register)

module.exports = server