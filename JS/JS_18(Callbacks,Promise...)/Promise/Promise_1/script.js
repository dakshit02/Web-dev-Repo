

//Promise in Pending
let any_name = new Promise((resolve, reject) => {
    console.log("The Promise is in Pending state!");
})
console.log(any_name);

//Promise is Fulfilled(resolved)
let promise2 = new Promise((resolve, reject) => {
    resolve("The Promise is in Resolved state!");
})
console.log(promise2);

//Promise is Rejected
let promise3 = new Promise((resolve, reject) => {
    reject("The promise is in Rejected state")
})
console.log(promise3);