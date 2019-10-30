const apiKey = "twTHuGw6oDIHbPETsVzkb0cXOJcK4Eqd";
let search = $(".carButton").val();
const queryURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${search}&limit=1&rating=G`;
const cars = ["BMW e46 M3","Nissan 370z","Koenisegg Agera R","Porsche 911 GT2"];

function renderButtons(){
    $("#buttons-view").empty();
    for (let i = 0; i < movies.length; i++){
        const a = $("<button>");
        a.addClass("car");
        a.attr("data-name",cars[i]);
        a.text(movies[i]);
        $("button-view").append(a);
    }
}

$("add-car").on("click",function(event){
    event.preventDefault();
    const car = $("#car-input").val().trim();
    cars.push(car);
    renderButtons();
})
