//Printing Cat Facts on page using fetch api and async-await

const URL = "https://catfact.ninja/fact" //random cat facts API
let button = document.querySelector(".butt")
let facts_div = document.querySelector(".facts")



async function catfacts() {
    console.log("getting data....");
    let response = await fetch(URL); //json format
    let data = await response.json(); //converted to Js object
    let random_fact = data.fact;
    console.log(random_fact);
    facts_div.innerHTML = random_fact;
}
// catfacts();

button.addEventListener("click", catfacts)


