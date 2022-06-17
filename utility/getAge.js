const getAge = (fecha) => {
    const nacimiento = new Date(fecha)
    const hoy = new Date()

    const myEdad = hoy.getFullYear() - nacimiento.getFullYear()
    if (nacimiento.getMonth > hoy.getMonth) {
        if (nacimiento.getDay > hoy.getDay) {
            return myEdad
        }
    }
    return myEdad - 1
}

module.exports = getAge