

var animalArray = ["dog", "cat", "falcon", "iguana", "parrot", "sloth", "lion", "tiger", "bear", "gorrilla"]

function buttonGen () {

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

$("#button-holder").on("click", ".giffer",  function () {

    var animal = $(this).attr("data-name");
    console.log(animal)
    var apiKey = "w77QS0VOmL8OjHFDNp0MZhC3LVOul8W1"

    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=" + apiKey + "&limit=10&q=" + animal

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
    });
});

$("#select-animal").on("click", function (event) {

    event.preventDefault();
    var inputAnimal = $("#animal-spot").val();
    animalArray.push(inputAnimal)
    buttonGen();
});

});