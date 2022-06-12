const Pool = require('../getPool');
const populateDB = require('./populateDB')

const createDB = async () => {
    try {
        console.log('CREANDO TABLA -> centers');
        const comp = await Pool.query(`
        CREATE TABLE IF NOT EXISTS centers(
            id VARCHAR(36) NOT NULL,
            name VARCHAR(100),
            direction VARCHAR(100),
            phone VARCHAR(100),
            mobility INTEGER,
            podotactile INTEGER,
            ind_magnetica INTEGER,
            email VARCHAR(100),
            latitude FLOAT,
            longitude FLOAT,
            PRIMARY KEY (id)
        )`)

        console.log('CREANDO TABLA -> sports');
        await Pool.query(`
        CREATE TABLE IF NOT EXISTS sports(
            id VARCHAR(36) NOT NULL,
            name VARCHAR(30) NOT NULL,
            PRIMARY KEY (id)
        )`)

        console.log('CREANDO TABLA -> users');
        await Pool.query(`
        CREATE TABLE IF NOT EXISTS users(
            id VARCHAR(36) NOT NULL,
            name VARCHAR(50) NOT NULL,
            age INTEGER,
            genre VARCHAR(10),
            email VARCHAR(50),
            password VARCHAR(20),
            subscriber INTEGER,
            PRIMARY KEY (id)
        )`)

        console.log('CREANDO TABLA -> events');
        await Pool.query(`
        CREATE TABLE IF NOT EXISTS events(
            id VARCHAR(36) NOT NULL,
            id_sport VARCHAR(36),
            name VARCHAR(100) NOT NULL,
            organizer INTEGER,
            latitude FLOAT,
            longitude FLOAT,
            mobility INTEGER,
            podotactile INTEGER,
            ind_magnetica INTEGER,
            time DATE,
            hour VARCHAR(20),
            sex VARCHAR(10),
            capacity INTEGER,
            direction VARCHAR(100),
            email VARCHAR(100),
            PRIMARY KEY (id),
            FOREIGN KEY (id_sport) REFERENCES sports (id)
        )`)

        console.log('CREANDO TABLA -> sports_centers');
        await Pool.query(`
        CREATE TABLE IF NOT EXISTS sports_centers(
            id_center VARCHAR(36) NOT NULL,
            id_sport VARCHAR(36) NOT NULL,
            FOREIGN KEY (id_center) REFERENCES centers (id),
            FOREIGN KEY (id_sport) REFERENCES sports (id)
        )`)

        console.log('CREANDO TABLA -> centers_events');
        await Pool.query(`
        CREATE TABLE IF NOT EXISTS centers_events(
            id_center VARCHAR(36) NOT NULL,
            id_event VARCHAR(36) NOT NULL,
            FOREIGN KEY (id_center) REFERENCES centers (id),
            FOREIGN KEY (id_event) REFERENCES events (id)
        )`)

        console.log('CREANDO TABLA -> users_events');
        await Pool.query(`
        CREATE TABLE IF NOT EXISTS users_events(
            id_user VARCHAR(36) NOT NULL,
            id_event VARCHAR(36) NOT NULL,
            FOREIGN KEY (id_user) REFERENCES users (id),
            FOREIGN KEY (id_event) REFERENCES events (id)
        )`)

        const sports = await Pool.query(`SELECT * FROM sports`)
        if (sports.rows.length < 1) {
            await populateDB();
        }

        console.log('====================');
        console.log('TERMINADO DESPLIEGUE');
        console.log('====================');

    } catch (error) {
        console.log('db');
        console.log(error)
    }
}

module.exports = createDB