const express = require('express')
const server = express.Router()
const controllers = require('../controllers/index.js')
const cekLogin = require('../middleware/cekLogin.js')
const cekAdmin = require('../middleware/cekAdmin.js')


server.get('/admin', (req, res) => {
    res.render("loginadmin")
})
server.post('/loginAdmin', controllers.auth.loginAdmin)
server.get('/RPS', )
server.post('/tambahMataKuliah', controllers.courses.tambahMatkul)

module.exports = server