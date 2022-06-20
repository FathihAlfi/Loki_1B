const models = require('../models/index')
const controllers = {}

controllers.hlmTambahRef = async (req, res) => {
    const id = req.params.id
    res.render("tambahRef", {id})
}

controllers.hlmDetailRef = async (req, res) => {

    const id = req.params.id
    const name = req.params.name
    const ref = await models.course_plan_references.findAll({
        where : {
            course_plan_id : req.params.id
        }
    })
    res.render("referensi1", {ref, name, id})
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