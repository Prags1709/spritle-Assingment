let animationLogo1 = document.querySelector(".sp-logo-1")
let animationLogo2 = document.querySelector(".sp-logo-2")
let animationLogo3 = document.querySelector(".sp-logo-3")
let animationLogo4 = document.querySelector(".sp-logo-4")
setTimeout(() => {
    animationLogo1.classList.add("animation-logo1")
    animationLogo2.classList.add("animation-logo2")
    animationLogo3.classList.add("animation-logo3")
    animationLogo4.classList.add("animation-logo4")
}, 1000)

let circle2 = document.querySelector(".sp-circle-2")
let circle3 = document.querySelector(".sp-circle-3")

function timerFunction() {
    setTimeout(() => {
        circle2.style.boxShadow = "inset 0 5px 4px 2px rgb(0 0 0 / 0.05)";
    }, 1000)

    setTimeout(() => {
        circle3.style.boxShadow = "inset 0 5px 4px 2px rgb(0 0 0 / 0.05)"
    }, 2000)
}
timerFunction()

setInterval(() => {
    circle2.style.boxShadow = "none"
    circle3.style.boxShadow = "none"
    timerFunction()
}, 3000)

//hamburgre
const hamburger = document.querySelector(".hamburger")
const navMenu = document.querySelector(".spritle-title")

let ishamburgerActive = false;
hamburger.addEventListener("click", () => {
    if (!ishamburgerActive) {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
        ishamburgerActive = true
    } else {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
        ishamburgerActive = false
    }
})

document.querySelectorAll(".nav-item").forEach(ele =>
    ele.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    })
)