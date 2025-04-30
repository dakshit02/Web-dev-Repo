// Converting the JSON format to JS object 

const URL = "https://catfact.ninja/fact" //random cat facts API

//ASYNC- AWAIT method to fetch()
/*const cats = async ()=>{
    console.log("getting data ....");
    let response = await fetch(URL) //JSON format
    let data = await response.json(); //converting to JS object
    // used await as it aslo returns a promise so it becoms asynchronous 

    console.log(response);//unusable data in json format
    console.log(data); //usable data printed
    console.log(data.fact) //extracted the fact from the JS object

}*/

//.then method to fetch()
function cats() {
    console.log("getting data .....");
    fetch(URL)
        .then((response) => {
            return response.json();
        })
        .then(data => {
            console.log(data); // The full JSON object
            console.log(data.fact); // Extracting the 'fact' property
        })
}


cats()