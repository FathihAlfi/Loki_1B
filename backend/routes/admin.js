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

server.get('/detailCPMKdanCPL', cekLogin, )

server.get('/semuaAksesDosen', cekLogin, controllers.admin.semuaAksesDosen)

module.exports = server