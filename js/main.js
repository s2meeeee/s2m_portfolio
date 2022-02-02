let mySelf = document.querySelector('#my')
let mySkill = document.querySelector('#skill')

window.addEventListener('scroll',function(){
    let value = window.scrollY;
    
    console.log('scrollY',value);

    if(value > 600){
        mySelf.style.animation = "left_slide 1.5s ease-out forwards";
        mySkill.style.animation = "right_slide 1.5s ease-out forwards";
    }


});
