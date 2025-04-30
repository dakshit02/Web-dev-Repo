// let a = new Date
// console.log(a)


// let b = new Date(2025,3,10);
// console.log(b);

// let date = new Date();

// // Set the year, month, and date
// date.setFullYear(2023);
// date.setMonth(5);  // Month is 0-based, so 5 represents June
// date.setDate(15);

// console.log(date);  // Logs the modified date

// // Set the hours, minutes, seconds
// date.setHours(10);
// date.setMinutes(30);
// date.setSeconds(0);

// console.log(date);  // Logs the modified time

let hrs = document.querySelector(".hours")
let mins = document.querySelector(".minutes")
let secs = document.querySelector(".seconds")

// let now = new Date();


// let date = now.getDate();




setInterval(() => {
    let now = new Date();
    secs.innerHTML = now.getSeconds();
    mins.innerHTML = now.getMinutes();
    hrs.innerHTML = now.getHours();
}, 1000)

// console.log("Hours:", hours);
// console.log("Minutes:", minutes);
// // console.log("Seconds:", seconds);
// console.log("Date:",date)
