//Advanced JavaScript

//IIFE
async function sleep() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("HI");
            resolve(200);
        }, 4000)
    })
}

//normally using await 
/*async function main()
{
    await sleep();
}
main();
*/

//using await with calling the async function it is inside
// its called IIFE

(async function () {
    let a = await sleep();
    let b = await sleep();

    console.log(a);
    console.log(b);
})()




