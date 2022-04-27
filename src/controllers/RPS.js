const models = require('../models/index')
const jwt = require('jsonwebtoken')

const controllers = {}

controllers.tambahDosen = async (req, res) => {
    const accessToken = req.cookies.accessToken 
    if (!accessToken)
        return res.status(200).json("tidak ada token")
    const payload = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET)
    const creator = await models.user.findOne({
        where : {
            email   : payload.email
        }
    })
    const nama = creator.name
    const {Kode_Mata_Kuliah, NIP_dosen} = req.body
    const dosen = await models.lecturers.findOne({
        where : {
            reg_id  : NIP_dosen
        }
    })
    if(!dosen)
        return res.status(200).json("NIP dosen salah")
    try 
    {
        await models.course_plan_lecturers.create({
            course_plan_lecturers_lecturer_id_foreign     : NIP_dosen,
            course_plan_id  : Kode_Mata_Kuliah,
            creator         : nama
        });
        res.json({msg: "Register Berhasil"});
    } 
    catch (error) 
    {
        console.log(error);
    }
}

module.exports = controllers