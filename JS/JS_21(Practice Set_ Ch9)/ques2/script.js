//loading the script using Async-Await instead of promise
// let script = "https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js"

//creating a fucntion 

function loadscript(URL) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let sc = document.createElement('script');
            sc.src = URL;
            document.head.append(sc);
            sc.onload = resolve("OK");
        }, 7000);
    })
}

async function sendscript() {
    let URL = "https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js"
    await loadscript(URL);
    alert("The Script is LOADED on the page!");
}

sendscript();