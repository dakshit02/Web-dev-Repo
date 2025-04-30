//EXERCISE 6

const path = "C:\Users\daksh\Desktop\to do folder"
let create = document.querySelector(".create");
let del = document.querySelector(".delete");
let list = document.querySelector(".list");
let sub = document.querySelector(".submit");
let inp_txt = document.querySelector(".input_text");
let listoption = document.querySelector(".listoption");


create.addEventListener("click", () => {
    sub.style.visibility = "visible";
    inp_txt.style.visibility = "visible";

})

sub.addEventListener("click", () => {

    let div = document.createElement('div');
    div.innerHTML = inp_txt.value;
    div.className = "listoption"
    list.append(div);

    let trashIcon = document.createElement('i');
    trashIcon.className = "fa-solid fa-trash";
    div.append(trashIcon);

    trashIcon.addEventListener("click", () => {

        div.remove();
    });



    // inp_txt.value.visibility = "visible";
    sub.style.visibility = "hidden";
    inp_txt.style.visibility = "hidden";
    console.log(inp_txt.value);
    inp_txt.value = "";

})




