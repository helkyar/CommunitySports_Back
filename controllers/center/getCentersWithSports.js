const { getCentersWithSportsManager } = require("../../managers/CenterManager")

const getCentersWithSports = async (req, res, next) => {
    const response = await getCentersWithSportsManager();
    res.status(200).json(response)
}

module.exports = getCentersWithSports