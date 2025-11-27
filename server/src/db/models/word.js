'use strict';

const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Word extends Model {
    static associate({ User, Like }) {
      this.belongsTo(User, { foreignKey: 'user_id', as: 'authorOfTheWord' }); // много слов могут принадлежать одному пользователю
      this.belongsToMany(User, {
        through: Like,
        foreignKey: 'word_id',
        as: 'likedByUsers',
      }); // много слов могут быть лайкнуты многими пользователями
      this.hasMany(Like, { foreignKey: 'word_id', as: 'likes' }); // у слова может быть много лайков
    }
  }
  Word.init(
    {
      word: DataTypes.STRING,
      definition: DataTypes.STRING,
      category: {
        type: DataTypes.ENUM('zoomers', 'millennials', 'boomers'),
        allowNull: false,
      },
      example: DataTypes.STRING,
      like: DataTypes.INTEGER,
      user_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Word',
    },
  );
  return Word;
};
