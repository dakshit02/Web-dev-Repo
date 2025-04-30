// Destructuring in JS

let x, y = [10, 20];
console.log(x, y);  //It will output undefined and Array(2)

//the above waywill not be enough to assign thevalue to x and y from 
// and array instead we use destructuring
let [a, b] = [10, 20];
console.log(a, b);

let [i, j, ...rest] = [10, 20, 30, 40, 50, 60, 70, 80];
console.log(i, j, rest);


// let [x1, x2, rest] = [10, 20, 30, 40, 50, 60, 70, 80];
// console.log(x1,x2,rest);


//destructuring an object
let obj = {
    myname: "Dakshit",
    gender: "Male",
    age: 22
}

let { myname, gender } = obj;

console.log(myname, gender);