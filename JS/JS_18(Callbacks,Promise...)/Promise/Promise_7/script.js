// Callback hell problem 

/*function getData(dataID, Next_dataID) {
    setTimeout(() => {
        console.log("data:", dataID);
        if (Next_dataID) {
            Next_dataID();
        }

    }, 4000);
}

getData(1,()=>{
    getData(2,()=>{
        getData(3)});
});
*/

// Using Promise and .then instead of Callbacks

function getdata(dataID) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data:", dataID);
            resolve();
        }, 4000);
    })
}

let prom1 = getdata(1);
prom1.then(() => {
    let prom2 = getdata(2);
    prom2.then(() => {
        getdata(3);
    })
})
