const express = require('express')
const server = express.Router()
const controllers = require('../controllers/index.js')
const cekDosenPengampu = require('../middleware/cekDosenPengampu.js')

server.get('/lihatRPS', controllers.RPS.lihatRPS)
server.get('/ubahRPS', cekDosenPengampu, controllers.RPS.lihatRPS)
server.post('/tambahRPS', controllers.RPS.tambahRPS)
server.put('/revisiRPS', cekDosenPengampu, controllers.RPS.revisiRPS)

module.exports = server