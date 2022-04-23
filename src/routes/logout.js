const express = require('express')
const server = express.Router()
const controllers = require('../controllers/index.js')

server.delete('/logout', controllers.auth.logout)

module.exports = server