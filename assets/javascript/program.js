const cars = ["BMW e46 M3", "Nissan 370z", "Koenisegg Agera R", "Porsche 911 GT2"];

function renderButtons() {
    $("#buttons-view").empty();
    for (let i = 0; i < cars.length; i++) {
        const a = $("<button>");
        a.addClass("car");
        a.attr("data-car", cars[i]);
        a.text(cars[i]);
        $("#buttons-view").append(a);
    }
}

$("#add-car").on("click", function (event) {
    event.preventDefault();
    const car = $("#car-input").val().trim();
    cars.push(car);
    renderButtons();
});

$(".car").on("click", function () {

    const apiKey = "twTHuGw6oDIHbPETsVzkb0cXOJcK4Eqd";
    const carVal = $(this).attr("data-car");
    const queryURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${carVal}&limit=1&rating=G`;

    $.ajax({
            url: queryURL,
            method: "GET"
        })
        .then(function (response) {
            console.log(response);
        });
});

renderButtons();