let prom_1 = new Promise((resolve, reject) => {
    setTimeout((params) => {
        resolve("Promise 1 resolved");
    }, 1000)
})
let prom_2 = new Promise((resolve, reject) => {
    setTimeout((params) => {
        reject("Promise 2 rejected");
    }, 2000)
})
let prom_3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise 3 resolved");
    }, 3000)
})

//using Promise.all() for consuming promises
/*
async function consumePromise() {
    console.log("Fetching the promises :-")
        try {
            let response = await Promise.all([prom_1, prom_2, prom_3])
            console.log(response)
        } catch (error) {
            console.log(error)
        }
    console.log("Promised Fetched !....")


}
 */


//sequential await for consuming promises
async function consumePromise() {
    console.log("Fetchig the promise 1....");
    try {
        let result_1 = await prom_1
        console.log(result_1)
    } catch (error) {
        console.log(error)
    }

    console.log("Fetchig the promise 2....");
    try {
        let result_2 = await prom_2
        console.log(result_2)
    } catch (error) {
        console.log(error)
    }

    console.log("Fetchig the promise 3....");
    try {
        let result_3 = await prom_3
        console.log(result_3)
    } catch (error) {
        console.log(error)
    }
}

consumePromise();