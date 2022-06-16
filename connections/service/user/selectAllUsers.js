const Pool = require('../../getPool');

const selectAllUsers = async () => {
    try {
        const users = await Pool.query('SELECT * FROM users')
        return users.rows
    } catch (err) {
        console.log('selectAllUsers');
        console.log(err);
    }
}

module.exports = selectAllUsers