// все, связанное с карточками
const WordService = require('../services/word.service');
const formatResponse = require('../utils/formatResponse');

class WordController {
  static async getAllWordCards(req, res) {
    try {
      const words = await WordService.getAllWordCards();
      if (!words || words.length === 0) {
        res.status(200).json(formatResponse(200, 'Слова не найдены', []));
        return;
      }
      res.status(200).json(formatResponse(200, 'Слова получены', words));
    } catch (error) {
      res.status(500).json(formatResponse(500, 'Ошибка сервера', null, error));
    }
  }

  static async createWordCard(req, res) {
    const { word, definition, category, example } = req.body;

    const { userId } = req.params;

    if (!word || typeof word !== 'string' || word.trim().length === 0) {
      res.status(400).json(formatResponse(400, 'Необходимо ввести слово'));
      return;
    }

    if (!definition || typeof definition !== 'string' || definition.trim().length === 0) {
      res.status(400).json(formatResponse(400, 'Необходимо ввести описание слова'));
      return;
    }

    if (!category) {
      res.status(400).json(formatResponse(400, 'Необходимо выбрать категорию'));
      return;
    }

    if (!example || typeof example !== 'string' || example.trim().length === 0) {
      res.status(400).json(formatResponse(400, 'Необходимо ввести пример использования'));
      return;
    }

    try {
      const newWord = await WordService.createWordCard({
        word,
        definition,
        category,
        example,
        like: 0,
        user_id: userId,
      });

      res.status(201).json(formatResponse(201, 'Слово успешно создано', newWord));
    } catch (error) {
      res.status(500).json(formatResponse(500, 'Ошибка сервера', null, error));
    }
  }

  static async getWordCardById(req, res) {
    const { id } = req.params;

    if (Number.isNaN(+id)) {
      res.status(400).json(formatResponse(400, 'Неверный формат ID'));
      return;
    }

    try {
      const word = await WordService.getWordCardById(id); // Передаем число

      if (!word) {
        res.status(404).json(formatResponse(404, `Слово с id: ${id} не найдено`));
        return;
      }

      res.status(200).json(formatResponse(200, 'Слово получено', word));
    } catch (error) {
      res.status(500).json(formatResponse(500, 'Ошибка сервера', null, error));
    }
  }

  static async updateWordCard(req, res) {
    const { id } = req.params;

    if (Number.isNaN(+id)) {
      res.status(400).json(formatResponse(400, 'Неверный формат ID'));
      return;
    }

    const { word, definition, category, example } = req.body;

    if (!word || typeof word !== 'string' || word.trim().length === 0) {
      res.status(400).json(formatResponse(400, 'Поле не может быть пустым'));
      return;
    }
    if (!definition || typeof definition !== 'string' || definition.trim().length === 0) {
      res.status(400).json(formatResponse(400, 'Поле не может быть пустым'));
      return;
    }
    if (!category) {
      res.status(400).json(formatResponse(400, 'Поле не может быть пустым'));
      return;
    }
    if (!example || typeof example !== 'string' || example.trim().length === 0) {
      res.status(400).json(formatResponse(400, 'Поле не может быть пустым'));
      return;
    }

    try {
      const updatedWord = await WordService.updateWordCard(id, {
        word,
        definition,
        category,
        example,
      });

      if (!updatedWord) {
        res.status(404).json(formatResponse(404, 'Слово для обновления не найдено'));
        return;
      }

      res.status(200).json(formatResponse(200, 'Данные слова обновлены', updatedWord));
    } catch (error) {
      res.status(500).json(formatResponse(500, 'Ошибка сервера', null, error));
    }
  }

  static async deleteWordCard(req, res) {
    const { id } = req.params;

    if (Number.isNaN(+id)) {
      res.status(400).json(formatResponse(400, 'Неверный формат ID'));
      return;
    }

    try {
      const deletedWord = await WordService.deleteWordCard(id);
      if (!deletedWord) {
        res.status(404).json(formatResponse(404, 'Слово для удаления не найдено'));
        return;
      }

      res.status(200).json(formatResponse(200, 'Слово успешно удален'));
    } catch (error) {
      res.status(500).json(formatResponse(500, 'Ошибка сервера', null, error));
    }
  }

  static async getAllWordCardLikes(req, res) {
    const { wordId } = req.params;

    if (Number.isNaN(+wordId)) {
      res.status(400).json(formatResponse(400, 'Неверный формат ID слова'));
      return;
    }

    try {
      const likes = await WordService.getAllWordCardLikes(+wordId);

      if (!likes) {
        res.status(404).json(formatResponse(404, `Слово с id: ${wordId} не найдено`));
        return;
      }

      if (likes.length === 0) {
        res.status(200).json(formatResponse(200, 'У слова нет лайков', []));
        return;
      }

      res.status(200).json(formatResponse(200, 'Лайки слова получены', likes));
    } catch (error) {
      res
        .status(500)
        .json(formatResponse(500, 'Ошибка сервера при получении лайков', null, error));
    }
  }

  static async putOrRemoveLikeIfExists(req, res) {
    const { wordId } = req.params;
    console.log(wordId);

    //  пользователь сохраняется в req.user после аутентификации
    const userId = res.locals.user.id;
    console.log(userId);

    if (Number.isNaN(+wordId)) {
      res.status(400).json(formatResponse(400, 'Неверный формат ID слова'));
      return;
    }

    if (!userId) {
      res.status(401).json(formatResponse(401, 'Пользователь не авторизован'));
      return;
    }

    try {
      const result = await WordService.putOrRemoveLikeIfExists(+userId, +wordId);

      if (result.action === 'removed') {
        res
          .status(200)
          .json(formatResponse(200, 'Лайк успешно удален', { liked: false }));
      }
      res.status(201).json(
        formatResponse(201, 'Лайк успешно поставлен', {
          liked: true,
          like: result.like,
        }),
      );
    } catch (error) {
      res
        .status(500)
        .json(formatResponse(500, 'Ошибка сервера при работе с лайком', null, error));
    }
  }
}

module.exports = WordController;
