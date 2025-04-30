class Animal {
    constructor(name) {
        //using this keyword to create properties in an object 
        this.myname = name;
        console.log("Object is created...");
    }

    method1() {

        console.log("Eating my food");
    }
}

let a = new Animal("Dakshit");
console.log(a);
console.log(a.myname);


