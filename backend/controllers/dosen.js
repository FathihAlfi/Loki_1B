const models = require('../models/index')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser')

const controllers = {}

controllers.home = async(req, res) => {
   const accessToken = req.cookies.accessToken 
    if (!accessToken)
        return res.status(200).json("tidak ada token")
    const payload = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET)
    const id = payload.id
    const nama = payload.nama
    const NIP = payload.NIP

    models.course_plans.hasMany(models.course_plan_lecturers, {foreignKey: "id"})
    models.course_plan_lecturers.belongsTo(models.course_plans, {foreignKey: "course_plan_id"})
    // const RPS = await models.course_plan_lecturers.findAll({
    //     where :{
    //         lecturer_id : id
    //     },
    //     include : [
    //         models.course_plans
    //     ]
    // })
    const RPS = await models.course_plan_lecturers.findAll({
        where : {
            lecturer_id : id
        },
        atribute : ['course_plan_id', 'lecturer_id'],
        include : {
            model : models.course_plans,
            atribute : ['id', 'code', 'name', 'credit']
        }
    })
    res.render("homepagedosen", {RPS, accessToken, nama, NIP} )
    // res.json({RPS})
}

module.exports = controllers