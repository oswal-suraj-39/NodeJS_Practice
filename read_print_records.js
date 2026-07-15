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

        var sql = "SELECT * From student";
        con.query(sql, function(err, result) {
            if (err) {
                console.log(err);
            } else {
                console.log("...selected all rows from the table!");
                console.log(" roll no | sName | sCity ");
                console.log("-------------------------");
                Object.keys(result).forEach(function (key) {
                    var record = result[key];
                    console.log("    "+record.rollno+"    | "+record.sname+"   |   "+record.scity);
                });
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