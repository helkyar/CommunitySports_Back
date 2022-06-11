const Pool = require('../../getPool');

/**
 * Inserta nuevo deporte en la DB dandole un ID unico
 * @param {String} sport Nombre del deporte 
 */
const insertSport = async (newSport) => {
    try {
        await Pool.query(`INSERT INTO "sports" (id, name) VALUES('${newSport.id}', '${newSport.name}')`)
        return newSport
    } catch (error) {
        console.log('insertSport');
        console.log(error.message)
        return false
    }
}

module.exports = insertSport