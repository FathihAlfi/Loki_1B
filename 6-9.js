const express = require("express")
const webserver = express()
const port = 6900

webserver.listen (port, function(){
    console.log("Assalamualaikum brother")
})

//functional ke 6
webserver.get('/dosennambahrps', (req, res) =>
{
    res.send("rps berhasil ditambahkan")
})

//functional ke 7
webserver.get('/dosenubahrps', (req, res) =>
{
    res.send("rps berhasil diubah")
})

//functional ke 8
webserver.get('/dosenrevisirps', (req, res) =>
{
    res.send("revisi gagal, rps masih kosong")
})

//functional ke 9
webserver.get('/dosennambahcpmk', (req, res) =>
{
    res.send("cpmk berhasil ditambahkan")
})

//functional ke 10
webserver.get('/dosenubahcpmk', (req, res) =>
{
    res.send("cpmk berhasil diubah")
})