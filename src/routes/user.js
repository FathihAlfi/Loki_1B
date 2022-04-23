const express = require('express')
const server = express.Router()
const controllers = require('../controllers/index.js')

server.get('/user', controllers.user.getAllUser)
server.get('/', controllers.user.hello)
server.post('/signup', controllers.user.register)

module.exports = server