//Class Animal created
class Animal {

    //constructor of Animal Class 
    constructor() {
        console.log("Object is created...");
    }

    // Function inside of a class is called method 
    method1() {
        console.log("Eating my food ");
    }

    method2() {
        console.log("I am jumping ");
    }
}

let a = new Animal();   //stored Animal class in variable 'a'

console.log(a); //printing the class (will only print constructor())
a.method1();    //calling the method1 method in Animal class
a.method2();  //calling the method2 method in Animal class

