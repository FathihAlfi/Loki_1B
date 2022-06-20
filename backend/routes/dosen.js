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

const cekDosenPengampu = require('../middleware/cekDosenPengampu.js')

server.get('/lihatRPS', controllers.RPS.lihatRPS)
server.get('/ubahRPS', cekDosenPengampu, controllers.RPS.lihatRPS)
server.post('/tambahRPS', controllers.RPS.tambahRPS)
server.put('/revisiRPS', cekDosenPengampu, controllers.RPS.revisiRPS)

module.exports = server