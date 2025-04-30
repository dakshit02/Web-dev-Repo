const getPromise = () => {
    return new Promise((resolve, reject) => {
        console.log("I am a Promise");
        resolve("sucess!");
    })
}

let promise = getPromise();

promise.then((succ) => {
    console.log("Promise fulfilled",succ);
})