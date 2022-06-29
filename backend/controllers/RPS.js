//mengambil dari folder models dan di file index, index memangggil seluruh controllers
const models = require('../models/index')
const jwt = require('jsonwebtoken')

const controllers = {}

//req = request, res =respond
controllers.hlmTambahRPS = async (req, res) => {
    const accessToken = req.cookies.accessToken 
    if (!accessToken)
        return res.status(200).json("tidak ada token")
    const payload = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET)
    const id = payload.id
    const nama = payload.nama
    const NIP = payload.NIP
    res.render("tambahRPS", {nama, NIP})
}

controllers.hlmRevRPS = async (req, res) => {
    
}

controllers.tambahRPS = async (req, res) => {
    const RPS = await models.course_plans.findOne({
        where : {
            course_id : req.body.course_id
        }
    })
    if (RPS)
        return res.status(200).json("Tidak dapat menambahkan RPS yang sudah tersedia")
    const {course_id, code, name, alias_name, credit, semester, description} = req.body
    try {
        await models.course_plans.create({
            course_id       : req.body.course_id,
            rev             : 0,
            code            : req.body.code,
            name            : req.body.name,
            alias_name      : req.body.alias_name,
            credit          : req.body.credit,
            semester        : req.body.semester,
            description     : req.body.description
        })
        res.status(200).redirect("/homeDosen")
    } catch (err) {
        console.log(err);
    }
}

controllers.lihatRPS = async (req, res) => {
    // const authHeader = req.headers['authorization'];
    // const token = authHeader && authHeader.split(' ')[1];
    // if(token == null) 
    //     return res.sendStatus(401);
        
    // jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
    //     if(err) return res.sendStatus(403);
    //         req.id      = decoded.id;
    //         req.email   = decoded.email;
    //         req.nama    = decoded.nama;
    //         req.type    = decoded.type;
    // })
    // const dosenID = req.id

    // const RPS = await models.course_plans.findAll({
    //     include : [{
    //         model : models.course_plan_lecturers,
    //         // as  : 'dosen',
    //         attribute : [[]],
    //         where : {
    //             lecturer_id : dosenID
    //         }
    //     }]
    // })
    const RPS = await models.course_plans.findAll({})
    res.status(200).json(RPS)
}

controllers.revisiRPS = async (req, res) => {
    const accessToken = req.cookies.accessToken 
    if (!accessToken)
        return res.status(200).json("tidak ada token")
    const payload = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET)
    const id = payload.id
    const nama = payload.nama
    const NIP = payload.NIP

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