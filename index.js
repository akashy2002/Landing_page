let burger = document.querySelector(".burger");
let navul = document.querySelector(".ul-box");
// menuItem = false;
burger.addEventListener("click", () => {
    burger.classList.toggle("open");
    navul.classList.toggle("show")
})