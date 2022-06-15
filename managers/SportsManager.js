const selectAllSports = require('../connections/service/sport/selectAllSports')

const getAllSportsManager = async () => {
    try {
        return await selectAllSports();
    } catch (err) {
        console.log('getAllSports');
        console.log(err);
    }
}

module.exports = {
    getAllSportsManager
}