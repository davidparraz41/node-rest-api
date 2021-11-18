const {Pool} = require('pg')
const pool = new Pool({
    user: 'restapi',
    host: 'localhost',
    database: 'restapi',
    password: 'Passw0rd',
    port: 5432,
})
module.exports = {
    query: (text, params) => {
        if (params)
            return pool.query(text, params)
        else return pool.query(text, params);
    },
}
