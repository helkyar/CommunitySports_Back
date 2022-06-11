const insertSport = require('../../service/sport/insertSport')
const { v4 } = require('uuid');

/**
 * Llenara la tabla sports
 * @param {Strings} arr Un array con los nombres de los deportes
 * @returns {Objects} Devuelve un array con los objetos creados
 */
const sportsDB = async (arr) => {
    const response = []
    const sports = Object.keys(arr)

    for (let i = 10; i < sports.length; i++) {
        const newSport = { id: v4(), name: sports[i] }
        const sportSave = await insertSport(newSport)
        response.push(sportSave)
    }

    return response
}

module.exports = sportsDB