// handling error in promise using .then and .catch

/*

let Promise_1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        // let error = true;
        let error = false ;

        if (!error) {
            resolve("No Error");
        }
        else {
            reject("Caught Error using catch");
        }
    }, 4000)
})

Promise_1
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    })

*/

//handling error in asyn-await using try & catch 

let Promise_1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true;
        // let error = false ;

        if (!error) {
            resolve("No Error");
        }
        else {
            reject("Caught Error using catch in asyn-await");
        }
    }, 4000)
})

async function consumePromise() {

    try {
        let result = await Promise_1;
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

consumePromise();