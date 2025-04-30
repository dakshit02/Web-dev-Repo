let BASE_URL = "https://stocks.algobook.info/api/v1/exchange/rate?from=USD&to=INR"


let dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector(".exchange_butt");

for (let select of dropdowns) {
    for (let code in countryList) {
        let options = document.createElement("option");
        options.innerText = code;
        options.value = code;
        if (select.name === "from" && code === "USD") {
            options.selected = "selected"
        }
        else if (select.name === "to" && code === "INR") {
            options.selected = "selected"
        }
        select.appendChild(options);
    }

    select.addEventListener("change", (evt) => {
        updateFlag(evt.target);
    });

}

//Updating the flag Function
function updateFlag(element) {
    // console.log(element);
    let currCode = element.value;
    let countrycode = countryList[currCode];
    // console.log(currCode);
    console.log(countrycode);
    let newFlag = `https://flagsapi.com/${countrycode}/shiny/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src = newFlag;

    // let a = document.querySelectorAll(".select-container img")
    // a.src = newFlag

}

btn.addEventListener("click", (evt) => {
    evt.preventDefault();
    let amount = document.querySelector(".amount input");
    let amtVal = amount.value;
    console.log(amtVal);
    if (amtVal===""||amtVal<1)
    {
        amtVal =1 ;
        amount.value = "1";
    }

    const URL = `BASE_URL`
})



