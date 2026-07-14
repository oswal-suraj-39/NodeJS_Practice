var mysql = require('mysql');
var prompt = require('prompt-sync')();
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "taiyo3690",
    port: '3306',
    database: "college"
});