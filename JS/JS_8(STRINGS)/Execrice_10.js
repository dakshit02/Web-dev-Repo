// //Business Name Generator :-


// function Random_Num(max, min) {
//     let num1 = Math.random();
//     let b = (num1 * (max - min + 1)) - 1;
//     let roundoff = Math.floor(b);
//     return roundoff;
// }
// let x = Random_Num(3, 1);
let num1 = Math.random();
let num2 = Math.random();
let num3 = Math.random();
let key1, key2, key3;


const adj =
{
    str1: "Crazy",
    str2: "Amazing",
    str3: "Fire"
}

if (num1 < 0.33) {
    key1 = "str1";
}
else if (num1 > 0.33 && num1 < 0.66) {
    key1 = "str2";
}
else {
    key1 = "str3";
}

const Shop_Name = {
    str4: "Engine",
    str5: "Foods",
    str6: "Garments",
}

if (num2 < 0.33) {
    key2 = "str4";
    // console.log(Shop_Name[key2]);
}
else if (num2 > 0.33 && num2 < 0.66) {
    key2 = "str5";
}
else {
    key2 = "str6";
}

const Another_Word = {
    str7: "Bros",
    str8: "Limited",
    str9: "Hub",
}
if (num3 < 0.33) {
    key3 = "str7";
    // console.log(Another_Word[key3]);
}
else if (num3 > 0.33 && num3 < 0.66) {
    key3 = "str8";
}
else {
    key3 = "str9";
}

console.log("Random company name generated :-", adj[key1] + " " + Shop_Name[key2] + " " + Another_Word[key3]);




