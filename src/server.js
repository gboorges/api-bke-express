//const express = require('express')
import express from 'express'
const app = express()
const port = 3000

app.get('/', (req, res) => { // primeiro end-point
    res.send('Hello World!')
})

app.get('/user', (req, res) => { // segundo end-point
    res.json({nome: "Giovanna", email: "grborgesp@gmail.com"})
})

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`)
})