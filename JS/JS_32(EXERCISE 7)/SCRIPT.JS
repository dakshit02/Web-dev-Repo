//RANDOM PASSWORD GENERATOR 

class Password {
    constructor() {
        let pass = document.querySelector(".password");
        let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        let small_letters = "abcdefghijklmnopqrstuvwxyz";
        let specialChars = "!@#$%^&*()_+-=[]{}|;:',.<>?/~`";

        let randomLetter = letters[Math.floor(Math.random() * letters.length)];
        let randomSmallLetter = small_letters[Math.floor(Math.random() * small_letters.length)];
        let randomSpecialChar = specialChars[Math.floor(Math.random() * specialChars.length)];

        console.log(randomLetter);
        console.log(randomSmallLetter);
        console.log(randomSpecialChar);


        pass.innerHTML = randomLetter + randomSmallLetter + randomSpecialChar;

    }


}

let a = new Password();
