var mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "suraj3690",
    port: "3306",
    database: "college"
});
con.connect(function(err) {
    if (err) {
        console.log(err);
    } else {
        console.log("...database is connected!");

        var cmd = "DELETE FROM student WHERE scity = 'pune'";
        con.query(cmd, function(err, result) {
            if (err) {
                console.log(err);
            } else {
                console.log("...deleted specific row from the table!");
                console.log(result);
            }
        });

        con.end(function(err) {
            if (err) {
                console.log(err);
            } else {
                console.log("...database is disconnected!")
            }
        });
    }
});