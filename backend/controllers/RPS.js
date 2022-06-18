const models = require('../models/index')
const jwt = require('jsonwebtoken')


const controllers = {}

controllers.cekRPS = async (req, res) => {
    const RPS = await models.course_plans.findOne({
        where : {
            id : req.body.course_id
        }
    })
    if (RPS)
        return res.status(200).json("Tidak dapat menambahkan RPS yang sudah tersedia")
}

controllers.tambahRPS = async (req, res) => {
    // controllers.cekRPS
    const RPS = await models.course_plans.findOne({
        where : {
            id : req.body.course_id
        }
    })
    if (RPS)
        return res.status(200).json("Tidak dapat menambahkan RPS yang sudah tersedia")
    const {course_id, code, name, alias_name, credit, semester, description} = req.body
    try {
        await models.course_plans.create({
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

controllers.lihatRPS = async (req, res) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if(token == null) 
        return res.sendStatus(401);
        
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
        if(err) return res.sendStatus(403);
            req.id      = decoded.id;
            req.email   = decoded.email;
            req.nama    = decoded.nama;
            req.type    = decoded.type;
    })
    const dosenID = req.id

    const RPS = await models.course_plans.findAll({
        include : [{
            model : models.course_plan_lecturers,
            // as  : 'dosen',
            attribute : [[]],
            where : {
                lecturer_id : dosenID
            }
        }]
    })
    res.status(200).json(RPS)
}

controllers.revisiRPS = async (req, res) => {
    const RPS = await models.course_plans.findOne({
        where : {
            id : req.body.course_id
        }
    })
    if (!RPS)
        return res.status(200).json("Revisi hanya untuk RPS yang sudah ada")
    const {course_id, code, name, alias_name, credit, semester, description} = req.body
    const revNew = RPS.rev
    try {
        await models.course_plans.update({
            rev             : revNew+1,
            code            : code,
            name            : name,
            alias_name      : alias_name,
            credit          : credit,
            semester        : semester,
            description     : description
        },{
            where : {
                course_id : course_id
            }
        })
        res.json({msg: "Berhasil merevisi RPS"});
    } catch (err) {
        console.log(err);
    }
}

module.exports = controllers