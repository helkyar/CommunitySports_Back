const selectCentersAndSports = require("../connections/service/sports_centers/selectCentersAndSports");

const getCentersWithSportsManager = async () => {
    try {
        const response = []
        const queryCenters = await selectCentersAndSports();
        for (let center of queryCenters.rows) {
            center.sports = [];
            let comprobate = false
            for (const centerSave of response) {
                if (centerSave.id === center.id) {
                    centerSave.sports.push(center.sport_name)
                    comprobate = true
                    continue
                }
            }
            if (!comprobate) {
                response.push(center)
            }
        }
        return response
    } catch (err) {
        console.log('getCentersWithSportsManager');
        console.log(err);
    }
}

module.exports = {
    getCentersWithSportsManager
}