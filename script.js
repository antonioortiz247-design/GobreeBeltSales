const toggle=document.getElementById('menu-toggle')
const menu=document.getElementById('menu')
toggle.addEventListener('click',()=>{menu.classList.toggle('active')})
document.querySelectorAll('nav a').forEach(link=>{link.addEventListener('click',()=>{menu.classList.remove('active')})})
