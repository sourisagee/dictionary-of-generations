// здесь будет прописана авторизация, регистрация, выход и метод, связанный с лайками (см. в роутере auth)
const UserService = require('../services/user.service')

class UserController {
    static async signUp(req, res) {}

    static async signIn(req, res) {}

    static async signOut(req, res) {}

    static async getAllUserLikes(req, res) {}
}

module.exports = UserController