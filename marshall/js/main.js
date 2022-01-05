$(document).ready(function(){

    new fullpage('#fullpage', {
        // navigation: true,
        responsiveWidth: 700,
        anchors: ['home', 'about-us', 'contact'],
        parallax: true,
        onLeave: function(origin, destination, direction){
            console.log("Leaving section" + origin.index);
        },
        afterLoad: function(origin) {
            console.log(origin.anchor);
        }
    });

   

    $('.slick_slide').slick({
        dots : true,
        autoplay:true,
        arrows : false,
        slidesToShow: 1,
        autoplaySpeed:3000
    });

    $('.con3_slide').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows : false
      });


   $(".menu_bar").click(function(){
    $(".teb").stop().fadeIn();
    $("body").css("overflow","hidden")
    });


    $(".close").click(function(){
    $(".teb").stop().fadeOut();
    $("body").css("overflow","auto")
    });
              
});