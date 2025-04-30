//using setTimeout in try and catch 

let a = 12;
let b = 23;

let sum = parseInt(a) + parseInt(b);
try {
    setTimeout(() => {
        console.log(sum * x);
    }, 3000)

} catch (error) {
    console.log("Caught the error !");
}