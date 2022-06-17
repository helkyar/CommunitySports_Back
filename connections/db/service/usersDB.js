const insertUser = require('../../service/user/insertUser')
const { v4 } = require('uuid');

/**
 * Llenara la tabla users
 * @param {Objects} arr Un array con todos los users
 * @returns {Objects} Devuelve un array con los objetos creados
 */
const usersDB = async (arr) => {
    const response = []
    for (const user of arr) {

        const newUser = {
            id: v4(),
            name: user.name,
            age: user.age,
            genre: user.genre,
            email: user.email,
            password: user.password,
            subscriber: 0
        }
        response.push(await insertUser(newUser))
    }
    return response
}

module.exports = usersDB