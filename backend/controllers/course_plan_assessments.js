const models = require('../models/index')
const controllers = {}

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