const users = require('../../data/usuarios.json');
const centers = require('../../data/centers.json');
const sports_centers = require('../../data/sports.json');
const events = require('../../data/events.json');

async function poblateDB(req, res) {
    sports_centers.map((e, i) => {
        console.log(e)
    })
    res.status(200).json('ruta funcionando')
}

module.exports = poblateDB