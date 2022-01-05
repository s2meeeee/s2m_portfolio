$(document).ready(function(){
    
    // banner slide효과
    let counter = 1;
    setInterval(function(){
        document.getElementById('radio' + counter).checked = true;
        counter++;
        if(counter > 3){
            counter = 1;
        }
    },4000);

    // banner slide효과

    //part2 img효과
    $(".part2 li").hover(function(){
        $(this).find(".inner_img").stop().addClass("on");
    },function(){
        $(this).find(".inner_img").stop().removeClass("on");
    });
    //part2 img효과

    $('.item_slide').slick({
        autoplay: true,
        autoplaySpeed: 2000
    });

    $('.center').slick({
        centerMode: true,
        slidesToShow: 3,
        responsive: [
          {
            breakpoint: 1440,
            settings: {
              slidesToShow: 1
            }
          },
          {
            breakpoint: 770,
            settings: {
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1
            }
          }
        ]
      });



});