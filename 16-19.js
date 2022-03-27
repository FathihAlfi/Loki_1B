const express = require("express")
const server = express()
const port = 8000

server.listen (port, function(){
    console.log("Halo! Selamat Datang di Halaman Home Kami")
})

//fungsional16
server.put("/edit", function(req,res){
    res.send("Mengubah Komponen Nilai")
})

//fungsional17
server.delete("/delete", function(req,res){
    res.send("Menghapus Komponen Penilaian")
})

//fungsional18
server.post("/add", function(req,res){
    res.send("Menambah Pertemuan Mingguan RPS")
})

//fungsional19
server.put("/change", function(req,res){
    res.send("Mengubah Pertemuan Mingguan RPS")
})