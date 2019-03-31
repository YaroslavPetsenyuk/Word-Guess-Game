var wins = "";
var remGuesses = 10;
var usedLetters = [];
var currentWord = [];
var wordsToGuess = [
    "buldozer",
    "pancake",
    "surgeon",
    "penguin",
    "bananna",
    "bulldog",
    "giraffe",
    "rabbit",
    "trumbone",
    "colonoscopy",
    "inspection",
    "javascript"
];

var winsAmount = document.getElementById("wins-amount");
var winsAmount = document.getElementById("wins-amount");

var ranWord = wordsToGuess[Math.floor(Math.random() * wordsToGuess.length)];
console.log(ranWord);

var placeHolder = document.getElementById("current-word-text")

function makeSecret() {
    for (var i = 0; i < ranWord.length; ++i) {
        var secret = currentWord[i] = "_";
    }
}






document.onkeyup = function (choice) {

    var userGuess = choice.key;
}






