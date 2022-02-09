$(document).ready(function(){
  $('.section01 > .content-wrap > .silde').slick({
    speed: 300,
    slidesToShow: 1,
    infinite: false,
    centerMode: false,
    variableWidth: true,
    nextArrow: false,
    prevArrow: false,
  });

  // $('.section01 > .content-wrap > .product-wrap > .silde').slick({
  //   slidesToShow: 5,
  // });
});