const jwt = require('jsonwebtoken')

const verifyToken = (req, res, next) => {
    // const authHeader = req.headers['authorization'];
    // const token = authHeader && authHeader.split(' ')[1];
    // if(token == null) 
    //     return res.sendStatus(401);
        
    // jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
    //     if(err) return res.sendStatus(403);
    //         req.id      = decoded.id;
    //         req.email   = decoded.email;
    //         req.nama    = decoded.nama;
    //         req.type    = decoded.type;
    //     next();
    // })
    
    try {
    const accessToken = req.cookies.accessToken 
    if (!accessToken)
        res.render("loginDosen")
    const payload = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET)
    const id = payload.id
    const nama = payload.nama
    const NIP = payload.NIP
    next()
    } catch (err) {
        res.render("mainlogin")
    }
}

module.exports = verifyToken