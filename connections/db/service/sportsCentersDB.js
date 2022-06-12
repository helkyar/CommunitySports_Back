const selectCenterByName = require("../../service/center/selectCenterByName");
const selectAllSports = require("../../service/sport/selectAllSports");
const insertSportCenters = require("../../service/sports_centers/insertSportCenters");

const sportsCentersDB = async (arr) => {
    const allSports = await selectAllSports();
    const allCentersWithSports = [...arr]

    allCentersWithSports.map(async (center) => {
        allSports.map(async (sport) => {
            if (center[sport.name] > 0) {
                const myCenter = await selectCenterByName(center.Centro)
                await insertSportCenters(sport.id, myCenter.id)
            }
        })
    })
}

module.exports = sportsCentersDB