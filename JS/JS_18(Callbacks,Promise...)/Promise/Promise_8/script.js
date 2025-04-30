function getdata(dataID) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data:", dataID);
            resolve();
        }, 4000);
    })
}

// WAY 1 (PROMISE CHAINING )

/*
let prom1 = getdata(1);
prom1.then(() => {
    let prom2 = getdata(2);
    prom2.then(() => {
        getdata(3);
    })
})
*/

//WAY 2 (PROMISE CHAINING ACTUAL)
getdata(1)
    .then(() => {
        return getdata(2);
    })
    .then(() => {
        return getdata(3);
    })
