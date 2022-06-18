const express = require('express')
const server = express.Router()
const controllers = require('../controllers/index.js')

server.post('/tambahMataKuliah', controllers.courses.tambahMatkul)

module.exports = server