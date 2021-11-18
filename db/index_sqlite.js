const Database = require('better-sqlite3');
const path = require('path');
const db = new Database('/Users/davidguillermoparrazamorano/Documents/OWN/node-rest-api/db/estudiantes.db', {verbose: console.log});

function query(sql, params) {
    if (params)
        return db.prepare(sql).all(params);
    else return db.prepare(sql);
}

module.exports = {
    query
}
