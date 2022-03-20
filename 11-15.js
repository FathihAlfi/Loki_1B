const express = require("express")
const webserver = express()
const port = 8079

webserver.listen (port, function(){
    console.log("Materi 11-15")
})

//fungsional 11
webserver.get('/cpmk/hapus', (req, res) =>
{
    res.send("masukkan data yang ingin dihapus")
})

//fungsional 12
webserver.get('/referensi/tambah', (req, res) =>
{
    res.send("Masukkan Data Referensi")
})

//fungsional 13
webserver.get('/referensi/ubah', (req, res) =>
{
    res.send("Masukkan Data yang ingin diubah")
})

//fungsional 14
webserver.get('/referensi/hapus', (req, res) =>
{
    
    res.send("Masukkan Data yang ingin dihapus")
})

//fungsional 15
webserver.get('/komponen/tambah/:komponen', (req, res) =>
{
    var komponen = req.params.komponen
    
    res.send(`Masukkan Data Komponen Nilai, anda telah menambah komponen ${komponen}`)
})