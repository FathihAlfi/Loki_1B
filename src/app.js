console.log ('SELAMAT MENGERJAKAN SEMOGA A NI ANJAY');
const database = require('./config/database.js')
const express = require('express')
const app = express()
const port = 8000
const server = require('./routes/index.js')

database.authenticate()
  .then(() => {
    console.log('Berhasil terhubung database');
  })
  .catch(err => {
    console.error(`Gagal terhubung : ${err}`);
  });

app.use('/', server.user)
app.use('/', server.migrationstest)

app.listen(port, () =>
{
    console.log(`Server sudah berjalan di port ${port}`)
})