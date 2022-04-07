//ini cuma tes aja ternyata bisa dipanggil
const models = require('../models/index')
const controllers = {}

controllers.getAllUser = async (req, res) => {
    const migrasi = await models.migrations.findAll({})
    res.status(200).send(migrasi)
}

module.exports = controllers