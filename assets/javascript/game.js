//NOTES
//==================

//either it is correct (true) and the letter is revealed in it's spot.
//or it is false and displays in the letters already guessed area, in uppercase.
//the number of guesses count decreases by 1

//if the user guesses all the letters in the word... they win, and win increases by 1

//if the user runs out of guesses:
//new word is displayed
//number of guesses returns to 15
//letters already guessed resets

//display with textContent

// **Check if a letter exists inside the array at all.
// **If the letter exists somewhere in the word, then figure out exactly where (which indices).

// // else
// wrongGuesses.push(letter);
// numGuesses--;

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

//SOME MORE VARS
//Random fruit chosen by the computer
var word = fruits[Math.floor(Math.random() * fruits.length)];
//test that the computer is choosing a word from the array
console.log(word);
//note letters left for filling-in when user guesses the word
var lettersLeft = word.length;

//MAIN
//======================================================================
//dashes for the length of the word...
var dashesArr = [];
for (i = 0; i < word.length; i++) {
  dashesArr[i] = "_";
  //show the dashes on the page
  document.getElementById("dashes-section").innerHTML = dashesArr;
}

//GAME
//User presses a key to guess a letter, and tries left decreases
//split the word into indiv. characters (found line 64 and split on stackoverflow)
var result = "";
word.split("").forEach(function keyPressFunction(userGuess) {
  //listens for alpha key presses, since we are only interested in alpha characters
  document.addEventListener("keypress", function(event) {
    switch (event.keyCode) {
      case 97:
        console.log("a");
        keyPressFunction("a");
        break;
      case 98:
        console.log("b");
        keyPressFunction("b");
        break;
      case 99:
        console.log("c");
        keyPressFunction("c");
        break;
      case 100:
        console.log("d");
        keyPressFunction("d");
        break;
      case 101:
        console.log("e");
        keyPressFunction("e");
        break;
      case 102:
        console.log("f");
        keyPressFunction("f");
        break;
      case 103:
        console.log("g");
        keyPressFunction("g");
        break;
      case 104:
        console.log("h");
        keyPressFunction("h");
        break;
      case 105:
        console.log("i");
        keyPressFunction("i");
        break;
      case 106:
        console.log("j");
        keyPressFunction("j");
        break;
      case 107:
        console.log("k");
        keyPressFunction("k");
        break;
      case 108:
        console.log("l");
        keyPressFunction("l");
        break;
      case 109:
        console.log("m");
        keyPressFunction("m");
        break;
      case 110:
        console.log("n");
        keyPressFunction("n");
        break;
      case 111:
        console.log("o");
        keyPressFunction("o");
        break;
      case 112:
        console.log("p");
        keyPressFunction("p");
        break;
      case 113:
        console.log("q");
        keyPressFunction("q");
        break;
      case 114:
        console.log("r");
        keyPressFunction("r");
        break;
      case 115:
        console.log("s");
        keyPressFunction("s");
        break;
      case 116:
        console.log("t");
        keyPressFunction("t");
        break;
      case 117:
        console.log("u");
        keyPressFunction("u");
        break;
      case 118:
        console.log("v");
        keyPressFunction("v");
        break;
      case 119:
        console.log("w");
        keyPressFunction("w");
        break;
      case 120:
        console.log("x");
        keyPressFunction("x");
        break;
      case 121:
        console.log("y");
        keyPressFunction("y");
        break;
      case 122:
        console.log("z");
        keyPressFunction("z");
        break;

      default:
        break;
    }
  });
  triesLeft--;
  //see if the user's guess matches a letter inside the word
  if (userGuess === word) {
    //display in the dashes, the correct letter
    document.getElementById("dashes-section").innerHTML = userGuess;
  } else {
    document.getElementById("letters-already-guessed").innerHTML += userGuess;
  }

  //Display the wins, losses, guesses left, list guesses so far
  winsText.textContent = "wins: " + wins;
  numTriesLeftText.textContent = "num-tries-left: " + triesLeft;
});
