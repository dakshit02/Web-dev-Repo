const URL = "https://cataas.com/cat"

async function cats() {

    console.log("getting data.....");
    let response = await fetch(URL);
    console.log(response.status);
    console.log(response.text);
    console.log(response.type);
}