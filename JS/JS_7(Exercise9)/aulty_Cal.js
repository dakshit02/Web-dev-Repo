const readlineSync = require("readline-sync");

// Taking input using readline-sync
let a = parseFloat(readlineSync.question("Enter 1st number: "));
let b = parseFloat(readlineSync.question("Enter 2nd number: "));
let c = Math.random();
let d = readlineSync.question("Select any one:\n1 for addition\n2 for multiplication\n3 for subtraction\n4 for division\n");

// Performing operations
let addition = a + b;
let multiplication = a * b;
let subtraction = a - b;
let divide = a / b;

let result; // Declare result variable

if (c < 0.1) {  // 10% chance of incorrect calculation
    if (d == "1") {
        result = a - b;  // Wrong operation
    }
    else if (d == "2") {
        result = a + b;  // Wrong operation
    }
    else if (d == "3") {
        result = a / b;  // Wrong operation
    }
    else if (d == "4") {
        result = a ** b; // Wrong operation (exponentiation)
    }
} else {  // 90% chance of correct calculation
    if (d == "1") {
        result = addition;
    }
    else if (d == "2") {
        result = multiplication;
    }
    else if (d == "3") {
        result = subtraction;
    }
    else if (d == "4") {
        result = divide;
    }
}

// Display the result
console.log("Result:", result);
