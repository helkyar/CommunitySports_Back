const selectAllCenters = require("../../service/center/selectAllCenters")
const { v4 } = require('uuid')
const insertEvent = require("../../service/events/insertEvent")
const selectSportByName = require('../../service/sport/selectSportByName')

/**
 * Llenara la tabla eventos y sus relaciones
 * 
 * @param {*} events eventos JSON
 */
const eventsDB = async (events) => {
    const response = events.map(async (event, i) => {
        const sport = await selectSportByName(event.Sport)
        const newEvent = {
            id: v4(),
            id_sport: sport.id,
            name: event.Centro,
            organizer: 0,
            latitude: event.Latitud,
            longitude: event.Longitud,
            mobility: event.Movilidad ? 1 : 0,
            podotactile: event.Podotactil ? 1 : 0,
            ind_magnetica: event.Ind_magnetica ? 1 : 0,
            time: event.Date || new Date(),
            hour: event.Time || '00:00:00',
            sex: event.Sex,
            capacity: event.Max_aforo,
            direction: event.Direccion,
            email: event.email
        }
        const eventSave = await insertEvent(newEvent);
        return eventSave
    })
    return response
}

module.exports = eventsDB