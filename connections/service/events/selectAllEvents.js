const Pool = require('../../getPool')

const selectAllEvents = async () => {
    try {
        const allEvents = await Pool.query(`SELECT * FROM events`);
        return allEvents.rows
    } catch (error) {
        console.log('selectAllEvents');
        console.log(error)
        return false
    }
}

module.exports = selectAllEvents