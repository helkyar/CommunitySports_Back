const Pool = require('../../getPool')

const selectAllEvents = async () => {
    console.log('en selectAllEvents')
    try {
        const allEvents = await Pool.query(`SELECT * FROM events`);
        console.log('eventos',allEvents.rows)
        return allEvents.rows
    } catch (error) {
        console.log('selectAllEvents');
        console.log(error)
        return false
    }
}

module.exports = selectAllEvents