const Pool = require('../../getPool')

const selectCenterByName = async (nameCenter) => {
    try {
        const center = await Pool.query(`SELECT * FROM centers WHERE name = '${nameCenter}'`)
        return center.rows[0]
    } catch (error) {
        console.log('selectCenterByName');
        console.log(error)
        return false
    }
}

module.exports = selectCenterByName