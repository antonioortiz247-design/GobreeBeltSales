const toggle=document.getElementById('menu-toggle')
const menu=document.getElementById('menu')
toggle.addEventListener('click',()=>{menu.classList.toggle('active')})
document.querySelectorAll('nav a').forEach(link=>{link.addEventListener('click',()=>{menu.classList.remove('active')})})
const track = document.querySelector(".carousel-track")
const next = document.querySelector(".next")
const prev = document.querySelector(".prev")

let position = 0

next.addEventListener("click",()=>{

position -= 300

if(position < -900){
position = 0
}

track.style.transform = `translateX(${position}px)`

})

const images = document.querySelectorAll(".gallery-img")
const lightbox = document.getElementById("lightbox")
const lightboxImg = document.getElementById("lightbox-img")
const close = document.querySelector(".close")

images.forEach(img => {

img.addEventListener("click", ()=>{

lightbox.style.display = "flex"
lightboxImg.src = img.src

})

})

const images = document.querySelectorAll(".gallery-img")
const lightbox = document.getElementById("lightbox")
const lightboxImg = document.getElementById("lightbox-img")
const close = document.querySelector(".close")

images.forEach(img => {

img.addEventListener("click", ()=>{

lightbox.style.display = "flex"
lightboxImg.src = img.src

})

})

close.addEventListener("click", ()=>{

lightbox.style.display = "none"

})

close.addEventListener("click", ()=>{

lightbox.style.display = "none"

})

const images = document.querySelectorAll(".gallery-img")
const lightbox = document.getElementById("lightbox")
const lightboxImg = document.getElementById("lightbox-img")
const close = document.querySelector(".close")

images.forEach(img => {

img.addEventListener("click", ()=>{

lightbox.style.display = "flex"
lightboxImg.src = img.src

})

})

close.addEventListener("click", ()=>{

lightbox.style.display = "none"

})
