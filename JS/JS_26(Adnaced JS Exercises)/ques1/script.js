//ques 1 
// let Promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("ok")
//     },2000)
// })


let a = document.querySelector(".line1");
let b = document.querySelector(".line2");

async function print(data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (data == "Hello") {
                a.innerHTML = data
                resolve(200);
            }
            else if (data == "World") {
                b.innerHTML = data
                resolve(200);
            }

        }, 2000)
    })
}

(async function () {
    await print("Hello");
    await print("World");
})()