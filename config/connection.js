var mysql = require("mysql");

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    var connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "0805",
        database: "burgers_db"
    });
};

connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + ErrorEvent.stack);
        return;
    }
    console.log("Connected as id: " + connection.threadID);
});

module.exports = connection;
