const models = require('../models/index')
const jwt = require('jsonwebtoken')
const controllers = {}

controllers.semuaPertemuan = async (req, res) => {
    const accessToken = req.cookies.accessToken 
    if (!accessToken)
        res.render("loginDosen")
    const payload = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET)
    const id = payload.id
    const nama = payload.nama
    const NIP = payload.NIP
    models.course_plans.hasMany(models.course_plan_details, {foreignKey: "course_plan_id"})
    models.course_plan_details.belongsTo(models.course_plans, {foreignKey: "id"})
    models.course_plans.hasMany(models.course_plan_lecturers, {foreignKey: "id"})
    models.course_plan_lecturers.belongsTo(models.course_plans, {foreignKey: "course_plan_id"})
   
    const pertemuan = await models.course_plan_details.findAll({
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
    res.render("semuaPertemuan", { pertemuan, nama, NIP})
}

controllers.hapusPertemuan = async(req, res) => {
    try {
        const id = req.params.id
        const name = req.params.name
        await models.course_plan_details.destroy({
            where : {
                id   : req.params.idHapus
            }
        })
        res.status(200).redirect("/detailPertemuan/"+id+"/"+name) 
    } catch (err) {
        console.log(err);
    }
}

controllers.detailPertemuan = async (req, res) => {
    const accessToken = req.cookies.accessToken 
    if (!accessToken)
        res.render("loginDosen")
    const payload = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET)
    const id_dosen = payload.id
    const nama = payload.nama
    const NIP = payload.NIP

    const id = req.params.id
    const name = req.params.name
    const pertemuan = await models.course_plan_details.findAll({
        where : {
            course_plan_id : req.params.id
        }
    })
    res.render("pertemuan", {pertemuan, name, id, nama, NIP})
}

controllers.hlmEditPertemuan = async (req, res) => {
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

    const pertemuan = await models.course_plan_details.findOne({
        where : {
            id : req.params.idEdit
        }
    })
    res.render("editPertemuan", {pertemuan, idEdit, id, name, nama, NIP})
}

controllers.hlmTambahPertemuan = async (req, res) => {
    const id = req.params.id
    const name = req.params.name
    const accessToken = req.cookies.accessToken 
    if (!accessToken)
        return res.status(200).json("tidak ada token")
    const payload = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET)
    const id_dosen = payload.id
    const nama = payload.nama
    const NIP = payload.NIP
    res.render("tambahPertemuan", {id, nama, name, NIP})
}

controllers.tambahPertemuan = async (req, res) => {
    try {
        const id = req.params.id
        const name = req.params.name
        await models.course_plan_details.create({
            course_plan_id      : req.params.id,
            week                : req.body.week,
            material            : req.body.material,
            method              : req.body.method,
            student_experience  : req.body.student_experience,
        })
        res.status(200).redirect("/detailPertemuan/"+id+"/"+name)
    } catch (err) {
        console.log(err);
    }
}

controllers.editPertemuan = async (req, res) => {
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

        await models.course_plan_details.update({
            week                : req.body.week,
            material            : req.body.material,
            method              : req.body.method,
            student_experience  : req.body.student_experience,
        },{
            where : {id : req.params.idEdit}
        })
        res.status(200).redirect("/detailPertemuan/"+id+"/"+name)
    } catch (err) {
        console.log(err);
    }
}

controllers.tambahPertemuanM = async(req, res) => {
    const matkul = await models.course_plans.findOne({
        where : {
            id : req.query.course_plan_id
        }
    })
    try {
        const {id, week, material, method, student_experience} = req.body
        await models.course_plan_references.create({
            id  : id,
            course_plan_id      : req.query.course_plan_id,
            week                : week,
            material            : material,
            method              : method,
            student_experience  : student_experience,
        })
        res.json({msg: "Berhasil menambahkan referensi mata kuliah"});
    } catch (err) {
        console.log(err);
    }
}

controllers.hapusPertemuanM = async(req, res) => {
    try {
        const hapus = await models.course_plan_assessments.deleteOne({id     : id})
        res.json({msg: "Referensi berhasil dihapus"});
    } catch (err) {
        console.log(err);
    }
}

controllers.lihatPertemuanM = async(req, res) => {

}

module.exports = controllers