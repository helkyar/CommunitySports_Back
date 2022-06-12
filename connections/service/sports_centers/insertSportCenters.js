const Pool = require('../../getPool')

const insertSportCenters = async (id_sport, id_center) => {
    try {
        await Pool.query(`INSERT INTO sports_centers (id_center, id_sport) VALUES ('${id_center}', '${id_sport}')`)
    } catch (error) {
        console.log('insertSportCenters')
        console.log(error);
    }
}

module.exports = insertSportCenters