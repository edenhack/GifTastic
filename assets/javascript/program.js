const cars = ["BMW e46 M3", "Nissan 370z", "Koenisegg Agera R", "Porsche 911 GT2"];


//Renders the buttons to screen.
function renderButtons() {
    $("#buttons-view").empty();
    for (let i = 0; i < cars.length; i++) {
        const a = $("<button>");
        a.attr("type", "button");
        a.addClass("btn btn-success m-1");
        a.attr("data-car", cars[i]);
        a.text(cars[i]);
        $("#buttons-view").append(a);
    }
}


// Creates new buttons.
$("#add-car").on("click", function (event) {
    event.preventDefault();
    const car = $("#car-input").val().trim();
    cars.push(car);
    renderButtons();
});


// FIXME on click button giphy search api call.
function displayCarInfo() {

    const apiKey = "twTHuGw6oDIHbPETsVzkb0cXOJcK4Eqd";
    const carVal = $(this).attr("data-car");
    const queryURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${carVal}&limit=1&rating=G`;

    $.ajax({
            url: queryURL,
            method: "GET"
        })
        .then(function (response) {
            // console.log(response);
            const carDiv = $("<div class='carDiv'>");
            const results = response.data;
            for (let i = 0; i < results.length; i++) {
                $(this).addClass("gif");
                const imgURL = results[i].images.fixed_height_small_still.url;
                const image = $("<img>").attr("src", imgURL);
                $(this).attr("data-state", "still");
                carDiv.append(image);
                $("#Image-View").prepend(carDiv);

                //consts for still and animate gif links
                const still = results[i].images.fixed_height_small_still.url;
                const animate = results[i].images.fixed_height_small.url;

                // consts for the data attributes of the gifs
                const animatedGif = image.attr("data-animated", animate);
                const stillGif = image.attr("data-still", still);

                $(".gif").on("click", function () {
                    const state = $(this).attr("data-state");
                    if (state === "still") {
                        $(this).attr("src", animate);
                        $(this).attr("data-state", "animate");
                    } else {
                        $(this).attr("src", still);
                        $(this).attr("data-state", "still");
                    }
                });


            }
        });
};
$(document).on("click", ".btn-success", displayCarInfo);

renderButtons();