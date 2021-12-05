var swiper = new Swiper('.swiper-containerr', {
  spaceBetween: 5,
  slidesPerView: 1,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    loop: true,
    // mousewheel: true,
    // keyboard: true,
});

var swiper = new Swiper('.swiper-containerrr', {
  spaceBetween: 5,
  slidesPerView: 1,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    
    loop: true,
    // mousewheel: true,
    // keyboard: true,
});
var swiper = new Swiper('.product-slider-mobile', {
  spaceBetween: 5,
  slidesPerView: 1,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    
    loop: true,
});


$(document).mouseup(function (e) {
  var div = $(".catalog_container_off"); // тут указываем ID элемента
  if (!div.is(e.target) // если клик был не по нашему блоку
      && div.has(e.target).length === 0){ // и не по его дочерним элементам
      div.removeClass("catalog_container_on")
  }
  $(".catalog_btn").click(function(){
    $(".catalog_container_off").toggleClass("catalog_container_on");
  });
});

$('.checkbox4').on('click', function(){
  $(".mobile_menu_container").toggleClass('on');
});
$('.x-close').on('click', function(){
  $(".catalog_container_off").removeClass('catalog_container_on');
});
////////////////////////////////////////////////////////
$('.female_open').on('click', function(){
  $(".female").toggleClass('ul_open');
});
$('.male_open').on('click', function(){
  $(".male").toggleClass('ul_open');
});
$('.child_open').on('click', function(){
  $(".child").toggleClass('ul_open');
});
$('.special_open').on('click', function(){
  $(".special").toggleClass('ul_open_mini');
});
$('.sport_open').on('click', function(){
  $(".sport").toggleClass('ul_open_mini');
});
$('.home_open').on('click', function(){
  $(".home").toggleClass('ul_open');
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
$(function() {

  (function quantityProducts() {
    var $quantityArrowMinus = $(".quantity-arrow-minus");
    var $quantityArrowPlus = $(".quantity-arrow-plus");
    var $quantityNum = $(".quantity-num");

    $quantityArrowMinus.click(quantityMinus);
    $quantityArrowPlus.click(quantityPlus);

    function quantityMinus() {
      if ($quantityNum.val() > 1) {
        $quantityNum.val(+$quantityNum.val() - 1);
      }
    }

    function quantityPlus() {
      $quantityNum.val(+$quantityNum.val() + 1);
    }
  })();

});