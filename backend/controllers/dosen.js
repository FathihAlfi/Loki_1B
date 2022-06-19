const models = require('../models/index')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser')

const controllers = {}

controllers.home = async(req, res) => {
    // const RPS = await models.course_plans.findAll({})
    // res.render("homepagedosen", {RPS} )
    const accessToken = req.cookies.accessToken 
    if (!accessToken)
        return res.status(200).json("tidak ada token")
    const payload = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET)
    const id = payload.id
    const RPS = await models.course_plans.findAll({
        include : [{
            model : course_plan_lecturers,
            where : {
                lecturer_id : id
            }
        }]
    })
    res.render("homepagedosen", {RPS, accessToken} )
}

module.exports = controllers