console.log("hi");
console.log(document.body);
console.log(document.body.childNodes);
console.log(document.body.childNodes[0]);
console.log(document.body.childNodes[1]);
console.log(document.body.childNodes.length);
let a = document.body.childNodes;
for (let i = 0; i < a.length; i++) {
    let b = a[i];
    console.log(b);
}
console.log(document.body.firstChild); //prints the fiirst child of the body that is text
console.log(document.body.firstElementChild); //prints te first element child that is <div class="container">
console.log(document.body.lastChild)
console.log(document.body.childNodes[5].childNodes[1]);