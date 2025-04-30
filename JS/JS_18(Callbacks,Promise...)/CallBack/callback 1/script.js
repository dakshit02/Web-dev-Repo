//Callback 
function Hello(){
    console.log("Hello");
}

function dakshit(Callback_Fun)
{
    Callback_Fun();   //calling the Hello() function
    console.log("Dakshit");
}

dakshit(Hello);   //Passing Hello Fucntion as an argument to dakshit Fucntion
