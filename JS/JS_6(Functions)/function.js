// function daku(name)
// {
//     console.log("Hi this is a fucntion " + name);
// }

// daku("Dc");


// understanding the return value from a funtion 



function myfun_1(x, y) {
    let z;
    z = x + y;
    return z;
}

function myfun_2() {
    let a = 20;
    let b = 30;
    let result;
    result = myfun_1(a, b); // calling the fucntion 1 with parameters
    console.log(result);

}

myfun_2();// calling the fucntion 2