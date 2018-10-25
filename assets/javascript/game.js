//Variable to hold the Target Number string that the player is trying to reach while playing Crystal Collector
var targetNumberText = $('#targetDisplay');

//Generates a random number between 19 and 120.
var targetNumber = Math.floor(Math.random() *102) + 19;
console.log("Your target number is: "+targetNumber);
$('#targetDisplay').append("<h1>"+targetNumber+ "</h1>");

var counter = 0;

//The variables represented here are for generating the 4 random numbers for each crystals between 1-12
var crystal1 = (Math.floor(Math.random() * 12) +1);
var crystal2 = (Math.floor(Math.random() * 12) +1);
var crystal3 = (Math.floor(Math.random() * 12) +1);
var crystal4 = (Math.floor(Math.random() * 12) +1);

//Array for the crystal images used in the game.
var crystalimg = ["assets/images/Crystal_001.jpg", "assets/images/Crystal_002.jpg", "assets/images/Crystal_003.jpg","assets/images/Crystal_004.jpg"]

//Array used to include four options, one for each crystal.
var numberOptions = [crystal1, crystal2, crystal3, crystal4];
console.log(numberOptions);

//This loop add images to the crystals div and gives them css attributes.
for(var i = 0; i < numberOptions.length; i++)
{
    
    var imageCrystal = $("<img>");

    imageCrystal.addClass("crystal-image");

    imageCrystal.attr("src", crystalimg[i]);

    imageCrystal.attr("data-crystalvalue", numberOptions[i]);

    $('#crystals').append(imageCrystal);
    
}

$(".crystal-image").on("click", function(){
    var crystalValue = ($(this).attr("data-crystalvalue"));

});