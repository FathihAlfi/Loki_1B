console.log ('SELAMAT MENGERJAKAN SEMOGA A NI ANJAY');
const database = require('./config/database.js')
const bodyParser = require("body-parser");
const express = require('express')
const app = express()
const port = 8000
const controllers = require('./controllers/index.js')
const server = require('./routes/index.js')
const cookieParser = require('cookie-parser');
require('dotenv').config()

app.use(express.json())
app.use(express.urlencoded({extended : true}))
app.use(cookieParser())

database.authenticate()
  .then(() => {
    console.log('Berhasil terhubung database');
  })
  .catch(err => {
    console.error(`Gagal terhubung : ${err}`);
  });

app.set("view engine", "ejs")
app.use(express.static("views"))

app.get('/login', controllers.auth.login)
app.get('/logout', controllers.auth.logout)
app.use('/', server.mhs)
app.use('/', server.admin)
app.use('/', server.dosen)
app.use('/', server.user)


app.listen(port, () =>
{
    console.log(`Server sudah berjalan di port ${port}`)
})