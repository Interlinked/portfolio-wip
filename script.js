function print(string) {
	console.log(string);
	//I like python, and print is just shorter than console.log
}

var winList = [];
var odd = 0;
var win = 0;
var chanceText = "";
var itText = "";
var chance = 0;
// defining variables that need to be global
function defineRan(percent, iteration) {
	chance = percent / 100;
	//converts a percent chance to a decimal chance
	odd = 1 / chance;
	//gets the "total" of an odd
	win = 0;

	chanceText = "Given a " + percent + "% chance to occur, your event will happen 1 in " + Math.round(odd * 100) / 100 + " times";
	itText = "In the number of iterations you requested, the program hit the chance " + win + " times";
	// updating some of the global variables defined earlier so they can actually be used. 
	print(chanceText);
	for (var i = 1; i <= iteration; i++) {
		if (Math.random() <= chance) {
			win++;
			// checks an iteration if the chance "hit" and adds to the "hit" counter
		}

	}
	winList[winList.length + 1] = win;

	print(win);

}

startButton.onclick = function() {
	var percentIn = document.getElementById("percentInput").value;
	var iterationIn = document.getElementById("iterationInput").value;
	// defining values that the user inputs for usage in the next screen
	defineRan(percentIn, iterationIn);
	var percentFinal = document.getElementById(chanceResult)
	var itFinal = document.getElementById(itResult)
	chanceResult.textContent = chanceText;
	itResult.textContent = itText = "In the number of iterations you requested, the program hit the chance " + win + " times";
	console.log(win + "w");
	// using the input variables along with text to display the results.
	document.getElementById("percentInput").style.background = "blue";
	document.getElementById("iterationInput").style.background = "blue";
	setTimeout(function(){
		document.getElementById("percentInput").style.background = "white";
		document.getElementById("iterationInput").style.background = "white";
	}, 200)


	console.log(document.getElementById("iterationInput").className)
};


























onEvent("percentInput", "input", function() {
	console.log("percentInput current text: " + getText("percentInput"));
});