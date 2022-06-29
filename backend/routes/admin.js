//Routes > Controller untuk admin

const express = require('express')
const server = express.Router()
const controllers = require('../controllers/index.js')
const cekLogin = require('../middleware/cekLogin.js')
const cekAdmin = require('../middleware/cekAdmin.js')

server.get('/admin', (req, res) => {
    res.render("loginAdmin")
})
server.post('/loginAdmin', controllers.auth.loginAdmin)
server.get('/homeAdmin', cekLogin, controllers.admin.home)
server.get('/detailAksesDosen/:id/:name', cekLogin, controllers.admin.detailAksesDosen)
server.get('/tambahAksesDosen/:id/:name', cekLogin, controllers.admin.hlmTambahAksesDosen)
server.get('/tambahAksesDosen/:idDosen/:id/:name', cekLogin, controllers.admin.cekTambahAksesDosen)
server.post('/tambahAksesDosen/:idDosen/:id/:name', cekLogin, controllers.admin.tambahAksesDosen)

server.get('/detailCPMKdanCPL/:id/:name', cekLogin, controllers.admin.detailCPMKdanCPL)
server.get('/semuaCPMKdanCPL', cekLogin, controllers.admin.semuaCPMKdanCPL)

server.get('/semuaAksesDosen', cekLogin, controllers.admin.semuaAksesDosen)

server.get('/detailRPS/:id/:name', cekLogin, controllers.admin.detailRPS)

server.get('/cetakRPS/:id/:name', cekLogin, controllers.admin.cetakRPS)

server.get('/persentaseRPS', cekLogin, controllers.admin.persentaseRPS)

module.exports = server