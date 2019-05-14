var express = require("express");
var burgerModel = require("../models/burger.js");
var router = express.Router();


router.get("/", function (request, response) {
    burgerModel.getAllBurgers(function (data) {

        var burgersObj = {
            burgers: data
        }
        response.render("index", burgersObj)
    })
})

router.post("/api/burger", function (request, response) {
    console.log(request.body, "this is request.body");
    var fData = request.body;
    burgerModel.postBurger(fData, function (data) {
        console.log(data, "this is the response from our database insert into");
        response.send("row added to db")
        // res.send("About burgers")
    })
})

router.put("/api/burger/:id", function (request, response) {
    console.log(request.params, "this is our request.params");
    var id = request.params.id;
    burgerModel.putBurger(id, function (data) {
        console.log(data, "row updated")
        response.end()
    })
})
router.delete("/api/burger:id", function (request, response) {
    response.send("About burgers")
})

module.exports = router;

// [RowDataPacket { id: 1, burger_name: 'Train Burger', devoured: 1 },
//     RowDataPacket { id: 2, burger_name: 'Bacon Ranch Burger', devoured: 0 },
//     RowDataPacket { id: 3, burger_name: 'Bacon Cheese', devoured: 1 },
//     RowDataPacket { id: 4, burger_name: 'Hamburger', devoured: 0 },
//     RowDataPacket { id: 5, burger_name: 'Cheeseburger', devoured: 1 }]