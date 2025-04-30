const prom1 = new Promise(function (resolve, reject) {
    let a = Math.random();
    if (a < 0.5) {
        reject("Promise Rejected !");
    }
    else {
        resolve("Promise Resolved");
    }

});

//Handling the Promise
prom1
    .then(function (message) {
        console.log(message);
    })
    .catch(function (error) {
        console.log(error);
    });