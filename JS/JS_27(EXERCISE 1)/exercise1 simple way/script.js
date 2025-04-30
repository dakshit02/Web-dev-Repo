let target = Math.ceil(Math.random() * 100);
let guesses = 0;
let guess;

while (true) {
    guess = parseInt(prompt("Guess a number between 1 and 100:"));
    guesses++;

    if (guess === target) {
        alert("YOU GUESSED IT CORRECT ✅");
        console.log("SCORE:", 100 - guesses);
        console.log("No. of Guesses:", guesses);
        break;
    } else if (guess > target) {
        alert("The number you guessed is GREATER than the original number");
    } else if (guess < target) {
        alert("The number you guessed is SMALLER than the original number");
    }
}
