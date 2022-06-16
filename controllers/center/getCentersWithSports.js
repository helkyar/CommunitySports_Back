const { getCentersWithSportsManager } = require("../../managers/CenterManager")

const getCentersWithSports = async (req, res, next) => {
    try {
        const response = await getCentersWithSportsManager();
        res.status(200).json(response)
    } catch (err) {
        next(err)
    }
}

module.exports = getCentersWithSports