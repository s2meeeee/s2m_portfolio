$(document).ready(function(){

    $(".b_t").click(function(){
        $(".swiper").removeClass("on");
        $(".b_slide").addClass("on");

    });
    $(".w_t").click(function(){
      $(".swiper").removeClass("on");
      $(".w_slide").addClass("on");

      });


    const swiper = new Swiper('.swiper', {
        speed: 800,
        spaceBetween: 100,
        autoplay: { 
            delay: 3000,
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
      });

      // 상단메뉴고정

      var $header = $("header");

      $(window).scroll(function(){
        var $currentsct = $(this).scrollTop();

        if($currentsct > 0){
          $header.addClass('sticky');
        }else{
          $header.removeClass('sticky');
        }
        
        if($currentsct < 1660){
          $header.css({"display":"block"},300,);
        }else{
          $header.css({"display":"none"},300,);
          
        }

      });

      const lis = document.querySelectorAll(".kategorie > ul > li")
      const sections = document.querySelectorAll("section")
      const firstTop = sections[3].offsetTop
      const secondTop = sections[4].offsetTop
      const thirdTop = sections[5].offsetTop

      lis[0].onclick = function(){
        window.scroll({top:firstTop, behavior:'smooth'})
      }
      lis[1].onclick = function(){
        window.scroll({top:secondTop, behavior:'smooth'})
      }

      lis[2].onclick = function(){
        window.scroll({top:thirdTop, behavior:'smooth'})
      }

});