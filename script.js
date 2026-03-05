// ============================
// SCROLL SUAVE NAVEGACIÓN
// ============================

document.querySelectorAll("nav a").forEach(link => {

link.addEventListener("click", e => {

e.preventDefault()

const target = document.querySelector(link.getAttribute("href"))

if(target){
target.scrollIntoView({ behavior:"smooth" })
}

})

})


// ============================
// GALERÍA LIGHTBOX
// ============================

const images = document.querySelectorAll(".gallery-img")
const lightbox = document.getElementById("lightbox")
const lightboxImg = document.getElementById("lightbox-img")
const close = document.querySelector(".close")

if(images.length && lightbox && lightboxImg){

images.forEach(img => {

img.addEventListener("click", () => {

lightbox.style.display = "flex"
lightboxImg.src = img.src

})

})

}

if(close){

close.addEventListener("click", () => {

lightbox.style.display = "none"

})

}


// ============================
// CARRUSEL
// ============================

const track = document.querySelector(".carousel-track")
const next = document.querySelector(".next")
const prev = document.querySelector(".prev")

if(track && next && prev){

let position = 0

next.addEventListener("click", () => {

position -= 300
if(position < -900) position = 0

track.style.transform = `translateX(${position}px)`

})

prev.addEventListener("click", () => {

position += 300
if(position > 0) position = -900

track.style.transform = `translateX(${position}px)`

})

}


// ============================
// CONTADORES ANIMADOS
// ============================

const counters = document.querySelectorAll(".counter")

counters.forEach(counter => {

const target = +counter.getAttribute("data-target")
let current = 0

const increment = target / 100

const updateCounter = () => {

current += increment

if(current < target){

counter.innerText = Math.ceil(current)
requestAnimationFrame(updateCounter)

}else{

counter.innerText = target

}

}

updateCounter()

})
