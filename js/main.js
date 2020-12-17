$(document).ready(function () {
  $(".gallery__slider-list").slick({
    //   setting-name: setting-value
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    dots: true,
  });

  $(".header__burger").on("click", function () {
    $(".header__list").toggleClass("header__list--active");
  });

  $(".header__burger").on("click", function () {
    $(".header__burger").toggleClass("header__burger--active");
  });
});
