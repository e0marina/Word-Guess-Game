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

//VARIABLES
//===============================================================================
//create array with words to be guessed
var fruits = ["kiwi", "apple", "pear", "peach", "banana"];
//Create vars to hold *numbers* of wins, tries left
var wins = 0;
var triesLeft = 15;

// Create vars that hold references to the HTML where we want to display numbers, text, or dashes
var winsText = document.getElementById("wins");
var currentWordText = document.getElementById("current-word");
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
for (i = 0; i < word.length; i++) {
  dashesArr[i] = "_";
  //show the dashes on the page
  document.getElementById("current-word").innerHTML += dashesArr;
}

// MAIN
//======================================================================

//Game
var lettersLeft = word.length;
while (lettersLeft > 0) {
  //update page with progress
  document.getElementById("current-word").innerHTML += dashesArr.join("");
  //When a user types guess
  document.onkeyup = function(event) {
    //Determines which key was pressed.
    var userGuess = event.key;
    //Update the game with the user's guess
    for (j = 0; j < word.length; j++) {
      if (word[j] === userGuess) {
        dashesArr[j] = userGuess;
        lettersLeft--;
      }
    }
  };
}
