$(document).ready(function(){
   
  var a =0;//클릭하는 횟수를 담는 변수
  var b= 0;//홀짝을 연산해서 담는 변수

  $(".btn input").click(function(){
    a++;
    b=a%2;

    if(b==1){
      $(".item").animate({"height":"4000px"})
    }else{
      $(".item").animate({"height":"2400px"});
    }
  });


    $(".menu_bar").click(function(){
      $(".teb").fadeIn();
    });

    const mql = window.matchMedia("screen and (max-width:1600px) and (min-width:1200px)")

    if(m){

    }
});