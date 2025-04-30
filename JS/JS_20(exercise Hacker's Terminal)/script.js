let line = document.getElementsByClassName("line")
var i = 0;


// async - await to replicate fetching API(using setTimeout)
function dot(position) {
    return new Promise((resolve, reject) => {
        let count = 0;
        let interval = setInterval(() => {
            let dots = document.getElementsByClassName("line")[position].insertAdjacentHTML("beforeend", " <span> . </span> ")

            count++;
            if (count === 3) {
                clearInterval(interval);
                resolve("ok");
            }
        }, 1000)
    })

}

async function delay(text) {
    return new Promise((resolve, reject) => {
        //Producing random number b/w 0-7
        let num = Math.ceil(0 + Math.random() * (7 - 0));
        console.log(num);
        setTimeout(async () => {
            line[i].innerHTML = text;
            await dot(i);
            i++;
            resolve(200);
        }, num*1000)
    })
}

async function send() {
    await delay("Initializing Hacking");
    await delay("Reading your files");
    await delay("Password files Detected");
    await delay("Sending all passwords and personal files to server");
    await delay("Cleaning up");
    alert("You are HACKED :)");

}

send();

