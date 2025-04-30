//Creating an object 'dakshit object'
let dakshit = {
    name: "DAKSHIT",
    language: "JavaScirpt",
    age: 22
}
console.log(dakshit);  //printing the object

// Creating another object 'dakshit_prototype'
let dakshit_prototype = {

    run: () => {
        // alert("run");
        console.log("Function run !");
    },

    gender: "Male"
}

//sets  dakshit_prototype as [[Prototype]] of dakshit object
dakshit.__proto__ = dakshit_prototype;


dakshit.run(); //run function does not exists in object a but it exsts in its prototype p 
console.log(dakshit.gender);