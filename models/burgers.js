module.exports = function (sequelize, DataType) {
    var Burger = sequelize.define("burger", {
        burger_name: {
            type: DataType.STRING,
            allowNull: false,
        },
        devoured: {
            type: DataType.BOOLEAN,
            allowNull: false,
            defaultValue: false
        }
    })
    return Burger;
}