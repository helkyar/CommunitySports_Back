const centers = require('../../data/centers.json')
const events = require('../../data/events.json')
const sports = require('../../data/sports.json')
const users = require('../../data/users.json')
const sportsDB = require('./service/sportsDB');
const centersDB = require('./service/centersDB');
const usersDB = require('./service/usersDB');
const eventsDB = require('./service/eventsDB');
const sportsCentersDB = require('./service/sportsCentersDB');

const populateDB = async () => {

    //Rellena la Tabla sports
    //const allSports = await sportsDB(sports[00]);

    //Rellena la Tabla centers
    //const allCenters = await centersDB(centers);

    //Rellena la Tabla users
    //const allUsers = await usersDB(users.data);

    //Rellena la Tabla events
    //const allEvents = await eventsDB(events.data);

    //Rellena la Tabla sports_centers
    const allSportsCenters = await sportsCentersDB(sports)


    console.log('=============');
    console.log('TABLA POBLADA');
    console.log('=============');
}

module.exports = populateDB