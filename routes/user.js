const express = require('express')
const server = express.Router()
const controllers = require('../controllers/index.js')

server.get('/user', controllers.user.getAllUser)
server.get('/', controllers.user.hello)
server.get('/signup', controllers.user.signup)

module.exports = server