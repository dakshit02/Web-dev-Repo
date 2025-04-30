// let script = "https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js"



// function loadscript(src_js) {
//     let prom = new Promise((resolve, reject) => {
//         let sc = document.createElement('script')
//         // src.innerHTML = src_js;
//         sc.src = src_js;
//         document.head.append(sc);
//         src.onload = resolve("ok");

//     })
// }

// loadscript(script);

// prom.then(() => {
//     alert("Script loaded");
// })

let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        let URL = "https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js"
        let sc = document.createElement('script');
        sc.src = URL;
        document.head.append(sc);
        sc.onload = resolve("ok")
    }, 7000)

})

promise.then((result) => {
    console.log(result);
    alert("The Script has been loaded");
}
)