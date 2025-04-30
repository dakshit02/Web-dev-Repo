// How to use IIFE in Async-Await

function getData(dataId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data", dataId);
            resolve("Sucess");
        }, 4000)
    })
}

//IIFE - Immediately executes the function as defined

(async function() {
    console.log("Fetching data 1 ....");
    await getData(1);
    console.log("Fetching data 2 ....");
    await getData(2);
    console.log("Fetching data 3 ....");
    await getData(3);
})()

