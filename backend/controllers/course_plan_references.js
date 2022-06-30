//controller untuk REFERENSI (dosen)

const models = require('../models/index') //semua yang ada di models melalui index
const jwt = require('jsonwebtoken')
const controllers = {}

controllers.hlmTambahRef = async (req, res) => { //MENAMPILKAN halaman tambah ref
    //mengambil nilai didalam url (params)
    const id = req.params.id
    const name = req.params.name
    const accessToken = req.cookies.accessToken //mengambil accestoken
    if (!accessToken) //jika token salah
        return res.status(200).json("tidak ada token")
    const payload = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET) //verifikasi token
    const id_dosen = payload.id 
    const nama = payload.nama
    const NIP = payload.NIP
    res.render("tambahRef", {id, name, nama, NIP}) //tampil pada halaman tambahref
}

controllers.hlmEditRef = async (req, res) => { //MENAMPILKAN halaman edit referensi
    //mengambil nilai didalam url (params)
    const id = req.params.id
    const name = req.params.name
    const idEdit = req.params.idEdit
    const accessToken = req.cookies.accessToken 
    if (!accessToken)
        return res.status(200).json("tidak ada token")
    const payload = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET)
    const id_dosen = payload.id
    const nama = payload.nama
    const NIP = payload.NIP

    const ref = await models.course_plan_references.findOne({
        where : {
            id : req.params.idEdit
        }
    })
    res.render("editReferensi", {ref, idEdit, id, name, nama, NIP}) //tampil pada halaman editreferensi
}

controllers.editRef = async (req, res) => { //MENYIMPAN data referensi untuk edit
    try {
        const idEdit = req.params.idEdit
        const accessToken = req.cookies.accessToken 
        if (!accessToken)
            return res.status(200).json("tidak ada token")
        const payload = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET)
        const id_dosen = payload.id
        const nama = payload.nama
        const NIP = payload.NIP

        const id = req.params.id
        const name = req.params.name
        await models.course_plan_references.update({
            course_plan_id  : req.params.id,
            title           : req.body.title,
            author          : req.body.author,
            publisher       : req.body.publisher,
            year            : req.body.year,
            description     : req.body.description
        },{
            where : {id : req.params.idEdit}
        })
        res.status(200).redirect("/detailRef/"+id+"/"+name)
    } catch (err) {
        console.log(err);
    }
}

controllers.DetailRef = async (req, res) => { //MENAMPILKAN seluruh data referensi
    const accessToken = req.cookies.accessToken 
    if (!accessToken)
        res.render("loginDosen")
    const payload = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET)
    const id_dosen = payload.id
    const nama = payload.nama
    const NIP = payload.NIP

    const id = req.params.id
    const name = req.params.name
    const ref = await models.course_plan_references.findAll({
        where : {
            course_plan_id : req.params.id
        }
    })
    res.render("referensi", {ref, name, id, nama, NIP})
}

controllers.semuaRef = async (req, res) => { //MENAMPILKAN semua referensi dari seluruh matkul
    const accessToken = req.cookies.accessToken 
    if (!accessToken)
        res.render("loginDosen")
    const payload = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET)
    const id = payload.id
    const nama = payload.nama
    const NIP = payload.NIP
    //nampilin data ref berdasarkan id dosen
    // models.course_plan_lecturers.hasMany(models.course_plans, {foreignKey: "id"})
    // models.course_plans.belongsTo(models.course_plan_lecturers, {foreignKey: "id"})
    // models.course_plan_references.hasMany(models.course_plans, {foreignKey: "id"})
    // models.course_plans.belongsTo(models.course_plan_references, {foreignKey: "id"})
    models.course_plans.hasMany(models.course_plan_references, {foreignKey: "course_plan_id"})
    models.course_plan_references.belongsTo(models.course_plans, {foreignKey: "id"})
    models.course_plans.hasMany(models.course_plan_lecturers, {foreignKey: "id"})
    models.course_plan_lecturers.belongsTo(models.course_plans, {foreignKey: "course_plan_id"})
   
    // const RPS = await models.course_plan_references.findAll({
    //     attributes : ['course_plan_id', 'title', 'author', 'publisher', 'year'],
    //     include : [{
    //         model : models.course_plans,
    //         attributes: ['id', 'course_id'], 
    //         include : [{
    //             model : models.course_plan_lecturers, 
    //             attributes: ['id', 'course_plan_id', 'lecturer_id'],
    //             where : {
    //                 lecturer_id : id
    //             }
    //         }]
    //     }]
    // })

    // const ref = await models.course_plan_lecturers.findAll({
    //     where : {
    //         lecturer_id : 2
    //     },
    //     include : [{
    //         model : models.course_plans,
    //         include : [{
    //             model : models.course_plan_references
    //         }]
    //     }]
    // })

    const ref = await models.course_plan_references.findAll({
        include : [{
            model : models.course_plans,
            include : [{
                model : models.course_plan_lecturers,
                where : {
                    lecturer_id : id
                }
            }]
        }]
    })
    res.render("semuaReferensi", { ref, nama, NIP})
}

controllers.tambahRef = async(req, res) => { //MENYIMPAN data referensi yang ada
    try {
        const id = req.params.id
        const name = req.params.name
        await models.course_plan_references.create({
            course_plan_id  : req.params.id,
            title           : req.body.title,
            author          : req.body.author,
            publisher       : req.body.publisher,
            year            : req.body.year,
            description     : req.body.description
        })
        res.status(200).redirect("/detailRef/"+id+"/"+name)
    } catch (err) {
        console.log(err);
    }
}

controllers.hapusRef = async(req, res) => { //MENGHAPUS data referensi
    try {
        const id = req.params.id //menangkap nilai id yang dikirimkan melalui url 
        const name = req.params.name 
        await models.course_plan_references.destroy({
            where : {
                id   : req.params.idHapus
            }
        })
        res.status(200).redirect("/detailRef/"+id+"/"+name) 
    } catch (err) {
        console.log(err);
    }
}


module.exports = controllers