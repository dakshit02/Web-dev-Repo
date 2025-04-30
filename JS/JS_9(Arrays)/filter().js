//filter()

let a = [11, 2, 33, 4, 5];
const greater_than_five = (e) => {
    if (e > 7) {
        return true;
    }
    return false;
}

console.log(a.filter(greater_than_five));