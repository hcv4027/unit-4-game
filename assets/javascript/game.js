var targetNumberText = $('#targetDisplay');

//Generates a random number between 19 and 120.
var targetNumber = Math.floor(Math.random() *102) + 19;
console.log("Your target number is: "+targetNumber);
$('#targetDisplay').append("<h1>"+targetNumber+ "</h1>");

var counter = 0;

var crystal1 = (Math.floor(Math.random() * 12) +1);
var crystal2 = (Math.floor(Math.random() * 12) +1);
var crystal3 = (Math.floor(Math.random() * 12) +1);
var crystal4 = (Math.floor(Math.random() * 12) +1);

var numberOptions = [crystal1, crystal2, crystal3, crystal4];
console.log(numberOptions);

for(var i = 0; i < numberOptions.length; i++)
{
    var imageCrystal = $("<img>");
    
}