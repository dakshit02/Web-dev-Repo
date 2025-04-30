
let a = 1;
let b = 2;
let sum = a + b;

/*
//USE CASE 1
try {
    console.log("The sum is :",sum*x);
} catch (error) {
    console.log("Caudght the error");
}
finally{
    console.log("The final statement");
}
*/

//USE CASE 2
function main() {
    try {
        console.log("The sum is :", sum * x);
        return true;
    } catch (error) {
        console.log("Caudght the error");
        return false;
    }
    finally {
        console.log("The final statement");
    }
    // console.log("The final statement");
    
}

let c = main();
console.log(c)