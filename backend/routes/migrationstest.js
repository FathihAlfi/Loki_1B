//ini cuma tes aja ternyata bisa dipanggil
const express = require('express')
const server = express.Router()
const controllers = require('../controllers/index.js')

server.get('/migrations', controllers.migratiosntest.getAllUser)

module.exports = server