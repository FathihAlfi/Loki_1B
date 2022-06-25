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

server.get('/semuaPertemuan', cekLogin, controllers.course_plan_details.semuaPertemuan) //pertemuan kelar semua
server.get('/detailPertemuan/:id/:name', cekLogin, controllers.course_plan_details.detailPertemuan)
server.get('/tambahPertemuan/:id/:name', cekLogin, controllers.course_plan_details.hlmTambahPertemuan)
server.post('/tambahPertemuan/:id/:name', cekLogin, controllers.course_plan_details.tambahPertemuan)
server.get('/hapusPertemuan/:idHapus/:id/:name', cekLogin, controllers.course_plan_details.hapusPertemuan)
server.get('/editPertemuan/:idEdit/:id/:name', cekLogin, controllers.course_plan_details.hlmEditPertemuan)
server.post('/editPertemuan/:idEdit/:id/:name', cekLogin, controllers.course_plan_details.editPertemuan)

server.get('/semuaCPMK', cekLogin, controllers.course_los.semuaCPMK) //CPMK kelar semua
server.get('/detailCPMK/:id/:name', cekLogin, controllers.course_los.detailCPMK)
server.get('/tambahCPMK/:id/:name', cekLogin, controllers.course_los.hlmTambahCPMK)
server.post('/tambahCPMK/:id/:name', cekLogin, controllers.course_los.tambahCPMK)
server.get('/tambahCPLkeCPMK/:id/:name', cekLogin, controllers.course_los.hlmTambahCPLkeCPMK)
server.post('/tambahCPLkeCPMK/idTambah/:id/:name', cekLogin, controllers.course_los.tambahCPLkeCPMK)
server.get('/hapusCPMK/:idHapus/:id/:name', cekLogin, controllers.course_los.hapusCPMK)
server.get('/editCPMK/:idEdit/:id/:name', cekLogin, controllers.course_los.hlmEditCPMK)
server.post('/editCPMK/:idEdit/:id/:name', cekLogin, controllers.course_los.editCPMK)

module.exports = server