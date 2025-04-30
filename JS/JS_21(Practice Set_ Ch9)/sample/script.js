let promiseFive = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true;
        if (!error) {
            resolve({ username: "javascript", password: "123" });
        }
        else {
            reject("ERROR : JS went wrong");
        }
    }, 1000)
})

//handling it whth async-await

async function consumePromiseFive() {
    const response = await promiseFive;
    console.log(response);
}

consumePromiseFive();