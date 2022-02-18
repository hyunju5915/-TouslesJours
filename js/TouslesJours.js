AOS.init();

$(document).ready(function(){
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
  });

  $('.section04 .slide').slick({
    asNavFor: '.section04 .bg-slide',
  });

  $('.section04 .bg-slide').slick({
    asNavFor: '.section04 .slide',
    speed: 500,
    fade: true,
    cssEase: 'linear',
  });

});