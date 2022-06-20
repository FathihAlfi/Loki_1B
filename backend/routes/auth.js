const express = require('express')
const server = express.Router()
const controllers = require('../controllers/index.js')

//1
server.get('/login', (req, res) => {
    res.render("mainlogin")
})
server.delete('/logout', controllers.auth.logout)
// server.post('/loginAdmin', controllers.auth.loginAdmin)
// server.post('/login', controllers.auth.login)
// server.post('/loginDosen', controllers.auth.loginDosen)

module.exports = server