const authRouter = require('express').Router()

authRouter
    // .get('/refreshTokens', )
    .post('/signup', )
    .post('/signin', )
    .delete('/signout', )

authRouter.route('/likes')
    .get() // получить все лайки одного пользователя (user get one include word through like)

module.exports = authRouter