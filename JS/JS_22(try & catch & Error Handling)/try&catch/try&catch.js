//try and catch errors 

let a = prompt("Enter first number");
let b = prompt("Enter second number");

let sum = parseInt(a) + parseInt(b);

//x is not defined 
//so we will handel the error it will throw :-

try {
    console.log(sum *x);
} catch (error) {
    console.log("Caught the error");
}