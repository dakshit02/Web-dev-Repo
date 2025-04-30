//Exercise 2
let choice = prompt("Enter S-Snake,W-Water,G-Gun");
let letters = ['S', 'W', 'G'];
let randomLetter = letters[Math.floor(Math.random() * letters.length)];
console.log(randomLetter);

let flag = true;

while (flag == true) {
    if (choice == randomLetter) {
        alert("Its a tie !");
        randomLetter = letters[Math.floor(Math.random() * letters.length)];
        choice = prompt("Enter S-Snake,W-Water,G-Gun");
    }
    else if (choice == 'S' && randomLetter == 'W') {
        alert("You won");
        flag = false;
    }
    else if (choice == 'S' && randomLetter == 'G') {
        alert("You lost");
        flag = false;
    }
    else if (choice == 'W' && randomLetter == 'G') {
        alert("You won");
        flag = false;
    }
    else if (choice == 'W' && randomLetter == 'S') {
        alert("You lost");
        flag = false;
    }
    else if (choice == 'G' && randomLetter == 'S') {
        alert("You won");
        flag = false;
    }
    else if (choice == 'G' && randomLetter == 'W') {
        alert("You lost");
        flag = false;
    }
}