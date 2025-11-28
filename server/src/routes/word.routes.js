const wordRouter = require('express').Router();
const WordController = require('../controllers/word.controller');
const verifyAccessToken = require('../middleware/verifyAccessToken');

wordRouter
  .route('/')
  .get(WordController.getAllWordCards) // получить все карточки с словами
  


wordRouter
  .route('/:wordId')
  .get(WordController.getWordCardById) // получить карточку одного слова по айди
  .put(WordController.updateWordCard) // изменить карточку (обновить)
  .delete(WordController.deleteWordCard) // удалить карточку
  .post(verifyAccessToken, WordController.createWordCard); // создать карточку

// wordRouter.route('/likes').get(WordController.getAllWordCardLikes); // все лайки одной карточки с словом

wordRouter
  .route('/likes/:wordId')
  .get(WordController.getAllWordCardLikes) // все лайки одной карточки с словом
  .post(verifyAccessToken, WordController.putOrRemoveLikeIfExists); // создать новую запись лайка или убрать лайк

  wordRouter
  .route('/category/:category')
  .get(WordController.getAllWordByCategory)

module.exports = wordRouter;
