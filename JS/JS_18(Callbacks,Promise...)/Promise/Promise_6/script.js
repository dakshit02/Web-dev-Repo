// creating an asynchronous function which returns new Promise

function asyncFun_1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("DATA 1");
            resolve("sucessfully retrived DATA 1");
        }, 4000)
    })
}

function asyncFun_2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("DATA 2");
            resolve("sucessfully retrived DATA 2");
        }, 4000)
    })
}


console.log("fetching data 1......");

let prom1 = asyncFun_1();
prom1.then((a) => {
    console.log(a);
    console.log("fetching data 2......");
    let prom2 = asyncFun_2();
    prom2.then((b)=>{
        console.log(b);
    })
})


