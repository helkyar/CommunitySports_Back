const Pool = require('../getDb');
const populateDB = require('./populateDB')

const createData = async () => {
    try {
        console.log('CREANDO BASE DE DATOS -> waffles');
        const comp = await Pool.query(`
        CREATE DATABASE waffles3`)

     
        console.log('====================');
        console.log('TERMINADO DESPLIEGUE');
        console.log('====================');

    } catch (error) {
        console.log('db');
        console.log(error)
    }
}

module.exports = createData