function createCard(titile, cName, views, seperator, monthsOld, duration, thumbnail) {

    let container = document.body.querySelector('.container');
    let div = document.createElement('div')
    div.className = "box";
    container.appendChild(div);
    let z = document.getElementsByClassName("box")[count];

    box_child_1_fun(thumbnail, duration, z);
    box_child_2_fun(monthsOld, titile, cName, seperator, views, z);
    count++;
}

function box_child_1_fun(thumbnail, duration, z) {
    // let a = document.querySelector('.box');
    let a = z;
    let div = document.createElement('div');
    div.className = "box_child_1";
    a.appendChild(div);
    // let b = document.querySelector('.box_child_1');
    let b = document.getElementsByClassName("box_child_1")[count];
    let img = document.createElement('img');
    img.src = thumbnail;
    b.appendChild(img);

    let div_1 = document.createElement('div');
    div_1.className = "duration";
    div_1.innerHTML = duration;
    b.appendChild(div_1);
}

function box_child_2_fun(monthsOld, titile, cName, seperator, views, z) {
    // let a = document.querySelector('.box');
    let a = z;
    let div = document.createElement('div');
    div.className = "box_child_2";
    a.appendChild(div);

    // let b = document.querySelector('.box_child_2');
    let b = document.getElementsByClassName("box_child_2")[count];
    let div_1 = document.createElement('div');
    div_1.className = "title";
    div_1.innerText = titile;
    b.appendChild(div_1);

    let div_2 = document.createElement('div');
    div_2.className = "sec_title";
    b.appendChild(div_2);

    sec_title_fun(cName, seperator, views, monthsOld);

}

function sec_title_fun(cName, seperator, views, monthsOld) {
    let temp_views;
    if (views >= 1000 && views < 10000) {
        temp_views = (views / 1000).toFixed(1); // Keep 1 decimal place
        views = temp_views + "K";
    }
    else if (views >= 10000 && views < 1000000) {
        temp_views = Math.floor(views / 1000); // No decimal for 10K+
        views = temp_views + "K";
    }
    else if (views >= 1000000 && views < 1000000000) {
        temp_views = (views / 1000000).toFixed(1); // Keep 1 decimal place
        views = temp_views + "M";
    }
    else if (views >= 1000000000) {
        temp_views = (views / 1000000000).toFixed(1); // Keep 1 decimal place
        views = temp_views + "B";
    }

    // let a = document.querySelector('.sec_title');
    let a = document.getElementsByClassName("sec_title")[count];
    let div = document.createElement('div');
    div.className = "channel_name";
    div.innerText = cName;
    a.appendChild(div);

    let div_1 = document.createElement('div');
    div_1.className = "views";
    div_1.innerText = views + " views";
    a.appendChild(div_1);

    let div_2 = document.createElement('div');
    div_2.className = "seperator";
    div_2.innerText = seperator;
    a.appendChild(div_2);

    let div_3 = document.createElement('div');
    div_3.className = "monthsOld";
    div_3.innerText = monthsOld + " months old";
    a.appendChild(div_3);

    temp_views = 0;
    views = 0;

}

var count = 0;
createCard("Introduction to Backend | Sigma Web Dev video#2", "CodeWithHarry •", 17809555, "•", 7, "31:22", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw")
createCard("Vanish Into You ", "Lady Gaga •", 20000349, "•", 1, "10:00", "https://i.ytimg.com/vi/4qv16WcOCYA/hqdefault.jpg?sqp=-oaymwEnCPYBEIoBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLD_qUXTP0tzhFYfKgcjoR4XsYpZCQ")
createCard("Buckel Up (Official Music Video)", "SHUBH •", 2000000000, "•", 30, "8:18", "https://i.ytimg.com/vi/UKInLPwr7wk/hqdefault.jpg?sqp=-oaymwEnCPYBEIoBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAGVx_SxY01w-A5o2axwV7AW2gs3g")








