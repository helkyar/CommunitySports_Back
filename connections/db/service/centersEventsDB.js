const selectAllCenters = require("../../service/center/selectAllCenters");
const selectCenterByName = require("../../service/center/selectCenterByName");
const insertCenterEvent = require("../../service/centers_events/insertCenterEvent");
const selectAllEvents = require("../../service/events/selectAllEvents");
const selectEventWithDirection = require("../../service/events/selectEventWithDirection");

const centersEventsDB = async (arr) => {
    const allEventsWithoutId = [...arr];

    allEventsWithoutId.map(async (eventWithoutId, indexEvent) => {
        const center = await selectCenterByName(eventWithoutId.Centro);
        const event = await selectEventWithDirection(eventWithoutId.Direccion);
        await insertCenterEvent(center.id, event.id)
    })
}

module.exports = centersEventsDB