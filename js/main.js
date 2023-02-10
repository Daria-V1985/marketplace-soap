$(function(){
   
  $('.banner-section__slider').slick({
      dots:true,
      prevArrow: '<button class="banner-section__slider-btn banner-section__slider-btnprev"><img src="images/arrow-black_left.svg" alt=""></button>',
      nextArrow: '<button class="banner-section__slider-btn banner-section__slider-btnnext"><img src="images/arrow-black_right.svg" alt=""></button>',
      responsive: [{
      breakpoint: 969,
      settings: {
        arrows: false,
      }
    }]
  });

  $('.tab').on('click', function(e){
    e.preventDefault();

    $($(this).siblings()).removeClass('tab--active');
    $($(this).closest('.tabs-wrapper').siblings().find('div')).removeClass('tabs-content--active');

    $(this).addClass('tab--active');
    $($(this).attr('href')).addClass('tabs-content--active');

    $('.popular-slider, .product-slider').slick('setPosition');

  });

  $('.popular-item__favorite').on('click', function(){
    $(this).toggleClass('popular-item__favorite--active')
  });

  $('.popular-slider').slick({
    dots:false,
    slidesToShow: 4,
    slidesToScroll: 1,
    touchMove: false,
    prevArrow: '<button class="popular-slider__slider-btn popular-slider__slider-btnprev"><img src="images/arrow-black_left.svg" alt=""></button>',
    nextArrow: '<button class="popular-slider__slider-btn popular-slider__slider-btnnext"><img src="images/arrow-black_right.svg" alt=""></button>',
    responsive: [{
      breakpoint: 1201,
      settings: {
        arrows: false,
        dots: true,
        slidesToShow: 3,
        centerMode: true,
      }
    },
    {
      breakpoint: 1001,
      settings: {
        arrows: false,
        dots: true,
        slidesToShow: 2,
        centerMode: true,
      }
    },
    {
      breakpoint: 716,
      settings: {
        arrows: false,
        dots: true,
        slidesToShow: 1,
      }
    }]
  });

  $('.product-item__favorite').on('click', function(){
    $(this).toggleClass('product-item__favorite--active')
  });

  $('.product-slider').slick({
    dots:false,
    slidesToShow: 4,
    slidesToScroll: 1,
    touchMove: false,
    prevArrow: '<button class="product-slider__slider-btn product-slider__slider-btnprev"><img src="images/arrow-black_left.svg" alt=""></button>',
    nextArrow: '<button class="product-slider__slider-btn product-slider__slider-btnnext"><img src="images/arrow-black_right.svg" alt=""></button>',
    responsive: [{
      breakpoint: 1201,
      settings: {
        arrows: false,
        dots: true,
        slidesToShow: 3,
        centerMode: true
      }
    },
    {
      breakpoint: 1001,
      settings: {
        arrows: false,
        dots: true,
        slidesToShow: 2,
        centerMode: true
      }
    },
    {
      breakpoint: 716,
      settings: {
        arrows: false,
        dots: true,
        slidesToShow: 1,
      }
    }]
  });

  $('.filter__item-drop, .filter__extra').on('click', function(){
    $(this).toggleClass('filter__item-drop--active');
    $(this).next().slideToggle(200)
  });

  $(".js-range-slider").ionRangeSlider({
    type: "double",
    min: 100,
    max: 10000,
    from: 200,
    to: 800,
    prefix: ""
  });

  $('.catalog__filter-btngrid').on('click', function(){
    $(this).addClass('catalog__filter-button--active');
    $('.catalog__filter-btnline').removeClass('catalog__filter-button--active');
    $('.product-item__wrapper').removeClass('product-item__wrapper--list');
  });

  $('.catalog__filter-btnline').on('click', function(){
    $(this).addClass('catalog__filter-button--active');
    $('.catalog__filter-btngrid').removeClass('catalog__filter-button--active');
    $('.product-item__wrapper').addClass('product-item__wrapper--list');
  });

  $(".rate-yo").rateYo({
    starWidth: "23px",
    spacing: "7px",
    normalFill: "#C4C4C4",
    multiColor: {
      "startColor": "#FF0000", 
      "endColor"  : "#ad5472"  
  }

  });

  $('.menu__btn').on('click', function(){
    $('.menu-mobile__list').toggleClass('menu-mobile__list--active');
  });

  $('.footer__top-drop').on('click', function(){
    $(this).next().slideToggle();
    $(this).toggleClass('footer__top-drop--active');
  });

  $('.aside__btn').on('click', function(){
    $(this).next().slideToggle();
  });

});

$(function() {

	$('.filter-style').styler();

});

