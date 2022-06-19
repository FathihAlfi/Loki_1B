const models = require('../models/index')

const controllers = {}

controllers.home = async(req, res) => {
    const RPS = await models.course_plans.findAll({})
    res.render("homepagedosen", {RPS} )
}

module.exports = controllers