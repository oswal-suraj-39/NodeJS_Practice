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

        var sql = "SELECT rollno, sname, scity From student WHERE scity = 'y'";
        con.query(sql, function(err, result) {
            if (err) {
                console.log(err);
            } else {
                console.log("...selected specific row from the table!");
                console.log(result);
            }
        });

        con.end(function(err) {
            if (err) {
                console.log(err);
            } else {
                console.log("...database is disconnected!");
            }
        });
    }
});