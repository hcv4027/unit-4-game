//Variable to hold the Target Number string that the player is trying to reach while playing Crystal Collector
var targetNumberText = $('#targetDisplay');

//Generates a random number between 19 and 120.
var targetNumber = Math.floor(Math.random() *102) + 19;
console.log("Your target number is: "+targetNumber);
$('#targetDisplay').append("<h1>"+targetNumber+ "</h1>");

var counter = 0;
var wins = 0;
var loss = 0;

//The variables represented here are for generating the 4 random numbers for each crystals between 1-12
var crystal1 = (Math.floor(Math.random() * 12) +1);
var crystal2 = (Math.floor(Math.random() * 12) +1);
var crystal3 = (Math.floor(Math.random() * 12) +1);
var crystal4 = (Math.floor(Math.random() * 12) +1);

//Array for the crystal images used in the game.
var crystalimg = ["assets/images/Crystal_001.jpg", "assets/images/Crystal_002.jpg", "assets/images/Crystal_003.jpg","assets/images/Crystal_004.jpg"]

//Array used to include four options, one for each crystal.
var numberOptions = [crystal1, crystal2, crystal3, crystal4];


//This loop add images to the crystals div and gives them css attributes.
for(var i = 0; i < numberOptions.length; i++)
{
    //For each iteration of the for loop above, we create a new instance of imageCrystal.
    var imageCrystal = $("<img>");

    //This adds the crystal-image class to all 4 images that will be generated from the crystaimg array.
    imageCrystal.addClass("crystal-image");

    //This line changes the src of each of the 4 images to the paths defined in the crystalimg array.
    imageCrystal.attr("src", crystalimg[i]);

    //This line sets the value of the images loaded to the random number generated above.
    imageCrystal.attr("data-crystalvalue", numberOptions[i]);

    //Adds the crystal image to the page.
    $('#crystals').append(imageCrystal);
    
}

//Function fires when one of the crystals created above is clicked.
$(".crystal-image").on("click", function()
{
    //Use of the this keyword here means pulling out the crystal value of the crystal that is clicked.
    var crystalValue = ($(this).attr("data-crystalvalue"));

    //The parsing below is done to convert the text value into an integer, as it starts out as a string.
    crystalValue = parseInt(crystalValue);

    //The parsed value is then added to the counter, and the the display is cleared and the new value 
    //is shown to the player and added to their total score.
    counter += crystalValue;
    $("#crystalValue").empty();
    $("#crystalValue").append("<h1>" +  crystalValue + "</h1> points added");

    $("#totalScore").empty();
    $("#totalScore").append("Total score is: "+ counter);

    //If the player matches the value, the win logic below is performed, otherwise the loss logic takes over.
    //In either case the player is asked to confirm if they would like to play again.
    if(counter === targetNumber) 
    {
        wins++;
        alert("YOU WIN!");
        $("#statuswinloss").append("Wins: "+ wins);
        overStart();
    }
    else if (counter >= targetNumber)
    {
        loss++;
        alert("YOU LOSE!!");
        $("#statuswinloss").append("Losses: "+ loss);
        //Try the above with .text too!
        overStart();

    }
});

function overStart()
{
    var replay = confirm("Would you like to play again?");
    if(replay)
    {
        alert("Restart");
        $("#totalScore").empty();
        counter = 0;
    }
    else
    {
        alert("Thank you for playing!!!")
    }
}