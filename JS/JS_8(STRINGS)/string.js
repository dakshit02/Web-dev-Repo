let str = "Dakshit";
console.log(str[0]);
console.log(str[1]);
console.log(str[2]);
console.log(str[3]);
console.log(str[4]);
console.log(str[5]);
console.log(str[6]);
// console.log(str[7]);

console.log(str.length)

let real_name = "ayush";
let friend = "singh";

console.log(`His name is ${real_name} and his friends name is ${friend}`);

//Upper Case & lower case & length
let b="Dakshit";
console.log(b.toUpperCase());
console.log(b.toLowerCase());
console.log(b.length);

//slice
console.log(b.slice(1,4));
console.log(b.slice(1));

//replace
let z ="DakshitDa";
console.log(z.replace("Da","77")); //only one occurence

//concatenation
console.log(b.concat(z,"Mahi","Rahul"));

//removing White Spaces
let n_name= " ayush ";
console.log(n_name);
console.log(n_name[0]);  // this will print a white space
let new_name=n_name.trim();
console.log(new_name[0]);

