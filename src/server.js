//const express = require('express')
import express from 'express'
import userRouter from './routers/userRouter.js' // importação das informações que estão no userRouter
import productRouter from './routers/productRouter.js'
import logger from './middleware/logger.js'
import welcome from './controllers/welcome.js'
import roteNotFounded from './controllers/routeNotFounded.js'
import errorHandler from './middleware/errorHandler.js'
import { PORT, HOST, ENVIRONMENT } from './config.js'


const app = express()

app.use(logger)

app.use(express.json()) // middleware que captura o json e converte os dados do body em objeto
                        // se nenhum parâmetro da URL for descrito (por ex, "/user"), ele aplicará a condição para todas as URLs

app.get('/', welcome)

app.use('/user', userRouter) // tudo que chega no "/user" ele encaminha para o userRouter
app.use('/product', productRouter)
app. use('*', roteNotFounded)

app.use(errorHandler)

app.listen(PORT, () => { // função que liga o servidor para ouvir as rotas definidas no método
    console.log(`Servidor rodando no ambiente ${ENVIRONMENT} em ${ENVIRONMENT == 'production' ? HOST : HOST+':'+PORT}`)  
})