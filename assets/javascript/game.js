//create arrays to hold the letters inside the words that could be guessed.
kiwiArr = ["k", "i", "w", "i"];
kiwiDashArr = ["_", "_", "_", "_"];
//appleArr = ["a", "p", "p", "l", "e"];
//pearArr = ["p", "e", "a", "r"];

//IDEAS
//============================
//use empty array and push user guesses into it? then compare user guess array with computer choices?
//create a func that can handle all of the arrays
//use indexOf to find out index of an array and compare it to user's guess
//does it make sense to use an object, for instance a dash and then replaced by the guessed letter
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

// make it so computer chooses a word from array at random, before the user chooses any letters
//var computerGuess =
//computerChoice[Math.floor(Math.random() * computerChoice.length)];

//Press a key to start the game

//under current word the number of letters shown as dashes and dashes fill in with
//their respective letters as they are guessed by user

//When a user guesses a letter
//whatever key pressed should convert to uppercase

//either it is correct (true) and the letter is revealed in it's spot.
//or it is false and displays in the letters already guessed area, in uppercase.
//the number of guesses count decreases by 1

//if the user guesses the word they win, and win increases by 1

//if the user runs out of guesses:
//new word is displayed
//number of guesses returns to 15
//letters already guessed resets

//display with textContent
