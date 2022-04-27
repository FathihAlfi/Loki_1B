const express = require('express')
const server = express.Router()
const controllers = require('../controllers/index.js')

//2
server.delete('/logout', controllers.auth.logout)

module.exports = server