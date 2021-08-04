// if the letter is wrong, reduce number of chances remaining
//////////after 5 gusses, restart cpuPick
// keep doing this until word guess, or run out of chances
//////////once no more "_", then give a congrats
// restart the game



// CPU WORDS TO PICK
var wordsToGuess = ["gemini", "nitro", "ice", "thunder", "blaze", "lace", "gold", "malibu", "zap", "turbo", "diamond", "titan", "rolaids"];

// RANDOM PICK FROM CPU
var cpuPick = wordsToGuess[Math.floor(Math.random() * wordsToGuess.length)];
var cpuPickLength = cpuPick.length;
var gladiator = document.getElementById("wordToGuessSpan");
var underlines = [];
for (var i = 0; i < cpuPickLength; i++) {
    underlines.push("_");
}

// ADD FUNCTION TO CLEAN CODE UP
function updateGuess() {
    var underlineString = underlines.join(" ");
    gladiator.textContent = underlineString;
}

// RUN FUNCTION ONCE TO ACTIVATE
updateGuess();

// PLAYER GUESS IF RIGHT AND ELSE WRONG
document.onkeyup = function(input) {
    var playerGuess = input.key;
    if (cpuPick.includes(playerGuess)) {
        // if (indexOf(underlines)) {
        for (var j = 0; j < underlines.length; j++) {
            if (cpuPick[j] === playerGuess) {
                underlines[j] = playerGuess;
            }
        }
        updateGuess();
    }
    else {
    // remove life
    // letters used
    }
}

// LIFE IS 0
// function(lifeCount) {
//     if (guessesRemainingSpan===0) {

//     }
// }