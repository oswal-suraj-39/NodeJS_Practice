var mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "taiyo3690",
    port: "3306",
    database: "college"
});

con.connect(function(err) {
    if (err) {
        console.log(err);
    } else {
        console.log("...database is connected!");

        con.end(function(err) {
            if (err) {
                console.log(err);
            } else {
                console.log("...database is disconnected!");
            }
        });
    }
});