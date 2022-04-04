const express = require('express')
const server = express.Router()
const controllers = require('../controllers/index.js')

server.get('/user', controllers.user.getAllUser)

module.exports = server