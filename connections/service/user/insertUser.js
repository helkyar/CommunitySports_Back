const Pool = require('../../getPool');


/**
 * Inserta nuevo user en la DB dandole un ID unico
 * @param {Object} user Objeto user
 * @returns Objeto insertado
 */
const insertUser = async (newUser) => {
    const name = newUser.name || newUser.username
    const query = `INSERT INTO users (id, name, age, genre, email, password, subscriber)
    VALUES ('${newUser.id}', '${name}', '${newUser.age}', '${newUser.genre}', '${newUser.email}', '${newUser.password}', '${newUser.subscriber}')`

    try {
        await Pool.query(query)
        return newUser
    } catch (error) {
        console.log('insertUser');
        console.log(error)
        return false
    }
}

module.exports = insertUser