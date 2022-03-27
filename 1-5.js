const express = require('express')
const client = express()
const port = 8889

client.get('/', (req, res) => 
{
    res.send('Hello, ini adalah halaman home kami')
    console.log('sudah di home')
})

//fungsional ke1
client.get('/login', (req, res) => 
{
    res.send(`Berhasil login`)
})

//fungsional ke2
client.get('/logout', (req, res) => 
{
    res.send(`Berhasil logout`)
})

//fungsional ke3
client.get('/rps/edit/:edit', (req, res) => 
{
    var edit = req.params.edit
    res.send(`Silahkan memperbaharui RPS ${edit}`)
})

//fungsional ke4
client.get('/rps/view', (req, res) => 
{
    var view = req.query.view
    if (!view)
    {
        res.send(`RPS yang diambil`)
    }
    else
    {
        res.send(`Anda sedang melihat rps ${view}`)
    }
})

//fungsional ke5
client.get('/rps/print', (req, res) => 
{
    res.send(`RPS berhasil dicetak`)
})

client.listen(port, () =>
{
    console.log(`Client sudah berjalan di port ${port}`)
})