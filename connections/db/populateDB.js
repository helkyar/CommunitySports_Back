const centers = require('../../data/centers.json')
const events = require('../../data/events.json')
const sports = require('../../data/sports.json')
const users = require('../../data/users.json')
const sportsDB = require('./service/sportsDB');
const centersDB = require('./service/centersDB');
const usersDB = require('./service/usersDB');
const eventsDB = require('./service/eventsDB');
const sportsCentersDB = require('./service/sportsCentersDB');
const centersEventsDB = require('./service/centersEventsDB');

const populateDB = async () => {

    console.log('Espera a que termine el mokeo');

    //Rellena la Tabla sports
    await sportsDB(sports[00]);
    console.log('Tabla sports mokeada...');

    //Rellena la Tabla centers
    await centersDB(centers);
    console.log('Tabla centers mokeada...');

    //Rellena la Tabla users
    await usersDB(users.data);
    console.log('Tabla users mokeada...');

    //Rellena la Tabla events
    await eventsDB(events.data);
    console.log('Tabla events mokeada...');

    //Rellena la Tabla sports_centers
    await sportsCentersDB(sports)
    console.log('Tabla sports_centers mokeada...');

    //Rellena la Tabla centers_events
    await centersEventsDB(events.data)
    console.log('Tabla centers_events mokeada...');
}

module.exports = populateDB