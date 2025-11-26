const wordRouter = require('express').Router();
const WordController = require('../controllers/word.controller');

wordRouter
  .route('/')
  .get(WordController.getAllWordCards) // получить все карточки с словами
  .post(WordController.createWordCard); // создать карточку

wordRouter
  .route('/:wordId')
  .get(WordController.getWordCardById) // получить карточку одного слова по айди
  .put(WordController.updateWordCard) // изменить карточку (обновить)
  .delete(WordController.deleteWordCard); // удалить карточку

wordRouter.route('/likes').get(WordController.getAllWordCardLikes); // все лайки одной карточки с словом

wordRouter
  .route('/likes/:wordId')
  .post(WordController.createNewLike) // создать новую запись лайка
  .delete(WordController.removeLike); // убрать лайк

module.exports = wordRouter;
