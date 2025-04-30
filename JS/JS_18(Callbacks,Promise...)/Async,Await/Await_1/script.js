//How not to use await funciton 

function api() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Weather data ");
            resolve(200);
        }, 4000)
    })
}


// This will throw error
await api();