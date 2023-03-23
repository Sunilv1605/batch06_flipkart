const mysql = require("mysql");
connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Admin@123$$",
    database: "flipkart"
});

connection.connect(function (error) {
    if (error) {
        console.log("Unable to connect with database", error);
    } else {
        console.log("Database Connected");
    }
});

module.exports.connection = connection;