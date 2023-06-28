var prompt = require('prompt-sync')();

// Generate a random integer from 0 to 10
function generateNum() {
    return Math.floor(Math.random() * 11);
}

// Ask the user for input
function guessNum() {
    var n = prompt('Guess the number? ');
    return parseInt(n);
}

while (true) {
    var randomNum = generateNum();
    var count = 0;
    var isWin = false;

    while (count < 4) {
        var n = guessNum();

        if (n === randomNum) {
            console.log("The player wins!");
            isWin = true;
            break;
        } else {
            if (n > randomNum) {
                console.log("Your guess is larger than the random number.");
            } else {
                console.log("Your guess is smaller than the random number.");
            }
        }

        count = count + 1;
        if (count < 4) {
            console.log("Incorrect guess. Try again!");
        }
    }

    if (count === 4 && !isWin) {
        console.log("Sorry, you lose!");
    }

    var playAgain = prompt("Do you want to play again? (Y/N): ");
    if (playAgain.toUpperCase() !== "Y") {
        break;
    }
}
