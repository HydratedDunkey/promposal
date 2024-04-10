const badButton = document.getElementById("bad");
const goodButton = document.getElementById("good");
const canvas = document.getElementById("canvas");
const jsConfetti = new JSConfetti();
// button.style.visibility = "hidden";

function hide() {
    badButton.style.display = "none";
}

badButton.addEventListener("mouseover", hide);
goodButton.addEventListener("click", () => {
    jsConfetti.addConfetti();
})