let prom1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("prom1");
        resolve("dakshit")

    }, 3000)
})

let prom2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("prom2");
        resolve("chandel")

    }, 1000)
})

let prom3 = Promise.any([prom1, prom2]);

prom3
    .then((a) => {
        console.log(a);
    })
    .catch((err) => {
        console.log(err);
    })