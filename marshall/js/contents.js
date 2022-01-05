$(document).ready(function(){

   $(".menu_bar").click(function(){
       $(".teb").stop().fadeIn();
       $("body").css("overflow","hidden")
   });


   $(".close").click(function(){
    $(".teb").stop().fadeOut();
    $("body").css("overflow","auto")
    });




    $(".img").hover(function(){
        $(this).find(".bg_t").stop().fadeIn();
    },function(){
        $(this).find(".bg_t").stop().fadeOut();
    });


    

  
});