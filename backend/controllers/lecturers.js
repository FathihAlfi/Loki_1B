const models = require('../models/index')
const controllers = {}

controllers.hello = async(req, res) => {
    res.status(200).send("Hello world!!! inilecturers")
}

controllers.tambahRPS = async (req, res) => {
    //cek RPS 
    const RPS = await models.course_plans.findOne({
        where : {
            id : req.body.course_id
        }
    })
    if (RPS)
        return res.status(200).json("Tidak dapat menambahkan RPS yang sudah tersedia")
    const {course_id, code, name, alias_name, credit, semester, description} = req.body
    try {
        if (code == RPS.code || alias_name == RPS.alias_name)
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
        await models.course_plans.create({
            id              : course_id,
            course_id       : course_id,
            rev             : 0,
            code            : code,
            name            : name,
            alias_name      : alias_name,
            credit          : credit,
            semester        : semester,
            description     : description
        })
        res.json({msg: "Berhasil menambahkan RPS"});
    } catch (err) {
        console.log(err);
    }
}

module.exports = controllers
