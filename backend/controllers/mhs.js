const models = require('../models/index')

const controllers = {}

controllers.home = async(req, res) => {
    const RPS = await models.course_plans.findAll({})
    res.render("landingpage", {RPS} )
}

controllers.detail = async(req, res) => {
    const RPS = await models.course_plans.findAll({
        where : {
            id : req.params.id
        }
    })
    res.render("landingpage", {RPS} )
}

module.exports = controllers