$(document).ready(function(){
    //메인슬라이더
    $('.header__right-slider').bxSlider({
      speed: 400,
      auto: true,
      pause:3000,
      nextSelector : $('.header__right-rightButton'),
      prevSelector : $('.header__right-leftButton'),
      pager : false
    })

    //내비게이션
    $('.navigation__list').mouseenter(function(){
        $('.navigation__two').addClass('on');
    })

    $('.navigation__two').mouseleave(function(){
        $('.navigation__two').removeClass('on');  
    })

    var $search = $(".header__left-search")
    var $arrow = $(".header__left-search-arrow")
    var $shinsegae = $(".header__left-search-list")
    
    $search.click(function(){
        $shinsegae.toggleClass("on"),
        $arrow.toggleClass("on")
        
        
    })
});

$(window).scroll(function(){
    var scrollTop = $(this).scrollTop();
    var ON = "on";
    var ZERO = 0;
    var EVENT_POINT = 500;
    var RIGHT_ARROW_POINT = 600;

  if(scrollTop >= 50){
   $('.navigation').addClass(ON);
   $('.navigation__two').addClass('test');
  }else{
       $('.navigation').removeClass(ON);
       $('.navigation__two').removeClass('test');
  }
 
  
  
  if(scrollTop >= RIGHT_ARROW_POINT){
   $('.right__arrow').addClass(ON);
  }else{
  	 $('.right__arrow').removeClass(ON);
  }
  
  if(scrollTop >= ZERO){
        $('.brand').addClass(ON);
   }else{
        $('.brand').removeClass(ON);
   }
   
   if(scrollTop >= EVENT_POINT){
    $('.event').addClass('on');
   }else{
        $('.event').removeClass('on');
   }
   if(scrollTop >= 900){
    $('.membership').addClass('on');
   }else{
        $('.membership').removeClass('on');
   }
   if(scrollTop >= 1400){
    $('.new').addClass('on');
   }else{
        $('.new').removeClass('on');
   }
   if(scrollTop >= 2100){
    $('.instagram').addClass('on');
   }else{
        $('.instagram').removeClass('on');
   }

   
})


$(".right__arrow").click(function(){
    $('html, body').animate({
           scrollTop : ZERO
       }, 500);
       return false;
   });

   $('.membership__vip-text').mouseenter(function(){
    var $thisCard = $(this).attr('data-card');

  if($thisCard === "blackvipcard"){
  	$('#blackvip').addClass('on').siblings().removeClass('on');
  }else if($thisCard === "blackcard"){
  	$('#black').addClass('on').siblings().removeClass('on');
  }else if($thisCard === "goldcard"){
  	$('#gold').addClass('on').siblings().removeClass('on');
  }else{
  	$('#silver').addClass('on').siblings().removeClass('on');
  }
})

//    var $viptext = $(".membership__vip-text")
//    var $blackvip = $(".membership__vip-blackvip")
//    var $black = $(".membership__vip-black")
//    var $gold = $(".membership__vip-gold")
//    var $silver = $(".membership__vip-silver")
 



//    $viptext.mouseenter(function(){
//        console.log('enter')
// 	//$silver.addClass('on').removeClass('membership__vip-blackvip')
//     })
//      // $('.viptext').mouseenter(function(){
//      //      $black.addClass('on').removeClass('on')
//      // })
 