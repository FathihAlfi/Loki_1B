console.log ('SELAMAT MENGERJAKAN SEMOGA A NI ANJAY');

const express = require('express')
const server = express()
const port = 8000

server.get('/', (req, res) => 
{
    res.send('Hello, ini adalah halaman home kami')
})

//fungsional ke20
server.get('/pertmingguan/hapus', (req, res) => 
{
    res.send(`Berhasil menghapus RPS minggunan`)
})

//fungsional ke21
server.get('/cari', (req, res) => 
{
    var kode = req.query.kode
    var nama = req.query.nama

    res.send(`Anda mencari mata kuliah ${nama} dengan kode ${kode}`)    
})

//fungsional ke22
server.get('/lihat', (req, res) =>
{
    res.send('Anda sedang melihat file RPS, tapi gaada filenya')
})

//fungsional ke23
server.get('/export', (req, res) => 
{
    var file = req.query.file
    
    res.send(`Anda akan meng-eksport data ${file}`)
})

server.listen(port, () =>
{
    console.log(`Server sudah berjalan di port ${port}`)
})

