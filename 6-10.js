const express = require("express")
const webserver = express()
const port = 6900

webserver.listen (port, function(){
    console.log("Assalamualaikum brother")
})

//Dosen dapat menambahkan RPS baru
webserver.post('/dosen-nambah-rps', (req, res) =>
{
    res.send("rps berhasil ditambahkan")
})

//Dosen dapat mengubah rps
webserver.put('/dosen-ubah-rps', (req, res) =>
{
    res.send("rps berhasil diubah")
})

//Dosen dapat merevisi rps
webserver.put('/dosen-revisi-rps', (req, res) =>
{
    res.send("revisi gagal, rps masih kosong")
})

//Dosen dapat menambah CPMK mata kuliah
webserver.post('/dosen-nambah-cpmk', (req, res) =>
{
    res.send("cpmk berhasil ditambahkan")
})

//Dosen dapat mengubah CPMK mata kuliah
webserver.put('/dosen-ubah-cpmk', (req, res) =>
{
    res.send("cpmk berhasil diubah")
})