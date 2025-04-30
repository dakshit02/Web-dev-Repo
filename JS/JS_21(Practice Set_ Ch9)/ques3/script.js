let prom = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("YOUR PROMISE WAS REJECTED !");
    },3000)
})

async function getPromiseValue() {
    
    try {
        let result = await prom ;
        console.log(result)
    } catch (error) {
        console.log(error);
    }
}

getPromiseValue();