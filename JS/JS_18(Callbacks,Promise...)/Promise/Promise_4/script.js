// All about .catch

const getPromise = ()=>{
    return new Promise((resolve, reject) => {
        console.log("Hi I am  a Promise!");
        reject("REJECTED !");
    })
}

let promise = getPromise();

promise.catch((err)=>{
    console.log("I was :",err)
})