const Pool = require('../../getPool');
const { v4 } = require('uuid');

/**
 * Inserta nuevo centro en la DB dandole un ID unico
 * @param {Object} center Objeto del centro
 * @returns Objeto insertado
 */
const insertCenter = async (newCenter) => {

    const query = `INSERT INTO centers (id, name, direction, phone, mobility, podotactile, ind_magnetica, email, latitude, longitude)
    VALUES ('${newCenter.id}', '${newCenter.name}', '${newCenter.direction}', '${newCenter.phone}', '${newCenter.mobility}', 
    '${newCenter.podotactile}', '${newCenter.ind_magnetica}', '${newCenter.email}', '${newCenter.latitude}', '${newCenter.longitude}')`

    try {
        await Pool.query(query)
        return newCenter
    } catch (error) {
        console.log('insertCenter');
        console.log(error)
        return false
    }
}

module.exports = insertCenter