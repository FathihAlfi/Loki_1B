const express = require('express')
const server = express.Router()
const controllers = require('../controllers/index.js')
const cekLogin = require('../middleware/cekLogin.js')
const cekDosenPengampu = require('../middleware/cekDosenPengampu.js')

server.get('/dosen', (req, res) => {
    res.render("logindosen")
})
server.post('/loginDosen', controllers.auth.loginDosen)
server.get('/homeDosen', cekLogin, controllers.dosen.home)

server.get('/semuaRPS', cekLogin, controllers.dosen.home)
server.get('/lihatRPS', controllers.RPS.lihatRPS)
server.get('/ubahRPS', cekDosenPengampu, controllers.RPS.lihatRPS)
server.get('/tambahRPS', cekLogin, controllers.RPS.hlmTambahRPS)
server.post('/tambahRPS', controllers.RPS.tambahRPS)
server.put('/revisiRPS', cekDosenPengampu, controllers.RPS.revisiRPS)

server.get('/semuaRef', cekLogin, controllers.course_plan_references.semuaRef) //ref kelar semua
server.get('/detailRef/:id/:name', cekLogin, controllers.course_plan_references.DetailRef)
server.get('/tambahRef/:id/:name', cekLogin, controllers.course_plan_references.hlmTambahRef)
server.post('/tambahRef/:id/:name', cekLogin, controllers.course_plan_references.tambahRef)
server.get('/hapusRef/:idHapus/:id/:name', cekLogin, controllers.course_plan_references.hapusRef)
server.get('/editRef/:idEdit/:id/:name', cekLogin, controllers.course_plan_references.hlmEditRef)
server.post('/editRef/:idEdit/:id/:name', cekLogin, controllers.course_plan_references.editRef)

server.get('/semuaKomponen', cekLogin, controllers.course_plan_assessments.semuaKomponen) //komponen kelar semua
server.get('/detailKomponen/:id/:name', cekLogin, controllers.course_plan_assessments.detailKomponen) 
server.get('/tambahKomponen/:id/:name', cekLogin, controllers.course_plan_assessments.hlmTambahKomponen)
server.post('/tambahKomponen/:id/:name', cekLogin, controllers.course_plan_assessments.tambahKomponen)
server.get('/hapusKomponen/:idHapus/:id/:name', cekLogin, controllers.course_plan_assessments.hapusKomponen)
server.get('/editKomponen/:idEdit/:id/:name', cekLogin, controllers.course_plan_assessments.hlmEditKomponen)
server.post('/editKomponen/:idEdit/:id/:name', cekLogin, controllers.course_plan_assessments.editKomponen)

server.get('/semuaPertemuan', cekLogin, )
server.get('/detailPertemuan/:id/:name', cekLogin, controllers.course_plan_details.detailPertemuan)
server.get('/tambahPertemuan/:id/:name', cekLogin, controllers.course_plan_details.hlmTambahPertemuan)
server.post('/tambahPertemuan/:id/:name', cekLogin, controllers.course_plan_details.tambahPertemuan)
server.get('/hapusPertemuan/:idHapus/:id/:name', cekLogin, )
server.get('/editPertemuan/:idEdit/:id/:name', cekLogin, controllers.course_plan_details.hlmEditPertemuan)
server.post('/editPertemuan/:idEdit/:id/:name', cekLogin, controllers.course_plan_details.editPertemuan)

server.get('/detailCPMK/:id/:name', cekLogin, controllers.course_los.detailCPMK)
server.get('/tambahCPMK/:id/:name', cekLogin, controllers.course_los.hlmTambahCPMK)


module.exports = server