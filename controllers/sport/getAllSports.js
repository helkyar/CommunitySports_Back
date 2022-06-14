const { getAllSportsManager } = require("../../managers/SportsManager");

const getAllSports = async (req, res, next) => {
    try {
        res.status(200).json(await getAllSportsManager())
    } catch (err) {
        console.log('getallsports');
        console.log(err);
    }
}

module.exports = getAllSports