const btn = document.querySelector("#share-btn");
const share = document.getElementById("share");
const icon = document.querySelector("i")

btn.addEventListener("click", () => {
    share.classList.toggle("active");
    icon.classList.toggle("active-icon");
});