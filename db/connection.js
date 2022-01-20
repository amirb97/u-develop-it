const mysql = require('mysql2');

//Connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'jhksaf6*(Tohjg268t^&TRoyylg234kj%^&',
        database: 'election'
    }
);

module.exports = db;