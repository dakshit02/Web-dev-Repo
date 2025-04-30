// getData async await 

function getData(dataId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data", dataId);
            resolve("Sucess");
        }, 4000)
    })
}

//using Async-Await to get data 

async function sendData() {
    console.log("Fetching data 1 ....");
    await getData(1);
    console.log("Fetching data 2 ....");
    await getData(2);
    console.log("Fetching data 3 ....");
    await getData(3);
}

