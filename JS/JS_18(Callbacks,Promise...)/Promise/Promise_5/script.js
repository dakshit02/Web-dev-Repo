//Promsie Chaining 


//creating a asynchronous function
let asyFunc = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data 1");
            resolve("SuCcess");
        }, 4000)
    })
}

let asynFunc_1 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data 2");
            resolve("Success");
        }, 4000)
    })
}

console.log("Fetching data ......")

//calling asynchronous funciton
let promise = asyFunc();
promise.then((a) => {
    console.log(a)
})

console.log("Fetching data 1 ......")

//calling asynchronous funciton
let promise1 = asynFunc_1();
promise1.then((b) => {
    console.log(b)
})
