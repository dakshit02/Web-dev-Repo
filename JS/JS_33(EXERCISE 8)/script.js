//alarm clock 
let playbut = document.querySelector(".playbut");
let audio = document.querySelector(".Audio");
let save = document.querySelector(".savebutt");

let hours = document.querySelector(".hour");
let minutes = document.querySelector(".minutes");
let seconds = document.querySelector(".seconds");

let enterHour = document.querySelector(".enterHour");
let enterMins = document.querySelector(".enterMins");


//Alarm clock :-


setInterval(() => {
    let now = new Date;
    // console.log(now.getHours())
    // console.log(now.getMinutes())
    // console.log(now.getSeconds())
    hours.innerText = now.getHours();
    minutes.innerText = now.getMinutes();
    seconds.innerText = now.getSeconds();

}, 1000)


save.addEventListener("click", () => {

    let now = new Date;
    let a = enterHour.value;
    let b = enterMins.value;
    console.log(a);
    console.log(b);

    parseInt(a);
    parseInt(b);
    if (a == now.getHours() && b == now.getSeconds()) {
        audio.play();
    }


})
