const models = require('../models/index')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const controllers = {}

controllers.login = async (req, res) => {
    try 
    {
        const user = await models.user.findOne({
            where : {
                email : req.body.email
            }
        })
        const cocok = await bcrypt.compareSync(req.body.password, user.password)
        if(!cocok)
            return res.status(400).json({msg : "Password salah"})
        const id = user.id
        const nama = user.nama
        const email = user.email
        const type = user.type
        const accessToken = jwt.sign({id, nama, email, type}, process.env.ACCESS_TOKEN_SECRET, {
            expiresIn : '600s'
        })
        await models.user.update({remember_token : accessToken}, {
            where : {
                email : email
            }
        })
        res.cookie('accessToken', accessToken, {
            httpOnly    : true,
            maxAge      : 24 * 60 * 60 * 1000
        })
        res.json({accessToken})
    } 
    catch (err) 
    {
        res.status(404).json({msg : "Email tidak ditemukan"})
        console.log(err)
    }
}

controllers.logout = async (req, res) => {
    const accessToken = req.cookies.accessToken 
    if (!accessToken)
        return res.status(200).json("tidak ada token")
    const payload = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET)
    const user = await models.user.findOne({
        where : {
            email: payload.email
        }
    })
    if (!user)
        return res.status(200).json("tidak ada usernya")
    const id = user.id
    await models.user.update({remember_token : null}, {
        where : {
            id : id
        }
    })
    res.clearCookie('accessToken')
    return res.sendStatus(200);
}

module.exports = controllers