/*function Hello()
{
    console.log("Hi");
}
setTimeout(Hello,2000);*/

//Example of Asynchronous Programming 
console.log("one");
console.log("two");

setTimeout(() => {
    console.log("Hello");
}, 2000)

console.log("three");
console.log("four");