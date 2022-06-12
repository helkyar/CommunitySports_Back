const Pool = require('../../getPool');

const selectSportByName = async (sportName) => {
    try {
        const sport = await Pool.query(`SELECT * FROM sports WHERE name = '${sportName}'`)
        return sport.rows[0]
    } catch (error) {
        console.log('selectSportByName');
        console.log(error)
        return false
    }
}

module.exports = selectSportByName