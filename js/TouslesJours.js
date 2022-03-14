AOS.init();

$(document).ready(function(){

  $('.menu-icon').click(function(){

    $('.nav-wrap').toggleClass('active');

  });

  $('.nav-right-section').click(function(){

    $('.nav-wrap').removeClass('active');

  });


  $('.nav-wrap > .nav-section > .nav-left-section > .nav-box > ul > li').click(function(){

    // let indexNum = $(this).index();

    // $('.nav-wrap > .nav-section > .nav-left-section > .nav-box > ul > li').removeClass('active');
    // $('.nav-wrap > .nav-section > .nav-left-section > .nav-box > ul > li').eq(indexNum).toggleClass('active');

    $(this).next(".nav-wrap > .nav-section > .nav-left-section > .nav-box > ul > li > ul").stop().slideToggle(500);
    $(this).next(".nav-wrap > .nav-section > .nav-left-section > .nav-box > ul > li > ul").siblings(".nav-wrap > .nav-section > .nav-left-section > .nav-box > ul > li > ul").slideUp(500);

  });


  $('.section01 > .content-wrap > .slide').slick({
    speed: 300,
    slidesToShow: 1,
    infinite: false,
    centerMode: false,
    variableWidth: true,
    nextArrow: false,
    prevArrow: false,
  });

  $('.section01 > .content-wrap > .slide .content').click(function(){

    let indexNum = $(this).index();

    $('.background-color').removeClass("active");
    $('.background-color').eq(indexNum).addClass("active");
    $('.shodow-box').removeClass("active");
    $(this).addClass("active");
    $('.product-wrap > .slide').removeClass("active");
    $('.product-wrap > .slide').eq(indexNum).addClass("active");
  

  });

  // $('.section01 > .content-wrap > .slide .content').click(function(){

  //   let indexNum = $(this).index();

  //   $('.shodow-box').removeClass("active");
  //   $(this).addClass("active");
  //   $('.product-wrap > .slide').removeClass("active");
  //   $('.product-wrap > .slide').eq(indexNum).addClass("active");

  // });

  $('.section01 .shodow-box').hover(function(){

    $('.shodow-box').removeClass("active");
    $(this).addClass("active");

  });



  // $('.section01 > .content-wrap > .product-wrap > .silde').slick({
  //   slidesToShow: 5,
  // });

  $('.section03 > .slide').slick({
    slidesToShow: 4,
    dots: true,
    draggable: false,
    prevArrow:$(".section03 .pre-btn"),
    nextArrow:$(".section03 .next-btn"),
  });

  $('.section04 .slide').slick({
    asNavFor: '.section04 .bg-slide',
    fade: true,
    prevArrow:$(".btn-box > .pre-btn"),
    nextArrow:$(".btn-box  > .next-btn"),
  });

  $('.section04 .bg-slide').slick({
    asNavFor: '.section04 .slide',
    speed: 500,
    fade: true,
    cssEase: 'linear',
  });

});