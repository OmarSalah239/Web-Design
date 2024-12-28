const slides = document.querySelectorAll(".slide")
const dot = document.querySelectorAll(".dot")
let current = 0
function take(i) {
    slides.forEach(s=> s.classList.remove("active"))
    dot.forEach(s=> s.classList.remove("active"))
    dot[i].classList.add("active")
    slides[i].classList.add("active")
}
dot.forEach((dot, i)=>{
    dot.addEventListener("click", function(){
        take(i)
    })
})