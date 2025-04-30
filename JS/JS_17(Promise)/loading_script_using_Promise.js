//Loading a script using Promise in JS
// script = https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js

function Load_Script(resolve) {
    setTimeout(() => {
        let sc = document.createElement('script');
        sc.src = "https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js"
        sc.onload = resolve("Haryyy");
        document.head.append(sc);
    }, 3000)
}


const prom1 = new Promise(Load_Script);

prom1
    .then((msg) => {
        console.log(msg);
    })

