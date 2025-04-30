//What is hoisting ?
function main() {

    // var a ;
    /*Hoisting take the declaration to the top of the 
    of the block (not literally)*/

    console.log(a);
    var a = 2;

}

main();

//The output will be undefined bcause hoisting only takes up the
// var a not var =2
// This means that it only takes the declaration to the top
// not the initialization
// HOISTING CANNOT BE DONE WITH let or const


