const express = require('express')
const server = express.Router()
const controllers = require('../controllers/index.js')

server.get('/dosen', (req, res) => {
    res.render("logindosen")
})
server.post('/tambahDosen', controllers.lecturers.tambahDosen)

module.exports = server