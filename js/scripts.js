$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    event.preventDefault();

    var favoriteColorInput = $("input#favoriteColor").val();
    console.log(favoriteColorInput);
    var favoriteFoodInput = $("input#favoriteFood").val();
    var favoriteAnimalInput= $("input#favoriteAnimal").val();
    var favoriteDrinkInput = $("input#favoriteDrink").val();

    var favorites = [favoriteColorInput,favoriteFoodInput, favoriteAnimalInput, favoriteDrinkInput];
    console.log(favorites);
    var favorites2 = favorites.slice(0,3);
    var favorites3 = []

    favorites3 = favorites2.push((favorites[1].toString()), (favorites[0].toString()), (favorites[2].toString()));
    console.log(favorites3);



    $(".favoriteColor").text(favoriteColorInput);
    $(".favoriteFood").text(favoriteFoodInput);
    $(".favoriteAnimal").text(favoriteAnimalInput);
    $(".favoriteDrink").text(favoriteDrinkInput);



    $("#story").show();

    // $("input:radio[name=flavor]:checked").children("value")first();

  });
});
