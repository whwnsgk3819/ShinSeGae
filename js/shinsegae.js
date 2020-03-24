$(document).ready(function() {
  //메인슬라이더
  $(".header__right-slider").bxSlider({
    speed: 400,
    auto: true,
    pause: 3000,
    nextSelector: $(".header__right-rightButton"),
    prevSelector: $(".header__right-leftButton"),
    pager: false
  });

  //내비게이션
  $(".navigation__list").mouseenter(function() {
    $(".navigation__two").addClass("on");
  });

  $(".navigation__two").mouseleave(function() {
    $(".navigation__two").removeClass("on");
  });

  var $search = $(".header__left-search");
  var $arrow = $(".header__left-search-arrow");
  var $shinsegae = $(".header__left-search-list");

  $search.click(function() {
    $shinsegae.toggleClass("on"), $arrow.toggleClass("on");
  });
});

$(window).scroll(function() {
  var scrollTop = $(this).scrollTop();
  var ZERO = 0;
  var EVENT_POINT = 500;
  var RIGHT_ARROW_POINT = 600;
  var MEMBERSHIP_POINT = 900;
  var NEW_POINT = 1400;
  var INSTAGRAM_POINT = 2100;

  if (scrollTop >= 50) {
    $(".navigation").addClass("on");
  } else {
    $(".navigation").removeClass("on");
  }

  if (scrollTop >= RIGHT_ARROW_POINT) {
    $(".right__arrow").addClass("on");
  } else {
    $(".right__arrow").removeClass("on");
  }

  if (scrollTop >= ZERO) {
    $(".brand").addClass("on");
  } else {
    $(".brand").removeClass("on");
  }

  if (scrollTop >= EVENT_POINT) {
    $(".event").addClass("on");
  } else {
    $(".event").removeClass("on");
  }
  if (scrollTop >= MEMBERSHIP_POINT) {
    $(".membership").addClass("on");
  } else {
    $(".membership").removeClass("on");
  }
  if (scrollTop >= NEW_POINT) {
    $(".new").addClass("on");
  } else {
    $(".new").removeClass("on");
  }
  if (scrollTop >= INSTAGRAM_POINT) {
    $(".instagram").addClass("on");
  } else {
    $(".instagram").removeClass("on");
  }
});

$(".right__arrow").click(function() {
  $("html, body").animate(
    {
      scrollTop: 0
    },
    500
  );
  return false;
});

$(".membership__vip-text").mouseenter(function() {
  var $thisCard = $(this).attr("data-card");

  if ($thisCard === "blackvipcard") {
    $("#blackvip")
      .addClass("on")
      .siblings()
      .removeClass("on");
  } else if ($thisCard === "blackcard") {
    $("#black")
      .addClass("on")
      .siblings()
      .removeClass("on");
  } else if ($thisCard === "goldcard") {
    $("#gold")
      .addClass("on")
      .siblings()
      .removeClass("on");
  } else {
    $("#silver")
      .addClass("on")
      .siblings()
      .removeClass("on");
  }
});
