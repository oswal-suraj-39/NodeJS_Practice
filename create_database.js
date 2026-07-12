var mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "taiyo3690",
    port: '3306'
});

con.connect(function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log("...database is connected!");

        var spl = "CREATE DATABASE college";
        con.query(spl,function (err, result) {
            if (err) {
                console.log(err);
            } else {
                console.log("...query is successfully run!");
                console.log(result);
            }
        });
    }
});