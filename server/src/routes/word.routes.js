const wordRouter = require('express').Router()

wordRouter.route('/')
    .get() // получить все карточки с словами
    .post() // создать карточку
    
wordRouter.route('/:wordId')
    .get() // получить карточку одного слова по айди
    .put() // изменить карточку (обновить)
    .delete() // удалить карточку

wordRouter.route('/likes')
    .get() // все лайки одной карточки с словом

wordRouter.route('/likes/:wordId')
    .post() // создать новую запись лайка
    .delete() // убрать лайк

module.exports = wordRouter