var orm = require("../config/orm.js");

module.exports = {
    getAllBurgers: function (cb) {
        orm.selectAll("burgers", cb)
    },
    postBurger: function (fData, cb) {
        orm.insertInto("burgers", "burger_name", fData, cb)
    },
    putBurger: function (id, cb) {
        orm.updateRow("burgers", id, cb)
    }
}