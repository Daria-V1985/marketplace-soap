$(function(){
   
  $('.banner-section__slider').slick({
      dots:true,
      prevArrow: '<button class="banner-section__slider-btn banner-section__slider-btnprev"><img src="images/arrow-left.svg" alt=""></button>',
      nextArrow: '<button class="banner-section__slider-btn banner-section__slider-btnnext"><img src="images/arrow-right.svg" alt=""></button>',
  });

  $('.tab').on('click', function(e){
    e.preventDefault();
      
    $($(this).siblings()).removeClass('tab--active');
    $($(this).parent().siblings().find('div')).removeClass('tabs-content--active');

    $(this).addClass('tab--active');
    $($(this).attr('href')).addClass('tabs-content--active');
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
  });

  $('.filter__item-drop, .filter__extra').on('click', function(){
    $(this).toggleClass('filter__item-drop--active');
    $(this).next().slideToggle(200)
  });

  $(".js-range-slider").ionRangeSlider({
    type: "double",
    min: 100000,
    max: 900000,
    from: 200,
    to: 800,
    prefix: ""
  });

});

$(function() {

	$('.filter-style').styler();

});

