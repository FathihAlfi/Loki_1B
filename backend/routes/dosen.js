const express = require('express')
const server = express.Router()
const controllers = require('../controllers/index.js')
const cekLogin = require('../middleware/cekLogin.js')
const cekDosenPengampu = require('../middleware/cekDosenPengampu.js')

server.get('/dosen', (req, res) => {
    res.render("logindosen")
})
server.post('/loginDosen', controllers.auth.loginDosen)
server.get('/homeDosen', cekLogin, controllers.dosen.home)
server.get('/lihatRPS', controllers.RPS.lihatRPS)
server.get('/ubahRPS', cekDosenPengampu, controllers.RPS.lihatRPS)
server.get('/tambahRPS', cekLogin, controllers.RPS.hlmTambahRPS)
server.post('/tambahRPS', controllers.RPS.tambahRPS)
server.put('/revisiRPS', cekDosenPengampu, controllers.RPS.revisiRPS)
server.get('/detailRef/:id/:name', controllers.course_plan_references.hlmDetailRef)
server.get('/tambahRef/:id', cekLogin, controllers.course_plan_references.hlmTambahRef)
server.post('/tambahRef/:id', cekLogin, controllers.course_plan_references.tambahRef)
server.delete('/hapusRef', )

module.exports = server