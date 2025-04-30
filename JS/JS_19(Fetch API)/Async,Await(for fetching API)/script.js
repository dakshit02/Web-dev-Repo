const URL = "https://cataas.com/cat"

/*async function cats() {

    console.log("getting data.....");
    let response = await fetch(URL);
    console.log(response);
}*/

//can also be written as 
const getCats = async()=>{
    console.log("getting data....");
    let response1 = await fetch (URL);
    console.log(response1)
}


// cats();