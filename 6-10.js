const express = require("express")
const server = express()
const port = 6900

server.listen (port, function(){
    console.log("Assalamualaikum brother")
})

//Dosen dapat menambahkan RPS baru
server.post('/dosen-nambah-rps', (req, res) =>
{
    res.send("rps berhasil ditambahkan")
})

//Dosen dapat mengubah rps
server.put('/dosen-ubah-rps', (req, res) =>
{
    res.send("rps berhasil diubah")
})

//Dosen dapat merevisi rps
server.put('/dosen-revisi-rps', (req, res) =>
{
    res.send("revisi gagal, rps masih kosong")
})

//Dosen dapat menambah CPMK mata kuliah
server.post('/dosen-nambah-cpmk', (req, res) =>
{
    res.send("cpmk berhasil ditambahkan")
})

//Dosen dapat mengubah CPMK mata kuliah
server.put('/dosen-ubah-cpmk', (req, res) =>
{
    res.send("cpmk berhasil diubah")
})