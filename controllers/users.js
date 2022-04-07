const models = require('../../../models/index')
const controllers = {}

controllers.getAllUser = async (req, res) => {
    const users = await models.user.findAll({})
    res.status(200).send(users)
}

controllers.hello = async(req, res) => {
    res.status(200).send("Hello world!!!")
}

controllers.signup = async (req, res) => {
    res.status(200).send("Hello world!!! ini bagian signup")
}
module.exports = controllers

// const express = require('express')
// const user = require('../models/users.js')


// const signup = async (req, res) => {
//     try {
//         const user = await user.findAll();
//         res.send(product);
//     } catch (err) {
//         console.log(err);
//     }
// }

// module.exports = controllers