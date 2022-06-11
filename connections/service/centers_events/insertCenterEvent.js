const Pool = require('../../getPool')

const insertCenterEvent = async (id_center, id_event) => {
    try {
        await Pool.query(`INSERT INTO centers_events (id_center, id_event)
VALUES('${id_center}', '${id_event}')`)
    } catch (error) {
        console.log('insertCenterEvent');
        console.log(error);
    }
}

module.exports = insertCenterEvent