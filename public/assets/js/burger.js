// console.log("yo");

$(document).on("click", ".done", function (event) {
    event.preventDefault();
    console.log("complete has been clicked on");
    var id = $(this).attr("data-id");
    console.log(id);
    $.ajax({
        url: "/api/burger/" + id,
        method: "PUT",
        data: {
            burger: $("#burger").val().trim()
        }
    }).then(function (serverResponse) {
        console.log(serverResponse);
        location.reload();
    })
})
$(document).on("click", ".delete", function (event) {
    event.preventDefault();
    console.log("delete has been clicked on");
    var id = $(this).attr("data-id");
    console.log(id);
    $.ajax({
        url: "/api/burger/" + id,
        method: "DELETE",
        data: {
            burger: $("#burger").val().trim()
        }
    }).then(function (serverResponse) {
        console.log(serverResponse);
        location.reload();
    })
})
$(document).on("click", "#addBurger", function (event) {
    event.preventDefault();
    console.log("Add burger has been clicked on");
    $.ajax({
        url: "/api/burger",
        method: "POST",
        data: {
            burger: $("#burger").val().trim()
        }
    }).then(function (serverResponse) {
        console.log(serverResponse, "this is the response from the server");
        location.reload();
    })
})