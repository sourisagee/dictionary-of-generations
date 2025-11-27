// здесь будет прописана авторизация, регистрация, выход и метод, связанный с лайками (см. в роутере auth)
const { User } = require('../db/models');
const UserService = require('../services/user.service');
const generateJWTTokens = require('../utils/generateJWTTokens');
const jwt = require('jsonwebtoken');
const cookieConfig = require('../config/cookieConfig');
const bcrypt = require('bcrypt');
const formatResponse = require('../utils/formatResponse');

class UserController {
  static async refreshTokens(req, res) {
    try {
      const { refreshToken } = req.cookies;
      const { user } = jwt.verify(refreshToken, process.env.SECRET_REFRESH_TOKEN);
      const { accessToken: newAccessToken, refreshToken: newRefreshToken } =
        generateJWTTokens({ user });
      return res
        .status(200)
        .cookie('refreshToken', newRefreshToken, cookieConfig)
        .json(
          formatResponse(200, 'User session successfully extended', {
            user,
            accessToken: newAccessToken,
          }),
        );
    } catch ({ message }) {
      res
        .status(401)
        .clearCookie('refreshToken')
        .json(formatResponse(401, 'Invalid refresh token', null, message));
    }
  }

  static async signUp(req, res) {
    const { email, name, password } = req.body;
    const { isValid, error } = User.validateSignUpData({ email, name, password });
    if (!isValid) {
      return res.status(400).json(formatResponse(400, 'Validation error', null, error));
    }
    try {
      const userFound = await UserService.getUserbyEmail(email.toLowerCase());
      if (userFound.email) {
        return res
          .status(400)
          .json(
            formatResponse(
              400,
              'User with this email already exists',
              null,
              'User with this email already exists',
            ),
          );
      }
      const newUser = await UserService.createUser({ email, name, password });
      if (!newUser) {
        return res
          .status(500)
          .json(
            formatResponse(
              500,
              'Failed to create new user',
              null,
              'Failed to create new user',
            ),
          );
      }
      const { accessToken, refreshToken } = generateJWTTokens({ user: newUser });
      return res
        .status(201)
        .cookie('refreshToken', refreshToken, cookieConfig)
        .json(
          formatResponse(201, 'Registration successful', { user: newUser, accessToken }),
        );
    } catch ({ message }) {
      return res
        .status(500)
        .json(formatResponse(500, 'Internal server error', null, message));
    }
  }

  static async signIn(req, res) {
    const { email, password } = req.body;
    const { isValid, error } = User.validateSignInData({ email, password });
    if (!isValid) {
      return res.status(400).json(formatResponse(400, 'Validation error', null, error));
    }
    try {
      const userFound = await UserService.getUserbyEmail(email.toLowerCase());
      if (!userFound) {
        return res
          .status(400)
          .json(
            formatResponse(
              400,
              'User with this email not found',
              null,
              'User with this email not found',
            ),
          );
      }

      const isPasswordValid = await bcrypt.compare(password, userFound.password);
      delete userFound.password;
      if (!isPasswordValid) {
        return res
          .status(400)
          .json(formatResponse(400, 'Invalid password', null, 'Invalid password'));
      }
      const { accessToken, refreshToken } = generateJWTTokens({ user: userFound });
      return res
        .status(200)
        .cookie('refreshToken', refreshToken, cookieConfig)
        .json(
          formatResponse(200, 'Sign in successful', { user: userFound, accessToken }),
        );
    } catch ({ message }) {
      return res
        .status(500)
        .json(formatResponse(500, 'Internal server error', null, message));
    }
  }

  static async signOut(req, res) {
    try {
      res.clearCookie('refreshToken').json(formatResponse(200, 'Sign out successful'));
    } catch ({ message }) {
      res.status(500).json(formatResponse(500, 'Internal server error', null, message));
    }
  }

  static async getAllUserLikes(req, res) {
    const { id } = req.params;
    try {
      const likes = await UserService.getUserLikes(id);
      if (!likes.length) {
        return res.status(200).json(formatResponse(200, 'Лайки не найдены', []));
      }
      const allLikes = likes.map((el) => el.word_id); // массив значений
      const words = await UserService.getAllWordByLikes(allLikes);
      if (!words.length) {
        return res.status(200).json(formatResponse(200, 'Слова не найдены', []));
      }
      return res
        .status(200)
        .json(formatResponse(200, 'Все слова с лайками пользователя получены', words));
    } catch (error) {
      res.status(500).json(formatResponse(500, 'Ошибка сервера', null, error));
    }
  }
}

module.exports = UserController;
