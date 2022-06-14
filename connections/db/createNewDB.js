const Pool = require('../getPool');
const populateDB = require('./populateDB')

const createData = async () => {
    try {
        console.log('CREANDO TABLA -> centers');
        const comp = await Pool.query(`
        CREATE DATABASE waffles`)

     
        console.log('====================');
        console.log('TERMINADO DESPLIEGUE');
        console.log('====================');

    } catch (error) {
        console.log('db');
        console.log(error)
    }
}

module.exports = createData