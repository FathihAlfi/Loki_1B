const express = require("express")
const { appendFile } = require("fs")
const materi6sampe10 = express()

materi6sampe10.listen (3000,function(){
    console.log("jalan gesss")
})

materi6sampe10.get("/materi6", function(req,res){
    res.send("nambah RPS gais")
})

materi6sampe10.get("/materi7", function(req,res){
    res.send("mengubah RPS gais")
})

materi6sampe10.get("/materi8", function(req,res){
    res.send("Revisi RPS ni gais")
})

materi6sampe10.get("/materi9", function(req,res){
    res.send("Tambah CPMK Kuliah")
})

materi6sampe10.get("/materi10", function(req,res){
    res.send("Hapus CPMK Kuliah")
})