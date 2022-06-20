const models = require('../models/index')
const jwt = require('jsonwebtoken')
const controllers = {}

controllers.hlmTambahRef = async (req, res) => {
    const id = req.params.id
    res.render("tambahRef", {id})
}

controllers.hlmDetailRef = async (req, res) => {
    const accessToken = req.cookies.accessToken 
    if (!accessToken)
        res.render("loginDosen")
    const payload = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET)
    const id_dosen = payload.id
    const nama = payload.nama
    const NIP = payload.NIP

    const id = req.params.id
    const name = req.params.name
    const ref = await models.course_plan_references.findAll({
        where : {
            course_plan_id : req.params.id
        }
    })
    res.render("referensi1", {ref, name, id, nama, NIP})
}

controllers.semuaRef = async (req, res) => {
    const accessToken = req.cookies.accessToken 
    if (!accessToken)
        res.render("loginDosen")
    const payload = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET)
    const id = payload.id
    const nama = payload.nama
    const NIP = payload.NIP
    //nampilin data ref berdasarkan id dosen
    res.render("referensi2", { nama, NIP})
}

controllers.tambahRef = async(req, res) => {
    try {
        await models.course_plan_references.create({
            course_plan_id  : req.params.id,
            title           : req.body.title,
            author          : req.body.author,
            publisher       : req.body.publisher,
            year            : req.body.year,
            description     : req.body.description
        })
        res.json({msg: "Berhasil menambahkan referensi mata kuliah"});
    } catch (err) {
        console.log(err);
    }
}

controllers.hapusRef = async(req, res) => {
    try {
        await models.course_plan_references.destroy({
            where : {
                id   : req.params.id
            }
        })
        res.redirect("/homeDosen")
    } catch (err) {
        console.log(err);
    }
}

controllers.updateRef = async(req, res) => {

}

controllers.lihatRef = async(req, res) => {

}

module.exports = controllers