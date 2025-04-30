function sum(a, b, c, d) {
    return a + b + c + d;
}

let arr = [1, 2, 3, 4];
console.log(sum(arr[0], arr[1], arr[2], arr[3]));

//We can Also use Spread Syntax for this 
console.log(sum(...arr));

//Spread Syntax in object
const obj = { ...arr };
console.log(obj);

/*the above obj will set the index and values of the arr like this : -
    const obj = {
        0: 1,
        1: 2,
        2: 3,
        3: 4
    }
*/


// Quick Quiz
const a ="the",b="no"
const c = {a,b};
console.log(c);






