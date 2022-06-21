const models = require('../models/index')
const jwt = require('jsonwebtoken')
const controllers = {}

controllers.detailCPMK = async (req, res) => {
    const accessToken = req.cookies.accessToken 
    if (!accessToken)
        res.render("loginDosen")
    const payload = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET)
    const id_dosen = payload.id
    const nama = payload.nama
    const NIP = payload.NIP

    const id = req.params.id
    const name = req.params.name
    const CPMK = await models.course_los.findAll({
        where : {
            course_plan_id : req.params.id
        }
    })
    res.render("CPMK1", {CPMK, name, id, nama, NIP})
}

controllers.hlmTambahCPMK = async (req, res) => {
    const id = req.params.id
    const name = req.params.name
    const accessToken = req.cookies.accessToken 
    if (!accessToken)
        return res.status(200).json("tidak ada token")
    const payload = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET)
    const id_dosen = payload.id
    const nama = payload.nama
    const NIP = payload.NIP
    res.render("tambahCPMK", {id, name, nama, NIP})
}

module.exports = controllers