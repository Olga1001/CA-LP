"use strict";

$(document).ready(function () {
  // slider
  $('.slider').on('init reInit afterChange ', function (event, slick, currentSlide, nextSlide) {
    var $status = $(this).siblings(".paginate").find('.paginate-left');
    var $status2 = $(this).siblings(".paginate").find('.paginate-right'); // no dots -> no slides

    if (!slick.$dots) {
      return;
    } //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)


    var i = (currentSlide ? currentSlide : 0) + 1; // use dots to get some count information

    $status.text("0" + i);
    $status2.text("0" + slick.$dots[0].children.length);
  });
  $(".slider-practice").slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    dots: true,
    arrows: true,
    prevArrow: $('.btn-prev[data-index="1"]'),
    nextArrow: $('.btn-next[data-index="1"]'),
    responsive: [{
      breakpoint: 1200,
      settings: {
        slidesToShow: 4
      }
    }, {
      breakpoint: 992,
      settings: {
        slidesToShow: 3
      }
    }, {
      breakpoint: 767,
      settings: {
        slidesToShow: 2
      }
    }, {
      breakpoint: 575,
      settings: {
        slidesToShow: 1
      }
    }]
  });
  $(".slider-review").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: true,
    arrows: true,
    prevArrow: $('.btn-prev[data-index="2"]'),
    nextArrow: $('.btn-next[data-index="2"]'),
    responsive: [{
      breakpoint: 1200,
      settings: {
        slidesToShow: 3
      }
    }, {
      breakpoint: 767,
      settings: {
        slidesToShow: 2
      }
    }, {
      breakpoint: 575,
      settings: {
        slidesToShow: 1
      }
    }]
  });
  $(".slider-pages").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: true,
    prevArrow: $('.btn-prev[data-index="1"]'),
    nextArrow: $('.btn-next[data-index="1"]')
  }); // tabs 

  $(".tab").click(function () {
    $(this).addClass('active').siblings().removeClass('active');
    var index = $(this).index();
    $(".partner-item").eq(index).addClass('active').siblings().removeClass('active');
  }); // questions 

  $(".question").click(function () {
    $(this).toggleClass('active').parent().siblings().find(".question").removeClass('active');
    $(this).siblings(".answer").slideToggle(300).parent().siblings().find(".answer").slideUp(300);
  }); //burger, menu

  $(".burger").click(function () {
    $(this).toggleClass('active');
    $(".menu").toggleClass('active');
  }); // practice ares

  if (window.matchMedia("(max-width: 767px)").matches) {
    $(".areas-item").click(function () {
      $(".areas-list").addClass("hide");
      $(".areas-right").addClass("active");
    });
    $(".btn-back").click(function () {
      $(".areas-list").removeClass("hide");
      $(".areas-right").removeClass("active");
    });
  }
});