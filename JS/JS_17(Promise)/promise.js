// Promise is used as an alternative of Callbacks 
const myPromise = new Promise((resolve, reject) => {

    let sucess = false;
    setTimeout(() => {
        if (sucess) {
            resolve("Data is fetched");

        }
        else {
            reject("Error fetching data");
        }
    }, 3000);

});

//Handling the promises 
myPromise
    .then((msg) => {
        console.log(msg)
    })

    .catch((err) => {
        console.log(err)
    })

    .finally(() =>{
        console.log("Operation sucessful")
    }); 