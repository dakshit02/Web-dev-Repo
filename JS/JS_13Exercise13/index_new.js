function createCard(title, cName, views, separator, monthsOld, duration, thumbnail) {
    let container = document.querySelector('.container');

    let div = document.createElement('div');
    div.className = "box";
    container.appendChild(div);

    let box_child_1 = box_child_1_fun(thumbnail, duration);
    let box_child_2 = box_child_2_fun(title, cName, separator, views, monthsOld);

    div.appendChild(box_child_1);
    div.appendChild(box_child_2);
}

function box_child_1_fun(thumbnail, duration) {
    let div = document.createElement('div');
    div.className = "box_child_1";

    let img = document.createElement('img');
    img.src = thumbnail;

    let durationDiv = document.createElement('div');
    durationDiv.className = "duration";
    durationDiv.innerHTML = duration;

    div.appendChild(img);
    div.appendChild(durationDiv);

    return div;
}

function box_child_2_fun(title, cName, separator, views, monthsOld) {
    let div = document.createElement('div');
    div.className = "box_child_2";

    let titleDiv = document.createElement('div');
    titleDiv.className = "title";
    titleDiv.innerText = title;

    let secTitleDiv = document.createElement('div');
    secTitleDiv.className = "sec_title";

    let channelDiv = document.createElement('div');
    channelDiv.className = "channel_name";
    channelDiv.innerText = cName;

    let viewsDiv = document.createElement('div');
    viewsDiv.className = "views";
    viewsDiv.innerText = formatViews(views) + " views";

    let separatorDiv = document.createElement('div');
    separatorDiv.className = "separator";
    separatorDiv.innerText = separator;

    let monthsOldDiv = document.createElement('div');
    monthsOldDiv.className = "monthsOld";
    monthsOldDiv.innerText = monthsOld + " months old";

    secTitleDiv.appendChild(channelDiv);
    secTitleDiv.appendChild(viewsDiv);
    secTitleDiv.appendChild(separatorDiv);
    secTitleDiv.appendChild(monthsOldDiv);

    div.appendChild(titleDiv);
    div.appendChild(secTitleDiv);

    return div;
}

function formatViews(views) {
    if (views >= 1e9) return (views / 1e9).toFixed(1) + "B";
    if (views >= 1e6) return (views / 1e6).toFixed(1) + "M";
    if (views >= 1e3) return Math.floor(views / 1e3) + "K";
    return views;
}

createCard("Introduction to Backend | Sigma Web Dev video#2", "CodeWithHarry •", 17809555, "•", 7, "31:22", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg");
createCard("Frontend Roadmap 2025", "ProgrammingWithJohn •", 5100000, "•", 5, "15:45", "https://via.placeholder.com/247x139");
createCard("Learn JavaScript in 1 Hour", "TechWithTim •", 895000, "•", 12, "58:10", "https://via.placeholder.com/247x139");
