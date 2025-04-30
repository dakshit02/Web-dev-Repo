//Correct way of using Async-Await 

function api(data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Weather data:", data);
            resolve(200);
        }, 4000)
    })
}

// This will work
async function getWeatherData() {
    await api(1); //1st call 
    await api(2); //2nd call
}

// getWeatherData();

