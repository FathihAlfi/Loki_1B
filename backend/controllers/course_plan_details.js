const models = require('../models/index')
const controllers = {}

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