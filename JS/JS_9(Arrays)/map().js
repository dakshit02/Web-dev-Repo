// map() function 
//Question - make a new array in which it square the element of another array 

let old_arr = [2, 3, 5, 6];
let new_arr = [];

/*using the traditional method to solve the problem 
for (let i = 0 ; i <old_arr.length;i++)
{
    const element = old_arr[i];
    new_arr[i]=element**2;

}*/

//we can also use the map() to solve the problem
new_arr = old_arr.map((element)=>
{
    return element**2;
})



//printing the new array
for (let value of new_arr)
{
    console.log(value);
}



