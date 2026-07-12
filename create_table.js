var mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "taiyo3690",
    port: '3306',
    database: "college"
});

con.connect(function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log("...database is connected!");

        var sql = "CREATE TABLE student(rollno INT(4) PRIMARY KEY, sname VARCHAR(30), scity VARCHAR(30))";
        con.query(sql, function (err, result) {
            if (err) {
                console.log(err);
            } else {
                console.log("...table is created successfully!");
                console.log(result);
            }
        });

    }
});