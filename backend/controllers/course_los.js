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

controllers.hlmTambahCPLkeCPMK = async (req, res) => {
    const idTerakhir = await models.course_los.max("id")
    const id = req.params.id
    const name = req.params.name
    const accessToken = req.cookies.accessToken 
    if (!accessToken)
        return res.status(200).json("tidak ada token")
    const payload = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET)
    const id_dosen = payload.id
    const nama = payload.nama
    const NIP = payload.NIP
    res.render("tambahCPLkeCPMK", {id, idTerakhir, name, nama, NIP})
}

controllers.hlmEditCPMK = async (req, res) => {
    const id = req.params.id
    const name = req.params.name
    const idEdit = req.params.idEdit
    const accessToken = req.cookies.accessToken 
    if (!accessToken)
        return res.status(200).json("tidak ada token")
    const payload = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET)
    const id_dosen = payload.id
    const nama = payload.nama
    const NIP = payload.NIP

    const CPMK = await models.course_los.findOne({
        where : {
            id : req.params.idEdit
        }
    })
    res.render("editCPMK", {CPMK, idEdit, id, name, nama, NIP})
}

controllers.tambahCPMK = async (req, res) => {
    try {
        const idTerakhir = await models.course_los.max("id")
        const id = req.params.id
        const name = req.params.name
        const accessToken = req.cookies.accessToken 
        if (!accessToken)
            return res.status(200).json("tidak ada token")
        const payload = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET)
        const id_dosen = payload.id
        const nama = payload.nama
        const NIP = payload.NIP
        await models.course_los.create({
            course_plan_id  : req.params.id,
            name            : req.body.name,
            type            : 1,
            code            : "NULL",
            parent_id       : 0
        })
        await models.course_lo_details.create({
            curriculum_lo_id    : req.body.curriculum_lo_id,
            course_lo_id        : idTerakhir+1
        })
        
        res.status(200).redirect("/detailCPMK/"+id+"/"+name)
        // res.render("tambahCPLkeCPMK", {idTerakhir, id, name, nama, NIP})
    } catch (err) {
        console.log(err);
    }
}

controllers.tambahCPLkeCPMK = async (req, res) => {
    try {
        const id = req.params.id
        const name = req.params.name
        const idTerakhir = req.params.idTambah
        const idTerbaru = idTerakhir +1
        const accessToken = req.cookies.accessToken
        if (!accessToken)
            return res.status(200).json("tidak ada token")
        const payload = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET)
        const id_dosen = payload.id
        const nama = payload.nama
        const NIP = payload.NIP

        await models.course_lo_details.create({
            curriculum_lo_id    : req.body.curriculum_lo_id,
            course_lo_id        : req.params.idtambah
        })
        res.status(200).redirect("/detailCPMK/"+id+"/"+name) 
    } catch (err) {
        console.log(err)
    }
}

controllers.editCPMK = async (req, res) => {
    try {
        const idEdit = req.params.idEdit
        const accessToken = req.cookies.accessToken 
        if (!accessToken)
            return res.status(200).json("tidak ada token")
        const payload = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET)
        const id_dosen = payload.id
        const nama = payload.nama
        const NIP = payload.NIP

        const id = req.params.id
        const name = req.params.name

        await models.course_los.update({
            name      : req.body.name
        },{
            where : {id : req.params.idEdit}
        })
        res.status(200).redirect("/detailCPMK/"+id+"/"+name)
    } catch (err) {
        console.log(err);
    }
}

controllers.hapusCPMK = async (req, res) => {
    try {
        const id = req.params.id
        const name = req.params.name
        await models.course_los.destroy({
            where : {
                id   : req.params.idHapus
            }
        })
        res.status(200).redirect("/detailCPMK/"+id+"/"+name) 
    } catch (err) {
        console.log(err);
    }
}

controllers.semuaCPMK = async (req, res) => {
    const accessToken = req.cookies.accessToken 
    if (!accessToken)
        res.render("loginDosen")
    const payload = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET)
    const id = payload.id
    const nama = payload.nama
    const NIP = payload.NIP

    models.course_plans.hasMany(models.course_los, {foreignKey: "id"})
    models.course_los.belongsTo(models.course_plans, {foreignKey: "course_plan_id"})
    models.course_plans.hasMany(models.course_plan_lecturers, {foreignKey: "id"})
    models.course_plan_lecturers.belongsTo(models.course_plans, {foreignKey: "course_plan_id"})

    const CPMK = await models.course_los.findAll({
        include : [{
            model : models.course_plans,
            include : [{
                model : models.course_plan_lecturers,
                where : {
                    lecturer_id : id
                }
            }]
        }]
    })
    // res.json({komponen})
    res.render("semuaCPMK", {CPMK, nama, NIP})
}

module.exports = controllers