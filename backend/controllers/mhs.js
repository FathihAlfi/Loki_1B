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

controllers.lihatDetailRPS = async (req, res) => {
    const id = req.params.id
    const name = req.params.name

    models.course_los.hasMany(models.course_lo_details, {foreignKey : "id"})
    models.course_lo_details.belongsTo(models.course_los, {foreignKey : "course_lo_id"})
    
    const RPS = await models.course_plans.findOne({
        where : {id : id}
    })
    const CPL = await models.course_lo_details.findAll({
        include : {
            model: models.course_los,
            where : {course_plan_id : id}
        }
    })
    const ref = await models.course_plan_references.findAll({
        where : {course_plan_id : id}
    })
    const pertemuan = await models.course_plan_details.findAll({
        where : {course_plan_id : id}
    })
    const komponen = await models.course_plan_assessments.findAll({
        where : {course_plan_id : id}
    })
    res.render("detailFileRPS", {RPS, CPL, ref, pertemuan, komponen})
}

controllers.exportDetailRPS = async (req, res) => {
    target="_blank"
    const id = req.params.id
    const name = req.params.name

    models.course_los.hasMany(models.course_lo_details, {foreignKey : "id"})
    models.course_lo_details.belongsTo(models.course_los, {foreignKey : "course_lo_id"})
    
    const RPS = await models.course_plans.findOne({
        where : {id : id}
    })
    const CPL = await models.course_lo_details.findAll({
        include : {
            model: models.course_los,
            where : {course_plan_id : id}
        }
    })
    const ref = await models.course_plan_references.findAll({
        where : {course_plan_id : id}
    })
    const pertemuan = await models.course_plan_details.findAll({
        where : {course_plan_id : id}
    })
    const komponen = await models.course_plan_assessments.findAll({
        where : {course_plan_id : id}
    })
    res.render("PrintRPS", {RPS, CPL, ref, pertemuan, komponen})
}

controllers.cari = async (req, res) => {
    cari = req.params.cari

    const RPS = await models.course_plans.findOne({
        where : {
            [op.like] : [
                {code : cari},
                {name : cari}
            ]
        }
    })
    res.render("landingpage", {RPS} ) 
}

module.exports = controllers