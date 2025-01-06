const mysql = require('mysql');
const dbConfig = require("../config/dbconnect");

const connection = mysql.createConnection({
    host: dbConfig.HOST,
    user: dbConfig.USER,
    password: dbConfig.PASS,
    database: dbConfig.DB,
    port: dbConfig.PORT
});

module.exports = connection;