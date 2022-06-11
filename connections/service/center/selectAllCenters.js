const Pool = require('../../getPool')

const selectAllCenters = async () => {

    try {
        const allCenters = await Pool.query('SELECT * FROM centers')
        return allCenters.rows
    } catch (error) {
        console.log('selectAllCenters');
        console.log(error)
        return false
    }

}

module.exports = selectAllCenters