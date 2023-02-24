let box = document.querySelector(".box-container")
let ambulance = document.querySelector(".ambulance_box");
let checkup = document.querySelector(".checkup_box");
let map = document.querySelector(".map_box");
let form = document.querySelector(".form_box");
let question = document.querySelector(".question-div");
let btn = document.querySelectorAll(".btn");
let SubBtn = document.querySelector(".sub-btn");
let h3 = document.querySelector(".quest");
let msg = document.querySelector(".prompt");
let menuToggle = document.querySelector(".toggle")
let menuBtn = document.querySelector(".menu-btn")

//toiggle section boxes
ambulance.addEventListener('click', () =>{
         //if(box.style.display === 'none')
         form.classList.toggle('hide');
         ambulance.classList.toggle('hide');
         checkup.classList.toggle('hide');
         map.classList.toggle('show');
         question.classList.toggle('hide')
})

checkup.addEventListener('click', () =>{
         checkup.classList.toggle('hide');
         ambulance.classList.toggle('hide');
         form.classList.toggle('show');
         map.classList.toggle('hide');
         question.classList.toggle('hide');
})

btn.forEach(btn => {
    btn.addEventListener('click', () => 
    btn.classList.toggle('btn--selected')
    );
});

SubBtn.addEventListener('click', () =>{
    SubBtn.classList.toggle('hide');
    h3.classList.toggle('hide')
    msg.classList.toggle('show')
    btn.forEach(btn => {
        btn.classList.toggle('hide')
    });
});

menuToggle.onclick = function(){
    menuToggle.classList.toggle('act')
    menuBtn.classList.toggle('show')
    box.classList.toggle('hide')
  
}