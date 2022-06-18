const models = require('../models/index')
const controllers = {}

controllers.cekMataKuliah = async (req, res, next) => {
    const matkul = await models.course_plans.findOne({
        where : {
            id : req.body.course_id
        }
    })
    if (matkul)
        return res.status(200).json("Tidak dapat menambahkan mata kuliah yang sudah tersedia")
    next()
}

controllers.tambahMatkul = async (req, res) => {
    const matkul = await models.course_plans.findOne({
        where : {
            id : req.body.course_id
        }
    })
    if (matkul)
        return res.status(200).json("Tidak dapat menambahkan mata kuliah yang sudah tersedia")
    const {course_id, code, name, alias_name, credit, semester, description} = req.body
    try {
        await models.courses.create({
                id              : course_id,
                curriculum_id   : 1,
                code            : code,
                name            : name,
                alias_name      : alias_name,
                credit          : credit,
                semester        : semester,
                description     : description
        })
        res.json({msg: "Berhasil menambahkan Mata Kuliah"});
    }catch (err) {
        console.log(err);
    }
} 

module.exports = controllers
