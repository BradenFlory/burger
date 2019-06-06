// dependencies
var express = require("express");
var exphbs = require("express-handlebars");
var db = require("./models")

var PORT = process.env.PORT || 3000;

var app = express()
app.use(express.static('public'))

app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))

app.engine("handlebars", exphbs({
    defaultLayout: "main"
}));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controller.js")

app.use(routes)

db.sequelize.sync({ force: false }).then(function () {

})

app.listen(PORT, function () {
    console.log("Server is running on Port: " + PORT);
})