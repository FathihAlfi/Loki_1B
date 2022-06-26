const models = require('../models/index')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser')

const controllers = {}

controllers.home = async(req, res) => {
   const accessToken = req.cookies.accessToken 
    if (!accessToken)
        return res.status(200).json("tidak ada token")
    const payload = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET)
    const id = payload.id
    const nama = payload.nama
    const NIP = payload.NIP

    const RPS = await models.course_plans.findAll({
        atribute : ['rev', 'code', 'name', 'credit', 'semester']
    })
    res.render("homepageadmin", {RPS, accessToken, nama, NIP} )
    // res.json({RPS})
}

controllers.detailAksesDosen = async (req, res) => {
    const id = req.params.id
    const name = req.params.name
    const accessToken = req.cookies.accessToken 
    if (!accessToken)
        return res.status(200).json("tidak ada token")
    const payload = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET)
    const id_dosen = payload.id
    const nama = payload.nama
    const NIP = payload.NIP

    models.lecturers.hasMany(models.course_plan_lecturers, {foreignKey : "id" })
    models.course_plan_lecturers.belongsTo(models.lecturers, {foreignKey : "lecturer_id"})

    const akses = await models.course_plan_lecturers.findAll({
        where : {
            course_plan_id : id
        },
        include : [{
            model : models.lecturers
        }]
    })
    res.render("aksesDosen1", {akses, id, nama, name, NIP})
}

controllers.hlmTambahAksesDosen = async (req, res) => {
    const id = req.params.id
    const name = req.params.name
    const accessToken = req.cookies.accessToken 
    if (!accessToken)
        return res.status(200).json("tidak ada token")
    const payload = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET)
    const id_dosen = payload.id
    const nama = payload.nama
    const NIP = payload.NIP

    const dosen = await models.lecturers.findAll({})

    res.render("daftarDosen", {dosen, id, nama, name, NIP})
}

controllers.cekTambahAksesDosen = async (req, res) => {
    const id = req.params.id
    const idDosen = req.params.idDosen
    const name = req.params.name
    const accessToken = req.cookies.accessToken 
    if (!accessToken)
        return res.status(200).json("tidak ada token")
    const payload = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET)
    const id_dosen = payload.id
    const nama = payload.nama
    const NIP = payload.NIP

    const dosen = await models.lecturers.findOne({
        where : {
            id : idDosen
        }
    })
    res.render("tambahDosen", {dosen, idDosen, id, nama, name, NIP})
}

controllers.tambahAksesDosen = async (req, res) => {
    try {
        const id = req.params.id
    const idDosen = req.params.idDosen
    const name = req.params.name
    const accessToken = req.cookies.accessToken 
    if (!accessToken)
        return res.status(200).json("tidak ada token")
    const payload = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET)
    const id_dosen = payload.id
    const nama = payload.nama
    const NIP = payload.NIP

    await models.course_plan_lecturers.create({
        course_plan_id : id,
        lecturer_id : idDosen,
        creator : 0
    })
    res.status(200).redirect("/detailAksesDosen/"+id+"/"+name)
    } catch (err) {
        console.log(err)
    }
}

controllers.semuaAksesDosen = async (req, res) => {
    const accessToken = req.cookies.accessToken 
    if (!accessToken)
        return res.status(200).json("tidak ada token")
    const payload = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET)
    const id = payload.id
    const nama = payload.nama
    const NIP = payload.NIP

    const RPS = await models.course_plans.findAll({
        atribute : ['rev', 'code', 'name', 'credit', 'semester']
    })
    res.render("aksesDosen", {RPS, accessToken, nama, NIP})
}

controllers.semuaCPMKdanCPL = async (req, res) => {
    const accessToken = req.cookies.accessToken 
    if (!accessToken)
        return res.status(200).json("tidak ada token")
    const payload = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET)
    const id = payload.id
    const nama = payload.nama
    const NIP = payload.NIP

    const RPS = await models.course_plans.findAll({
        atribute : ['rev', 'code', 'name', 'credit', 'semester']
    })
    res.render("cpmk-cpl", {RPS, accessToken, nama, NIP})
}

controllers.detailCPMKdanCPL = async (req, res) => {
    const id = req.params.id
    const name = req.params.name
    const accessToken = req.cookies.accessToken 
    if (!accessToken)
        return res.status(200).json("tidak ada token")
    const payload = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET)
    const id_dosen = payload.id
    const nama = payload.nama
    const NIP = payload.NIP

    models.course_los.hasMany(models.course_lo_details, {foreignKey : "id"})
    models.course_lo_details.belongsTo(models.course_los, {foreignKey : "course_lo_id"})

    const CPMK = await models.course_los.findAll({
        where : {
            course_plan_id : 2
        },
        include : {
            model : models.course_lo_details
        }
    })
    const CPL = await models.course_lo_details.findAll({
        include : {
            model: models.course_los,
            where : {
                course_plan_id : 2
            }
        }
    })
    // res.json({CPL})
    res.render("cpmk-cpl1", {CPL})
}

controllers.detailRPS = async (req, res) => {
    const id = req.params.id
    const name = req.params.name
    
    models.course_los.hasMany(models.course_lo_details, {foreignKey : "id"})
    models.course_lo_details.belongsTo(models.course_los, {foreignKey : "course_lo_id"})
    
    const RPS = await models.course_plans.findOne({
        where : {id : 2}
    })
    const CPL = await models.course_lo_details.findAll({
        include : {
            model: models.course_los,
            where : {
                course_plan_id : 2
            }
        }
    })
    res.render("rpspweb", {RPS, CPL})
}

module.exports = controllers