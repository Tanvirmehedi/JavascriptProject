const opened = document.querySelector(".open");
const closed = document.querySelector(".close");
const container =document.querySelector(".container");

opened.addEventListener('click',()=>{
    container.classList.add('show-nav');
})
closed.addEventListener('click',()=>{
    container.classList.remove('show-nav')
})