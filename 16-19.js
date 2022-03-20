const express = require("express")
const server = express()
const port = 5781

server.listen (port, function(){
    console.log("Halo! Selamat Datang di Halaman Home Kami")
})

//fungsional16
server.get("/edit", function(req,res){
    res.send("Mengubah Komponen Nilai")
})

//fungsional17
server.get("/delete", function(req,res){
    res.send("Menghapus Komponen Penilaian")
})

//fungsional18
server.get("/add", function(req,res){
    res.send("Menambah Pertemuan Mingguan RPS")
})

//fungsional19
server.get("/change", function(req,res){
    res.send("Mengubah Pertemuan Mingguan RPS")
})