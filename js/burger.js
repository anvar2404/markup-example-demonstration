
let mobileBtn = document.querySelector('.burger-menu')
let nav = document.querySelector('.top-show')

mobileBtn.addEventListener('click', ()=>{
    mobileBtn.classList.toggle('show-menu')
    nav.classList.toggle('show')
})