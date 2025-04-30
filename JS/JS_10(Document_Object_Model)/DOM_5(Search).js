//Searching the DOM

//targeting by ID 
let a = document.getElementById("box2_id");
a.style.backgroundColor = "Yellow";

//targeting by querySelector
document.querySelector(".container").style.backgroundColor = "red";

//targeting by classname:-(we have to use indexex or loop )
document.getElementsByClassName("box_c")[0].style.backgroundColor = "chocolate";
document.getElementsByClassName("box_c")[1].style.backgroundColor = "chocolate";

//targeting by tag name:-(we have to use indexex or loop)
document.getElementsByTagName("span")[0].style.backgroundColor = "green";

//targeting by querySelectorAll :- (we have to use indexex or loop)
let b = document.querySelectorAll(".bo"); //using the loop to target the querySelectorAll
for (let i = 0; i < b.length; i++) 
{
    b[i].style.backgroundColor="blue";
}
