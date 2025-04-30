let arr = [1, 2, 7, 9];
console.log(arr[0]);
console.log(arr[1]);

console.log(arr);
console.log(arr.length);
console.log(typeof arr);

//changing the values in array 
arr[0] = 10;
console.log(arr);

//Array Methods
let arr1 = [12, 14, 17, 19];
console.log(arr1.toString()); // converts the array to string

let n = [13, 100, 23, 33];
console.log(n.join(" and ")); // joins the array using what ever the user wants

console.log(n.pop()); // pops the last element of the array n

let a = [1, 45, 2, 8]
a.push(9);     //inserts the new element at the end
console.log(a);
a.shift();     // removes first element and return it
console.log(a);

let b = [12, 54, 67, 8];
b.unshift(2);   //aads element to the begning of the array 
console.log(b);

let d = [7, 8, 9, 10];
delete d[1];     // deletes the element from the array its an operation
console.log(d);

// Concating arrays 
let a1 = [1, 2, 3, 4];
let a2 = [5, 6, 7, 8];
let a3 = [9, 10, 11, 12];

console.log(a1.concat(a2,a3));
console.log(a1);

//sorting the array
z = [12,19,2,1,0,34];
z.sort();
console.log(z);

//splice
let numbers = [22,23,33,44,55];
numbers.splice(1,2,0,7,3,5);
console.log(numbers);










