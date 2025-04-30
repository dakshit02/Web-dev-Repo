//PROMISE 1
let prom1 = new Promise((resolve) => {
    setTimeout(() => {

        resolve("HARRY");
        console.log("prom1");

    }, 5000);
})

//PROMISE 2
let prom2 = new Promise((resolve) => {
    setTimeout(() => {

        resolve("DAKSHIT");
        console.log("prom2");

    }, 2000);
})

//PROMISE 3
let prom3 = new Promise((resolve) => {
    setTimeout(() => {

        resolve("AYUSH");
        console.log("prom3");

    }, 3000);
})

//PROMISE 4
let prom4 = new Promise((resolve) => {
    setTimeout(() => {

        resolve("CHANDEL");
        console.log("prom4");

    }, 1000);
})


//Creating PROMISE 5 for Promise.all()

let prom5 = Promise.all([prom1, prom2, prom3, prom4]);
prom5.then((a) => {
    console.log(a)
})