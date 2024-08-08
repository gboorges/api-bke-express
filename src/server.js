//const express = require('express')
import express from 'express'
import userRouter from './routers/userRouter.js' // importação das informações que estão no userRouter
import productRouter from './routers/productRouter.js'

const app = express()
const port = 3000

app.use('/user', userRouter) // tudo que chega no "/user" ele encaminha para o userRouter

app.use('/product', productRouter)

app.listen(port, () => { // função que liga o servidor para ouvir as rotas definidas no método
    console.log(`Servidor rodando em http://localhost:${port}`)
})