const models = require('../models/index')
const bcrypt = require('bcryptjs')

const controllers = {}

controllers.getAllUser = async (req, res) => {
    const users = await models.user.findAll({})
    res.status(200).send(users)
}


controllers.register = async(req, res) => {
    const {nama, email, password, confPassword } = req.body;
    if(password !== confPassword) return res.status(400).json({msg: "Password dan Confirm Password tidak cocok"});
    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(password, salt);
    try {
        await models.user.create({
            name: nama,
            type : 'D',
            email: email,
            password: hashPassword,
        });
        res.json({msg: "Register Berhasil"});
    } catch (error) {
        console.log(error);
    }
}

module.exports = controllers