const progress =document.querySelector("#progress");
const pre = document.querySelector("#pre");
const next = document.querySelector("#next");
const circle = document.querySelectorAll(".circle");

let correctActive =1;

next.addEventListener("click",()=>{
    correctActive++;

    if(correctActive> circle.length){
        correctActive =circle.length
    }
    update();
})

pre.addEventListener('click',()=>{
    correctActive--;

    if(correctActive< 1){
        correctActive =1;
    }
    update();
})

function update(){
    circle.forEach((circles,indx)=>{
        if(indx <correctActive){
            circles.classList.add('active');
        }else{
            circles.classList.remove('active');
        }
    })

    const actives = document.querySelectorAll('.active');

   progress.style.width= (actives.length-1)/(circle.length-1)*100 + "%";

   if(correctActive === 1){
       pre.disabled=true;

   }else if(correctActive === circle.length){
    next.disabled = true;
   }else{
       pre.disabled=false;
       next.disabled=false;
   }
}