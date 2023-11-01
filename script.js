var state = 1;

function checkState() {
    if (state == 0) {
        lightmode();
    } else if (state == 1) {
        darkmode();
    }
}

function lightmode() {
    state = 1;
    const button = document.getElementById("button");
    const box = document.getElementsByClassName("box1")[0];
    button.innerHTML = "Dark Mode";
    document.body.style.backgroundColor = "#ffffff";
    box.style.backgroundColor = "#ffffff";
    box.style.borderColor = "#000000";
    document.getElementById("name").style.color = "#000000";
    document.getElementById("description").style.color = "#000000";
    document.getElementById("contact").style.color = "#000000";

    document.getElementById("button").style.color = "#000000";
    document.getElementById("button").style.backgroundColor = "#ffffff";
    document.getElementById("button").style.borderColor = "#000000";
}

function darkmode() {
    state = 0;
    const button = document.getElementById("button");
    const box = document.getElementsByClassName("box1")[0];
    button.innerHTML = "Light Mode";
    document.body.style.backgroundColor = "#000000";
    box.style.backgroundColor = "#000000";
    box.style.borderColor = "#ffffff";
    document.getElementById("name").style.color = "#ffffff";
    document.getElementById("description").style.color = "#ffffff";
    document.getElementById("contact").style.color = "#ffffff";

    document.getElementById("button").style.color = "#ffffff";
    document.getElementById("button").style.backgroundColor = "#000000";
    document.getElementById("button").style.borderColor = "#ffffff";
}
