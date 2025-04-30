class Animal {
    constructor(name) {
        //using this keyword to create properties in an object 
        this.myname = name;
        console.log("Object is created...");
    }

    method1() {

        console.log("Eating my food");
    }

    method2() {
        console.log("Jumping around");
    }
}

class Lion extends Animal {
    constructor(name) {
        super(name);
        this.myname = name;
        console.log("Object is created and it Lion...");
    }
}



let a = new Animal("Dakshit");
console.log(a)

let l = new Lion("Ayush");
console.log(l)