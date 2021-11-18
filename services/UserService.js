const db = require('../db/index')

const query = require('../querys/Querys')


const findByName = async (email) => {
    return db.query(query.findUserByEmail, [email]).then(result => {
        return result.rows[0]
    });
}

const findAll = async () => {
    return db.query(query.findAllUsers).then(result => {
        return result.rows
    });
}

const userService = {
    findByName,
    findAll
}

module.exports = userService;
