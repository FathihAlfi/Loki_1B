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

    models.course_plan_lecturers.hasMany(models.course_plans, {foreignKey: "id"})
    models.course_plans.belongsTo(models.course_plan_lecturers, {foreignKey: "id"})
    const RPS = await models.course_plan_lecturers.findAll({
        where :{
            lecturer_id : id
        },
        include : [
            models.course_plans
        ]
    })
    res.render("homepagedosen", {RPS, accessToken, nama, NIP} )
    // res.json({RPS})
}

module.exports = controllers