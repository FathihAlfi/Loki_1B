console.log ('SELAMAT MENGERJAKAN SEMOGA A NI ANJAY');

const express = require('express')
const server = express()
const port = 8000

server.get('/', (req, res) => 
{
    res.send('Hello, ini adalah halaman home kami')
})

//fungsional 1
server.post('/signup' , (req, res) => 
{
    res.send(`Silahkan daftar `)
})
server.get('/login', (req, res) => 
{
    res.send(`Berhasil login`)
})

//fungsional 2
server.get('/logout', (req, res) => 
{
    res.send(`Berhasil logout`)
})

//fungsional 3
server.put('/rps/edit/:edit', (req, res) => 
{
    var edit = req.params.edit
    res.send(`Silahkan memperbaharui RPS ${edit}`)
})

//fungsional 4
server.post('/rps/view', (req, res) => 
{
    var view = req.query.view
    if (!view)
    {
        res.send(`RPS yang diambil`)
    }
    else
    {
        res.send(`Anda sedang melihat rps ${view}`)
    }
})

//fungsional 5
server.get('/rps/print', (req, res) => 
{
    res.send(`RPS berhasil dicetak`)
})


//fungsional 6
server.post('/dosen-nambah-rps', (req, res) =>
{
    res.send("rps berhasil ditambahkan")
})

//fungsional 7
server.put('/dosen-ubah-rps', (req, res) =>
{
    res.send("rps berhasil diubah")
})

//fungsional 8
server.put('/dosen-revisi-rps', (req, res) =>
{
    res.send("revisi gagal, rps masih kosong")
})

//fungsional 9
server.post('/dosen-nambah-cpmk', (req, res) =>
{
    res.send("cpmk berhasil ditambahkan")
})

//fungsional 10
server.put('/dosen-ubah-cpmk', (req, res) =>
{
    res.send("cpmk berhasil diubah")
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

//fungsional 16
server.put("/edit", function(req,res){
    res.send("Mengubah Komponen Nilai")
})

//fungsional 17
server.delete("/delete", function(req,res){
    res.send("Menghapus Komponen Penilaian")
})

//fungsional 18
server.post("/add", function(req,res){
    res.send("Menambah Pertemuan Mingguan RPS")
})

//fungsional 19
server.put("/change", function(req,res){
    res.send("Mengubah Pertemuan Mingguan RPS")
})

//fungsional 20
server.get('/pertmingguan/hapus', (req, res) => 
{
    res.send(`Berhasil menghapus RPS minggunan`)
    //test
})

//fungsional 21
server.get('/cari', (req, res) => 
{
    var kode = req.query.kode
    var nama = req.query.nama

    res.send(`Anda mencari mata kuliah ${nama} dengan kode ${kode}`)    
})

//fungsional 22
server.get('/lihat', (req, res) =>
{
    res.send('Anda sedang melihat file RPS, tapi gaada filenya')
})

//fungsional 23
server.get('/export', (req, res) => 
{
    var file = req.query.file
    
    res.send(`Anda akan meng-eksport data ${file}`)
})

server.listen(port, () =>
{
    console.log(`Server sudah berjalan di port ${port}`)
})