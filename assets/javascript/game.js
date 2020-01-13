//whatever key pressed should convert to uppercase

//either it is correct (true) and the letter is revealed in it's spot.
//or it is false and displays in the letters already guessed area, in uppercase.
//the number of guesses count decreases by 1

//if the user guesses all the letters in the word... they win, and win increases by 1

//if the user runs out of guesses:
//new word is displayed
//number of guesses returns to 15
//letters already guessed resets

//display with textContent

//create arrays to hold the letters inside the words that could be guessed.
kiwiArr = ["k", "i", "w", "i"];
appleArr = ["a", "p", "p", "l", "e"];
pearArr = ["p", "e", "a", "r"];
bananaArr = ["b", "a", "n", "a", "n", "a", "s"];

//VARIABLES
//===============================================================================

//Create vars to hold *numbers* of wins, tries left
var wins = 0;
var triesLeft = 15;

// Create vars that hold references to the HTML where we want to display numbers, text, or dashes
var winsText = document.getElementById("wins");
var currentWordText = document.getElementById("current-word");
var wordDashesText = document.getElementById("word-dashes");
var numTriesLeftText = document.getElementById("num-tries-left");
var lettersAlreadyGuessedText = document.getElementById(
  "letters-already-guessed"
);

// FUNCTIONS
// ==============================================================================

//Have the user try and guess the first word.
//Loops through the letters in the array
// for (let i = 0; i < kiwiArr.length; i++) {
//   const element = kiwiArr[i];
//   if (userGuess === kiwiArr[i]) {
//     console.log("yay");

//   }

// }
//When a user types a letter to guess a letter
document.onkeyup = function(event) {
  //Determines which key was pressed.
  var userGuess = event.key;
  console.log(userGuess);
  //Loops through the letters in the array
  for (let i = 0; i < kiwiArr.length; i++) {
    const element = kiwiArr[i];
    //if userGuess matches a letter in the array, console log yay
    if (userGuess === kiwiArr[i]) {
      console.log("yay");
    }
  }
};
// CLUES
//=================
// push method w/Arrays adds an item to the end of an array
// includes method determines if the string contains the characters or not
// The forEach() method calls a function once for each element in an array, in order.
// length...we've used this

// OLD CODE
//========================
// //Define a function that we can pass through multiple arrays
// function arrayMatch(arr) {
//   //We then loop through the selected array
//   for (i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
//     if (userGuess === arr[i]) {
//       console.log("matched w word!");
//     }
//   }
//   console.log("__________");
// }
// //under current word the number of letters shown as dashes and dashes fill in with
// //their respective letters as they are guessed by user

// //FUNCTION CALLS
// //===============================
// arrayMatch(kiwiArr);
// arrayMatch(appleArr);
// arrayMatch(pearArr);
// arrayMatch(bananaArr);
