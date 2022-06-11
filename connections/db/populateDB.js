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

    console.log('Espera a que termine el mokeo');

    //Rellena la Tabla sports
    const allSports = await sportsDB(sports[00]);
    console.log('Tabla sports mokeada...');

    //Rellena la Tabla centers
    const allCenters = await centersDB(centers);
    console.log('Tabla centers mokeada...');

    //Rellena la Tabla users
    const allUsers = await usersDB(users.data);
    console.log('Tabla users mokeada...');

    //Rellena la Tabla events
    const allEvents = await eventsDB(events.data);
    console.log('Tabla events mokeada...');

    //Rellena la Tabla sports_centers
    const allSportsCenters = await sportsCentersDB(sports)
    console.log('Tabla sports_centers mokeada...');


    console.log('=============');
    console.log('TABLAS POBLADAS');
    console.log('=============');
}

module.exports = populateDB