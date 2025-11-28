const authRouter = require('express').Router();
const UserController = require('../controllers/user.controller');

authRouter
  .get('/refreshTokens', UserController.refreshTokens)
  .post('/signup', UserController.signUp)
  .post('/signin', UserController.signIn)
  .delete('/signout', UserController.signOut);

authRouter
  .get('/likes/:id', UserController.getAllUserLikes) // получить все лайки одного пользователя (user get one include word through like)
  .get('/:id/likes', UserController.getAllWordLikedByUser);

module.exports = authRouter;
