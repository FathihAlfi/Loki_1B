const express = require('express')
const server = express.Router()
const controllers = require('../controllers/index.js')

server.get('/dosen', (req, res) => {
    res.cookie('v', 'z')
    res.render("logindosen")
})
server.post('/loginDosen', controllers.auth.loginDosen)
server.get('/homeDosen', controllers.dosen.home)
// server.post('/tambahDosen', controllers.lecturers.tambahDosen)
server.get('/tambahRPS',)
server.post('/tambahRPS')

module.exports = server