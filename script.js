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

prev.addEventListener("click",()=>{

position += 300

if(position > 0){
position = -900
}

track.style.transform = `translateX(${position}px)`

})
