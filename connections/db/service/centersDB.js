const insertCenter = require('../../service/center/insertCenter')
const { v4 } = require('uuid');

/**
 * Llenara la tabla centers
 * @param {Objects} arr Un array con todos los centros
 * @returns {Objects} Devuelve un array con los objetos creados
 */
const centersDB = async (arr) => {
    const response = []
    for (const center of arr) {

        if (center.Telefono.length > 50) {
            center.Telefono = center.Telefono.split('  ')[0]
        }

        const newCenter = {
            id: v4(),
            name: center.Centro,
            direction: center.Direccion,
            phone: center.Telefono,
            mobility: center.Movilidad,
            podotactile: center.Podotactil,
            ind_magnetica: center.Ind_magnetica,
            email: center.email,
            latitude: center.Latitud,
            longitude: center.Longitud
        }

        response.push(await insertCenter(newCenter))

    }
    return response
}

module.exports = centersDB