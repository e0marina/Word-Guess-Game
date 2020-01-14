//NOTES
//==================

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

//create array with words to be guessed
var fruits = ["kiwi", "apple", "pear", "peach", "banana"];

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
//Random fruit chosen by the computer

var word = fruits[Math.floor(Math.random() * fruits.length)];

//Create array that has dashes for where each word's letter goes
var dashesArr = [];
for (let i = 0; i < word.length; i++) {
  dashesArr[i] = "_";
}

// MAIN
//======================================================================
//When a user types a letter to guess a letter
document.onkeyup = function(event) {
  //Determines which key was pressed.
  var userGuess = event.key;
  console.log(userGuess);
};
// CLUES VIA TA CHRIS
//=================
// push method w/Arrays adds an item to the end of an array
// includes method determines if the string contains the characters or not
// The forEach() method calls a function once for each element in an array, in order.
// length...we've used this
