//0-0.2(Red) , 0.2-0.4(green) , 0.4-0.6(blue) ,0.6 - 0.8(violet) , 0.8-1(yellow)

for (let i = 0; i < 5; i++) {
    let a = Math.random();

    if (a < 0.2) {
        document.getElementsByClassName("box")[i].style.backgroundColor = "Red";
    }
    else if (a >= 0.2 && a < 0.4) {
        document.getElementsByClassName("box")[i].style.backgroundColor = "Green";
    }
    else if (a >= 0.4 && a < 0.6) {
        document.getElementsByClassName("box")[i].style.backgroundColor = "Blue";
    }
    else if (a >= 0.6 && a < 0.8) {
        document.getElementsByClassName("box")[i].style.backgroundColor = "Violet";
    }
    else {
        document.getElementsByClassName("box")[i].style.backgroundColor = "Yellow";
    }

}
