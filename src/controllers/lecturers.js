const models = require('../models/index')
const controllers = {}

controllers.hello = async(req, res) => {
    res.status(200).send("Hello world!!! inilecturers")
}

module.exports = controllers
