const express = require('express')
const server = express.Router()
const controllers = require('../controllers/index.js')
const cekLogin = require('../middleware/cekLogin.js')
const cekAdmin = require('../middleware/cekAdmin.js')


server.get('/admin', (req, res) => {
    res.render("loginAdmin")
})
server.post('/loginAdmin', controllers.auth.loginAdmin)

module.exports = server

