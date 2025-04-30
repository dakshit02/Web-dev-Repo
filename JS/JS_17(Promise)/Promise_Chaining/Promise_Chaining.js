const p = new Promise((resolve) => {

    setTimeout(() => {
        resolve(10);
    }, 2000);

})

p
    .then((value) => {
        console.log("Step 1 :",value);
        return value * 2;
    })
    .then((value) => {
        console.log("Step 3 :",value);
        return value * 2;
    })
    .then((finalvalue) => {
        console.log("Step 3 :",finalvalue);
    })




