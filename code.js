var button = document.getElementById("bad");
// button.style.visibility = "hidden";

function hide() {
    button.style.visibility = "hidden";
}

button.addEventListener("mouseover", hide);