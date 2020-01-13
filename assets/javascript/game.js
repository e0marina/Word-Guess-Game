//create arrays to hold the letters inside the words that could be guessed.
kiwiArr = ["k", "i", "w", "i"];
appleArr = ["a", "p", "p", "l", "e"];
pearArr = ["p", "e", "a", "r"];
bananaArr = ["b", "a", "n", "a", "n", "a", "s"];

//not sure that computer needs to even make a choice
//coputerWordChoice = ["kiwi", "apple", "pear", "banana"];

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

// Computer chooses a word at random, before the user chooses any letters
// var computerRandomChoice =
//   coputerWordChoice[Math.floor(Math.random() * coputerWordChoice.length)];

// // Computer matches computerRandomChoice with the spelled-out-letter fruit name's 1st letter

// if (kiwiArr || pearArr || bananaArr || appleArr === computerRandomChoice) {
//   console.log("true");
//   console.log(computerRandomChoice);
// }

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

//IDEAS
//============================
//use empty array and push user guesses into it? then compare user guess array with computer choices?
//create a func that can handle all of the arrays
//use indexOf to find out index of an array and compare it to user's guess
//does it make sense to use an object, for instance a dash and then replaced by the guessed letter
//should be able to write something that uses length to "count" how many letters in a array and display that many dashes
