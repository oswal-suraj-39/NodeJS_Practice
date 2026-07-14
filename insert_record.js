var mysql = require('mysql');
var prompt = require('prompt-sync')();
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
        
        var rollNo = parseInt(prompt('enter roll number: '));
        var sName = prompt('enter student name: ');
        var sCity = prompt('enter student city: ');
        var sql = "INSERT INTO student (rollno, sname, scity) VALUES (?, ?, ?)";

        con.query(sql, [rollNo, sName, sCity], function(err, result) {
            if (err) {
                console.log(err);
            } else {
                console.log("...record is insert into table successfully!");
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