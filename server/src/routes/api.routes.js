const authRouter = require('./auth.router')
const wordRouter = require('./word.routes')
const apiRouter = require('express').Router()

apiRouter.use('/auth', authRouter)
apiRouter.use('/words', wordRouter)

module.exports = apiRouter