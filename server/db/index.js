const mysql = require ('mysql');

const pool = mysql.createPool({
    connectionLimit: 10,
    password: 'P@ssword12345',
    user: 'root',
    database: 'ihp',
    host: 'localhost',
    port: '3306'
});

let ihpdb = {};

ihpdb.all = () => {
    return new Promise((resolve, reject) => {
        pool.query(`SELECT * FROM Inclusionary_Housing_Projects`, (err, results) => {
            if (err) {
                return reject(err);
            }
            return resolve(results);

        })
    })
}

module.exports = ihpdb;