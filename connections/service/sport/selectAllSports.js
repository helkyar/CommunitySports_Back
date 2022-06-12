const Pool = require('../../getPool')

/**
 * Devuelve todos los deportes sin necesidad de ningun parametro
 * 
 * @returns Todos los deportes
 */
const selectAllSports = async () => {
    try {
        const allSports = await Pool.query(`SELECT * FROM sports`)
        return allSports.rows
    } catch (error) {
        console.log('selectAllSports')
        console.log(error);
        return false
    }
}

module.exports = selectAllSports