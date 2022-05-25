const mysql = require('mysql2') //tells the config file with package we are using

const pool = mysql.createPool({ //sets simultaneous connection limits and login credentials for database
    connectionLimint: 10,
    host:'root',
    password:'root',
    database:'toursDB'

});

module.exports = pool;