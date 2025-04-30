let x = 5;
let y = 5;
let z = 12;

if ((x == y) && (y != z)) {
    console.log("True statement");
}
else {
    console.log("False Statement");
}

if ((x != y) && (y != z)) {
    console.log("True statement");
}
else {
    console.log("False Statement");
}

if ((x != y) || (y != z)) {
    console.log("True statement");
}
else {
    console.log("False Statement");
}

if (!((x != y) || (y != z))) {
    console.log("True statement");
}
else {
    console.log("True Statement but ! made it false so overall false statement");
}



