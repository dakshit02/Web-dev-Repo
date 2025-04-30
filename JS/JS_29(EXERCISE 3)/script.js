//EXERCISE 3 TELL ME A JOKE

// let URL = "https://official-joke-api.appspot.com/jokes/ten"
let URL = "https://official-joke-api.appspot.com/jokes/ten"
let random_num = Math.ceil(0 + Math.random() * (9 - 0));
console.log(random_num)

async function API_JOKE() {
    console.log("getting data....");
    let response = await fetch(URL);
    // console.log(response);
    let data = await response.json();
    console.log(data);
    let joke = document.querySelector(".joke");


    joke.innerHTML = data[random_num].setup + "-" + data[random_num].punchline;

}

API_JOKE();







