const models = require('../models/index')
const jwt = require('jsonwebtoken')
const { course_plans } = require('../models/index')
const { course_plan_references } = require('.')
const controllers = {}

controllers.hlmTambahRef = async (req, res) => {
    const id = req.params.id
    const accessToken = req.cookies.accessToken 
    if (!accessToken)
        return res.status(200).json("tidak ada token")
    const payload = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET)
    const id_dosen = payload.id
    const nama = payload.nama
    const NIP = payload.NIP
    res.render("tambahRef", {id, nama, NIP})
}

controllers.DetailRef = async (req, res) => {
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
    // models.course_plan_lecturers.hasMany(models.course_plans, {foreignKey: "id"})
    // models.course_plans.belongsTo(models.course_plan_lecturers, {foreignKey: "id"})
    // models.course_plan_references.hasMany(models.course_plans, {foreignKey: "id"})
    // models.course_plans.belongsTo(models.course_plan_references, {foreignKey: "id"})
    models.course_plans.hasMany(models.course_plan_references, {foreignKey: "course_plan_id"})
    models.course_plan_references.belongsTo(models.course_plans, {foreignKey: "id"})
    models.course_plans.hasMany(models.course_plan_lecturers, {foreignKey: "id"})
    models.course_plan_lecturers.belongsTo(models.course_plans, {foreignKey: "course_plan_id"})
   
    // const RPS = await models.course_plan_references.findAll({
    //     attributes : ['course_plan_id', 'title', 'author', 'publisher', 'year'],
    //     include : [{
    //         model : models.course_plans,
    //         attributes: ['id', 'course_id'], 
    //         include : [{
    //             model : models.course_plan_lecturers, 
    //             attributes: ['id', 'course_plan_id', 'lecturer_id'],
    //             where : {
    //                 lecturer_id : id
    //             }
    //         }]
    //     }]
    // })

    // const ref = await models.course_plan_lecturers.findAll({
    //     where : {
    //         lecturer_id : 2
    //     },
    //     include : [{
    //         model : models.course_plans,
    //         include : [{
    //             model : models.course_plan_references
    //         }]
    //     }]
    // })

    const ref = await models.course_plan_references.findAll({
        include : [{
            model : models.course_plans,
            include : [{
                model : models.course_plan_lecturers,
                where : {
                    lecturer_id : 2
                }
            }]
        }]
    })
    res.render("referensi1", { ref, nama, NIP})
    // res.json({ref})
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