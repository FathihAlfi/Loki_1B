const express = require('express')
const server = express.Router()
const controllers = require('../controllers/index.js')

server.post('/login', controllers.auth.login)

module.exports = server