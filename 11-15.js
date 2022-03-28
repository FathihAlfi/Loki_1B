const express = require("express")
const server = express()
const port = 8000

server.listen (port, function(){
    console.log("Materi 11-15")
})

//fungsional 11
server.delete('/cpmk/hapus', (req, res) =>
{
    res.send("masukkan data yang ingin dihapus")
})

//fungsional 12
server.post('/referensi/tambah', (req, res) =>
{
    res.send("Masukkan Data Referensi")
})

//fungsional 13
server.put('/referensi/ubah', (req, res) =>
{
    res.send("Masukkan Data yang ingin diubah")
})

//fungsional 14
server.delete('/referensi/hapus', (req, res) =>
{
    
    res.send("Masukkan Data yang ingin dihapus")
})

//fungsional 15
server.post('/komponen/tambah/:komponen', (req, res) =>
{
    var komponen = req.params.komponen
    
    res.send(`Masukkan Data Komponen Nilai, anda telah menambah komponen ${komponen}`)
})