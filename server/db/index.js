const mysql = require ('mysql');

const pool = mysql.createPool({
    connectionLimit = 10,
    password: 'blahblah',
    user: 'soda-can',
    databse: 'IHP',
    host: 'localhost',
    port: '3306'
});

let ihpdb = {};

ihpdb.all = () => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM soda', (err, results) => {
            if (err) {
                return reject(err);
            }
            return resolve(results);

        })
    })
}

module.exports = ihpdb;