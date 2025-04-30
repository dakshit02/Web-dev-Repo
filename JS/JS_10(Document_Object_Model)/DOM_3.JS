console.log(document.body.children);
let cont = document.body;
console.log(cont.lastElementChild);
cont.firstElementChild.style.backgroundColor = "red";
//Accessing Parent Node
let a = document.body.childNodes[5];
console.log(a.lastElementChild);
console.log(a.lastElementChild.parentElement);// gives the parent that is div.container
// Sibling
console.log(a.previousSibling); //gives #text
console.log(a.previousElementSibling); //gives span
console.log(a.nextSibling); //gives text
console.log(a.nextElementSibling); // gives script
console.log(document.body.firstElementChild.childNodes); // the childs of the first elemet child if the body.
console.log(document.body.firstElementChild.children); //gives the html tags inside it 
