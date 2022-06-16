const selectAllEvents = require('../../service/events/selectAllEvents')
const selectAllUsers = require('../../service/user/selectAllUsers')
const insertUserEvent = require('../../service/users_events/insertUserEvent')

const userEventsDB = async () => {
    try {
        const allEvents = await selectAllEvents();
        const allUsers = await selectAllUsers();

        for (const event of allEvents) {
            const populationEvents = Math.floor(Math.random() * event.capacity - 1)
            for (let i = 0; i < populationEvents; i++) {
                const user = allUsers[Math.floor(Math.random() * allUsers.length - 1)]
                await insertUserEvent({ id_user: user.id, id_event: event.id })
            }
        }
    } catch (err) {
        console.log('userEventsDB');
        console.log(err);
    }
}

module.exports = userEventsDB