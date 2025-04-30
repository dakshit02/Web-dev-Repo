//PROMISE 1
let prom1 = new Promise((resolve,reject) => {
    setTimeout(() => {

        resolve("HARRY");
        console.log("prom1");

    }, 1000);
})

//PROMISE 2
let prom2 = new Promise((resolve,reject) => {
    setTimeout(() => {

        resolve("DAKSHIT");
        console.log("prom2");

    }, 2000);
})

//PROMISE 3
let prom3 = new Promise((resolve,reject) => {
    setTimeout(() => {

        reject("AYUSH");
        console.log("prom3");

    }, 3000);
})

//PROMISE 4
let prom4 = new Promise((resolve) => {
    setTimeout(() => {

        resolve("CHANDEL");
        console.log("prom4");

    }, 4000);
})


//Creating PROMISE 5 for Promise.allSettled()

let prom5 = Promise.allSettled([prom1, prom2, prom3, prom4]);

prom5
    .then((a) => {
        console.log(a)
    })
    .catch((err)=>{
        console.log(err)
    })


