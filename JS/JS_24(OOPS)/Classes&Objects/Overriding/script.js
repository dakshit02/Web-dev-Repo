class Animal {
    constructor() {
        console.log("The object of Animal is created");
    }

    eats() {
        console.log("This is eats method of Animal Class");
    }


}

class Lion extends Animal {

}


class Tiger extends Animal{

    eats()
    {
        console.log("This is eats method of Tiger Class");
    }
}

let a = new Animal();
let l = new Lion();
let t = new Tiger();

l.eats();
t.eats();