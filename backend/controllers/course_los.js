const models = require('../models/index')
const jwt = require('jsonwebtoken')
const controllers = {}

controllers.detailCPMK = async (req, res) => {
    const accessToken = req.cookies.accessToken 
    if (!accessToken)
        res.render("loginDosen")
    const payload = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET)
    const id_dosen = payload.id
    const nama = payload.nama
    const NIP = payload.NIP

    const id = req.params.id
    const name = req.params.name
    const CPMK = await models.course_los.findAll({
        where : {
            course_plan_id : req.params.id
        }
    })
    res.render()
}

module.exports = controllers