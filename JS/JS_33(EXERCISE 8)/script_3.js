let audio = document.querySelector(".Audio");
let save = document.querySelector(".savebutt");

let hours = document.querySelector(".hour");
let minutes = document.querySelector(".minutes");
let seconds = document.querySelector(".seconds");

let enterHour = document.querySelector(".enterHour");
let enterMins = document.querySelector(".enterMins");

let alarmHour = null;
let alarmMinute = null;

// Save alarm time
save.addEventListener("click", () => {
    alarmHour = parseInt(enterHour.value);
    alarmMinute = parseInt(enterMins.value);
    console.log("Alarm set for:", alarmHour, alarmMinute);
});

// Clock + Alarm checker
setInterval(() => {
    let now = new Date();
    let currentHour = now.getHours();
    let currentMinute = now.getMinutes();
    let currentSecond = now.getSeconds();

    hours.innerText = currentHour;
    minutes.innerText = currentMinute;
    seconds.innerText = currentSecond;

    if (alarmHour === currentHour && alarmMinute === currentMinute && currentSecond === 0) {
        audio.play();
    }

}, 1000);
