var mysql = require('mysql');
var con = mysql.createConnection({
    hort: "localhost",
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

        var sql = "SELECT * FROM student";
        con.query(sql, function(err, result) {
            if (err) {
                console.log(err);        
            } else {
                console.log("...selected all rows from table successfully!");
                console.log(result);
            }
        });
    
        con.end(function (err) {
            if (err) {
                console.log(err);
            } else {
                console.log("...database is disconnected!");
            }
        });
    }
});