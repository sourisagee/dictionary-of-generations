const { where } = require('sequelize');
const { User, Word, Like } = require('../db/models'); // на всякий случай пока подтянула все модели

class UserService {
  static async getUserbyEmail(email) {
    if (!email) {
      return null;
    }
    return (await User.findOne({ where: { email } }))?.get();
  }

  static async createUser(data) {
    return (await User.create(data))?.get();
  }

  static async getUserLikes(userId) {
    const likes = await Like.findAll( {
      where: { user_id: userId }}); // получаем все лайки пользователя 
      return likes
  }

  static async getAllWordByLikes(wordId) {
    const words = await Word.findAll({ where: {id: wordId}})  // получили все слова  по id
    return words
  }
}

module.exports = UserService;
