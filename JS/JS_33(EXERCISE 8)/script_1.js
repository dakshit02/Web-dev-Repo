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
save.addEventListener("click", () => {

    let x = enterHour.value;
    let y = enterMins.value;
    console.log(x);
    console.log(y);
    let a = parseInt(x);
    let b = parseInt(y);

    daku(a, b); //Callin the Function daku()


})

function daku(a, b) {
    let now = new Date;
    hours.innerText = now.getHours();
    minutes.innerText = now.getMinutes();
    seconds.innerText = now.getSeconds();


    if (a == now.getHours() && b == now.getMinutes()) {
        audio.play();
    }
}

setInterval(daku, 1000)





