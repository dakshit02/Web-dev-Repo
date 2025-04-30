//Exercise 1

let a = Math.ceil(1 + Math.random() * (100 - 1));
console.log(a);

let number_guess = 0;
let score = 0;

let b = prompt("Guess a number :-");
parseInt(b);

if (a == b) {
    alert("YOU GUESSED IT CORRECT ✅");
    number_guess++;
    score = 100 - number_guess;
    console.log("SCORE :", score);
    console.log("No.of Guesses:", number_guess);

}

else if (b > a) {
    alert("The number you guessed is GREATER than the original number ");
    number_guess++;
    score = 100 - number_guess;

    while (a != b) {

        b = prompt("Guess a number :-");
        parseInt(b);

        if (a == b) {
            alert("YOU GUESSED IT CORRECT ✅");
            number_guess++;
            score = 100 - number_guess;
            console.log("SCORE :", score);
            console.log("No.of Guesses:", number_guess);
            break;

        }
        else if (b > a) {
            alert("The number you guessed is GREATER than the original number ");
            number_guess++;
            score = 100 - number_guess;

        }
        else if (b < a) {
            alert("The number you guessed is SMALLER than the original number ");
            number_guess++;
            score = 100 - number_guess;

        }
    }
}

else if (b < a) {
    alert("The number you guessed is SMALLER than the original number ");
    number_guess++;
    score = 100 - number_guess;

    while (a != b) {

        b = prompt("Guess a number :-");
        parseInt(b);

        if (a == b) {
            alert("YOU GUESSED IT CORRECT ✅");
            number_guess++;
            score = 100 - number_guess;
            console.log("SCORE :", score);
            console.log("No.of Guesses:", number_guess);
            break;

        }
        else if (b > a) {
            alert("The number you guessed is GREATER than the original number ");
            number_guess++;
            score = 100 - number_guess;

        }
        else if (b < a) {
            alert("The number you guessed is SMALLER than the original number ");
            number_guess++;
            score = 100 - number_guess;

        }
    }
}





