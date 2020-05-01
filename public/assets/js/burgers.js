$(function() {
    $(".change-devour").on("click", function(event) {
        var id = $(this).data("id");
        var newDevour = $(this).data("newDevour");

        var newDevourState = {
            devour: newDevour
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevourState
        }).then(function () {
            console.log("changed devour state to", newDevour);
            location.reload();
        })
    });

    $("#create-form").on("submit", function(event){
        event.preventDefault();

        var addedBurger = {
            burger_name: $("#addBurger").val().trim()
        };
        console.log(addedBurger);

        $.ajax("/api/burgers", {
            type: "POST",
            data: addedBurger
        }).then(function() {
            console.log("new burger created");
            location.reload();
        })
    })

})