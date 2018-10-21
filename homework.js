$(document).ready(function () {

var animalArray = ["dog", "cat", "falcon", "iguana", "parrot", "sloth", "lion", "tiger", "bear", "gorrila"]

for (i = 0; i < animalArray.length; i++){

    var animalBtn = $("<button>")
    animalBtn.text(animalArray[i]);
    animalBtn.attr("data-name", animalArray[i]);   
    $("#button-holder").append(animalBtn)
}

var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=w77QS0VOmL8OjHFDNp0MZhC3LVOul8W1&q=" + animal
$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (response) {
    console.log(response);
});

function animalGifMaker(animal) {

    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=w77QS0VOmL8OjHFDNp0MZhC3LVOul8W1&q=" + animal
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
    });

   
}

$("#select-artist").on("click", function (event) {
    // Preventing the button from trying to submit the form
    event.preventDefault();
    // Storing the artist name
    var inputArtist = $("#artist-input").val().trim();

    // Running the searchBandsInTown function(passing in the artist as an argument)
    searchBandsInTown(inputArtist);
});

})