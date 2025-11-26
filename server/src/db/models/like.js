'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Like extends Model {
    static associate(models) {}
  }
  Like.init(
    {
      user_id: DataTypes.INTEGER,
      word_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Like',
      indexes: [
        {
          unique: true,
          fields: ['user_id', 'word_id'],
        },
      ],
    },
  );
  return Like;
};
