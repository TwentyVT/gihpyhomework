

var animalArray = ["dog", "cat", "falcon", "iguana", "parrot", "sloth", "lion", "tiger", "bear", "gorrilla"]

function buttonGen() {

    $("#button-holder").empty();
    for (i = 0; i < animalArray.length; i++) {
        var animalBtn = $("<button>")
        animalBtn.text(animalArray[i]);
        animalBtn.attr("data-name", animalArray[i]);
        animalBtn.addClass("giffer")
        $("#button-holder").append(animalBtn)
    }
}


$(document).ready(function () {

    buttonGen();

    $("#button-holder").on("click", ".giffer", function () {

        $("#moving-animals").empty();
        var animal = $(this).attr("data-name");
        console.log(animal)
        var apiKey = "w77QS0VOmL8OjHFDNp0MZhC3LVOul8W1"

        var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=" + apiKey + "&limit=10&q=" + animal

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response);

            var results = response.data

            for (var i = 0; i < results.length; i++) {

                var animalDiv = $("<div>");

                var p = $("<p>").text("Rating: " + results[i].rating);
                var animalImage = $("<img>");
                var animateLink = results[i].images["fixed_height"].url;
                var stillLink = results[i].images["fixed_height_still"].url;
                animalImage.attr('src', stillLink);
                animalImage.attr('data-animate', animateLink);
                animalImage.attr('data-still', stillLink);
                animalImage.attr('data-state', "still")
                animalImage.addClass('gif');
                animalImage.attr("src", results[i].images["fixed_height_still"].url);

                animalDiv.append(p, animalImage)
                $("#moving-animals").prepend(animalDiv);

            }


        });

        $("#moving-animals").on("click", ".gif", function () {
            var state = $(this).attr("data-state");
            if (state === "still") {
                $(this).attr('src', $(this).data("animate"));
                $(this).attr("data-state", "animate");
            } else {
                $(this).attr('src', $(this).data("still"));
                $(this).attr("data-state", "still");
            }
        });

        $("#select-animal").on("click", function (event) {

            event.preventDefault();
            var inputAnimal = $("#animal-spot").val();
            animalArray.push(inputAnimal)
            buttonGen();
        });
    });
    });