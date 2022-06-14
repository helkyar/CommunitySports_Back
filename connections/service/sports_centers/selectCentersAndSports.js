const pool = require('../../getPool')

const selectCentersAndSports = async () => {
    try {
        const query = `SELECT centers.id, centers.name AS center_name, centers.direction, centers.phone, centers.mobility, 
        centers.podotactile, centers.ind_magnetica, centers.email, centers.latitude, centers.longitude, sports.name AS sport_name 
        FROM centers 
        JOIN sports_centers ON sports_centers.id_center = centers.id 
        JOIN sports ON sports.id = sports_centers.id_sport;`
        return await pool.query(query)
    } catch (err) {

    }
}

module.exports = selectCentersAndSports