//ques3 

function receive(n) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            resolve("OK resolved");
        }, n);
    })
}

(async function () {

    let a = prompt("Enter the time in milli seconds for a :")
    parseInt(a);
    try {
        let response1 = await receive(a);
        console.log(response1);
    } catch (err1) {
        consoele.log(err1);
    }

    let b = prompt("Enter the time in milli seconds for b :")
    parseInt(b);
    try {
        let response2 = await receive(b);
        console.log(response2);
    } catch (err2) {
        console.log(err2);
    }

})()

