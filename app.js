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
    const signup= {
        "messagge" : "Signup berhasil",
        "code_error" : 200
      }
      res.json(signup)

})
server.get('/login', (req, res) => 
{
    const login = {
        "messagge" : "Berhasil login",
        "code_error" : 200
      }
      res.json(login)

})

//fungsional 2
server.get('/logout', (req, res) => 
{
    const logout = {
        "messagge" : "Berhasil logout",
        "code_error" : 200
      }
      res.json(logout);
})

//fungsional 3
server.put('/rps/edit/:edit', (req, res) => 
{
    var edit = req.params.edit
    const editt = {
        "messagge" : "Silahkan memperbaharui RPS",
        "code_error" : 200
      }
      res.json(editt);
})

//fungsional 4
server.post('/rps/view', (req, res) => 
{
    var view = req.query.view
    if (!view)
    {
        const vieww = {
            "messagge" : "RPS yang diambil",
            "code_error" : 200
          }
          res.json(vieww);
    }
    else
    {
        const vieww = {
            "messagge" : "Anda sedang melihat rps",
            "code_error" : 200
          }
          res.json(vieww)
    }
})

//fungsional 5
server.get('/rps/print', (req, res) => 
{
    const print = {
        "messagge" : "RPS berhasil dicetak",
        "code_error" : 200
      }
      res.json(print);
})


//fungsional 6
server.post('/dosen-nambah-rps', (req, res) =>
{
    const add = {
        "messagge" : "RPS berhasil ditambahkan",
        "code_error" : 200
      }
      res.json(add);
})
//fungsional 7
server.put('/dosen-ubah-rps', (req, res) =>
{
    const change = {
        "messagge" : "RPS berhasil diubah",
        "code_error" : 200
      }
      res.json(change);
})

//fungsional 8
server.put('/dosen-revisi-rps', (req, res) =>
{
    const revision = {
        "messagge" : "RPS berhasil direvisi",
        "code_error" : 200
      }
      res.json(revision);
})

//fungsional 9
server.post('/dosen-nambah-cpmk', (req, res) =>
{
    const add = {
        "messagge" : "CPMK berhasil ditambahkan",
        "code_error" : 200
      }
      res.json(add);
})

//fungsional 10
server.put('/dosen-ubah-cpmk', (req, res) =>
{
    const change = {
        "messagge" : "CPMK berhasil diubah",
        "code_error" : 200
      }
      res.json(change);
})

//fungsional 11
server.delete('/cpmk/hapus', (req, res) =>
{
    const deleted = {
        "messagge" : "CPMK berhasil dihapus",
        "code_error" : 200 
    }
    res.json(deleted);
    
})

//fungsional 12
server.post('/referensi/tambah', (req, res) =>
{
    const added = {
        "messagge" : "Referensi berhasil ditambah",
        "code_error" : 200 
    }
    res.json(added);
})

//fungsional 13
server.put('/referensi/ubah', (req, res) =>
{
    const changed = {
        "messagge" : "Referensi berhasil ubah",
        "code_error" : 200 
    }
    res.json(changed);
})

//fungsional 14
server.delete('/referensi/hapus', (req, res) =>
{
    const deletedd = {
        "messagge" : "Referensi berhasil dihapus",
        "code_error" : 200 
    }
    res.json(deletedd);
})

//fungsional 15
server.post('/komponen/tambah/:komponen', (req, res) =>
{
    var komponen = req.params.komponen
   
    const addedd = {
        "messagge" : " Masukkan Data Komponen Nilai, anda telah menambah komponen",
        "code_error" : 200 
    }
    res.json(addedd);
})

//fungsional 16
server.put('/edit/nilai', function(req,res){
    const ubahNilai = data.komponen_penilaian.find(c => c.id === req.params.id);
    ubahNilai.persentase = req.body.persentase
    res.json(ubahNilai);
})

//fungsional 17
server.delete('/delete/nilai', function(req,res){
    const hapusNilai = data.komponen_penilaian.find(c => c.id === req.params.id);
    const index = data.komponen_penilaian.indexOf(hapusNilai);
    data.komponen_penilaian.splice(index,1);
    res.json(hapusNilai);
})

//fungsional 18
server.post('/add/RPS', function(req,res){
    const rps = {
        id_rps : data.rps.length + 1,
        matkul : req.body.matkul,
        nip : req.body.nip,
        nama_dosen : req.body.nama_dosen
    }
    data.rps.push(rps);
    res.json(data.rps);
})

//fungsional 19
server.put("/change/RPS", function(req,res){
    const ubah_rps = data.rps.find(c => c.id_rps === parseInt (req.params.id));
    ubah_rps.matkul = req.body.matkul;
    ubah_rps.nip = req.body.nip;
    ubah_rps.nama_dosen = req.body.nama_dosen;
    res.json(ubah_rps);
})

//fungsional 20
server.get('/pertmingguan/hapus', (req, res) => 
{
    const hapus = {
        "message"   : "Berhasil menghapus RPS minggunan",
        "code_error": "200"
    }
    res.json(hapus)
    // res.send(`Berhasil menghapus RPS minggunan`)
    //test
})

//fungsional 21
server.get('/cari', (req, res) => 
{
    var kode = req.query.kode
    var nama = req.query.nama
    const cari = {
        "kode"  : kode,
        "nama"  : nama
    }

    res.json(cari)
    // res.send(`Anda mencari mata kuliah ${nama} dengan kode ${kode}`)    
})
    
//fungsional 22
server.get('/lihat', (req, res) =>
{
    const lihat = {
        "message"   : "Anda sedang melihat RPS",
        "code_error": "200"
    }
    res.json(lihat)
    res.send('Anda sedang melihat file RPS, tapi gaada filenya')
})

//fungsional 23
server.get('/export', (req, res) => 
{
    var file = req.query.file
    const jsonya = "./filejson/RPS.json"
    res.send(jsonya)

    // res.send(`Anda akan meng-eksport data ${file}`)
})

server.listen(port, () =>
{
    console.log(`Server sudah berjalan di port ${port}`)
})