const Pool = require('../../getPool')

const insertEvent = async (event) => {
    const query = `INSERT INTO events (id, id_sport, name, organizer, latitude, longitude, mobility, podotactile, ind_magnetica, time, hour, sex, capacity, direction, email) 
    VALUES('${event.id}', '${event.id_sport}', '${event.name}', '${event.organizer}', '${event.latitude}', '${event.longitude}', '${event.mobility}', '${event.podotactile}', '${event.ind_magnetica}', 
    '${event.time}', '${event.hour}', '${event.sex}', '${event.capacity}', '${event.direction}', '${event.email}')`
    try {
        await Pool.query(query)
        return event
    } catch (error) {
        console.log('insertEvent');
        console.log(error)
        return false
    }
}

module.exports = insertEvent