function fetchData(callback)
{
    setTimeout(()=>{
        console.log("Hi my name is dakshit");
        callback();
    },3000);

}

function data()
{
    console.log("Hi my name is dakshit too");
}

fetchData(data);

/*generally seTimeout is executed after the whole script is executed
but by using Using a Callback to Run Code After Time Taking code such as setTimeout .
*/