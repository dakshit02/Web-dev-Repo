//Replicating How API actually return Promises
//The function getData kind off works like API

function getData(dataId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data", dataId);
            resolve("Sucess HO GAYA ")

        }, 5000);
    }); 
}

