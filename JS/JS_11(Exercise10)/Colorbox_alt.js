/* To generate random number between 2 number a & b:-
    a +  math.random() * (b-a)
    Up to the nearest whole integer - math.ceil(a +  math.random() * (b-a))
    Down to the nearest whole integer - math.floor(a +  math.random() * (b-a))
*/

function diff_Color()
{
    let val1 = Math.floor(0 + Math.random() * (255-0));
    let val2 = Math.floor(0 + Math.random() * (255-0));
    let val3 = Math.floor(0 + Math.random() * (255-0));

    return `rgb(${val1},${val2},${val3})`
}
for(let i = 0 ; i<=4 ;i++)
{
    document.getElementsByClassName("box")[i].style.backgroundColor = diff_Color();
}

//Another for loop we can use is : -
// let boxes = document.querySelector(".container").children
// Array.from(boxes).forEach(e=>
// {
//     e.style.backgroundColor = diff_Color();

// }
// )
