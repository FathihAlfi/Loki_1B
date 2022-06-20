const jwt = require('jsonwebtoken')
const models = require('../models/index')

const cekDosenPengampu = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if(token == null) 
        return res.sendStatus(401);
        
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
        if(err) return res.sendStatus(403);
            req.id      = decoded.id;
            req.email   = decoded.email;
            req.nama    = decoded.nama;
            req.type    = decoded.type;
    
    const RPS = models.course_plans.findAll({
        include : [{
        model : models.course_plan_lecturers,
        // as  : 'dosen',
        attribute : [[]],
        where : {
                lecturer_id : decoded.id}
        }]
    })
    if (!RPS)
        return res.status(200).json("Hanya dosen pengampu yang dapat mengubah RPS")
    next();
    })
}

module.exports = cekDosenPengampu