let a = 5;
let c = 5;
let b = 10;

let x = "5";
let y = "7";

//Comaprision operator

if (a == x)   //== operator only comoare the digits it does nto compare the type of the data so here it will say "Yes" but actually a and x are not equal as a is number and x is string
{
    console.log("Yes the numbers are same without comparing data type");
}
else {
    console.log("No");
}

if (a === x)  // === compare the data type as well 
{
    console.log("Yes");
}
else {
    console.log("No the numbers are same but the data type are different so they are actually different!");
}


if(x===y)
{
    console.log("yes x and y are same with the same data type");
}
else
{
    console.log("no x and y are not same with the same data type");
}


// if(a==c)
// {
//     console.log("Yes a is equals to c");
// }
// else{
//     console.log("NO a is not equals to c");
// }

// if(a!=b)
// {
//     console.log(" Yes a is not equals to b");
// }
// else
// {
//     console.log("NO a is equals to b");
// }


