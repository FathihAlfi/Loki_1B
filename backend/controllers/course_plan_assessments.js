const models = require('../models/index')
const jwt = require('jsonwebtoken')
const { json } = require('body-parser')
const controllers = {}

controllers.hlmTambahKomponen = async (req, res) => {
    const id = req.params.id
    const accessToken = req.cookies.accessToken 
    if (!accessToken)
        return res.status(200).json("tidak ada token")
    const payload = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET)
    const id_dosen = payload.id
    const nama = payload.nama
    const NIP = payload.NIP
    res.render("tambahKomponen", {nama, NIP, id})
}

controllers.tambahKomponen = async (req, res) => {
    try {
        if (req.body.name == "Tugas Besar"){
            await models.course_plan_assessments.create({
                course_plan_id  : req.params.id,
                name            : req.body.name,
                percentage      : req.body.percentage,
                flag            : 1
            })
        }
        else{
            await models.course_plan_assessments.create({
                course_plan_id  : req.params.id,
                name            : req.body.name,
                percentage      : req.body.percentage,
                flag            : 0
            })
        }
        res.status(200).redirect("/homeDosen")
    } catch (err) {
        console.log(err);
        res.json({err})
    }
}

controllers.detailKomponen = async (req, res) => {
    const accessToken = req.cookies.accessToken 
    if (!accessToken)
        res.render("loginDosen")
    const payload = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET)
    const id_dosen = payload.id
    const nama = payload.nama
    const NIP = payload.NIP

    const id = req.params.id
    const name = req.params.name
    const komponen = await models.course_plan_assessments.findAll({
        where : {
            course_plan_id : req.params.id
        }
    })
    res.render("lihatKomponen1", {komponen, name, nama, NIP, id})
}

controllers.tambahPenilaian = async(req, res) => {
    const matkul = await models.course_plans.findOne({
        where : {
            id : req.query.course_plan_id
        }
    })
    try {
        const {id, name, percentage} = req.body
        await models.course_plan_references.create({
            id  : id,
            course_plan_id  : req.query.course_plan_id,
            name            : name,
            percentage      : percentage,
            flag            : 0,
            year            : year,
        })
        res.json({msg: "Berhasil menambahkan referensi mata kuliah"});
    } catch (err) {
        console.log(err);
    }
}

controllers.editPenilaian = async(req, res) => {

}

controllers.hapusPenilaian = async(req, res) => {
    try {
        const hapus = await models.course_plan_assessments.deleteOne({id     : id})
        res.json({msg: "Referensi berhasil dihapus"});
    } catch (err) {
        console.log(err);
    }
}

controllers.lihatPenilaian = async(req, res) => {
    
}

module.exports = controllers