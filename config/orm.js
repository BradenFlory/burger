var connection = require("./connection.js");

module.exports = {
    selectAll: function (table, cb) {
        var queryString = "SELECT * FROM ??"

        connection.query(queryString, [table], function (err, data) {
            if (err) {
                throw err;
            }
            cb(data)
        })
    },
    insertInto: function (table, col, fData, cb) {
        var queryString = "INSERT INTO ?? (??) VALUES (?)"

        connection.query(queryString, [table, col, fData.burger], function (err, data) {
            if (err) {
                throw err;
            }
            cb(data)
        })
    },
    updateRow: function (table, id, cb) {
        var queryString = "UPDATE ?? SET devoured = 1 WHERE id = ?;"

        connection.query(queryString, [table, id], function (err, data) {
            if (err) {
                throw err;
            }
            cb(data)
        })
    }
}