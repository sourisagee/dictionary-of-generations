const { Word, Like } = require('../db/models'); // на всякий случай пока подтянула все модели

class WordService {
  static async getAllWordCards() {
    try {
      const allWordCards = await Word.findAll();
      return allWordCards.map((wordCard) => wordCard.get());
    } catch (error) {
      return error.message;
    }
  }

  static async createWordCard(userId, { word, definition, category, example }) {
    try {
      const newWordCard = await Word.create({
        word,
        definition,
        category,
        example,
        like: 0,
        user_id: userId,
      });

      return newWordCard.get();
    } catch (error) {
      return error.message;
    }
  }

  static async getWordCardById(wordId) {
    try {
      const wordCard = await Word.findByPk(wordId);

      return wordCard.get();
    } catch (error) {
      return error.message;
    }
  }

  static async updateWordCard(wordId, { word, definition, category, example }) {
    try {
      const cardToUpdate = await Word.findByPk(wordId);

      await cardToUpdate.update({ word, definition, category, example });

      return cardToUpdate.get();
    } catch (error) {
      return error.message;
    }
  }

  static async deleteWordCard(wordId) {
    try {
      const wordCardToDelete = await Word.findByPk(wordId);

      await wordCardToDelete.destroy();

      return { message: 'Word card successfully deleted' };
    } catch (error) {
      return error.message;
    }
  }

  static async getAllWordCardLikes(wordId) {
    try {
      const wordCard = await Word.findOne({
        where: { id: wordId },
        include: {
          model: Like,
          as: 'likes',
        },
      });
      const getAllWordCardLikes = wordCard.likes;

      return getAllWordCardLikes;
    } catch (error) {
      return error.message;
    }
  }

  static async putOrRemoveLikeIfExists(userId, wordId) {
    try {
      const like = await Like.findOne({ where: { userId, wordId } });

      if (like) {
        await like.destroy();
        return { message: 'Like successfully deleted' };
      }

      const newLike = await Like.create({ userId, wordId });

      return newLike;
    } catch (error) {
      return error.message;
    }
  }
}

module.exports = WordService;
