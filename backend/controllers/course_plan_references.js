const models = require('../models/index')
const controllers = {}

controllers.hlmTambahRef = async (req, res) => {
    res.render("tambahRef")
}

controllers.tambahRef = async(req, res) => {
    const matkul = await models.course_plans.findOne({
        where : {
            id : req.query.course_plan_id
        }
    })
    try {
        const {id, title, author, publisher, year ,description} = req.body
        await models.course_plan_references.create({
            id  : id,
            course_plan_id  : req.query.course_plan_id,
            title           : title,
            author          : author,
            publisher       : publisher,
            year            : year,
            description     : description
        })
        res.json({msg: "Berhasil menambahkan referensi mata kuliah"});
    } catch (err) {
        console.log(err);
    }
}

controllers.hapusRef = async(req, res) => {
    try {
        const hapus = await models.course_plan_references.deleteOne({id   : id})
        res.json({msg: "Referensi berhasil dihapus"});
    } catch (err) {
        console.log(err);
    }
}

controllers.updateRef = async(req, res) => {

}

controllers.lihatRef = async(req, res) => {

}

module.exports = controllers