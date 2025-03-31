let favNumber = 14; 
let userGuess; 

while (userGuess !== favNumber) {
    userGuess = parseInt(prompt("Guess my Favorite Number:"));

    if (userGuess < favNumber) {
        console.log("Too low!");
    } else if (userGuess > favNumber) {
        console.log("Too high!");
    } else {
        console.log("Correct!");
    }
}
